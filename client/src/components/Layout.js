import {React, useEffect} from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
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