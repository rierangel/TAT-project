import Link from 'next/link'
import styles from './styles.module.scss'
import NavDrop from './NavDrop'
import Socials from './Socials'
export default function Navbar() {

    // const nosotros = [
    //     {
    //         name: "nosotros",
    //         link: "/"
    //     },
    //     {
    //         name: "Quiénes Somos",
    //         link: "/quiénes-somos"
    //     },
    //     {
    //         name: "Autoridades",
    //         link: "/autoridades"
    //     },
    //     {
    //         name: "Equipo Gerencial",
    //         link: "/equipo-gerencial"
    //     },

    // ]

    const nosotros = ["quiénes somos", "autoridades", "equipo gerencial"]

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
                    <ul className='flex space-x-[40px]'>
                        
                        <li >
                            <Link className='mb-auto' href="/">
                                <a className=''>inicio</a>
                            </Link>
                        </li>

                        <NavDrop title={"nosotros"} data={nosotros} />

                    </ul>
                </div>

            </div>
        </nav>
    )
}
