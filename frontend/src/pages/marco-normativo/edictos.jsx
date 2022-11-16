import React, { useEffect, useState } from 'react'
import Layer from 'src/components/Layer'
import FileList from 'src/components/Layer/data_display/FileList'
import QueryLayer from 'src/components/Layer/QueryLayer/QueryLayer'
import DataGrid from 'src/components/Layer/data_display/DataGrid'

import Title from 'src/components/Layer/Title'
import { fetcher } from 'src/lib/Fetcher'
import numberRange from 'src/lib/numberRange'

export default function Component() {

  const [page, setPage] = useState()
  const [data, setData] = useState()

  useEffect(() => {
    // page
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/10`)
      .then(res => setPage(res))
      .catch(error => console.log(error))

    // data
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/marco-normativo/edictos/`)
      .then(res => setData(res))
      .catch(error => console.log(error))

  }, [])


  
  const tag_year = numberRange(2011, new Date().getFullYear() + 1)

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

  const path = `marco-normativo/edictos`
  const query = `${process.env.NEXT_PUBLIC_URL_BACKEND}/${path}/`
  const ListQuery = QueryLayer(DataGrid, data, buscador, query, path)

  return (
    <Layer>
      {page && <Title data={page[0]} />}
      <ListQuery />
    </Layer>
  )
}
