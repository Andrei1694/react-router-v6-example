import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'


// main layout
export default function RootLayout() {
    return <>
        <MainNavigation />
        {/* child routes rendered */}
        <main>
            <Outlet />
        </main>
    </>
}