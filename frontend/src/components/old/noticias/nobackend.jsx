import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useGql } from 'src/lib/Fetcher'
import Pagination from 'src/components/Layer/QueryLayer/Pagination'
import SliderCarrusel from 'src/lib/carrusel/SliderCarrusel'

export default function Index({ slug }) {
  const rute = useRouter()

  const [search, setSearch] = useState()

  const query = ` query{
    posts(
      where:{
        ${search ? `search:"${search}"` : ""}
        ${slug ? `dateQuery:{year:${slug}}` : ""}
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
    dates:posts{
      nodes{
       
          date
        
      }
    }
  }`

  const [noticias, isLoading, isfeching, refetch] = useGql(query)

  const [dates, setDates] = useState()

  useEffect(() => {
    refetch()
    if (noticias) {
      if (noticias.dates) {
        const d = noticias.dates.nodes.map((e) => e.date.split("-")[0])
        const result = d.filter((item, index) => {
          return d.indexOf(item) === index;
        })
        setDates(result)
      }
    }
  }, [noticias, search, query])


  const handlerYear = (e) => {
    rute.push(`/noticias/${e}`)
  }

  const cont = [
    {
      img:"https://clippingrrpp.com/wp-content/uploads/2015/02/abogados-marketing-legal1.jpg",
      title:"Comunicado cierre Sede Central del TAT en Agosto de 2022"
    },
    {
      img:"https://www.bufetesemperejaen.com/wp-content/uploads/2019/02/Abogados-Elche-reunidos-despacho-sempere.jpg",
      title:"Barrido de Pruebas voluntarias Covid-19"
    },
    {
      img:"https://d500.epimg.net/cincodias/imagenes/2018/10/15/legal/1539584672_711277_1539585056_noticia_normal.jpg",
      title:"El TAT Recibe Importante Visita Oficial"
    },
    {
      img:"https://d500.epimg.net/cincodias/imagenes/2017/11/27/legal/1511775346_282834_1511863279_rrss_normal.jpg",
      title:"7° Congreso Internacional de Derecho Tributario"
    },
    {
      img:"https://www.armentalrialabogados.es/images/cuadro-despacho.jpg",
      title:"Jornada Académica (Día del Contador 2022)"
    },
    {
      img:"https://d500.epimg.net/cincodias/imagenes/2017/11/27/legal/1511775346_282834_1511863279_rrss_normal.jpg",
      title:"Gira Académica (Los Santos 2022)"
    }


  ];

  return (
    <>


      <hr className='my-12 invisible' />
      {/* searsh form */}
      <form action="" className='flex gap-[24px] mt-2 pb-9 border-b'>
          <input className='w-full'
            type="text"
            placeholder='Escriba su búsqueda'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="relative">

            <select onChange={(e) => handlerYear(e.target.value)} name="" id="" className='inset-0 h-full'>
              <option className='hidden' >Seleccione año</option>
              {dates && dates.map((e, i) => (
                <option key={i} className='bg-[#F7F8FB]' value={e}>{e}</option>
              ))}
            </select>
            <label htmlFor="seccion" className='absolute left-0 -top-8 '>Sección</label>

          </div>

          <button className='primary gap-2'> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.1641 15.8359L13.9844 12.6563C15.0113 11.3456 15.5672 9.72752 15.5625 8.0625C15.5625 6.57914 15.1226 5.1291 14.2985 3.89573C13.4744 2.66236 12.3031 1.70106 10.9326 1.13341C9.56218 0.56575 8.05418 0.417225 6.59933 0.706614C5.14447 0.996003 3.8081 1.71031 2.7592 2.7592C1.71031 3.8081 0.996003 5.14447 0.706614 6.59933C0.417225 8.05418 0.56575 9.56218 1.13341 10.9326C1.70106 12.3031 2.66236 13.4744 3.89573 14.2985C5.1291 15.1226 6.57914 15.5625 8.0625 15.5625C9.72752 15.5672 11.3456 15.0113 12.6563 13.9844L15.8359 17.1641C16.0129 17.3387 16.2514 17.4366 16.5 17.4366C16.7486 17.4366 16.9872 17.3387 17.1641 17.1641C17.2515 17.077 17.3208 16.9735 17.3681 16.8595C17.4154 16.7456 17.4398 16.6234 17.4398 16.5C17.4398 16.3766 17.4154 16.2544 17.3681 16.1405C17.3208 16.0265 17.2515 15.923 17.1641 15.8359ZM2.4375 8.0625C2.4375 6.94998 2.7674 5.86245 3.38549 4.93742C4.00357 4.01239 4.88207 3.29142 5.90991 2.86568C6.93774 2.43994 8.06874 2.32854 9.15989 2.54559C10.251 2.76263 11.2533 3.29836 12.04 4.08503C12.8266 4.8717 13.3624 5.87398 13.5794 6.96512C13.7965 8.05626 13.6851 9.18726 13.2593 10.2151C12.8336 11.2429 12.1126 12.1214 11.1876 12.7395C10.2626 13.3576 9.17502 13.6875 8.0625 13.6875C6.5713 13.6854 5.14175 13.0921 4.08731 12.0377C3.03287 10.9833 2.43957 9.55371 2.4375 8.0625Z" fill="white" />
          </svg>
            Buscar
          </button>
        </form>
  

      <section>
        {/* noticias */}
        {cont.map((e, i) => (
          <div key={i} className="py-6 border-b px-3 flex space-x-[24px] hover1 no-pointer">
            <div className="w-[193px] h-[142px]  ">
              <img className='object-cover h-full w-full rounded-lg' src={e.img} alt="" />
            </div>

            <div className="w-full flex flex-col justify-between items-start h-[142px] ">
              <h2>{e.title}</h2>
              <p className='text-clip overflow-hidden h-[45px]'>
                {/* dangerouslySetInnerHTML={{ __html: excerpt }}> */}
                Mediante acuerdo N° 19-2022, con fecha 12 de agosto de 2022, el Pleno de Magistrados dispuso el cierre de la Sede Central del Tribunal Administrativo Tributario, ubicada en la ciudad de Panamá y la suspensión de los términos jurisdiccionales el día 15 de agosto de 2022.
              </p>

              <Link key={i} href={`/noticias/2020/sasdsa`}>
                <a className='btn btn-xs border1 py-3'>Leer más</a>
              </Link>
            </div>
          </div>
        ))}
        <Pagination />
      </section>
    </>

  )
}