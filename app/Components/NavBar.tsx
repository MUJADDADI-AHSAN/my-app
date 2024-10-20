import Link from 'next/link'
import React from 'react'
import cssStyle from './NavBar.module.css'

const NavBar = () => {
  return (
    <div>
        <ul className={cssStyle.list}>
            <div className= {cssStyle.listItems}>
            <li className= {cssStyle.NavBar} >NavBar</li>
            <li className= {cssStyle.Home} > <Link href = "/">Home</Link> </li>
            <li className= {cssStyle.About}> <Link href = "/">About</Link> </li>
            <li className= {cssStyle.About}> <Link href = "/">Packages</Link> </li>
            <li className= {cssStyle.About}> <Link href = "/">Products</Link> </li>
            <li className= {cssStyle.About}> <Link href = "/">Contact</Link> </li>
            </div>
        </ul>
    </div>
  )
}

export default NavBar