import Link from 'next/link'
import React from 'react'
import ImgBack from '../Layer/ImgBack';

export default function Equipo({data, path}) {

  // const array = [...Array(6).keys()]
  return (
    <>

      <div className="mt-16 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

        {data && data.map((e, i) => (
          <Link key={i} href={`/nosotros/${path}/${e.slug}`}>
            <a className="card-hover ">
              <div className="w-full h-[200px] sm:h-[250px] md:h-[320px]  overflow-hidden ">
                <ImgBack className='object-cover w-full rounded-2xl' src={e.imagen} alt={e.nombre} />
              </div>
              <div className="p-9  h-1/5 text-center ">
                <h3>{e.nombre}</h3>
                <p className='font-semibold'>{e.titulo}</p>
              </div>
            </a>
          </Link>
        ))}


      </div>
    </>
  )
}
