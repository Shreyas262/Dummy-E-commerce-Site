import { useSearchParams } from "react-router-dom";

function useSearchParamUpdater() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchText = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category") || "All";
  const sortBy = searchParams.get("sort") || "default";
  const currentPage = Number(searchParams.get("page")) || 1;

  const updateSearchParam = (key, value) => {
    const params = new URLSearchParams(searchParams);

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