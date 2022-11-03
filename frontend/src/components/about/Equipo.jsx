import Link from 'next/link'
import React from 'react'

export default function Equipo() {

  const array = [...Array(6).keys()]
  console.log(array);
  return (
    <>

      <div className="mt-16 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

        {array.map((e, i) => (
          <Link key={i} href={"autoridades/Rafael Karl Brown Rangel/"}>
            <a className="card-hover ">
              <div className="w-full h-[200px] sm:h-[250px] md:h-[320px]  overflow-hidden ">
                <img className='object-cover w-full rounded-2xl' src="/img/autoridad.png" alt="" />
              </div>
              <div className="p-9  h-1/5 text-center ">
                <h3>Rafael Karl Brown Rangel</h3>
                <p className='font-semibold'>Magistrado Presidente</p>
              </div>
            </a>
          </Link>
        ))}


      </div>
    </>
  )
}
