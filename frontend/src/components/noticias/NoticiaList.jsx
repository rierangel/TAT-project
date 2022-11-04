import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


import ImgBack from 'src/components/Layer/ImgBack';
import TextBack from 'src/components/Layer/TextBack';

const NoticiaList = ({ data }) => {

  const rute = useRouter()
  const handlerYear = (e) => {
    rute.push(`/noticias/${e}`)
  }


  return (
    <section>
      {/* noticias */}

      {data.map((e, i) => (
        <div key={i} className="py-6 border-b px-3 flex space-x-[24px] hover1 no-pointer">
          <div className="w-[193px] h-[142px]  ">
            <ImgBack src={e.imagen_principal} className='object-cover h-full w-full rounded-lg' />
          </div>

          <div className="w-full flex flex-col justify-between items-start h-[142px] ">
            <h2>{e.titulo}</h2>

            <TextBack text={e.text} className={"text-clip overflow-hidden h-[45px]"} />


            <Link key={i} href={`/noticias/2020/${e.titulo}`}>
              <a className='btn btn-xs border1 py-3'>Leer más</a>
            </Link>
          </div>
        </div>
      ))}
    </section>

  )
}

export default NoticiaList