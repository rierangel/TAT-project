import Link from 'next/link'
import React from 'react'
import slugify from 'src/lib/slugify'
import Socials from './Socials'



export default function Footer() {


  const col1 = [
    {
      name: "Nosotros",
      link: "/nosotros/",
    },
    {
      name: "Competencias",
      link: "/marco-normativo/competencias/",
    },
    {
      name: "Transparencia",
      link: "/transparencia/",
    },
    {
      name: "Leyes y decretos",
      link: "/marco-normativo/leyes-y-decretos",
    },
    {
      name: "Acuerdos",
      link: "/marco-normativo/acuerdos/",
    },
    {
      name: "Convenios",
      link: "/marco-normativo/convenios/",
    },

  ]
  const col2 = [
    {
      name: "Noticias",
      link: "/entradas/noticias",
    },
    {
      name: "Ponencias del congreso",
      link: "/publicaciones/ponencias/",
    },
    {
      name: "Revista justicia tributaria",
      link: "/publicaciones/revista-tributaria/",
    },
    {
      name: "Memorias",
      link: "/publicaciones/memorias/",
    },
    {
      name: "Resoluciones emitidas",
      link: "/resoluciones/",
    },
    {
      name: "Haciendo la diferencia",
      link: "/entradas/haciendo-la-diferencia",
    },


  ]

  // const col2 = ["Noticias", "Ponencias del Congreso", "revista justicia tributaria", "memorias",  "resoluciones emitidas", "Haciendo la Diferencia",]
  const col3 = [
    {
      name: "Congreso Int. de derecho tributario",
      link: "/entradas/congreso-internacional-de-derecho-tributario/"
    },
    {
      name: "Vacantes",
      link: "/vacantes/",
    },

    {
      name: "Otras instituciones",
      link: "otras-instituciones"
    },
    {
      name: "Contacto",
      link: "/contacto/"
    },
    {
      name: "Mapa del sitio",
      link: "/mapa-del-sitio/"
    },

  ]

  const col4 = ["Declaración de privacidad", "Preguntas frecuentes",]

  return (
    <footer className="pt-6 pb-24 md:pt-16 md:pb-24  mt-36">

      <div className="container">

        <div className="flex flex-col flex-wrap  md:flex-row lg:justify-between gap-3 relative">

          <div className="flex flex-col justify-between">

            <div className='w-52 h-16 md:w-full md:h-auto mb-14 md:mb-0 '>

              <img className="w-full h-full object-contain" src="/img/logo.png" alt="" />
            </div>
            {/* <img className="w-32 h-10 md:w-auto md:h-auto object-cover" src="/img/logo.png" alt="" /> */}

            <p className="absolute md:relative bottom-[60px] md:bottom-0 right-0 left-0 text-center md:text-left copyright ">
              Copyright © 2022. <br className='hidden md:flex' />
              Tribunal Administrativo Tributario. <br />
              Todos los derechos reservados
            </p>

          </div>

          {/* COL1 */}
          <div className="">
            <ul >
              {col1.map((e, i) => (
                <li key={i}>
                  <Link href={e.link}>
                    <a>{e.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL2 */}
          <div className="">
            <ul >
              {col2.map((e, i) => (
                <li key={i}>
                  <Link href={e.link}>
                    <a>{e.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL3 */}
          <div className="">
            <ul >
              {col3.map((e, i) => (
                <li key={i}>
                  <Link href={e.link}>
                    <a>{e.name}</a>
                  </Link>
                </li>
              ))}

              <li>
                <a target={"_blank"} rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSe4PbfqcKpPGjHhVCUXd8T5B10_QE3F4WXEF3lmEjYsAsOSsA/closedform">Formulario del Banco de Peritos</a>
              </li>
            </ul>
          </div>

          <div className="socials">

            <ul className='mb-auto' >
              {col4.map((e, i) => (
                <li key={i}>
                  <Link href={slugify(e)}>
                    <a>{e}</a>
                  </Link>

                </li>
              ))}

            </ul>

            <div className=' flex flex-col justify-center mt-[84px]'>
              <p className='hidden md:flex mb-[16px]'>Síguenos en las redes:</p>
              <Socials />
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
