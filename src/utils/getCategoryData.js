import { formatCategoryName } from "./formatCategoryName";

export const getCategoryData = (products) => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];

    return uniqueCategories.map(category => {
        const product = products.find(product => product.category === category);

        return {
            slug: category,
            name: formatCategoryName(category),
            image: product.thumbnail,
        };
    });
};