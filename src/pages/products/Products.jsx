import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../../api/productsApi";
import ProductCard from "../../components/product/ProductCard";
import useSearchParamUpdater from "../../hooks/useSearchParamUpdater";

function Products() {
  const {
    searchText,
    selectedCategory,
    sortBy,
    currentPage,
    updateSearchParam,
  } = useSearchParamUpdater();

  const productsPerPage = 12;

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
  if (isError) return <p>{error.message}</p>;

  const categories = useMemo(() => {
    const allCategories = [
      ...new Set(productsData.products.map((p) => p.category)),
    ];

    return ["All", ...allCategories];
  }, [productsData]);

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

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / productsPerPage)
  );

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    endIndex
  );

  const handleSearchChange = (e) => {
    updateSearchParam("search", e.target.value);
  };

  const handleCategoryClick = (category) => {
    updateSearchParam("category", category);
  };

  const handleSortChange = (e) => {
    updateSearchParam("sort", e.target.value);
  };

  const handleNextPage = () => {
    if (currentPage >= totalPages) return;
    updateSearchParam("page", currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage <= 1) return;
    updateSearchParam("page", currentPage - 1);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>

      <div>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}

        <select
          value={sortBy}
          onChange={handleSortChange}
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

      <div className="products-card-container">
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <div>
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