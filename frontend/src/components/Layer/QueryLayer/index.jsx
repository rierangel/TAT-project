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
 * @param {Boolean} buscador 
 * @returns 
 */
export default function QueryLayer(Component, data, buscador, url, name) {

  return function () {

    const [urlQuery, setUrlQuery] = useState(url)

    const { data: newData, isLoading, refetch, isRefetching } = useQuery(["noticias"], async () => fetcher(urlQuery), {
      refetchOnWindowFocus: false,
      enabled: false,
      placeholderData: data
    })

    //parametro de busqueda: http://127.0.0.1:8000/noticias/?search=hola&year=2005&page=2
    const [query, setQuery] = useState({
      search: "",
      year: "",
    })

    const [searchUrl, setSearchUrl] = useState()
    const handleChange = () => {
      const newUrl = `${process.env.NEXT_PUBLIC_URL_BACKEND}/${name}/?${query.search && `&search=${query.search}`}${query.year && `&year=${query.year}`}`
      setSearchUrl(newUrl)
    }

    // si el object query cambia, cambia la url
    useEffect(() => {
      handleChange()
    }, [query])

    useEffect(() => {
      refetch()
    }, [urlQuery])



    const handleSubmit = (e) => {
      e.preventDefault()
      setUrlQuery(searchUrl)
      refetch()
    }

    // paginacion
    // const [pages, setPages] = useState([...Array(newData.count / newData.page_size).keys()])
    // const handlePage = (link)=>{
    //   setUrlQuery(link)
    //   refetch()
    // }


    return <div>

      {buscador &&
        <form onSubmit={handleSubmit} action="" className='flex gap-[24px] mt-2 pb-9 border-b'>
          <input className='w-full'
            type="text"
            placeholder='Escriba su búsqueda'
            value={query.search}
            onChange={(e) => { setQuery({ ...query, ["search"]: e.target.value }) }}
          />

          <div className="relative">
            <select onChange={(e) => console.log(e.target.value)} name="" id="" className='inset-0 h-full'>
              <option className='hidden' >Seleccione año</option>
              {/* {dates && dates.map((e, i) => (
                  <option key={i} className='bg-[#F7F8FB]' value={e}>{e}</option>
              ))} */}
            </select>
            <label htmlFor="seccion" className='absolute left-0 -top-8 '>Sección</label>
          </div>

          <button className='primary gap-2'> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.1641 15.8359L13.9844 12.6563C15.0113 11.3456 15.5672 9.72752 15.5625 8.0625C15.5625 6.57914 15.1226 5.1291 14.2985 3.89573C13.4744 2.66236 12.3031 1.70106 10.9326 1.13341C9.56218 0.56575 8.05418 0.417225 6.59933 0.706614C5.14447 0.996003 3.8081 1.71031 2.7592 2.7592C1.71031 3.8081 0.996003 5.14447 0.706614 6.59933C0.417225 8.05418 0.56575 9.56218 1.13341 10.9326C1.70106 12.3031 2.66236 13.4744 3.89573 14.2985C5.1291 15.1226 6.57914 15.5625 8.0625 15.5625C9.72752 15.5672 11.3456 15.0113 12.6563 13.9844L15.8359 17.1641C16.0129 17.3387 16.2514 17.4366 16.5 17.4366C16.7486 17.4366 16.9872 17.3387 17.1641 17.1641C17.2515 17.077 17.3208 16.9735 17.3681 16.8595C17.4154 16.7456 17.4398 16.6234 17.4398 16.5C17.4398 16.3766 17.4154 16.2544 17.3681 16.1405C17.3208 16.0265 17.2515 15.923 17.1641 15.8359ZM2.4375 8.0625C2.4375 6.94998 2.7674 5.86245 3.38549 4.93742C4.00357 4.01239 4.88207 3.29142 5.90991 2.86568C6.93774 2.43994 8.06874 2.32854 9.15989 2.54559C10.251 2.76263 11.2533 3.29836 12.04 4.08503C12.8266 4.8717 13.3624 5.87398 13.5794 6.96512C13.7965 8.05626 13.6851 9.18726 13.2593 10.2151C12.8336 11.2429 12.1126 12.1214 11.1876 12.7395C10.2626 13.3576 9.17502 13.6875 8.0625 13.6875C6.5713 13.6854 5.14175 13.0921 4.08731 12.0377C3.03287 10.9833 2.43957 9.55371 2.4375 8.0625Z" fill="white" />
          </svg>
            Buscar
          </button>
        </form>

      }



      {!isRefetching &&
        <Component data={newData.results} />
      }

      {newData.links &&
        <ul className="pagination rounded-lg flex justify-center text my-9">

          {newData.links.previous &&
            <li onClick={() => setUrlQuery(newData.links.previous)} className="border1 rounded-l-lg">
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0311 10.4687C12.1011 10.5384 12.1565 10.6212 12.1944 10.7123C12.2322 10.8035 12.2517 10.9012 12.2517 11C12.2517 11.0987 12.2322 11.1964 12.1944 11.2876C12.1565 11.3787 12.1011 11.4615 12.0311 11.5312C11.8896 11.6709 11.6988 11.7492 11.4999 11.7492C11.301 11.7492 11.1102 11.6709 10.9686 11.5312L5.96864 6.53121C5.89872 6.46153 5.84324 6.37873 5.80539 6.28757C5.76753 6.19641 5.74805 6.09867 5.74805 5.99996C5.74805 5.90125 5.76753 5.80351 5.80539 5.71234C5.84324 5.62118 5.89872 5.53838 5.96864 5.46871L10.9686 0.468708C11.1095 0.327812 11.3006 0.248657 11.4999 0.248657C11.6991 0.248657 11.8902 0.327812 12.0311 0.468708C12.172 0.609604 12.2512 0.800701 12.2512 0.999958C12.2512 1.19922 12.172 1.39031 12.0311 1.53121L7.56239 5.99996L12.0311 10.4687ZM2.56239 5.99996L7.03114 1.53121C7.1009 1.46144 7.15624 1.37862 7.194 1.28747C7.23176 1.19632 7.25119 1.09862 7.25119 0.999958C7.25119 0.901296 7.23176 0.8036 7.194 0.712448C7.15624 0.621296 7.1009 0.538473 7.03114 0.468708C6.96137 0.398944 6.87855 0.343603 6.7874 0.305847C6.69625 0.26809 6.59855 0.248657 6.49989 0.248657C6.30063 0.248657 6.10954 0.327812 5.96864 0.468708L0.968638 5.46871C0.898718 5.53838 0.843241 5.62118 0.805387 5.71234C0.767533 5.80351 0.748047 5.90125 0.748047 5.99996C0.748047 6.09867 0.767533 6.19641 0.805387 6.28757C0.843241 6.37873 0.898718 6.46153 0.968638 6.53121L5.96864 11.5312C6.11017 11.6709 6.30103 11.7492 6.49989 11.7492C6.69875 11.7492 6.88961 11.6709 7.03114 11.5312C7.10106 11.4615 7.15654 11.3787 7.19439 11.2876C7.23224 11.1964 7.25173 11.0987 7.25173 11C7.25173 10.9012 7.23224 10.8035 7.19439 10.7123C7.15654 10.6212 7.10106 10.5384 7.03114 10.4687L2.56239 5.99996Z" fill="#CAD0D9" />
              </svg>
            </li>
          }

          {/* {pages.map((e, i) => (
            <li
              onClick={(target) => { setQuery({ ...query, ["page"]: e + 1 }), console.log(query) }}
              className="border1">{e + 1}</li>
          ))} */}
          {newData.links.next &&
            <li onClick={() => setUrlQuery(newData.links.next)} className="border1 rounded-r-lg">
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.03114 6.53121L2.03114 11.5312C1.88961 11.6709 1.69875 11.7492 1.49989 11.7492C1.30103 11.7492 1.11017 11.6709 0.968638 11.5312C0.898718 11.4615 0.843241 11.3787 0.805387 11.2876C0.767533 11.1964 0.748047 11.0987 0.748047 11C0.748047 10.9012 0.767533 10.8035 0.805387 10.7123C0.843241 10.6212 0.898718 10.5384 0.968638 10.4687L5.43739 5.99996L0.968638 1.53121C0.827742 1.39031 0.748587 1.19922 0.748587 0.999958C0.748587 0.901296 0.76802 0.8036 0.805777 0.712448C0.843533 0.621296 0.898874 0.538473 0.968638 0.468708C1.0384 0.398944 1.12123 0.343603 1.21238 0.305847C1.30353 0.26809 1.40123 0.248657 1.49989 0.248657C1.69915 0.248657 1.89024 0.327812 2.03114 0.468708L7.03114 5.46871C7.10106 5.53838 7.15654 5.62118 7.19439 5.71234C7.23224 5.80351 7.25173 5.90125 7.25173 5.99996C7.25173 6.09867 7.23224 6.19641 7.19439 6.28757C7.15654 6.37873 7.10106 6.46153 7.03114 6.53121ZM12.0311 5.46871L7.03114 0.468708C6.96137 0.398944 6.87855 0.343603 6.7874 0.305847C6.69625 0.26809 6.59855 0.248657 6.49989 0.248657C6.40123 0.248657 6.30353 0.26809 6.21238 0.305847C6.12123 0.343603 6.0384 0.398944 5.96864 0.468708C5.82774 0.609604 5.74859 0.800701 5.74859 0.999958C5.74859 1.19922 5.82774 1.39031 5.96864 1.53121L10.4374 5.99996L5.96864 10.4687C5.89872 10.5384 5.84324 10.6212 5.80539 10.7123C5.76753 10.8035 5.74805 10.9012 5.74805 11C5.74805 11.0987 5.76753 11.1964 5.80539 11.2876C5.84324 11.3787 5.89872 11.4615 5.96864 11.5312C6.11017 11.6709 6.30103 11.7492 6.49989 11.7492C6.69875 11.7492 6.88961 11.6709 7.03114 11.5312L12.0311 6.53121C12.1011 6.46153 12.1565 6.37873 12.1944 6.28757C12.2322 6.19641 12.2517 6.09867 12.2517 5.99996C12.2517 5.90125 12.2322 5.80351 12.1944 5.71234C12.1565 5.62118 12.1011 5.53838 12.0311 5.46871Z" fill="#0054A4" />
              </svg>
            </li>
          }
        </ul>
      }
    </div>

  }
}

