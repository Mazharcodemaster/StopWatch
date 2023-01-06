import React from "react"
import Link from "next/link"
import  Style  from "../../styles/Navbar.module.css"
const Navbar=()=>{
    return(
     <>
     <div className={Style.nav_bar}>
        <ul>
          <li>
            <Link href="/hom">Home</Link>
          </li>
          <li>
            <Link href="/content">Content</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
     </div>
     </>
    )
}
export default Navbar;