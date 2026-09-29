import Container from '../components/Container'
import { productsData } from '../data/productsData'
import ProductsList from '../products/ProductsList'
import AdminPageCard from './AdminPageCard'

const AdminPage = () => {
    return (
    <section>
        <Container>
           <ProductsList/>
        </Container>
    </section>
  )
}

export default AdminPage