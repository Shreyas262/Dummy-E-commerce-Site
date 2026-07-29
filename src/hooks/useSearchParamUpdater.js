import { useSearchParams } from "react-router-dom";

// Hook to get and set the value of URL parameters
function useSearchParamUpdater() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchText = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category") || "All";
  const sortBy = searchParams.get("sort") || "default";
  const currentPage = Number(searchParams.get("page")) || 1;

  const updateSearchParam = (key, value) => {
    // assigning the urlsearchparams object to a variable
    const params = new URLSearchParams(searchParams);

    // removing the query parameters when they are default, if not default then setting the query parameters
    if (
      value === "" ||
      value === null ||
      value === undefined ||
      value === "All" ||
      value === "default"
    ) {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }

    // Reset pagination when filters change
    if (["search", "category", "sort"].includes(key)) {
      params.delete("page");
    }

    setSearchParams(params);
  };
  
  return {
    searchText,
    selectedCategory,
    sortBy,
    currentPage,
    updateSearchParam,
  };
}

export default useSearchParamUpdater;