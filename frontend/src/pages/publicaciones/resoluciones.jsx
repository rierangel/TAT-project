import React from 'react'
import Layer from 'src/components/Layer'
import Title from 'src/components/Layer/Title'
import { fetcher } from 'src/lib/Fetcher'


import QueryLayer from 'src/components/Layer/QueryLayer';
import DataGrid from 'src/components/data_display/DataGrid'


export default function resoluciones({page, datalist }) {
  const path = `publicaciones/resoluciones`
  const query = `${process.env.NEXT_PUBLIC_URL_BACKEND}/${path}/`
  const NoticiasListQuery = QueryLayer(DataGrid, datalist, true, query, path)


  return (
    <Layer>
      <Title data={page[0]} />
      <DataGrid data={datalist} path={path}/>
    </Layer>
  )
}

export async function getServerSideProps({ params }) {

  const page = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/13`)
  const datalist = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/publicaciones/resoluciones/`) 

  return { props: { page, datalist } }

}
