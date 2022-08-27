import Link from 'next/link'
import styles from './styles.module.scss'
import NavDrop from './NavDrop'
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
       [ {
            name: "Normativa",
            link: "/normativa/",
            sub: true
        }]

    ]


    // const nosotros = ["quienes Somos", "autoridades", "equipo gerencial"]

    return (
        <nav className={styles.navbar}>

            <div className="container">

                <div className={styles.top}>
                    <div className={styles.img}>
                        <img src="/img/logo.png" alt="" />
                    </div>
                    <Socials />
                </div>

                <div className={styles.bottom}>
                    <ul className='flex space-x-10'>
                        <li >
                            <Link className='mb-auto' href="/">
                                <a className=''>inicio</a>
                            </Link>
                        </li>

                        <NavDrop title={"nosotros"} slug={"nosotros"} data={nosotros} />

                        <NavDrop title={"Marco Normativo"} slug={"marco-normativo"} data={marco} />


                    </ul>
                    <Link href="/buscar">
                        <a className='flex items-center ml-auto '>

                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.7969 19.2031L16.9813 15.3875C18.2136 13.8148 18.8806 11.873 18.875 9.875C18.875 8.09497 18.3472 6.35491 17.3582 4.87487C16.3693 3.39483 14.9637 2.24128 13.3192 1.56009C11.6746 0.8789 9.86502 0.70067 8.11919 1.04794C6.37336 1.3952 4.76971 2.25237 3.51104 3.51104C2.25237 4.76972 1.3952 6.37336 1.04794 8.11919C0.70067 9.86502 0.8789 11.6746 1.56009 13.3192C2.24128 14.9637 3.39483 16.3693 4.87487 17.3582C6.35491 18.3472 8.09497 18.875 9.875 18.875C11.873 18.8806 13.8148 18.2136 15.3875 16.9813L19.2031 20.7969C19.4154 21.0064 19.7017 21.1239 20 21.1239C20.2983 21.1239 20.5846 21.0064 20.7969 20.7969C20.9018 20.6924 20.985 20.5682 21.0418 20.4314C21.0985 20.2947 21.1278 20.1481 21.1278 20C21.1278 19.8519 21.0985 19.7053 21.0418 19.5686C20.985 19.4318 20.9018 19.3076 20.7969 19.2031ZM3.125 9.875C3.125 8.53998 3.52088 7.23494 4.26258 6.1249C5.00428 5.01487 6.05849 4.14971 7.29189 3.63882C8.52529 3.12793 9.88249 2.99425 11.1919 3.2547C12.5012 3.51515 13.704 4.15803 14.648 5.10203C15.592 6.04604 16.2349 7.24877 16.4953 8.55814C16.7558 9.86752 16.6221 11.2247 16.1112 12.4581C15.6003 13.6915 14.7351 14.7457 13.6251 15.4874C12.5151 16.2291 11.21 16.625 9.875 16.625C8.08555 16.6225 6.3701 15.9106 5.10477 14.6452C3.83944 13.3799 3.12748 11.6645 3.125 9.875Z" fill="#6B7380" />
                            </svg>
                        </a>
                    </Link>

                </div>


            </div>
        </nav>
    )
}