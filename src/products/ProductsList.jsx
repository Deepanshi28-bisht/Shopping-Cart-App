import { useContext } from 'react'
import Container from '../components/Container'
import { productsData } from '../data/productsData'
import ProductsCard from './ProductsCard'
import { ProductContext } from '../context/ProductContext'

const ProductsList = () => {
  const {state}=useContext(ProductContext);
  return (
    <section className='py-10'>
      <Container>
        <div className='grid grid-cols-3 gap-8'>
          {
            state?.products.map((item) => (
              <ProductsCard key={item.id} data={item} />
            ))
          }
        </div>
      </Container>
    </section>
  )
}

export default ProductsList