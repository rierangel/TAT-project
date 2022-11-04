import React, { useState } from 'react'
import Buscador from './Buscador'
import Pagination from './Pagination';


/**
 * 
 * @param {ReactComponentElement} Component 
 * @param {Array} data 
 * @param {Boolean} buscador 
 * @returns 
 */


export default function QueryLayer(Component, data, buscador, url) {
  return function () {

    const [urlQuery, setUrlQuery] = useState(url)

    return <div>
      {buscador && <Buscador state={urlQuery} set={setUrlQuery}/>}


      <Component data={data.results}/>

      {data.links && <Pagination/>}
    </div>
  
}
}

