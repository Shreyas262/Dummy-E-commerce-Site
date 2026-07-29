import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../../api/productsApi';
import ProductCard from '../../product/ProductCard';
import { Link } from 'react-router-dom';
import './featuredProducts.css'

function FeaturedProducts() {

    const { data: productsData, isLoading, isError, error } = useQuery({
        queryKey: ["featured-products"],
        queryFn: getProducts,
        staleTime: 1000 * 60,
    })

    if (isLoading) return <p>Loading</p>
    if(isError) return <p>Error: {error.message}</p>
    
    const featuredProducts = productsData.products.slice(0, 8);

  return (
      <section className='featured-products-section'>
          
          <div className="container featured-products-container">
              
              <div className="featured-products-text">
                  <h2>Featured Products</h2>
                  <p>Discover our most popular products, handpicked just for you.</p>
              </div>

              <div className='featured-products-grid'>
                {
                  featuredProducts.map(product => 
                      <ProductCard
                          key={product.id}
                          product={product}
                          variant="compact"
                      />
                  )
                }
              </div>

              <div className="featured-products-action">
                  <Link to={"/products"} className='button'>View All Products</Link>
              </div>

          </div>
      
    </section>
  )
}

export default FeaturedProducts
