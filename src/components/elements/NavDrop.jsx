import Link from 'next/link'
import { useState } from 'react'
import styles from './styles.module.scss'


export default function NavDrop() {

  const [active, setActive]= useState()
  return (
    <li className={styles.drop}>
      <Link href="/">
        <a >inicio</a>
      </Link>

      <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.99999 8.1875C7.75145 8.18642 7.51317 8.08831 7.33593 7.91406L1.08593 1.66406C0.909811 1.48794 0.810867 1.24907 0.810867 1C0.810867 0.750929 0.909811 0.512059 1.08593 0.335938C1.26205 0.159818 1.50092 0.0608749 1.74999 0.0608749C1.99907 0.0608749 2.23794 0.159818 2.41406 0.335938L7.99999 5.92188L13.5859 0.335938C13.7621 0.159818 14.0009 0.0608749 14.25 0.0608749C14.4991 0.0608749 14.7379 0.159818 14.9141 0.335938C15.0902 0.512059 15.1891 0.750929 15.1891 1C15.1891 1.24907 15.0902 1.48794 14.9141 1.66406L8.66406 7.91406C8.48682 8.08831 8.24853 8.18642 7.99999 8.1875Z" fill="#CAD0D9" />
      </svg>


      <div className="hidden">
        <ul className='border ' >
          <li >
            <Link href="/">
              <a >Revista Justicia Tributaria</a>
            </Link>
          </li>
          <li >
            <Link href="/">
              <a >Revista Justicia Tributaria</a>

            </Link>
          </li>
        </ul>
      </div>
    </li>
  )
}
