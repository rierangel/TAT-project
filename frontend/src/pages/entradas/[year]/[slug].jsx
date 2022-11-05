import Layer from "src/components/Layer";
import Link from "next/link";

import Carrusel from 'src/lib/imgCarrusel'

export default function Page({ slug }) {


  const cont = [
    "https://clippingrrpp.com/wp-content/uploads/2015/02/abogados-marketing-legal1.jpg",
    "https://www.bufetesemperejaen.com/wp-content/uploads/2019/02/Abogados-Elche-reunidos-despacho-sempere.jpg",
    "https://d500.epimg.net/cincodias/imagenes/2018/10/15/legal/1539584672_711277_1539585056_noticia_normal.jpg",
    "https://d500.epimg.net/cincodias/imagenes/2017/11/27/legal/1511775346_282834_1511863279_rrss_normal.jpg",
  ];

  const imgData = [
    "https://clippingrrpp.com/wp-content/uploads/2015/02/abogados-marketing-legal1.jpg",
    "https://www.bufetesemperejaen.com/wp-content/uploads/2019/02/Abogados-Elche-reunidos-despacho-sempere.jpg",
    "https://d500.epimg.net/cincodias/imagenes/2018/10/15/legal/1539584672_711277_1539585056_noticia_normal.jpg",
    "https://d500.epimg.net/cincodias/imagenes/2017/11/27/legal/1511775346_282834_1511863279_rrss_normal.jpg",
    "https://www.armentalrialabogados.es/images/cuadro-despacho.jpg",
    "https://www.udem.edu.mx/sites/default/files/2020-10/Reconoce-despacho-de-abogados-a-alumno-UDEM.jpg",
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

      <div className="mb-40">
        <h1>Más Noticias</h1>
        <div className="flex gap-6 my-6">

          {cont.map((e, i) => (
            <Link key={i} href={`/noticias/222/asdasd`} >
              <a className='hover1' >
                <div className="w-[302px]  mb-4 ">
                  <img className='h-[190px]  w-auto object-cover rounded-lg'
                    src={e}  />
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