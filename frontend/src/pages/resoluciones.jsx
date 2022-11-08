import React from 'react'
import Layer from 'src/components/Layer'
import Title from 'src/components/Layer/Title'
import { fetcher } from 'src/lib/Fetcher'


import QueryLayer from 'src/components/Layer/QueryLayer/QueryLayer';
import DataGrid from 'src/components/data_display/DataGrid'


export default function resoluciones({ page, datalist, tag_categoria }) {
  const currentYear = new Date().getFullYear()
  function numberRange(start, end) {
    return new Array(end - start).fill().map((d, i) => i + start);
  }

  const tag_year = numberRange(2011, currentYear + 1)

  const newTagCategoria = tag_categoria.map((e)=>{
    return e.titulo
  })

  const buscador = [
    {
      titulo : "Palabra o Frase Clave" ,
      path : "search",
    },
    {
      titulo : "año" ,
      path : "year",
      fields: tag_year
    },
    {
      titulo : "categoria" ,
      path : "tag",
      fields: newTagCategoria
    }
  ]



  const path = `publicaciones/resoluciones`
  const query = `${process.env.NEXT_PUBLIC_URL_BACKEND}/${path}/`
  const NoticiasListQuery = QueryLayer(DataGrid, datalist, buscador, query, path)

  return (
    <Layer>
      <Title data={page[0]} />
      <NoticiasListQuery />
    </Layer>
  )
}

export async function getServerSideProps({ params }) {

  const page = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/13`)
  const datalist = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/publicaciones/resoluciones/`)
  const tag_categoria = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/publicaciones/resoluciones-categorias/`)

  return { props: { page, datalist, tag_categoria } }

}
