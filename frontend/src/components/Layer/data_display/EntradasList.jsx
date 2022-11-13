import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


import ImgBack from 'src/components/Layer/ImgBack';
import TextBack from 'src/components/Layer/TextBack';

const NoticiaList = ({ data }) => {
  console.log(data);
  return (
    <section>


      {data.map((e, i) => (
        <div key={i} className="py-6 border-b px-3 flex space-x-[24px] hover1 no-pointer">
          <ImgBack src={e.imagen_principal} className=' w-[193px] h-[142px]  object-cover  rounded-xl' />
          {/* <img src={e.imagen_principal} className=' w-[193px] h-[142px]  object-cover  rounded-xl' /> */}

          <div className="w-full flex flex-col justify-between items-start h-[142px] ">
            <h2>{e.titulo}</h2>

            <div className='truncate mb-2'>
              <TextBack text={e.contenido} className="" />
            </div>
            {/* <TextBack text={e.contenido} className={"text-clip overflow-hidden h-[45px]"} /> */}

          {console.log(e.fecha.split("-")[0])}
            <Link key={i} href={`${e.fecha.split("-")[0]}/${e.slug}`}>
              <a className='btn btn-xs border1 py-3'>Leer más</a>
            </Link>
          </div>
        </div>
      ))}
    </section>

  )
}

export default NoticiaList