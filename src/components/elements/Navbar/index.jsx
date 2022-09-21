import Link from 'next/link'
import styles from './styles.module.scss'
import Tooltip from './Tooltip'
import Socials from '../Socials'
export default function Navbar() {

    const nosotros = [
        {
            name: "Quiénes Somos",
            link: "/quienes-somos/"
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

    const marco = [
        {
            name: "Competencias",
            link: "/competencias/"
        },
        {
            name: "Normativa",
            link: "/normativa/",
            sub: true
        }

    ]


    // const nosotros = ["quienes Somos", "autoridades", "equipo gerencial"]

    return (
        <nav className={styles.navbar}>

            <div className="container relative">

                <div className={styles.top}>

                    <div className='md:hidden flex'>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.375 8C19.375 8.29837 19.2565 8.58452 19.0455 8.79549C18.8345 9.00647 18.5484 9.125 18.25 9.125H1.75C1.45163 9.125 1.16548 9.00647 0.954505 8.79549C0.743526 8.58452 0.625 8.29837 0.625 8C0.625 7.70163 0.743526 7.41548 0.954505 7.2045C1.16548 6.99353 1.45163 6.875 1.75 6.875H18.25C18.5484 6.875 18.8345 6.99353 19.0455 7.2045C19.2565 7.41548 19.375 7.70163 19.375 8ZM1.75 3.125H18.25C18.5484 3.125 18.8345 3.00647 19.0455 2.7955C19.2565 2.58452 19.375 2.29837 19.375 2C19.375 1.70163 19.2565 1.41548 19.0455 1.2045C18.8345 0.993526 18.5484 0.875 18.25 0.875H1.75C1.45163 0.875 1.16548 0.993526 0.954505 1.2045C0.743526 1.41548 0.625 1.70163 0.625 2C0.625 2.29837 0.743526 2.58452 0.954505 2.7955C1.16548 3.00647 1.45163 3.125 1.75 3.125ZM18.25 12.875H1.75C1.45163 12.875 1.16548 12.9935 0.954505 13.2045C0.743526 13.4155 0.625 13.7016 0.625 14C0.625 14.2984 0.743526 14.5845 0.954505 14.7955C1.16548 15.0065 1.45163 15.125 1.75 15.125H18.25C18.5484 15.125 18.8345 15.0065 19.0455 14.7955C19.2565 14.5845 19.375 14.2984 19.375 14C19.375 13.7016 19.2565 13.4155 19.0455 13.2045C18.8345 12.9935 18.5484 12.875 18.25 12.875Z" fill="white" />
                        </svg>

                    </div>

                    <img className="w-32 h-10 md:w-auto md:h-auto object-cover" src="/img/logo.png" alt="" />

                    <div className='hidden md:flex'>
                        <Socials />
                    </div>

                    <div className='md:hidden'></div>
                </div>


                <div className='hidden md:flex'>

                    <ul className={styles.bottom} >
                        <li >
                            <Link href="/">
                                <a>inicio</a>
                            </Link>
                        </li>

                        <li >
                            <Link href="/tramites">
                                <a>Trámites</a>
                            </Link>
                        </li>

                        <Tooltip title={"nosotros"} slug={"nosotros"} data={nosotros} />
                        <Tooltip title={"nosotros"} slug={"nosotros"} data={nosotros} />

                        <li >
                            <Link href="/transparencia">
                                <a>Transparencia</a>
                            </Link>
                        </li>

                        <li >
                            <Link href="/contacto">
                                <a>Contacto</a>
                            </Link>
                        </li>


                    </ul>
                </div>

                <div className='absolute flex items-center cursor-pointer top-2 right-0 md:bottom-0 md:top-[55%]'>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.7969 19.2031L16.9813 15.3875C18.2136 13.8148 18.8806 11.873 18.875 9.875C18.875 8.09497 18.3472 6.35491 17.3582 4.87487C16.3693 3.39483 14.9637 2.24128 13.3192 1.56009C11.6746 0.8789 9.86502 0.70067 8.11919 1.04794C6.37336 1.3952 4.76971 2.25237 3.51104 3.51104C2.25237 4.76972 1.3952 6.37336 1.04794 8.11919C0.70067 9.86502 0.8789 11.6746 1.56009 13.3192C2.24128 14.9637 3.39483 16.3693 4.87487 17.3582C6.35491 18.3472 8.09497 18.875 9.875 18.875C11.873 18.8806 13.8148 18.2136 15.3875 16.9813L19.2031 20.7969C19.4154 21.0064 19.7017 21.1239 20 21.1239C20.2983 21.1239 20.5846 21.0064 20.7969 20.7969C20.9018 20.6924 20.985 20.5682 21.0418 20.4314C21.0985 20.2947 21.1278 20.1481 21.1278 20C21.1278 19.8519 21.0985 19.7053 21.0418 19.5686C20.985 19.4318 20.9018 19.3076 20.7969 19.2031ZM3.125 9.875C3.125 8.53998 3.52088 7.23494 4.26258 6.1249C5.00428 5.01487 6.05849 4.14971 7.29189 3.63882C8.52529 3.12793 9.88249 2.99425 11.1919 3.2547C12.5012 3.51515 13.704 4.15803 14.648 5.10203C15.592 6.04604 16.2349 7.24877 16.4953 8.55814C16.7558 9.86752 16.6221 11.2247 16.1112 12.4581C15.6003 13.6915 14.7351 14.7457 13.6251 15.4874C12.5151 16.2291 11.21 16.625 9.875 16.625C8.08555 16.6225 6.3701 15.9106 5.10477 14.6452C3.83944 13.3799 3.12748 11.6645 3.125 9.875Z" fill="white" />
                    </svg>

                </div>


            </div>
        </nav>
    )
}
