
export const formatCategoryName = (category) => {
    const formattedCategory = category.split("-")
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    return formattedCategory;
}