import React from 'react'
import Layer from 'src/components/Layer'
import Equipo from 'src/components/about/List'
import Title from 'src/components/Layer/Title'
import { fetcher } from 'src/lib/Fetcher'
import TextBack from 'src/components/Layer/TextBack'
import ImgBack from 'src/components/Layer/ImgBack'


export default function page({ page, datalist }) {
  console.log(page);
  return (
    <Layer>

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
          <div className='w-full lg:order-1 order-3'>


            <Title data={page[0]} />

            <TextBack text={page[0].text} />


            <div className='subtitle pt-4 '>
              <i className='bg-[#EBF5FF] p-2 rounded-full' dangerouslySetInnerHTML={{ __html: page[0].contenido[0].icono }}></i>
              <h5>{page[0].contenido[0].titulo}</h5>
            </div>

            <div className='pl-16'>

              <div className='subtitle'>
                <i className='bg-[#EBF5FF] p-2 rounded-full' dangerouslySetInnerHTML={{ __html: page[0].contenido[1].icono }}></i>
                <h5>{page[0].contenido[1].titulo}</h5>
              </div>


              <div className='subtitle'>
                <i className='bg-[#EBF5FF] p-2 rounded-full' dangerouslySetInnerHTML={{ __html: page[0].contenido[2].icono }}></i>
                <h5>{page[0].contenido[2].titulo}</h5>
              </div>

            </div>

            <div className='bg-[#EBF5FF] p-6 rounded-2xl mt-20'>
              <TextBack text={page[0].contenido[3].text} />
            </div>
          </div>

          <div className="xl:h-[454px] order-2 rounded-xl">
            <ImgBack className='object-cover object-center rounded-xl w-full h-full mx-auto xl:my-0 ' src={page[0].imagen} />
          </div>
        </div>
      </section>
      <Equipo data={datalist} />

    </Layer>
  )
}

export async function getServerSideProps({ params }) {

  const page = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/4`)
  const datalist = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/nosotros/autoridades/`)

  return { props: { page, datalist } }

}
