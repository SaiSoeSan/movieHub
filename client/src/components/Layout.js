import {React} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Nav from './Nav'

console.log("layout")

const Layout = () => {
    return (

        <div>
           <Nav/>
           <Outlet />
        </div>
    )
}
export default Layout