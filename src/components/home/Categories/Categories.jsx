import { useQuery } from '@tanstack/react-query'
import CategoryCard from './CategoryCard'
import {getCategoryData} from '../../../utils/getCategoryData'
import { getProducts } from '../../../api/productsApi'

function Categories() {

    const { data: productsData, isLoading, error, isError } = useQuery({
        queryKey: ["categories"],
        queryFn: getProducts,
        staleTime: 1000 * 60,
    })

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error: {error.message}</p>

    const categoryData = getCategoryData(productsData.products);

    return (
        <section className='categories-section' id='categories'>
        <div className='container categories-container'>
            
            <div className="categories-text">
                
                <h2>Browse by Category</h2>
                <p>Find products by category and start shopping faster.</p>

            </div>

            <div className="categories-grid">
                {
                categoryData.map(category => (
                    <CategoryCard
                        key={category.slug}
                        category={category}
                    />
                ))
                }
                    
            </div>
        </div>

    </section>
  )
}

export default Categories
