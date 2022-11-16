import Link from "next/link";
import Layer from "src/components/Layer";
import SiteMap from "src/components/SiteMap";
import ToggleList from "src/lib/ToggleList";

export default function index() {

    const paginas_de_interes = [
        {
            name: "Formulario del Banco de Peritos",
            link: "#"
        },
        {
            name: "Flujograma",
            link: "/flujograma"
        },
        {
            name: "Noticias",
            link: "/entradas/noticias"
        },
        {
            name: "Congreso Internacional de Derecho Tributario",
            link: "/entradas/congreso-internacional-de-derecho-tributario"
        },
        {
            name: "Haciendo la Diferencia",
            link: "/entradas/haciendo-la-diferencia"
        },
        {
            name: "Preguntas Frecuentes",
            link: "/preguntas-frecuentes"
        }
    ]

    const normativa = [
        {
            name: "Leyes y Decretos",
            link: "/marco-normativo/leyes-y-decretos"
        },
        {
            name: "Acuerdos",
            link: "/marco-normativo/acuerdos"
        },
        {
            name: "Convenios",
            link: "/marco-normativo/convenios"
        },
        {
            name: "Edictos",
            link: "/marco-normativo/edictos"
        },
        {
            name: "Flujograma",
            link: "/marco-normativo/flujograma"
        },
    ]

    return (
        <Layer>
            <hr className="invisible my-6" />
            <div className="subtitle">
                <i>
                    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 2C7.25 1.70163 7.36853 1.41548 7.57951 1.20451C7.79048 0.993527 8.07663 0.875 8.375 0.875H26.375C26.6734 0.875 26.9595 0.993527 27.1705 1.20451C27.3815 1.41548 27.5 1.70163 27.5 2C27.5 2.29837 27.3815 2.58452 27.1705 2.7955C26.9595 3.00647 26.6734 3.125 26.375 3.125H8.375C8.07663 3.125 7.79048 3.00647 7.57951 2.7955C7.36853 2.58452 7.25 2.29837 7.25 2ZM26.375 9.875H8.375C8.07663 9.875 7.79048 9.99353 7.57951 10.2045C7.36853 10.4155 7.25 10.7016 7.25 11C7.25 11.2984 7.36853 11.5845 7.57951 11.7955C7.79048 12.0065 8.07663 12.125 8.375 12.125H26.375C26.6734 12.125 26.9595 12.0065 27.1705 11.7955C27.3815 11.5845 27.5 11.2984 27.5 11C27.5 10.7016 27.3815 10.4155 27.1705 10.2045C26.9595 9.99353 26.6734 9.875 26.375 9.875ZM26.375 18.875H8.375C8.07663 18.875 7.79048 18.9935 7.57951 19.2045C7.36853 19.4155 7.25 19.7016 7.25 20C7.25 20.2984 7.36853 20.5845 7.57951 20.7955C7.79048 21.0065 8.07663 21.125 8.375 21.125H26.375C26.6734 21.125 26.9595 21.0065 27.1705 20.7955C27.3815 20.5845 27.5 20.2984 27.5 20C27.5 19.7016 27.3815 19.4155 27.1705 19.2045C26.9595 18.9935 26.6734 18.875 26.375 18.875ZM2.1875 0.3125C1.85374 0.3125 1.52748 0.41147 1.24998 0.596895C0.972468 0.78232 0.756177 1.04587 0.628454 1.35422C0.500731 1.66257 0.467313 2.00187 0.532426 2.32922C0.597538 2.65656 0.758257 2.95724 0.994258 3.19324C1.23026 3.42924 1.53094 3.58996 1.85829 3.65508C2.18563 3.72019 2.52493 3.68677 2.83328 3.55905C3.14163 3.43132 3.40518 3.21503 3.59061 2.93752C3.77603 2.66002 3.875 2.33376 3.875 2C3.875 1.55245 3.69721 1.12322 3.38074 0.806757C3.06428 0.490289 2.63505 0.3125 2.1875 0.3125ZM2.1875 9.3125C1.85374 9.3125 1.52748 9.41147 1.24998 9.59689C0.972468 9.78232 0.756177 10.0459 0.628454 10.3542C0.500731 10.6626 0.467313 11.0019 0.532426 11.3292C0.597538 11.6566 0.758257 11.9572 0.994258 12.1932C1.23026 12.4292 1.53094 12.59 1.85829 12.6551C2.18563 12.7202 2.52493 12.6868 2.83328 12.559C3.14163 12.4313 3.40518 12.215 3.59061 11.9375C3.77603 11.66 3.875 11.3338 3.875 11C3.875 10.5524 3.69721 10.1232 3.38074 9.80676C3.06428 9.49029 2.63505 9.3125 2.1875 9.3125ZM2.1875 18.3125C1.85374 18.3125 1.52748 18.4115 1.24998 18.5969C0.972468 18.7823 0.756177 19.0459 0.628454 19.3542C0.500731 19.6626 0.467313 20.0019 0.532426 20.3292C0.597538 20.6566 0.758257 20.9572 0.994258 21.1932C1.23026 21.4292 1.53094 21.59 1.85829 21.6551C2.18563 21.7202 2.52493 21.6868 2.83328 21.559C3.14163 21.4313 3.40518 21.215 3.59061 20.9375C3.77603 20.66 3.875 20.3338 3.875 20C3.875 19.5524 3.69721 19.1232 3.38074 18.8068C3.06428 18.4903 2.63505 18.3125 2.1875 18.3125Z" fill="#0054A4" />
                    </svg>
                </i>
                <h1>Mapa del sitio</h1>
            </div>

            {/* <SiteMap /> */}
            <section className='mt-6 space-y-6 text-[16px] custom-list'>

                <div className='p-9 border1 rounded-xl'>

                    <ToggleList title={"Inicio"}>
                        <ul className='pt-9 gap-3 space-y-3'>
                            <li >
                                Páginas de interés:
                                <ul className='text-[#0054A4]'>
                                    {paginas_de_interes.map((v, i) => (
                                        <li key={i}>
                                            <Link href={v.link} >
                                                <a className=' flex gap-2 items-center'>
                                                    {v.name}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}


                                </ul>
                            </li>
                        </ul>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>

                    <ToggleList title={"Marco Normativo"}>
                        <ul className='pt-9 gap-3 space-y-3'>
                            <li>
                                <Link href={"marco-normativo/competencias"} >
                                    <a className='text-[#0054A4] flex gap-2 items-center'>
                                    Competencias
                                    </a>
                                </Link>
                            </li>

                            <li >
                                Normativa:
                                <ul className='text-[#0054A4]'>
                                    {normativa.map((v, i) => (
                                        <li key={i}>
                                            <Link href={v.link} >
                                                <a className=' flex gap-2 items-center'>
                                                    {v.name}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}


                                </ul>
                            </li>
                        </ul>
                    </ToggleList>
                </div>



            </section>
        </Layer>
    )
}
