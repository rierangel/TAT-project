import React, { useEffect, useState } from 'react'
import Layer from 'src/components/Layer'
import Equipo from 'src/components/about/List'
import Title from 'src/components/Layer/Title'
import { fetcher } from 'src/lib/Fetcher'
import TextBack from 'src/components/Layer/TextBack'
import ImgBack from 'src/components/Layer/ImgBack'


export default function Page() {

  const [Page, setPage] = useState()
  const [datalist, setDatalist] = useState()
  useEffect(() => {
     fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/4`)
     .then(res=>setPage(res))
     .catch(error=>console.log(error))


     fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/nosotros/autoridades/`)
     .then(res=>setDatalist(res))
     .catch(error=>console.log(error))
  }, [])

  return ( Page &&
    <Layer>

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
          <div className='w-full lg:order-1 order-3'>


            <Title data={Page[0]} />

            <TextBack text={Page[0].text} />


            <div className='subtitle pt-4 '>
              <i className='bg-[#EBF5FF] p-2 rounded-full' dangerouslySetInnerHTML={{ __html: Page[0].contenido[0].icono }}></i>
              <h5>{Page[0].contenido[0].titulo}</h5>
            </div>

            <div className='pl-16'>

              <div className='subtitle'>
                <i className='bg-[#EBF5FF] p-2 rounded-full' dangerouslySetInnerHTML={{ __html: Page[0].contenido[1].icono }}></i>
                <h5>{Page[0].contenido[1].titulo}</h5>
              </div>


              <div className='subtitle'>
                <i className='bg-[#EBF5FF] p-2 rounded-full' dangerouslySetInnerHTML={{ __html: Page[0].contenido[2].icono }}></i>
                <h5>{Page[0].contenido[2].titulo}</h5>
              </div>

            </div>

            <div className='bg-[#EBF5FF] p-6 rounded-2xl mt-20'>
              <TextBack text={Page[0].contenido[3].text} />
            </div>
          </div>

          <div className="xl:h-[454px] order-2 rounded-xl">
            <ImgBack className='object-cover object-center rounded-xl w-full h-full mx-auto xl:my-0 ' src={Page[0].imagen} />
          </div>
        </div>
      </section>
      {datalist && 
      <Equipo data={datalist} path={'autoridades'} />
      }

    </Layer>
  )
}

// export async function getServerSideProps({ params }) {

//   const Page = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/4`)
//   const datalist = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}//`)

//   return { props: { Page, datalist } }

// }
