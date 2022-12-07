import Layer from "src/components/Layer";
import Link from "next/link";

import Carrusel from 'src/lib/imgCarrusel'
import { useEffect, useState } from "react";
import { fetcher } from "src/lib/Fetcher";
import TextBack from "src/components/Layer/TextBack";
import ImgBack from "src/components/Layer/ImgBack";

export default function Page({ slug }) {


  const [data, setData] = useState()
  const [imgData, setimgData] = useState()
  const [mas, setMas] = useState()

  useEffect(() => {
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/entradas/congreso/${slug}/`)
      .then(res => {
        setData(res[0]);
      }
      )
      .catch(error => console.log(error))

    // mas congreso
    //data
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/entradas/congreso/?limit=5`)
      .then(res => {
        let masnoticias = res.results.filter((e,i)=> e.slug !== slug)
        if(masnoticias.lenght > 3){
          masnoticias = masnoticias.filter((e,i)=> i < 4)
        }

        setMas(masnoticias)
      })
      .catch(error => console.log(error))


      setimgData(null)
  }, [slug])

  useEffect(() => {
    if (data) {
      setimgData(data.galeria.map((v, i) => v.imagen))
    }
  }, [data, slug])


  return (data &&
    <Layer>
      {/* {post && <NoticiaView data={post} more={posts && posts.posts.nodes.filter((e) => path !== e.slug)}/>} */}

      <div className="subtitle">
        <i><svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 1.5625C0.5 1.26413 0.618527 0.977984 0.829505 0.767005C1.04048 0.556027 1.32663 0.4375 1.625 0.4375H26.375C26.6734 0.4375 26.9595 0.556027 27.1705 0.767005C27.3815 0.977984 27.5 1.26413 27.5 1.5625C27.5 1.86087 27.3815 2.14702 27.1705 2.35799C26.9595 2.56897 26.6734 2.6875 26.375 2.6875H1.625C1.32663 2.6875 1.04048 2.56897 0.829505 2.35799C0.618527 2.14702 0.5 1.86087 0.5 1.5625ZM1.625 8.3125H19.625C19.9234 8.3125 20.2095 8.19397 20.4205 7.983C20.6315 7.77202 20.75 7.48587 20.75 7.1875C20.75 6.88913 20.6315 6.60298 20.4205 6.392C20.2095 6.18103 19.9234 6.0625 19.625 6.0625H1.625C1.32663 6.0625 1.04048 6.18103 0.829505 6.392C0.618527 6.60298 0.5 6.88913 0.5 7.1875C0.5 7.48587 0.618527 7.77202 0.829505 7.983C1.04048 8.19397 1.32663 8.3125 1.625 8.3125ZM26.375 11.6875H1.625C1.32663 11.6875 1.04048 11.806 0.829505 12.017C0.618527 12.228 0.5 12.5141 0.5 12.8125C0.5 13.1109 0.618527 13.397 0.829505 13.608C1.04048 13.819 1.32663 13.9375 1.625 13.9375H26.375C26.6734 13.9375 26.9595 13.819 27.1705 13.608C27.3815 13.397 27.5 13.1109 27.5 12.8125C27.5 12.5141 27.3815 12.228 27.1705 12.017C26.9595 11.806 26.6734 11.6875 26.375 11.6875ZM19.625 17.3125H1.625C1.32663 17.3125 1.04048 17.431 0.829505 17.642C0.618527 17.853 0.5 18.1391 0.5 18.4375C0.5 18.7359 0.618527 19.022 0.829505 19.233C1.04048 19.444 1.32663 19.5625 1.625 19.5625H19.625C19.9234 19.5625 20.2095 19.444 20.4205 19.233C20.6315 19.022 20.75 18.7359 20.75 18.4375C20.75 18.1391 20.6315 17.853 20.4205 17.642C20.2095 17.431 19.9234 17.3125 19.625 17.3125Z" fill="#0054A4" />
        </svg>
        </i>
        <h1 className='mb-9'>{data.titulo}</h1>
      </div>

      {imgData &&
        imgData[0]
        ?

        <Carrusel data={imgData} />
        :
        <ImgBack src={data.imagen_principal} />

      }

      <TextBack text={data.contenido} className={"my-16"} />




      <hr className='my-16' />

      <div className="mb-40">

        <div className="subtitle">
          <i><svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.125 24H4.875C3.62979 24.0001 2.43176 23.5237 1.52665 22.6685C0.62155 21.8133 0.077998 20.6442 0.0075002 19.401L2.5498e-08 19.125V3.375C-0.000105033 2.51981 0.324443 1.69647 0.908054 1.07137C1.49166 0.446272 2.29082 0.0660332 3.144 0.0075002L3.375 2.54981e-08H22.125C22.9802 -0.000105033 23.8035 0.324443 24.4286 0.908054C25.0537 1.49166 25.434 2.29082 25.4925 3.144L25.5 3.375V4.5H26.625C27.4802 4.4999 28.3035 4.82444 28.9286 5.40805C29.5537 5.99166 29.934 6.79082 29.9925 7.644L30 7.875V19.125C30.0001 20.3702 29.5237 21.5682 28.6685 22.4733C27.8133 23.3785 26.6442 23.922 25.401 23.9925L25.125 24H4.875H25.125ZM4.875 21.75H25.125C25.784 21.7499 26.4189 21.502 26.9036 21.0554C27.3882 20.6089 27.6871 19.9963 27.741 19.3395L27.75 19.125V7.875C27.75 7.60314 27.6515 7.34049 27.4729 7.1356C27.2942 6.93072 27.0473 6.79747 26.778 6.7605L26.625 6.75H25.5V18.375C25.5 18.6469 25.4015 18.9095 25.2229 19.1144C25.0442 19.3193 24.7973 19.4525 24.528 19.4895L24.375 19.5C24.1031 19.5 23.8405 19.4015 23.6356 19.2229C23.4307 19.0442 23.2975 18.7973 23.2605 18.528L23.25 18.375V3.375C23.25 3.10314 23.1515 2.84049 22.9729 2.6356C22.7942 2.43072 22.5473 2.29747 22.278 2.2605L22.125 2.25H3.375C3.10314 2.25001 2.84049 2.34846 2.6356 2.52715C2.43072 2.70584 2.29747 2.95267 2.2605 3.222L2.25 3.375V19.125C2.25002 19.7838 2.49776 20.4185 2.94402 20.9031C3.39028 21.3877 4.00245 21.6868 4.659 21.741L4.875 21.75H25.125H4.875ZM15.369 15.75H19.878C20.163 15.7501 20.4374 15.8584 20.6457 16.053C20.854 16.2476 20.9806 16.5139 21 16.7983C21.0195 17.0827 20.9302 17.3638 20.7504 17.5849C20.5705 17.8061 20.3134 17.9506 20.031 17.9895L19.878 18H15.369C15.084 17.9999 14.8096 17.8916 14.6013 17.697C14.393 17.5024 14.2664 17.2361 14.247 16.9517C14.2275 16.6673 14.3168 16.3862 14.4966 16.1651C14.6765 15.9439 14.9336 15.7994 15.216 15.7605L15.369 15.75H19.878H15.369ZM10.8645 10.5075C11.1629 10.5075 11.449 10.626 11.66 10.837C11.871 11.048 11.9895 11.3341 11.9895 11.6325V16.875C11.9895 17.1734 11.871 17.4595 11.66 17.6705C11.449 17.8815 11.1629 18 10.8645 18H5.622C5.32363 18 5.03748 17.8815 4.8265 17.6705C4.61553 17.4595 4.497 17.1734 4.497 16.875V11.6325C4.497 11.3341 4.61553 11.048 4.8265 10.837C5.03748 10.626 5.32363 10.5075 5.622 10.5075H10.8645ZM9.7395 12.7575H6.747V15.75H9.7395V12.7575ZM15.369 10.5075H19.878C20.163 10.5076 20.4374 10.6159 20.6457 10.8105C20.854 11.0051 20.9806 11.2714 21 11.5558C21.0195 11.8402 20.9302 12.1213 20.7504 12.3424C20.5705 12.5636 20.3134 12.7081 20.031 12.747L19.878 12.7575H15.369C15.0819 12.7604 14.8046 12.6535 14.5938 12.4586C14.383 12.2637 14.2547 11.9956 14.2352 11.7092C14.2156 11.4228 14.3063 11.1397 14.4886 10.918C14.671 10.6963 14.9312 10.5526 15.216 10.5165L15.369 10.5075H19.878H15.369ZM5.622 5.253H19.878C20.1651 5.25008 20.4424 5.35702 20.6532 5.55191C20.864 5.7468 20.9923 6.0149 21.0118 6.30131C21.0314 6.58773 20.9407 6.87078 20.7584 7.09251C20.576 7.31424 20.3158 7.45788 20.031 7.494L19.878 7.503H5.622C5.33697 7.50291 5.06259 7.39463 4.85431 7.20004C4.64604 7.00545 4.51939 6.73905 4.49996 6.45468C4.48053 6.17031 4.56977 5.88916 4.74965 5.66805C4.92952 5.44694 5.18663 5.30235 5.469 5.2635L5.622 5.253H19.878H5.622Z" fill="#0054A4" />
          </svg>

          </i>
          <h1 className='mb-9'>Más de Congreso</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4  gap-6 my-6">

          {mas && mas.map((v, i) => (
             <Link key={i} href={`/entradas/congreso-internacional-de-derecho-tributario/${v.slug}`} >
              <a className='hover1' >
                <div className="w-[302px]  mb-4 ">
                  <ImgBack className='h-[190px]  w-auto object-cover rounded-lg' src={v.imagen_principal} />
                </div>
                <h3 className='w-[90%] '>{v.titulo}</h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layer>
  )
}


export async function getServerSideProps({ params }) {
  return { props: { slug: params.slug } }
}