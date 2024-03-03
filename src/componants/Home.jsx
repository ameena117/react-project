import React from 'react'
import Navbar from './Navbar'
import Categories from './Categories'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
        <>
            <Navbar />
            <Categories />
            <Outlet/>
        </>
    )
}

export default Home