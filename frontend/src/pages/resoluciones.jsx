import React, { useEffect, useState } from 'react'
import Layer from 'src/components/Layer'
import Title from 'src/components/Layer/Title'
import { fetcher } from 'src/lib/Fetcher'


import QueryLayer from 'src/components/Layer/QueryLayer/QueryLayer';
import DataGrid from 'src/components/Layer/data_display/DataGrid'

import numberRange from 'src/lib/numberRange'

export default function Page() {

  const [datalist, setData] = useState()
  const [page, setPage] = useState()
  const [tag_categoria, setTag_categoria] = useState()

  useEffect(() => {
    // page
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/13`)
      .then(res => setPage(res))
      .catch(error => console.log(error))
    // datalist
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/publicaciones/resoluciones/`)
      .then(res => setData(res))
      .catch(error => console.log(error))
    // page
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/publicaciones/resoluciones-categorias/`)
      .then(res => setTag_categoria(res))
      .catch(error => console.log(error))

  }, [])





  const currentYear = new Date().getFullYear()
  const tag_year = numberRange(2011, currentYear + 1)
  const newTagCategoria = tag_categoria && tag_categoria.map((e) => {
    return e.titulo
  })

  const buscador = [
    {
      titulo: "Palabra o Frase Clave",
      path: "search",
    },
    {
      titulo: "año",
      path: "year",
      fields: tag_year
    },
    {
      titulo: "categoria",
      path: "tag",
      fields: newTagCategoria
    }
  ]



  const path = `publicaciones/resoluciones`
  const query = `${process.env.NEXT_PUBLIC_URL_BACKEND}/${path}/`
  const NoticiasListQuery = QueryLayer(DataGrid, datalist, buscador, query, path)

  return (page &&
    <Layer>
      <Title data={page[0]} />
      <NoticiasListQuery />
    </Layer>
  )
}

// export async function getServerSideProps({ params }) {

//   const page = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/13`)
//   const datalist = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/publicaciones/resoluciones/`)
//   const tag_categoria = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/publicaciones/resoluciones-categorias/`)

//   return { props: { page, datalist, tag_categoria } }

// }
