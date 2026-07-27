import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../api/productsApi';

function ProductDetails() {
  const { id } = useParams();
  const { data: productDetails, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    staleTime: 1000 * 60,
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>{ error.message }</p>
  return (
    <div className='product-details-container'>
      {productDetails.images.map(image =>
        <img
          src={image}
          key={image}
          alt={productDetails.title}
        />
      )}
      <h2>{productDetails.title}</h2>
      <p>Details: {productDetails.description}</p>
      <p>${productDetails.price}</p>
      <p>Overall Rating: {productDetails.rating}</p>
      <p>Category: {productDetails.category}</p>
    </div>
  )
}

export default ProductDetails
