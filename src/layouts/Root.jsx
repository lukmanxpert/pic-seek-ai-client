import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const Root = () => {
    return (
        <div>
            <header>
                <Navbar />
                <Outlet></Outlet>
            </header>
        </div>
    )
}

export default Root