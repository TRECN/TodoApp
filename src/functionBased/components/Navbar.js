import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {MdClose} from "react-icons/md"
import {FiMenu} from "react-icons/fi"

const Navbar =()=>{
    const links=[
        
        {id:1,
        path:"/",
        text:"Home",},

        {id:2,
        path:"/about",
        text:"About",},
    
    ]
    const [navbarOpen, setNavBarOpen]=useState(false)
    const handleToggle=()=>{
        setNavBarOpen(!navbarOpen)
    }

    const closeMenu = () =>{
        setNavBarOpen(false)
    }

    return (
        <nav className="navBar">
            <button onClick={handleToggle}>{navbarOpen?<MdClose/>:<FiMenu/>}</button>
            <ul className={`menuNav ${navbarOpen?"showMenu":""}`}>
                {
                    links.map(link=>{
                        return (
                            <li key={link.id}>
                                <NavLink 
                                to={link.path} 
                                activeClassName="active-link" 
                                onClick={()=>closeMenu()}
                                exact>
                                    {link.text}
                                </NavLink>  
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
        
    );
}
export default Navbar