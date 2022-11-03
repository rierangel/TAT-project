import { useGql } from 'src/lib/Fetcher';
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function Posts() {



  const posts = {
    img: "img/oficinas.png",
    title: "Comunicado cierre Sede Central del TAT en Agosto de 2022",
    content: "Mediante acuerdo N° 19-2022, con fecha 12 de agosto de 2022, el Pleno de Magistrados dispuso el cierre de la Sede Central del Tribunal Administrativo Tributario, ubicada en la ciudad de Panamá y la suspensión de los términos jurisdiccionales el día 15 de agosto de 2022."

  }



  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* left */}
        <Link href={`/noticias/2021/asdas`}>
          <a className="h-auto flex flex-col space-y-[12px] hover1 ">
            <div className="box w-full h-full">
              <img className='post w-full h-full' src={posts.img} />
            </div>
            <div className='text-clip overflow-hidden h-[224px]'>
              <h1 className='post' >
                {posts.title}
              </h1>
              <p className=''>
                {/* dangerouslySetInnerHTML={{ __html: posts.posts.nodes[0].excerpt }}> */}
                {posts.content}

              </p>
            </div>
          </a>
        </Link>

        {/* right */}

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

            <Link href={`/noticias/2021/asdas`}>
              <a className="hover1 w-full">
                <div className="box w-full h-auto ">
                  <img className='post object-bottom w-full h-full' src={posts.img} />
                </div>
                <h3 className='mt-3'>{posts.title}</h3>
              </a>
            </Link>
            <Link href={`/noticias/2021/asdas`}>
              <a className="hover1 w-full">
                <div className="box w-full h-auto ">
                  <img className='post object-bottom w-full h-full' src={posts.img} />
                </div>
                <h3 className='mt-3'>{posts.title}</h3>
              </a>
            </Link>
            <Link href={`/noticias/2021/asdas`}>
              <a className="hover1 w-full">
                <div className="box w-full h-auto ">
                  <img className='post object-bottom w-full h-full' src={posts.img} />
                </div>
                <h3 className='mt-3'>{posts.title}</h3>
              </a>
            </Link>
            <Link href={`/noticias/2021/asdas`}>
              <a className="hover1 w-full">
                <div className="box w-full h-auto ">
                  <img className='post object-bottom w-full h-full' src={posts.img} />
                </div>
                <h3 className='mt-3'>{posts.title}</h3>
              </a>
            </Link>
          
          </div>

     

      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-16 mb-20">
        <Link href={`/noticias/2021/asdas`}>
          <a className='hover1 border2 p-9 rounded-xl w-full '>
            <h3>{posts.title}</h3>
          </a>
        </Link>

        <Link href={`/noticias/2021/asdas`}>
          <a className='hover1 border2 p-9 rounded-xl w-full '>
            <h3>{posts.title}</h3>
          </a>
        </Link>
        <Link href={`/noticias/2021/asdas`}>
          <a className='hover1 border2 p-9 rounded-xl w-full '>
            <h3>{posts.title}</h3>
          </a>
        </Link>
        <Link href={`/noticias/2021/asdas`}>
          <a className='hover1 border2 p-9 rounded-xl w-full '>
            <h3>{posts.title}</h3>
          </a>
        </Link>

      </div>
    </>

  )

}
