
import React, { useEffect, useState } from 'react';
import '../index.css';
import '../output.css'
import { Link, Outlet } from 'react-router-dom';
import ThemeBtn from '../component/themeBtn';
import ToggleBtn from '../component/toggleBtn';
import NavbarLinks from '../component/navbarlinks';
import { Modal } from "flowbite-react";


export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const htmlElement = document.querySelector('html');
    const [darkMode, setDarkMode] = useState(false);
    const [searchValue, setSearchValue] = useState('');



    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    const handleChange = (event: any) => {
        setSearchValue(event.target.value);
    }

    const clearSearch = () => {
        setSearchValue('');
        console.log(searchValue);

    }

    useEffect(() => {
        if (darkMode && htmlElement) {
            console.log(darkMode);
            htmlElement.classList.add('dark');
        } else if (htmlElement) {
            console.log(darkMode);
            htmlElement.classList.remove('dark');
        }
    }, [darkMode]);



    return (
        <>
            <header className="fixed top-0 container-fluid z-10  ">
                <nav className={`navbar  ${navbarOpen ? 'responsive' : ''}`} id="myNavbar">
                    <div className='navbar-brand'>
                        <Link to="/" >
                            <img src="/voldeblog.jpg" alt="navbar logo" className="logo w-10 h-10 rounded-full" />
                        </Link>
                    </div>
                    <div className="navbar-links">
                        <NavbarLinks />
                        <ToggleBtn navbarOpen={navbarOpen} handleToggle={handleToggle} />
                    </div>

                    <Link to='/login'>
                            <i className="fa-solid fa-right-to-bracket w-9 hover:text-slate-400">
                            </i>
                                </Link>

                    <div className="form">
                        <form action="#" className='flex space-x-3'>
                        
                            <div>
                                <label className="relative block" onClick={() => setOpenModal(true)}>
                                    <span className="sr-only">Search</span>
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <i className='fa fa-search dark:text-yellow-800'></i>
                                    </span>
                                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm searching" placeholder="Searc..." type="text" name="search" readOnly />
                                </label>
                            </div>
                            <div className=' light-dark-mode py-2 px-4'>
                                <ThemeBtn darkMode={darkMode} toggleDarkMode={setDarkMode} />
                            </div>
                            
                        </form>
                    </div>
                </nav>
            </header>

            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Body>
                    <form action="#" className='space-x-4'>
                        <div>
                            <label className="relative block">
                                <span className="sr-only">Search</span>
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <i className='fa fa-search dark:text-yellow-800'></i>
                                </span>
                                <span className={`absolute inset-y-0 right-0 flex items-center pr-2 cancel  ${searchValue ? '' : 'd-none'}`} onClick={clearSearch}>
                                    <i className='fa fa-times text-red-700'></i>
                                </span>
                                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Searc..." type="text" name="search" onChange={handleChange} value={searchValue} />
                            </label>
                        </div>
                    </form>

                    {
                        <div className={`container group search-bar ${searchValue ? 'hidden' : ''}`}>
                            <p className='text-lg my-2'>Recent</p>

                            <a className='bg-slate-700 py-3 pl-8 rounded-lg block my-4 group hover:bg-pink-500' href='#'>
                                <div className='flex justify-between px-3'>
                                    <h1 className='text-light group-hover:text-red-500'> Technology</h1>
                                    <i className="fa-solid fa-arrow-right text-light"></i>
                                </div>
                            </a>
                            <a className='bg-slate-700 py-3 pl-8 rounded-lg block my-4 group hover:bg-pink-500' href='#'>
                                <div className='flex justify-between px-3'>
                                    <h1 className='text-light group-hover:text-red-500'> Technology</h1>
                                    <i className="fa-solid fa-arrow-right text-light"></i>
                                </div>
                            </a>
                            <a className='bg-slate-700 py-3 pl-8 rounded-lg block my-4 group hover:bg-pink-500' href='#'>
                                <div className='flex justify-between px-3'>
                                    <h1 className='text-light group-hover:text-red-500'> Technology</h1>
                                    <i className="fa-solid fa-arrow-right text-light"></i>
                                </div>
                            </a>
                            <a className='bg-slate-700 py-3 pl-8 rounded-lg block my-4 group hover:bg-pink-500' href='#'>
                                <div className='flex justify-between px-3'>
                                    <h1 className='text-light group-hover:text-red-500'> Technology</h1>
                                    <i className="fa-solid fa-arrow-right text-light"></i>
                                </div>
                            </a>
                        </div>
                    }


                </Modal.Body>
            </Modal>
            <Outlet />
        </>
    );
}





