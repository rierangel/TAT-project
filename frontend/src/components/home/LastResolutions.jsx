import Link from 'next/link'
import { useEffect, useState } from 'react'
import { fetcher } from 'src/lib/Fetcher'
import styles from './styles.module.scss'

export default function LastResolutions() {

  const url = `${process.env.NEXT_PUBLIC_URL_BACKEND}/publicaciones/resoluciones/?limit=6/`
  const [data, setData] = useState(null)

  useEffect(() => {
    fetcher(url).then(res => {
      if(res.results){
        const last = res.results.filter((v, i) => i < 6)
        setData(last)
      }
    })
  }, [])


  return (

    <div className={styles.resoluciones}>
      {data !== null && data.map((v, i) => (
        <a key={i} href={`${process.env.NEXT_PUBLIC_URL_BACKEND}${v.ver}`} rel="noreferrer"  target="_blank" className='card-hover'>
          <h3 >{v.titulo}</h3>
          <p className='uppercase text-[#6B7380] mt-[13px]'>{v.categoria}</p>
        </a>
  ))
}

      

      </div >
  )
}