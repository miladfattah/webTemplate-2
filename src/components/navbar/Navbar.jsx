import React from 'react'
import './navbar.css'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
const Menu = ({href , label}) => {
    return (
        <p><a href={href}>{label}</a></p>
    )
}


const Navbar = () => {

    const LinkList = [
        {label: "خانه" , href : "home"},
        {label: "درباره سایت" , href : "wgpt3"},
        {label: "دسترسی ها" , href : "possibility"},
        {label: "مطالعه ی موردی" , href : "features"},
        {label: "مقالات" , href : "blog"}
    ];

    const [toggleMenu , setToggleMenu] = useState(false);
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-menu">
                {
                    toggleMenu
                    ?  <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)}/>
                    :  <RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)} />
                }
                {
                    toggleMenu && (
                        <div className="gpt3__navbar-menu_container scale-up-center">
                            <div className="gpt3__navbar-menu-container-links">
                                {
                                  LinkList.map((link , index)=>{
                                        return (
                                            <Menu href={link.href} label={link.label} key={index} />
                                        )
                                    })
                                }
                            </div>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>ورود</p>
                                <button type="button">عضویت</button>
                            </div>
                        </div>
                    )
                }
                
            </div>
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_container">
                    {
                        LinkList.map((link , index)=>{
                            return (
                               <Menu href={link.href} label={link.label} key={index} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>ورود</p>
                <button type="button">عضویت</button>
            </div>

        </div>
    )
}

export default Navbar
