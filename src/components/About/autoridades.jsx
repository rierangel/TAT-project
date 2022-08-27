import Link from 'next/link'
import React from 'react'

export default function autoridades() {
  return (
    <>
      <h1 className='mb-6'>Autoridades</h1>

      <p>El Tribunal Administrativo Tributario está conformado por tres Magistrados principales con sus respectivos suplentes. Dos  Magistrados son Abogados y uno es Contador Público Autorizado. <br />
        Dichos nombramientos fueron realizados por el Presidente de la República y aprobados por el Órgano Legislativo, cumpliendo así con lo expresado por la Ley 8/2010, por la cual se crea el Tribunal Administrativo Tributario.</p>

      <div className="mt-16 mb-20 grid grid-cols-3 gap-7">

        <Link href={"autoridades/fulano/"}>
          <a className="group h-[453px] hover1 border2 rounded-xl ">
            <div syles="w-full ">
              <img className='h-[320px] object-top rounded-t-xl ' src="/img/autoridad.png" alt="" />
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
