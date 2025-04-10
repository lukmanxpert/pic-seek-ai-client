import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
    const links = <>
        <NavLink className={"hover:bg-slate-300 py-2 px-4 rounded-2xl transition "} to={"/home"}>Home</NavLink>
        <NavLink className={"hover:bg-slate-300 py-2 px-4 rounded-2xl transition "} to={"/images"}>Images</NavLink>
        <NavLink className={"hover:bg-slate-300 py-2 px-4 rounded-2xl transition "} to={"/generate"}>Generate</NavLink>
        <NavLink className={"hover:bg-slate-300 py-2 px-4 rounded-2xl transition "} to={"/login"}>LogIn</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-xl uppercase">pic-seek</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-4 text-xl">
                    {links}
                </ul>
            </div>
        </div>
    )
}

export default Navbar