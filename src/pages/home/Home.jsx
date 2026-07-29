import Hero from '../../components/home/hero/Hero'
import Categories from '../../components/home/Categories/Categories'
import FeaturedProducts from '../../components/home/FeaturedProducts/FeaturedProducts'
import Features from '../../components/home/Features/Features'
import Newsletter from '../../components/home/Newsletter/Newsletter'


function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Features />
      <Newsletter />
    </main>
  )
}

export default Home
