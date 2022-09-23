import Link from 'next/link'
import React from 'react'

export default function Equipo() {
  return (
    <>
    
      <div className="mt-16 mb-20 grid grid-cols-1 md:grid-cols-3 gap-7">

        <Link href={"autoridades/fulano/"}>
          <a className="group hover1 border2 rounded-xl ">
            <div className="w-full max-h-[320px] rounded-t-xl overflow-hidden">
              <img className='object-contain w-full' src="/img/autoridad.png" alt="" />
            </div>
            <div className="p-9 group-hover:text-[#0054A4]">
              <h3>Rafael Karl Brown Rangel</h3>
              <p className='font-semibold'>Magistrado Presidente</p>
            </div>
          </a>
        </Link>



      </div>
    </>
  )
}
