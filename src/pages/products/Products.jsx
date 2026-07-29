import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/productsApi";
import ProductCard from "../../components/product/ProductCard";
import useSearchParamUpdater from "../../hooks/useSearchParamUpdater";
import './products.css'

function Products() {
  // parameters from the URL
  const {
    searchText,
    selectedCategory,
    sortBy,
    currentPage,
    updateSearchParam,
  } = useSearchParamUpdater();

  const productsPerPage = 12;

  // Using react query to fetch Products data from dummyJSON
  const {
    data: productsData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  // memoizing the categories function which returns a set of unique categories and change according to the data fetched
  const categories = useMemo(() => {
    const allCategories = [
      ...new Set(productsData.products.map((p) => p.category)),
    ];
    return ["All", ...allCategories];
  }, [productsData]);

  // memoizing filteredProducts to show products according to the filters of search, category and sort
  const filteredProducts = useMemo(() => {
    let filtered = productsData.products;

    if (searchText.trim()) {
      filtered = filtered.filter((product) =>
        product.title
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    const sorted = [...filtered];

    switch (sortBy) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;

      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    return sorted;
  }, [
    productsData,
    searchText,
    selectedCategory,
    sortBy,
  ]);

  // total no. pages according to the filtered product(s) 
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / productsPerPage)
  );

  // Paginating the products
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    endIndex
  );

  // to handle the changes in search bar
  const handleSearchChange = (e) => {
    updateSearchParam("search", e.target.value);
  };

  // to handle changes when a category is clicked
  const handleCategoryClick = (category) => {
    updateSearchParam("category", category);
  };

  // to handle changes when sorting is selected 
  const handleSortChange = (e) => {
    updateSearchParam("sort", e.target.value);
  };

  // to jump to the next page of products
  const handleNextPage = () => {
    if (currentPage >= totalPages) return;
    updateSearchParam("page", currentPage + 1);
  };

  // to jump to the previous page of products
  const handlePreviousPage = () => {
    if (currentPage <= 1) return;
    updateSearchParam("page", currentPage - 1);
  };

  return (
    <div className="products-page">
      <div className="search-section">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="filter-section">
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={
                selectedCategory === category
                  ? "category-btn active-category"
                  : "category-btn"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="sort-container">
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="sort-select"
          >
            <option value="default">Default</option>
            <option value="price-asc">
              Price: Low to High
            </option>
            <option value="price-desc">
              Price: High to Low
            </option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="products-grid">
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="detailed"
          />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Products;