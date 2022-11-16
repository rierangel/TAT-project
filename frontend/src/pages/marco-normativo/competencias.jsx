import React, { useEffect, useState } from 'react'
import Layer from 'src/components/Layer'
import TextBack from 'src/components/Layer/TextBack'
import Title from 'src/components/Layer/Title'
import { fetcher } from 'src/lib/Fetcher'


export default function Competencias() {

  const [page, setPage] = useState()
  const [data, setData] = useState()

  useEffect(() => {
    // page
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/17`)
      .then(res => setPage(res))
      .catch(error => console.log(error))

    // data
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/marco-normativo/competencias/`)
      .then(res => setData(res))
      .catch(error => console.log(error))

  }, [])


  return (
    <Layer>

      <section>

        {page && <>
        
        <Title data={page[0]} />

        <TextBack text={page[0].text} />
        </>}


        <div className='space-y-9 mt-6'>

          {data && data.map((e, i) => (

            <div key={i} className="p-9 border2 rounded-xl bg-white">
              <h2 className='mb-4 text-[#0054A4]'>{e.titulo}</h2>
              <div className={"custom_list list_primary"}>
                <TextBack text={e.text} />
              </div>
            </div>
          ))}

        </div>
      </section>

    </Layer>
  )
}

