import Link from 'next/link'
import React from 'react'
import ToggleList from 'src/lib/ToggleList'




export default function SiteMap() {
    return (
        <section className='mt-6 space-y-6 text-[16px] custom-list'>

            <div className='p-9 border1 rounded-xl'>

                <ToggleList title={"Inicio"}>
                    <ul className='pt-9 gap-3 space-y-3'>
                        <li >
                            Páginas de interés:
                            <ul className='text-[#0054A4]'>

                                <li>
                                    <Link href="/tramites" >
                                        <a className=' flex gap-2 items-center'>
                                            Formulario del Banco de Peritos
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/flujograma" >
                                        <a className=' flex gap-2 items-center'>
                                            Flujograma
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/entradas/noticias" >
                                        <a className=' flex gap-2 items-center'>
                                            Noticias
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/entradas/congreso-internacional-de-derecho-tributario" >
                                        <a className=' flex gap-2 items-center'>
                                            Congreso Internacional de Derecho Tributario
                                        </a>
                                    </Link>

                                </li>
                                <li>
                                    <Link href="/entradas/haciendo-la-diferencia" >
                                        <a className=' flex gap-2 items-center'>
                                            Haciendo la Diferencia
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/preguntas-frecuentes" >
                                        <a className=' flex gap-2 items-center'>
                                            Preguntas Frecuentes
                                        </a>
                                    </Link>
                                </li>

                            </ul>
                        </li>
                    </ul>
                </ToggleList>
            </div>



        </section>
    )
}
