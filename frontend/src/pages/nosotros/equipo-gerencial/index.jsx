import React from 'react'
import Layer from 'src/components/Layer'
import Equipo from 'src/components/about/List'
import Title from 'src/components/Layer/Title'
import TextBack from 'src/components/Layer/TextBack'
import { fetcher } from 'src/lib/Fetcher'


export default function page({ page, datalist }) {
  return (
    <Layer>

      <Title data={page[0]} />

      <TextBack text={page[0].text} className='mb-6' />
      {/* <p className='mb-6'>El Tribunal Administrativo Tributario cuenta con una estructura orgánica diseñada para cumplir con calidad y eficiencia todas las funciones que le asigna la ley, como institución autónoma e independiente.  Cada colaborador del tribunal contribuye con sus competencias a implementar la cultura organizacional y al logro de la misión y visión institucional.</p> */}
      <Equipo data={datalist} />


    </Layer>
  )
}

export async function getServerSideProps({ params }) {

  const page = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/5`)
  const datalist = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/nosotros/equipo/`)


  return { props: { page, datalist } }

}

