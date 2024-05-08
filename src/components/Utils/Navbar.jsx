import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        {
            id: 1,
            text: 'Home',
            link: '/',
        },
        {
            id: 2,
            text: 'About',
            link: '/about',
        },
        {
            id: 3,
            text: 'Blog',
            link: '/blog',
        },
        {
            id: 4,
            text: 'Contacts',
            link: '/contacts',
        }
    ];
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => setShowMenu(true), handleCloseMenu = () => setShowMenu(false);
  return (
    <nav className='container flex justify-between items-center pc:w-[98%]'>
        <div className="animate-itemAppear brand">
            <img className="block w-[100%] h-[100%]" src="https://ld-wp.template-help.com/wordpress_free/23567/wp-content/themes/epagreenlite/assets/images/logo.png" alt="brand logo" />
        </div>
        <ul className='tab-pc-links'>
            <li>
                <NavLink to='/' className='tab-pc-link'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about' className='tab-pc-link'>About</NavLink>
            </li>
            <li>
                <NavLink to='/blog' className='tab-pc-link'>Blog</NavLink>
            </li>
            <li>
                <NavLink to='/contacts' className='tab-pc-link'>Contacts</NavLink>
            </li>
        </ul>
        <svg onClick={handleShowMenu} className='nav-icons pc:hidden tabs:hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
        {
            showMenu && (
                <div className={`${showMenu ? 'animate-slideInNav' : 'animate-slideOutNav'} fixed right-0 top-0 h-[100vh] w-[70%] p-[40px] bg-white`}>
                    <svg onClick={handleCloseMenu} className="nav-icons ml-[90%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    <ul className="w-[90%] mx-auto my-[30px]">
                        {
                            navLinks.map(item => {
                                const { id, text, link } = item;
                                return (
                                    <li key={id} className='mb-[30px]'>
                                        <NavLink className='nav-link hover:text-greeen-400 active:font-bold active:text-2xl' to={link}>{text}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar