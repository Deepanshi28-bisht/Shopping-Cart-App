import { useContext, useMemo, useState } from 'react'
import Container from '../components/Container'
import { ProductContext } from '../context/ProductContext'
import ProductsCard from './ProductsCard'
import SearchPage from '../Pages/SearchPage'

const ProductsList = () => {
  const { state } = useContext(ProductContext);
  const [search, setSearch] = useState("")
  const filterProducts = useMemo(() => {
    return state?.products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
  }, [state.products, search])
  return (
    <section className='py-10'>
      <Container>
        <SearchPage search={search} setSearch={setSearch} />
        <div className='grid grid-cols-3 gap-8'>
          {
            filterProducts.map((item) => (
              <ProductsCard key={item.id} data={item} />
            ))
          }
        </div>
      </Container>
    </section>
  )
}

export default ProductsList