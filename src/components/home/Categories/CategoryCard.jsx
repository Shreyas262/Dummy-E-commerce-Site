import './categoryCard.css'
import { Link } from 'react-router-dom'

function CategoryCard({category}) {
  return (
        <Link
            to={`/products?category=${category.slug}`}
            key={category.slug}
            className='category-card card'
        >
              <img src={category.image} alt={`${category.name} category`} className='category-image' />
              <p className='category-name'>{category.name}</p>
        </Link>
  )
}

export default CategoryCard
