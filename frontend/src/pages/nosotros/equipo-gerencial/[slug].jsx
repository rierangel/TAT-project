import React, { useEffect, useState } from 'react'
import Layer from 'src/components/Layer'
import ImgBack from 'src/components/Layer/ImgBack';
import TextBack from 'src/components/Layer/TextBack';
import { fetcher } from 'src/lib/Fetcher';

export default function Page({ slug }) {


    const [data, setData] = useState()
    // const current = datalist.filter((e) => e.nombre == params.slug)

    useEffect(() => {
        fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/nosotros/equipo/`)
            .then(res => {
                console.log(res);
                if (res[0]) {
                    const current = res.filter((e) =>e.slug == slug)
                    setData(current[0])
                }
            }
            )
            .catch(error => console.log(error))
    }, [])
    return (data &&
        <Layer>
            <section className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                    <ImgBack className='h-auto  rounded-xl ' src={data.imagen} alt="" />
                </div>

                <div className="lg:w-2/3 ">
                    <h1>{data.nombre}</h1>
                    <h3 className="mt-1 article">{data.titulo}</h3>
                    <hr className="sub mb-9" />


                    <TextBack text={data.text} />
                    {/* <div className="space-y-4 mt-9">
                    <h3>Formación Académica</h3>
                    <ul className="list">
                        <li>Licenciado en Derecho y Ciencias Políticas, con estudios de post grado en Docencia Superior. Ambos títulos, expedidos por la Universidad de Panamá.</li>
                        <li>Cuenta con maestría en Derecho Comercial, por la Laureate International Universities-UIP.</li>
                        <li>Posee además Diplomados en Formación Cristiana, Gestión de Talento Humano, Gerencia Avanzada de Gobiernos Locales y en Formación de Formadores para la Investigación y Juzgamiento en la Jurisdicción de Cuentas ofrecidos por el Bible College-INSTE, la Universidad Tecnológica de El Salvador, INCAE-Business School y la Universidad Especializada de las Américas (UDELAS), respectivamente, en “Procedimientos Administrativos Tributario”, dictado por la Universidad de Panamá.</li>
                    </ul>             
                       
                    <h3 >Experiencia profesional</h3>
                    <ul className="list">
                            <li>Licenciado en Derecho y Ciencias Políticas, con estudios de post grado en Docencia Superior. Ambos títulos, expedidos por la Universidad de Panamá.</li>
                            <li>Cuenta con maestría en Derecho Comercial, por la Laureate International Universities-UIP.</li>
                            <li>Posee además Diplomados en Formación Cristiana, Gestión de Talento Humano, Gerencia Avanzada de Gobiernos Locales y en Formación de Formadores para la Investigación y Juzgamiento en la Jurisdicción de Cuentas ofrecidos por el Bible College-INSTE, la Universidad Tecnológica de El Salvador, INCAE-Business School y la Universidad Especializada de las Américas (UDELAS), respectivamente, en “Procedimientos Administrativos Tributario”, dictado por la Universidad de Panamá.</li>
                        </ul>  
                  
                </div> */}

                </div>

            </section>
        </Layer>
    )
}


export async function getServerSideProps({ params }) {

    // const page = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/4`)
    // const datalist = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/nosotros/autoridades/`)

    // const current = datalist.filter((e) => e.nombre == params.slug)
    // console.log(current);

    console.log(params.slug);

    return { props: { slug: params.slug } }

}
