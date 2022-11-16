import React, { useEffect, useState } from 'react'
import Layer from 'src/components/Layer'
import FileList from 'src/components/Layer/data_display/FileList'
import ToggleList from 'src/lib/ToggleList'
import { fetcher } from 'src/lib/Fetcher'
import Title from 'src/components/Layer/Title'

export default function Page() {

  const [data, setData] = useState()
  const [page, setPage] = useState()

  useEffect(() => {
    // page
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/15`)
      .then(res => setPage(res))
      .catch(error => console.log(error))

    // data
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/publicaciones/ponencias/`)
      .then(res => setData(res))
      .catch(error => console.log(error))

  }, [])


  return ( page && 
    <Layer> 

      <Title data={page[0]} />
     

      <section className='space-y-6'>


        {data && data.map((v,i)=>(

        <div key={i} className="border1 p-9 rounded-3xl">
          <ToggleList title={v.titulo}>
            <FileList data={v.archivos} path={"publicaciones/ponencias"} ver={true} descargar={true} />
          </ToggleList>
        </div>
        ))}

   

      </section>
    </Layer>
  )
}
