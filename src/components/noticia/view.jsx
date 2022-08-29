import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useFetcher from 'src/lib/useFetcher'
import Content from './Content'

export default function () {
  const rute = useRouter()

  const path = `${process.env.NEXT_PUBLIC_URL_BACKEND}/wp-json/wp/v2/posts?slug=${rute.query.view}`
  const [post, isLoading, refetch] = useFetcher(path)



  const cont = [...Array(4).keys()]
  return (
    <>

      {!isLoading && post && <>
        <h1 className='mb-9'>{post.title.rendered}</h1>

        <Content data={post.content.rendered} />
      </>
      }

      <div >
        <h1>Más Noticias</h1>
        <div className="flex gap-6 my-6">

          {cont.map((e, i) => (
            <div key={i}>
              <div className="w-[302px] h-[190px]  ">
                <img className='cover rounded-lg' src="/img/tat.png" alt="" />
              </div>

              <h3 className='w-[90%] '>Barrido de pruebas voluntarias COVID-19</h3>

            </div>
          ))}
        </div>
      </div>

    </>

  )
}
