import Link from 'next/link'
import Socials from '../Socials'
import Buscador from './Buscador'
import { useRef, useState } from 'react'
import styles from './styles.module.scss'


import Tooltip from 'src/lib/TooltipNavbar'




export default function Navbar() {

    const nosotros = [
        {
            name: "Quiénes Somos",
            link: ""
        },
        {
            name: "Autoridades",
            link: "/autoridades/"
        },
        {
            name: "Equipo Gerencial",
            link: "/equipo-gerencial/"
        },
    ]




    const [showSearch, setShowSearch] = useState(false)
    // const [showMenu, setShowMenu] = useState(false)

    const menuRef = useRef()

    const setShowMenu = () => {
        console.log(menuRef.current);
        menuRef.current.classList.toggle("hidden")
    }


    return (
        <nav className={styles.navbar}>

            <div className="container ">
                <div className={styles.top}>
                    <div onClick={() => setShowMenu()} className='lg:hidden flex py-6 px-4'>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.375 8C19.375 8.29837 19.2565 8.58452 19.0455 8.79549C18.8345 9.00647 18.5484 9.125 18.25 9.125H1.75C1.45163 9.125 1.16548 9.00647 0.954505 8.79549C0.743526 8.58452 0.625 8.29837 0.625 8C0.625 7.70163 0.743526 7.41548 0.954505 7.2045C1.16548 6.99353 1.45163 6.875 1.75 6.875H18.25C18.5484 6.875 18.8345 6.99353 19.0455 7.2045C19.2565 7.41548 19.375 7.70163 19.375 8ZM1.75 3.125H18.25C18.5484 3.125 18.8345 3.00647 19.0455 2.7955C19.2565 2.58452 19.375 2.29837 19.375 2C19.375 1.70163 19.2565 1.41548 19.0455 1.2045C18.8345 0.993526 18.5484 0.875 18.25 0.875H1.75C1.45163 0.875 1.16548 0.993526 0.954505 1.2045C0.743526 1.41548 0.625 1.70163 0.625 2C0.625 2.29837 0.743526 2.58452 0.954505 2.7955C1.16548 3.00647 1.45163 3.125 1.75 3.125ZM18.25 12.875H1.75C1.45163 12.875 1.16548 12.9935 0.954505 13.2045C0.743526 13.4155 0.625 13.7016 0.625 14C0.625 14.2984 0.743526 14.5845 0.954505 14.7955C1.16548 15.0065 1.45163 15.125 1.75 15.125H18.25C18.5484 15.125 18.8345 15.0065 19.0455 14.7955C19.2565 14.5845 19.375 14.2984 19.375 14C19.375 13.7016 19.2565 13.4155 19.0455 13.2045C18.8345 12.9935 18.5484 12.875 18.25 12.875Z" fill="white" />
                        </svg>
                    </div>
                    <img className=" w-32 h-10 lg:w-auto lg:h-auto object-cover scale-150 lg:scale-100" src="/img/logo.png" alt="" />
                    <div className='hidden lg:flex'>
                        <Socials />
                    </div>
                    <div className='lg:hidden cursor-pointer py-6 px-4 -mr-4' onClick={() => setShowSearch(true)}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7969 19.2031L16.9813 15.3875C18.2136 13.8148 18.8806 11.873 18.875 9.875C18.875 8.09497 18.3472 6.35491 17.3582 4.87487C16.3693 3.39483 14.9637 2.24128 13.3192 1.56009C11.6746 0.8789 9.86502 0.70067 8.11919 1.04794C6.37336 1.3952 4.76971 2.25237 3.51104 3.51104C2.25237 4.76972 1.3952 6.37336 1.04794 8.11919C0.70067 9.86502 0.8789 11.6746 1.56009 13.3192C2.24128 14.9637 3.39483 16.3693 4.87487 17.3582C6.35491 18.3472 8.09497 18.875 9.875 18.875C11.873 18.8806 13.8148 18.2136 15.3875 16.9813L19.2031 20.7969C19.4154 21.0064 19.7017 21.1239 20 21.1239C20.2983 21.1239 20.5846 21.0064 20.7969 20.7969C20.9018 20.6924 20.985 20.5682 21.0418 20.4314C21.0985 20.2947 21.1278 20.1481 21.1278 20C21.1278 19.8519 21.0985 19.7053 21.0418 19.5686C20.985 19.4318 20.9018 19.3076 20.7969 19.2031ZM3.125 9.875C3.125 8.53998 3.52088 7.23494 4.26258 6.1249C5.00428 5.01487 6.05849 4.14971 7.29189 3.63882C8.52529 3.12793 9.88249 2.99425 11.1919 3.2547C12.5012 3.51515 13.704 4.15803 14.648 5.10203C15.592 6.04604 16.2349 7.24877 16.4953 8.55814C16.7558 9.86752 16.6221 11.2247 16.1112 12.4581C15.6003 13.6915 14.7351 14.7457 13.6251 15.4874C12.5151 16.2291 11.21 16.625 9.875 16.625C8.08555 16.6225 6.3701 15.9106 5.10477 14.6452C3.83944 13.3799 3.12748 11.6645 3.125 9.875Z" fill="white" />
                        </svg>
                    </div>
                </div>

                <div ref={menuRef} className='hidden lg:flex '>
                    <div className='mr-auto'>
                        <ul className={styles.bottom} >
                            <Link href="/">
                                <a>
                                    <li >
                                        Inicio
                                    </li>
                                </a>
                            </Link>

                            <Link href="/tramites/">
                                <a>
                                    <li >
                                        Trámites
                                    </li>
                                </a>
                            </Link>

                            <div className=' flex items-start'>
                                <Tooltip title="Nosotros">
                                    {nosotros.map((e, i) => (
                                        <Link key={i} href={`/nosotros${e.link}`}>
                                            <a>
                                                <li >
                                                    {e.name}
                                                </li>
                                            </a>
                                        </Link>
                                    ))}
                                </Tooltip>
                            </div>

                            {/* marco normativo */}
                            <div className=' flex items-start' >
                                <Tooltip title="Marco Normativo">

                                    <Link href={`/publicaciones/ponencias/`}>
                                        <a>
                                            <li >
                                                Ponencias del Congreso
                                            </li>
                                        </a>
                                    </Link>

                                    <Link href={`/publicaciones/revista-tributaria/`}>
                                        <a>
                                            <li >
                                                revista justicia tributaria
                                            </li>
                                        </a>
                                    </Link>


                                    <div className='mt-4 -mb-3 ' >
                                        <Tooltip title="Normativa">
                                            <Link href={`/publicaciones/memorias`}>
                                                <a>
                                                    <li >
                                                        Memorias
                                                    </li>
                                                </a>
                                            </Link>
                                            <Link href={`/publicaciones/otras`}>
                                                <a>
                                                    <li >
                                                        Otras Publicaciones
                                                    </li>
                                                </a>
                                            </Link>




                                        </Tooltip>
                                    </div>

                                </Tooltip>
                            </div>

                            <Link href="/transparencia">
                                <a>
                                    <li >
                                        Transparencia
                                    </li>
                                </a>
                            </Link>
                            <Link href="/contacto">
                                <a>
                                    <li >
                                        Contacto
                                    </li>
                                </a>
                            </Link>
                        </ul>
                    </div>

                    <div
                        onClick={() => setShowSearch(true)}
                        className='hidden lg:flex items-center cursor-pointer pb-6'>
                        <div className='buscador bg-opacity-20'>
                            <input type="text" placeholder='Buscar' />
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.7969 19.2031L16.9813 15.3875C18.2136 13.8148 18.8806 11.873 18.875 9.875C18.875 8.09497 18.3472 6.35491 17.3582 4.87487C16.3693 3.39483 14.9637 2.24128 13.3192 1.56009C11.6746 0.8789 9.86502 0.70067 8.11919 1.04794C6.37336 1.3952 4.76971 2.25237 3.51104 3.51104C2.25237 4.76972 1.3952 6.37336 1.04794 8.11919C0.70067 9.86502 0.8789 11.6746 1.56009 13.3192C2.24128 14.9637 3.39483 16.3693 4.87487 17.3582C6.35491 18.3472 8.09497 18.875 9.875 18.875C11.873 18.8806 13.8148 18.2136 15.3875 16.9813L19.2031 20.7969C19.4154 21.0064 19.7017 21.1239 20 21.1239C20.2983 21.1239 20.5846 21.0064 20.7969 20.7969C20.9018 20.6924 20.985 20.5682 21.0418 20.4314C21.0985 20.2947 21.1278 20.1481 21.1278 20C21.1278 19.8519 21.0985 19.7053 21.0418 19.5686C20.985 19.4318 20.9018 19.3076 20.7969 19.2031ZM3.125 9.875C3.125 8.53998 3.52088 7.23494 4.26258 6.1249C5.00428 5.01487 6.05849 4.14971 7.29189 3.63882C8.52529 3.12793 9.88249 2.99425 11.1919 3.2547C12.5012 3.51515 13.704 4.15803 14.648 5.10203C15.592 6.04604 16.2349 7.24877 16.4953 8.55814C16.7558 9.86752 16.6221 11.2247 16.1112 12.4581C15.6003 13.6915 14.7351 14.7457 13.6251 15.4874C12.5151 16.2291 11.21 16.625 9.875 16.625C8.08555 16.6225 6.3701 15.9106 5.10477 14.6452C3.83944 13.3799 3.12748 11.6645 3.125 9.875Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>


            </div>

            {showSearch &&
                <div className='absolute inset-0 '>

                        <div onClick={() => setShowSearch(false)} className='absolute inset-0 bg-[#0F162099] bg-opacity-60 ' />
                        <div className='relative container bg-white top-32 p-9 rounded-xl text-black z-[99999] '>

                            <div onClick={() => setShowSearch(false)} className='cursor-pointer svg_rp w-auto absolute right-10 top-5 p-5'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5469 13.9531C15.6518 14.0576 15.735 14.1818 15.7918 14.3186C15.8485 14.4553 15.8778 14.6019 15.8778 14.75C15.8778 14.8981 15.8485 15.0447 15.7918 15.1814C15.735 15.3182 15.6518 15.4424 15.5469 15.5469C15.3346 15.7564 15.0483 15.8739 14.75 15.8739C14.4517 15.8739 14.1654 15.7564 13.9531 15.5469L8.00002 9.59375L2.04689 15.5469C1.8346 15.7564 1.54831 15.8739 1.25002 15.8739C0.951724 15.8739 0.665436 15.7564 0.453141 15.5469C0.348261 15.4424 0.265044 15.3182 0.208263 15.1814C0.151482 15.0447 0.122253 14.8981 0.122253 14.75C0.122253 14.6019 0.151482 14.4553 0.208263 14.3186C0.265044 14.1818 0.348261 14.0576 0.453141 13.9531L6.40627 8L0.453141 2.04687C0.241796 1.83553 0.123064 1.54888 0.123064 1.25C0.123064 1.10201 0.152214 0.955461 0.208848 0.818733C0.265483 0.682005 0.348494 0.557771 0.453141 0.453123C0.557788 0.348476 0.682022 0.265466 0.81875 0.208831C0.955478 0.152196 1.10202 0.123047 1.25002 0.123047C1.5489 0.123047 1.83555 0.241779 2.04689 0.453123L8.00002 6.40625L13.9531 0.453123C14.1645 0.241779 14.4511 0.123047 14.75 0.123047C15.0489 0.123047 15.3355 0.241779 15.5469 0.453123C15.7582 0.664468 15.877 0.951112 15.877 1.25C15.877 1.54888 15.7582 1.83553 15.5469 2.04687L9.59377 8L15.5469 13.9531Z" fill="#0054A4" />
                                </svg>
                            </div>
                            <Buscador />
                        </div>

                </div>
            }
        </nav>
    )
}
