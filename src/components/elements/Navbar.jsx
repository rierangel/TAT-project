import Link from 'next/link'
import styles from './styles.module.scss'
import NavDrop from './NavDrop'
import Socials from './Socials'

export default function Navbar() {

    const nosotros = [
        {
            name: "inicio",
            link: "/"
        },
        {
            name: "Marco Normativo",
            link: "/"
        },

    ]

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

                        <NavDrop/>


                    </ul>
                </div>

            </div>
        </nav>
    )
}
