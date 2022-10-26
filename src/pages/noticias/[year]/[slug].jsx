import Layer from "src/components/Layer";
import Link from "next/link";

import Carrusel from 'src/lib/imgCarrusel'

export default function Page({ slug }) {


  const cont = [...Array(4).keys()];

  const imgData = [
    "/img/metas-objetivos.png",
    "/img/post/post2.png",
    "/img/oficinas.png",
    "/img/tat.png",
    "/img/metas-objetivos.png",
    "/img/post/post2.png",
    "/img/oficinas.png",
    "/img/tat.png",
  ]
  return (
    <Layer>
      {/* {post && <NoticiaView data={post} more={posts && posts.posts.nodes.filter((e) => path !== e.slug)}/>} */}


      <h1 className='mb-9'>{"Jornada Académica (Día del Contador 2022)"}</h1>

      <Carrusel data={imgData} />

      <p className="my-16">
      El Tribunal Administrativo Tributario, atendiendo invitación del Centro Regional Universitario de Veraguas (CRUV), participó en la jornada académica organizada por la Escuela de Contabilidad del citado centro de enseñanza superior en el marco de la celebración del Día del Contador.
      Correspondió al magistrado vocal, Anel Jesús Miranda Batista, exponer la conferencia titulada “El TAT como garante de la justicia en materia tributaria ante la realidad del país”, mediante la cual familiarizó al auditorio con el procedimiento administrativo aplicable al ámbito tributario, explicó los recursos en el procedimiento fiscal ordinario y detalló las fases del procedimiento en segunda instancia.  Durante su intervención el magistrado Miranda dio a conocer aspectos relacionados con los incidentes, excepciones y tercerías dentro de los procesos por cobro coactivo y su tramitación ante el Tribunal Administrativo Tributario.
      Las autoridades del Centro Regional Universitario de Veraguas manifestaron su gratitud y complacencia por el intercambio académico realizado por el TAT durante esta significativa fecha, al tiempo que expresaron su interés por continuar organizando actividades de esta naturaleza.
      </p>



      <hr className='my-16' />

      <div >
        <h1>Más Noticias</h1>
        <div className="flex gap-6 my-6">

          {cont.map((e, i) => (
            <Link key={i} href={`/noticias/222/asdasd`} >
              <a className='hover1' >
                <div className="w-[302px] h-[190px] mb-4 ">
                  <img className='cover rounded-lg'
                    src={"/img/tat.png"}  />
                </div>
                <h3 className='w-[90%] '>Barrido de pruebas voluntarias COVID-19</h3>
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