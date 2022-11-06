import React from 'react'
import Layer from 'src/components/Layer'
import TextBack from 'src/components/Layer/TextBack'
import Title from 'src/components/Layer/Title'
import Competencias from 'src/components/Marco/Competencias'
import { fetcher } from 'src/lib/Fetcher'
export default function competencias({ page, datalist }) {

  console.log(datalist);
  return (
    <Layer>

      <section>
        <Title data={page[0]} />

        <TextBack text={page[0].text} />


        <div className='space-y-9 mt-6'>

          {datalist && datalist.map((e, i) => (

            <div className="p-9 border2 rounded-xl bg-white">
              <h2 className='mb-4 text-[#0054A4]'>{e.titulo}</h2>
              <div className='custom-list list-primary'>
                <TextBack text={e.text} />
              </div>
            </div>
          ))}

          {/* <div className="p-9 border2 rounded-xl bg-white">
            <h2 className='marco mb-4 text-[#0054A4]'>ley 8 - 2010</h2>
            <div className='custom-list list-primary'>
              <p>Mediante el artículo 156 de la Ley 8 de 15 de marzo de 2010, se creó el Tribunal Administrativo Tributario y se le otorgó competencia para:</p>
              <ul>
                <li>Conocer y resolver los recursos de apelación en contra de reclamaciones no contenciosas vinculadas a la determinación de la obligación tributaria.</li>
                <li>Conocer y resolver en última instancia administrativa las apelaciones contra las resoluciones de la Dirección General de Ingresos y de las Administraciones Provinciales de Ingresos a nivel nacional, que resuelven reclamaciones de devoluciones de tributos nacionales, a excepción de los aduaneros; resoluciones relativas a liquidaciones adicionales, resoluciones de multas y sanciones así como cualquier otro acto administrativo que tenga relación directa con la determinación de tributos bajo competencia de dichas entidades en forma cierta o presuntiva.</li>
                <li>Conocer y resolver los recursos de apelación contra los actos administrativos o resoluciones que afecten los derechos de los contribuyentes y de los responsables.</li>
                <li>Resolver los recursos de apelación que presenten los contribuyentes contra los autos dictados por la Dirección General de Ingresos que nieguen o no admitan pruebas en primera instancia.Resolver los recursos de apelación que presenten los contribuyentes contra los autos dictados por la Dirección General de Ingresos que nieguen o no admitan pruebas en primera instancia.</li>
                <li>Resolver en única instancia las tercerías, excepciones, nulidades e incidentes que se interpongan con motivo del procedimiento de cobro coactivo cursado ante la Dirección General de Ingresos.</li>
                <li>Proponer al Ministro de Economía y Finanzas las normas que juzgue necesarias para suplir las deficiencias en la legislación tributaria.</li>
                <li>Uniformar la jurisprudencia en las materias de su competencia.</li>
              </ul>
            </div>
          </div>
          <div className="p-9 border2 rounded-xl bg-white">
            <h2 className='mb-4 text-[#A39161]'>ley 76 - 2019</h2>
            <div className='custom-list list-dorado'>

              <p>A través de la Ley 76 de 13 de febrero de 2019, que aprueba el Código de Procedimiento Tributario de la República de Panamá, se le confieren las siguientes competencias al TAT.</p>
              <ul>
                <li>Decidir si la Dirección General de Ingresos deba remitir al Ministerio Público las denuncias por defraudación fiscal penal, evaluando si existen los elementos mínimos probatorios de la supuesta comisión del delito.</li>
                <li>Resolver los recursos de apelación contra las resoluciones administrativas de determinación, cuando exista disconformidad con la propuesta de regularización tributaria.</li>
                <li>Autorizar la sanción de cierre temporal del establecimiento por la comisión de ilícitos tributarios.</li>
                <li>Conocer los procesos abreviados por indemnización de los contribuyentes afectados por actuaciones de la Administración Tributaria.</li>
                <li>Conocer los recursos de apelación interpuesto por solicitudes de error evidente.</li>
                <li>Conocer los recursos de apelación interpuesto por solicitudes de error matemático o aritmético o de imputación de créditos o débitos en la cuenta corriente.</li>
              </ul>
            </div>


          </div> */}
        </div>
      </section>

    </Layer>
  )
}

export async function getServerSideProps({ params }) {

  const page = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/6`)
  const datalist = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/marco/competencias/`)

  return { props: { page, datalist } }

}
