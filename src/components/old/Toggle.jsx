import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'


export default function NavDrop({ title, slug, data }) {

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
    <li className={styles.tooltip} >

      <div className="cursor-pointer flex justify-center items-center" onClick={() => setActive(!active)}>
        <a>{title}</a>

        {active ? <svg className='ml-4' width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.2497 8.43751C14.0011 8.43644 13.7628 8.33832 13.5856 8.16408L7.99967 2.57814L2.41374 8.16408C2.23762 8.3402 1.99874 8.43914 1.74967 8.43914C1.5006 8.43914 1.26173 8.3402 1.08561 8.16408C0.90949 7.98796 0.810547 7.74908 0.810547 7.50001C0.810547 7.25094 0.90949 7.01207 1.08561 6.83595L7.33561 0.585951C7.42271 0.498551 7.5262 0.429203 7.64016 0.381886C7.75411 0.334568 7.87628 0.310211 7.99967 0.310211C8.12306 0.310211 8.24524 0.334568 8.35919 0.381886C8.47315 0.429203 8.57664 0.498551 8.66374 0.585951L14.9137 6.83595C15.0011 6.92305 15.0705 7.02654 15.1178 7.1405C15.1651 7.25445 15.1895 7.37663 15.1895 7.50001C15.1895 7.6234 15.1651 7.74558 15.1178 7.85953C15.0705 7.97348 15.0011 8.07698 14.9137 8.16408C14.7365 8.33832 14.4982 8.43644 14.2497 8.43751Z" fill="#0054A4" />
        </svg>
          :
          <svg className='ml-4' width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99999 8.1875C7.75145 8.18642 7.51317 8.08831 7.33593 7.91406L1.08593 1.66406C0.909811 1.48794 0.810867 1.24907 0.810867 1C0.810867 0.750929 0.909811 0.512059 1.08593 0.335938C1.26205 0.159818 1.50092 0.0608749 1.74999 0.0608749C1.99907 0.0608749 2.23794 0.159818 2.41406 0.335938L7.99999 5.92188L13.5859 0.335938C13.7621 0.159818 14.0009 0.0608749 14.25 0.0608749C14.4991 0.0608749 14.7379 0.159818 14.9141 0.335938C15.0902 0.512059 15.1891 0.750929 15.1891 1C15.1891 1.24907 15.0902 1.48794 14.9141 1.66406L8.66406 7.91406C8.48682 8.08831 8.24853 8.18642 7.99999 8.1875Z" fill="#CAD0D9" />
          </svg>
        }
      </div>

      <div ref={select} className={active ? "visible z-50" : "hidden"}>
        <ul className='border' >
          {data.map((e, i) =>
              <Link key={i} href={`/${slug}${e.link}`}>
                <li className={styles.item} >
                  {e.name}
                </li>
              </Link>
          )}
        </ul>
      </div>
      
    </li>
  )
}
