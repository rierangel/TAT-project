import Link from 'next/link'
import React from 'react'
import slugify from 'src/lib/slugify'
import Socials from './Socials'
import styles from './styles.module.scss'

export default function Footer() {


  const col1 = ["nosotros", "competencias", "transparencia", "leyes y decretos", "acuerdos", "convenios"]
  const col2 = ["Noticias", "Ponencias del Congreso", "revista justicia tributaria", "memorias", "otras publicaciones", "resoluciones emitidas"]
  const col3 = ["Haciendo la Diferencia", "Preguntas Frecuentes", "Congreso Int. de Derecho Tributario", "Vacantes", "Formulario del Banco de Peritos", "Contacto"]
  const col4 = ["Mapa del sitio", "Declaración de privacidad"]

  return (
    <footer className={styles.footer}>

      <div className="container">

        <div className={styles.footerContent}>

          <div className="flex flex-col justify-between">

            <div className={styles.img}>
              <img src="/img/logo.png" alt="" />
            </div>
            <p className={styles.copyright}>
              Copyright © 2022.
              Tribunal Administrativo Tributario.
              Todos los derechos reservados
            </p>

          </div>

          <div className={styles.col}>
            <ul >
              {col1.map((e, i) => (
                <li key={i}>
                  <Link href={slugify(e)}>
                    <a>{e}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <ul >
              <ul >
                {col2.map((e, i) => (
                  <li key={i}>
                    <Link href={slugify(e)}>
                      <a>{e}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </ul>
          </div>

          <div className={styles.col}>
            <ul >
              {col3.map((e, i) => (
                <li key={i}>
                  <Link href={slugify(e)}>
                    <a>{e}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>

            <ul >
              {col4.map((e, i) => (
                <li key={i}>
                  <Link href={slugify(e)}>
                    <a>{e}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className='mt-auto'>

              <p className='mb-[16px]'>Síguenos en las redes:</p>
              <Socials />

            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
