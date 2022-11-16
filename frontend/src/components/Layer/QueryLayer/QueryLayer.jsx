import React, { useEffect, useState } from 'react'
import { content } from 'tailwind.config';
import Buscador from './Buscador'
import Pagination from './Pagination';

import { useQuery } from '@tanstack/react-query'
import { fetcher } from 'src/lib/Fetcher';

/**
 * 
 * @param {ReactComponentElement} Component 
 * @param {Array} data 
 * @param {Array:objects} buscador : array subfields   {
      titulo : "titulo del campo" ,
      path : "path_de_la_query",
      fields: arry
    }
 * @param {Array} data 
 *
 * @returns 
 */
export default function QueryLayer(Component, data, buscador, url, path, ComponentOption) {

  const [urlQuery, setUrlQuery] = useState(url)

  const { data: newData, isLoading, refetch, isRefetching } = useQuery(["path"], async () => fetcher(urlQuery), {
    refetchOnWindowFocus: false,
    enabled: false,
    placeholderData: data
  })
  useEffect(() => {
    refetch()
  }, [urlQuery])
  return function component() {



    return newData && <div>
      {/* hnadlesubmit setquery query */}
      {buscador && <Buscador seturl={setUrlQuery} path={path} refetch={refetch} buscador={buscador} />}

      {newData && newData.results
        ?
        newData.results[0] && ComponentOption ? 
        <Component data={newData.results} path={path} ver={ComponentOption.ver} descargar={ComponentOption.descargar}  />
        :
        newData.results[0]  && <Component data={newData.results} path={path} />
        :
        <h1>Resultados no encontrados</h1>
      }

      {newData.links &&
        <Pagination data={newData} setState={setUrlQuery} />
      }
    </div>

  }
}

