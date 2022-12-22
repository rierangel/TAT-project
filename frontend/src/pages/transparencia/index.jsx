import React, { useEffect, useState } from 'react'
import Layer from 'src/components/Layer'
import Title from 'src/components/Layer/Title'
import { fetcher } from 'src/lib/Fetcher'

import Link from 'next/link'
import ToggleList from 'src/lib/ToggleList'
import style from './style.module.scss'


export default function Page() {




  const [page, setPage] = useState()
  const [estaticos, setEstaticos] = useState()

  useEffect(() => {
    // page
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/12`)
      .then(res => setPage(res))
      .catch(error => console.log(error))

    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/transparencia/A00StaticosViewSet/`)
      .then(res => setEstaticos(res))
      .catch(error => console.log(error))

  }, [])

  console.log(estaticos);

  return (

    <Layer>

      {page && page[0] &&
      <>
          <div className='flex justify-between flex-col md:flex-row'>
            <Title data={page[0]} />
            <div className='mb-6'>
              <div className='dot_gray'>
                <i dangerouslySetInnerHTML={{ __html: page[0].contenido[0].icono }}></i>
                <p>{page[0].contenido[0].titulo}</p>
              </div>
            </div>
          </div>
          <p dangerouslySetInnerHTML={{ __html: page[0].text }}></p>
        </>

      }

      <section className='mt-6 space-y-6'>

        <div className={style.list_transp + " border1"}>
          <ToggleList title={"Artículo 9"}>
            <ul className=''>
              <li>
                {estaticos && estaticos[0] &&
                  <a href={estaticos[0].archivo} rel="noreferrer" target={"_blank"}>
                                        <span>{estaticos[0].articulo}</span>
                    <p>{estaticos[0].titulo}</p>
                  </a>
                }
              </li>
              <li>
                {estaticos && estaticos[1] &&
                  <a href={estaticos[1].archivo} rel="noreferrer" target={"_blank"}>
                    <span>{estaticos[1].articulo}</span>
                    <p>{estaticos[1].titulo}</p>
                  </a>
                }
              </li>
              <li>
                {estaticos && estaticos[2] &&
                  <a href={estaticos[2].archivo} rel="noreferrer" target={"_blank"}>
                    <span>{estaticos[2].articulo}</span>
                    <p>{estaticos[2].titulo}</p>
                  </a>
                }
              </li>

              <li>
                <Link href={"transparencia/9.4/manuales-de-procedimientos"}>
                  <a >
                    <span>9.4</span>
                    <p>Manuales de procedimientos</p>
                  </a>
                </Link>

              </li>

              <li>
                <Link href={"transparencia/9.5/estructura-organizativa"}>

                  <a>
                    <span>9.5</span>
                    <p>Estructura organizativa</p>
                  </a>
                </Link>

              </li>


              <li>
                <Link href={"transparencia/9.6/seguimiento-de-documentos"}>
                  <a >
                    <span>9.6</span>
                    <p>Seguimiento de documentos</p>
                  </a>
                </Link>
                {/* <ul>
                    <li>Diagrama de flujo para otros recursos</li>
                </ul> */}
              </li>

              <li>
                <Link href={"transparencia/9.7/descripcion-de-formularios"}>

                  <a >
                    <span>9.7</span>
                    <p> Descripción de formularios</p>
                  </a>
                </Link>

              </li>

              <li>
                <Link href={"transparencia/9.8/reglas-de-procedimiento"}>
                  <a >
                    <span>9.8</span>
                    <p> Reglas de Procedimiento</p>
                  </a>
                </Link>

              </li>



            </ul>
          </ToggleList>
        </div>

        <div className={style.list_transp + " border1"}>
          <ToggleList title={"Artículo 10"}>
            <ul className=''>
              <li>
                {estaticos && estaticos[3] &&
                  <a href={estaticos[3].archivo} rel="noreferrer" target={"_blank"}>
                    <span>{estaticos[3].articulo} </span>
                    <p>{estaticos[3].titulo}</p>
                  </a>
                }
              </li>
              <li>
                <Link href={"transparencia/10.2/Ejecuciones-Presupuestarias"}>
                  <a>
                    <span>10.2</span>
                    <p>Ejecuciones Presupuestarias</p>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"transparencia/10.3/Estadistica"}>
                  <a>
                    <span>10.3</span>
                    <p>Estadistica</p>
                  </a>
                </Link>

              </li>
              <li>
                <a>
                  <span>10.4</span>
                  <p>Programas Desarrollados (El Tribunal Administrativo Tributario no cuenta con presupuesto de inversión.)</p>
                </a>
              </li>
              <li>
                <a href='https://www.panamacompra.gob.pa/Inicio/#/' rel="noreferrer" target={"_blank"}>
                  <span>10.5</span>
                  <p>Contrataciones Públicas</p>
                </a>
              </li>


            </ul>
          </ToggleList>
        </div>

        <div className={style.list_transp + " border1"}>
          <ToggleList title={"Artículo 11"}>
            <ul className=''>
              <li>
                {estaticos && estaticos[4] &&
                  <a href={estaticos[4].archivo} rel="noreferrer" target={"_blank"}>
                    <span>{estaticos[4].articulo}</span>
                    <p>{estaticos[4].titulo}</p>
                  </a>
                }
              </li>

              <li>
                <Link href={"transparencia/11.2/designacion-de-colaboradores"}>
                  <a>
                    <span>11.2</span>
                    <p>Designación de Colaboradores</p>
                  </a>

                </Link>

              </li>


              <li>
                <Link href={"transparencia/11.3/Planilla"}>
                  <a>
                    <span>11.3</span>
                    <p>Planilla</p>
                  </a>
                </Link>

              </li>


              <li>
                <Link href={"transparencia/11.4/gastos-de-representacion"}>
                  <a>
                    <span>11.4</span>
                    <p>Gastos de Representación</p>
                  </a>
                </Link>

              </li>

              <li>
                <a>
                  <span>11.5</span>
                  <p>Costo de Viajes e Informes</p>
                </a>
                <ul>
                  <li>
                    <Link href={"transparencia/11.4/Viajes-Nacionales"}>
                      <a>
                        <p>Viajes Nacionales</p>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"transparencia/11.4/Viajes-Internacionales"}>
                      <a>
                        <p>Viajes Internacionales</p>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>


            </ul>
          </ToggleList>
        </div>

        <div className={style.list_transp + " border1"}>
          <ToggleList title={"Artículo 26"}>
            <ul className=''>
              <li>
                <Link href={"transparencia/11.4/solicitud-de-informacion-presentada-a-la-institucion"}>
                  <a >
                    <span>26.1</span>
                    <p>Solicitud de Información Presentada a la Institución</p>
                  </a>
                </Link>
              </li>

              <li>
                <Link href={"transparencia/11.4/Solicitudes-Resueltas-y-Negadas"}>
                  <a >
                    <span>26.2</span>
                    <p>Solicitudes Resueltas y Negadas</p>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"transparencia/11.4/Participacion-Ciudadana"}>
                  <a >
                    <span >26.3</span>
                    <p>Participación Ciudadana
                      <span>{" ("}El Tribunal no ha sometido actos a Participación Ciudadana, sin embargo para dar a conocer las competencias institucionales se han instalado stands informativos.</span>
                    </p>

                  </a>
                </Link>
              </li>
            </ul>
          </ToggleList>
        </div>

        <div className={style.list_transp + " border1"}>
          <ToggleList title={"Artículo 27"}>
            <ul className=''>
              <li>

                {estaticos && estaticos[4] &&
                  <a href={estaticos[4].archivo} rel="noreferrer" target={"_blank"}>
                    <span>{estaticos[4].articulo}</span>
                    <p>{estaticos[4].titulo}</p>
                  </a>
                }
              </li>
              <li>
                <Link href={"/marco-normativo/convenios"}>
                  <a >
                    <span>27.2</span>
                    <p>Convenios</p>
                  </a>
                </Link>

              </li>

            </ul>
          </ToggleList>
        </div>

        <div className={style.list_transp + " border1"}>
          <ToggleList title={"Otros"}>
            <ul className=''>
              <li>
                <Link href={"publicaciones/memorias/"}>
                  <a >
                    <p>Memorias
                    </p>

                  </a>
                </Link>
              </li>
            </ul>
          </ToggleList>
        </div>


      </section>

    </Layer >
  )
}
