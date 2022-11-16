import { useEffect, useState } from "react";


import Layer from "src/components/Layer";
import SliderCarrusel from "src/components/entradas/CarruselNoticias";

import { fetcher } from "src/lib/Fetcher";

import Title from 'src/components/Layer/Title';
import QueryLayer from 'src/components/Layer/QueryLayer/QueryLayer';
import NoticiaList from "src/components/Layer/data_display/EntradasList";
import numberRange from "src/lib/numberRange";


export default function Page() {

  const [datalist, setData] = useState()
  const [page, setPage] = useState()

  useEffect(() => {
    // page
     fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/23`)
     .then(res=>setPage(res))
     .catch(error=>console.log(error))

     //data
     fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/congreso/`)
     .then(res=>setData(res))
     .catch(error=>console.log(error))
  }, [])
  
  const currentYear = new Date().getFullYear()
  const tag_year = numberRange(2011, currentYear + 1)

  const buscador = [
    {
      titulo: "Palabra o Frase Clave",
      path: "search",
    },
    {
      titulo: "año",
      path: "year",
      fields: tag_year
    }

  ]

  const path = "entradas/congreso"

  const query= `${process.env.NEXT_PUBLIC_URL_BACKEND}/entradas/congreso/`
  const NoticiasListQuery = QueryLayer(NoticiaList, datalist, buscador, query, path)



  return ( page &&
    <Layer> 
      {/* <SliderCarrusel /> */}
      <hr className='my-12 invisible' />
      <Title data={page[0]} />
      <NoticiasListQuery/>
    </Layer>
  )
}


// export async function getServerSideProps({ params }) {



//   return { props: params }

// }
