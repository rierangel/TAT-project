import React, { useEffect, useState } from 'react'
import Layer from 'src/components/Layer'
import Equipo from 'src/components/about/List'
import Title from 'src/components/Layer/Title'
import TextBack from 'src/components/Layer/TextBack'
import { fetcher } from 'src/lib/Fetcher'


export default function Page() {

  const [Page, setPage] = useState()
  const [datalist, setDatalist] = useState()
  useEffect(() => {
     fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/5`)
     .then(res=>setPage(res))
     .catch(error=>console.log(error))


     fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/nosotros/equipo/`)
     .then(res=>setDatalist(res))
     .catch(error=>console.log(error))
  }, [])


  return ( Page &&
    <Layer>

      <Title data={Page[0]} />

      <TextBack text={Page[0].text} className='mb-6' />
      {/* <p className='mb-6'>El Tribunal Administrativo Tributario cuenta con una estructura orgánica diseñada para cumplir con calidad y eficiencia todas las funciones que le asigna la ley, como institución autónoma e independiente.  Cada colaborador del tribunal contribuye con sus competencias a implementar la cultura organizacional y al logro de la misión y visión institucional.</p> */}
      <Equipo data={datalist} path={'equipo-gerencial'} />


    </Layer>
  )
}

// export async function getServerSideProps({ params }) {

//   const Page = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/5`)
//   const datalist = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/nosotros/equipo/`)


//   return { props: { Page, datalist } }

// }

