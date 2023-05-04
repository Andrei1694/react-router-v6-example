import { Link } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

export default function HomePage() {
    return <>

        <h1>My Home Page</h1>

        <p>
            Go to <Link to="/products">The list of products</Link>
        </p>
    </>
}