import React, { useEffect, useState } from 'react'
import Layer from 'src/components/Layer'
import FileList from 'src/components/Layer/data_display/FileList'
import QueryLayer from 'src/components/Layer/QueryLayer/QueryLayer'

import Title from 'src/components/Layer/Title'
import { fetcher } from 'src/lib/Fetcher'

export default function Component() {

  const [page, setPage] = useState()
  const [data, setData] = useState()

  useEffect(() => {
    // page
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/22`)
      .then(res => setPage(res))
      .catch(error => console.log(error))

    // data
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/marco-normativo/flujograma/`)
      .then(res => setData(res))
      .catch(error => console.log(error))

  }, [])

  const ComponentOption = {ver:true, descargar:true}
  const path = `marco-normativo/flujograma`
  const query = `${process.env.NEXT_PUBLIC_URL_BACKEND}/${path}/`
  const ListQuery = QueryLayer(FileList, data, false, query, path, ComponentOption)

  return (
    <Layer>
      {page && <Title data={page[0]} />}

      <ListQuery />
    </Layer>
  )
}
