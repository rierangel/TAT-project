import Link from 'next/link'
import React, { useEffect } from 'react'
import { useGql } from 'src/lib/Fetcher'
import Pagination from '../Pagination'
import Buscador from './Buscador'

export default function index() {
  const query = ` query{
    posts(
      where:{
        categoryName: "noticia", 
        orderby:{field:DATE order:DESC}
        }
      first:10
    ){
      nodes {
        title
        slug
        date
        excerpt
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }`

  const [noticias, isLoading, isfeching, refetch] = useGql(query)
  useEffect(() => {
  }, [noticias])



  return (
    <>
      <h1 className="mb-5">Noticias</h1>

      <Buscador data={noticias}/>

      {noticias && noticias.posts.nodes.map((e, i) => (
        <Link key={i} href={`/noticias/${e.date.split("-")[0]}/${e.slug}`}>
          <div className="py-6 border-b px-3 flex space-x-[24px] hover1">
            <div className="w-[193px] h-[142px]  ">
              <img className='cover rounded-lg' src="/img/tat.png" alt="" />
            </div>
            <div className="w-full flex flex-col justify-between items-start h-[142px] ">
              <h2>{e.title}</h2>
              <p className='text-clip overflow-hidden h-[45px]' dangerouslySetInnerHTML={{ __html: e.excerpt }}></p>
              <button className='border1 py-3'>Leer más</button>
            </div>
          </div>
        </Link>
      ))}

      <Pagination />
    </>
  )
}
