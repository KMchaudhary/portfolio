import React from 'react'
import {useState} from 'react';

import profile from '../assets/profile.jpeg';
import project1 from '../assets/project1.png';


const Home = () => {
    const [tab, setTab] = useState('intro');
    console.log(tab)
    return (
        <>
            <header className="sticky top-0 bg-white border-b z-40">
                <div className="px-5 md:px-8 flex flex-row justify-between">
                    <div className="left flex items-center">
                        <div className="logo text-lg font-medium">Kuldip Chaudhary</div>
                    </div>
                    <div className="right">
                        <div className="navbar">
                            <nav className="flex flex-row">
                                <a className={`nav-link mr-2 ${tab === 'intro' ? 'active' : ''}`} href="#intro" onClick={(e) => {setTab('intro')}}>
                                    <div className="nav-item">Intro</div>
                                </a>
                                <a className={`nav-link mr-2 ${tab === 'study' ? 'active' : ''}`} href="#study" onClick={(e) => {setTab('study')}}>
                                    <div className="nav-item">Study</div>
                                </a>
                                <a className={`nav-link mr-2 ${tab === 'skills' ? 'active' : ''}`} href="#skills" onClick={(e) => {setTab('skills')}}>
                                    <div className="nav-item">Skills</div>
                                </a>
                                <a className={`nav-link mr-2 ${tab === 'projects' ? 'active' : ''}`} href="#projects" onClick={(e) => {setTab('projects')}}>
                                    <div className="nav-item">Projects</div>
                                </a>
                                <a className={`nav-link mr-2 ${tab === 'contact' ? 'active' : ''}`} href="#contact" onClick={(e) => {setTab('contact')}}>
                                    <div className="nav-item">Contact</div>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section id="intro" className="py-16">
                    <div className="wrapper mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
                            <div className="flex justify-center items-center">
                                <div className="image inline-block rounded-lg shadow-lg">
                                    <img className="profileImg" src={profile} alt="Profile image" />
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center leading-5">
                                <h1 className="text-2xl font-serif mb-4 font-bold tracking-wide text-green-600">I'am Kuldip Chaudhary</h1>
                                <p>
                                    A full stack web developer.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Study */}
                <section id="study" className="py-16 relative bg-slate-50">
                    <div className="wrapper mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-4"><span className="py-2 border-b-2 inline-block border-green-300">Study</span></h2>
                        <div className="flex flex-col">
                            <table>
                                <tbody>
                                <tr>
                                    <td className="text-slate-600 font-medium px-3 py-1">Collage</td>
                                    <td className="text-slate-800 font-semibold px-3 py-1">Nirma University, Ahmedabad</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-600 font-medium px-3 py-1">Program</td>
                                    <td className="text-slate-800 font-semibold px-3 py-1">B. Teach in Computer Science and Engineering</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-600 font-medium px-3 py-1">Current Year</td>
                                    <td className="text-slate-800 font-semibold px-3 py-1">
                                        3<sup>th</sup>
                                        <div className="dot bg-slate-500"></div>
                                        Semester 6
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section id="skills" className="py-16 relative bg-white">
                    <div className="wrapper mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-4"><span className="py-2 border-b-2 inline-block border-green-300">Skills</span></h2>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="px-4 mb-4 border-b md:border-r md:border-b-0">
                                <h3 className="font-medium text-slate-600">Programing languages</h3>
                                <ul className="ml-4">
                                    <li className="py-1 flex flex-row justify-between">
                                        <div>C</div>
                                        <div>⭐⭐⭐⭐⭐</div>
                                    </li>
                                    <li className="py-1 flex flex-row justify-between">
                                        <div>C++</div>
                                        <div>⭐⭐⭐⭐</div>
                                    </li>
                                    <li className="py-1 flex flex-row justify-between">
                                        <div>Java Script</div>
                                        <div>⭐⭐⭐⭐⭐</div>
                                    </li>
                                    <li className="py-1 flex flex-row justify-between">
                                        <div>JAVA</div>
                                        <div>⭐⭐⭐⭐</div>
                                    </li>
                                    <li className="py-1 flex flex-row justify-between">
                                        <div>Python</div>
                                        <div>⭐⭐⭐⭐</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-4 mb-4">
                                <h3 className="font-medium text-slate-600">Technology</h3>
                                <ul className="ml-4">
                                    <li className="py-1 flex flex-row justify-between">
                                        <div>Node JS</div>
                                        <div className="flex flex-row items-center">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-green-600 ml-2" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-green-600 ml-2" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-green-600 ml-2" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-green-600 ml-2" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>

                                        </div>
                                    </li>
                                    <li className="py-1 flex flex-row justify-between">
                                        <div>react</div>
                                        <div>⭐⭐⭐</div>
                                    </li>
                                    <li className="py-1 flex flex-row justify-between">
                                        <div>SQL</div>
                                        <div>⭐⭐⭐</div>
                                    </li>
                                    <li className="py-1 flex flex-row justify-between">
                                        <div>Mongo DB</div>
                                        <div>⭐⭐⭐⭐</div>
                                    </li>
                                    {/*<li className="py-1 flex flex-row justify-between">*/}
                                    {/*    <div>Python</div>*/}
                                    {/*    <div>⭐⭐⭐⭐</div>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  Projects  */}
                <section id="projects" className="min-h-[100vh] py-16 relative bg-slate-100">
                    <div className="wrapper mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-4"><span className="py-2 border-b-2 inline-block border-green-300">Projects</span></h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="project-card border rounded-lg shadow-sm hover:shadow-lg hover:-translate-x-1 hover:-translate-y-1 transition">
                                <div className="project-image border-b">
                                    <img className="w-full fit-cover rounded-t-lg" src={project1} alt=""/>
                                </div>
                                <div className="p-3">
                                    <div className="project-name text-lg font-semibold">Parixa 22</div>
                                    <div className="project-name text-slate-500">Create quiz arrange with</div>
                                </div>
                            </div>
                            <div className="project-card border rounded-lg shadow-sm hover:shadow-lg hover:-translate-x-1 hover:-translate-y-1 transition">
                                <div className="project-image h-[180px] md:h-[220px]"></div>
                            </div>
                            <div className="project-card border rounded-lg shadow-sm hover:shadow-lg hover:-translate-x-1 hover:-translate-y-1 transition">
                                <div className="project-image h-[180px] md:h-[220px]"></div>
                            </div>
                            <div className="project-card border rounded-lg shadow-sm hover:shadow-lg hover:-translate-x-1 hover:-translate-y-1 transition">
                                <div className="project-image h-[180px] md:h-[220px]"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  Area of Interest  */}
                <section id="interest" className="py-16 px-4 relative bg-green-100">
                    <div className="wrapper mx-auto">
                        <h2 className="text-2xl font-bold mb-8 text-center"><span className="py-2 border-b-2 inline-block border-green-300">Area of interest</span></h2>
                        <div className="flex flex-row flex-wrap font-semibold">
                            <div className="mx-3 text-2xl flex items-center my-4"><div className="dot-2 bg-green-400"></div>Web Development</div>
                            <div className="mx-3 text-2xl flex items-center my-4"><div className="dot-2 bg-green-400"></div>Machine Learning</div>
                            <div className="mx-3 text-2xl flex items-center my-4"><div className="dot-2 bg-green-400"></div>Project Management</div>
                            <div className="mx-3 text-2xl flex items-center my-4"><div className="dot-2 bg-green-400"></div>Explorer</div>
                        </div>
                    </div>
                </section>

                {/*  Contact  */}
                <section id="contact" className="py-16 min-h-[100vh] px-4 relative bg-slate-100">
                    <div className="wrapper mx-auto">
                        <h2 className="text-2xl font-bold mb-4 text-center"><span className="py-2 border-b-2 inline-block border-green-300">Contact me</span></h2>
                        <div className="max-w-[400px] w-full mx-auto border shadow-sm rounded-lg bg-white">
                            <form action="" className="p-4" method="post">
                                <div className="mb-4">
                                    <label className="block mb-2" htmlFor="username">Name</label>
                                    <input className="outline-none border px-3 py-2 w-full rounded-lg focus:bg-slate-50 focus:border-green-600 focus:ring-1 focus:shadow-sm focus:ring-green-500" type="text" name="username" id="username" required />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2" htmlFor="message">Message</label>
                                    <textarea className="outline-none border px-3 py-2 w-full rounded-lg focus:bg-slate-50 focus:border-green-600 focus:ring-1 focus:shadow-sm focus:ring-green-500" type="text" name="message" rows="3" id="username" required/>
                                </div>

                                <button className="w-full p-3 text-white text-lg font-semibold bg-green-500 hover:bg-green-600 focus:ring focus:shadow-sm focus:ring-green-500 rounded-lg">
                                    Send email
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
};

export default Home;