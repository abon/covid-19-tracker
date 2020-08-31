import React from 'react';
import './Navbar.css';

import logoImg from './assets/img/logo.png';
import logoText from './assets/img/logoText.svg';

function Navbar() {
    return (

        <nav id="header" className="w-full z-30 top-10 py-1 bg-black shadow-lg border-b border-gray-800 ">
            <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
                <label for="menu-toggle" class="cursor-pointer md:hidden block">
                    <svg className="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />

                <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">

                    <div className="nav__logo" style={{ display: "flex" }}>
                        <img className="logo__icon" src={logoImg} style={{ width: 45, height: 45 }} alt="" />
                        <img className="logo__text" style={{ padding: 15 }} src={logoText} alt="" />
                    </div>

                    <nav>
                        <ul className="md:flex  justify-between text-base text-blue-600 pt-4 md:pt-0 pl-3">
                            <li><a className="inline-block rounded-md no-underline font-medium text-xl py-2 px-5 lg:-ml-2 text-white  focus:outline-none hover:text-gray-400 focus:text-black focus:bg-gray-100 transition duration-150 ease-in-out" href="/#">Data</a></li>
                            <li><a className="inline-block rounded-md no-underline font-medium  text-xl  py-2 px-5 lg:-ml-2 text-white  focus:outline-none hover:text-gray-400 focus:text-black focus:bg-gray-100 transition duration-150 ease-in-out" href="/#">Map</a></li>
                            <li><a className="inline-block rounded-md no-underline font-medium  text-xl  py-2 px-5 lg:-ml-2 text-white  focus:outline-none focus:text-black focus:bg-gray-100 hover:text-gray-400 transition duration-150 ease-in-out" href="/#">Wiki</a></li>
                            <li><a className="inline-block rounded-md no-underline font-medium  text-xl  py-2 px-5 lg:-ml-2 text-white  focus:outline-none focus:text-black focus:bg-gray-100 hover:text-gray-400 transition  duration-150 ease-in-out" href="/#">About</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
                    <div className="auth flex items-center w-full md:w-full">
                        <a href="https://twitter.com/iam_abdulloh" target="_blank" rel="noopener noreferrer" className=" twitter__link bg-blue-500 text-white flex  rounded mr-4 hover:bg-blue-700 "> <svg style={{ paddingRight: 10 }} xmlns="http://www.w3.org/2000/svg" width="33" height="25" viewBox="0 0 24 24" fill="#ffffff"><path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" /></svg><span>Follow  @iam_abdulloh</span> </a>
                        <a href="https://www.linkedin.com/in/samadovabdullah/" target="_blank" rel="noopener noreferrer" className=" linkedin__link  flex  rounded"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="25"><path fill="none" d="M0 0h24v24H0z" /><path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" fill="rgba(14,118,168,1)" /></svg> <span className="linkedin__text">Connect @samadovabdullah </span> </a>
                    </div>
                </div>
            </div>
        </nav >


    )
}

export default Navbar
