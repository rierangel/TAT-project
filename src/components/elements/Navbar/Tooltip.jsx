import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'


export default function Tooltip({ children, title }) {
    const [active, setActive] = useState(false)
    const select = useRef();
    useEffect(() => {
        const handleClick = (event) => {
            if (select.current && !select.current.contains(event.target)) {
                setActive(false)
            }
        };
        document.addEventListener('click', handleClick, true);
        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, [select]);

    return (
        <div ref={select}  className={styles.tooltip} >

            <div className="cursor-pointer flex justify-center items-center" onClick={() => setActive(!active)}>
                <a>{title}</a>

                {active ?
                    <svg className='ml-4' width="16" height="9" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0003 6.74989C10.8015 6.74903 10.6109 6.67053 10.4691 6.53114L6.00032 2.06239L1.53157 6.53114C1.39068 6.67203 1.19958 6.75119 1.00032 6.75119C0.801067 6.75119 0.609971 6.67203 0.469074 6.53114C0.328178 6.39024 0.249023 6.19915 0.249023 5.99989C0.249023 5.80063 0.328178 5.60953 0.469074 5.46864L5.46907 0.468638C5.53875 0.398718 5.62155 0.343241 5.71271 0.305387C5.80387 0.267533 5.90161 0.248047 6.00032 0.248047C6.09903 0.248047 6.19677 0.267533 6.28794 0.305387C6.3791 0.343241 6.4619 0.398718 6.53157 0.468638L11.5316 5.46864C11.6015 5.53832 11.657 5.62111 11.6948 5.71227C11.7327 5.80344 11.7522 5.90118 11.7522 5.99989C11.7522 6.0986 11.7327 6.19634 11.6948 6.2875C11.657 6.37867 11.6015 6.46146 11.5316 6.53114C11.3898 6.67053 11.1992 6.74903 11.0003 6.74989Z" fill="white" />
                    </svg>

                    :
                    <svg className='ml-4' width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99999 8.1875C7.75145 8.18642 7.51317 8.08831 7.33593 7.91406L1.08593 1.66406C0.909811 1.48794 0.810867 1.24907 0.810867 1C0.810867 0.750929 0.909811 0.512059 1.08593 0.335938C1.26205 0.159818 1.50092 0.0608749 1.74999 0.0608749C1.99907 0.0608749 2.23794 0.159818 2.41406 0.335938L7.99999 5.92188L13.5859 0.335938C13.7621 0.159818 14.0009 0.0608749 14.25 0.0608749C14.4991 0.0608749 14.7379 0.159818 14.9141 0.335938C15.0902 0.512059 15.1891 0.750929 15.1891 1C15.1891 1.24907 15.0902 1.48794 14.9141 1.66406L8.66406 7.91406C8.48682 8.08831 8.24853 8.18642 7.99999 8.1875Z" fill="#CAD0D9" />
                    </svg>
                }
            </div>
            <div ref={select} className={active ? "visible z-50" : "hidden"}>
                <ul className={styles.toggle} >
                    {/* <Link key={i} href={`/${slug}${e.link}`}>
                        <li className={styles.item} >
                            {e.name}
                        </li>
                    </Link> */}
                    {children}
                </ul>
            </div>

        </div>
    )
}
