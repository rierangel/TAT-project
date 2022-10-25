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
                                    <a href="tramites" className=' flex gap-2 items-center'>
                                        Formulario del Banco de Peritos
                                    </a>
                                </li>
                                <li>
                                    <a href="flujograma" className=' flex gap-2 items-center'>
                                        Flujograma
                                    </a>
                                </li>
                                <li>
                                    <a href="noticias" className=' flex gap-2 items-center'>
                                        Noticias
                                    </a>
                                </li>
                                <li>
                                    <a href="noticias/congreso-internacional-de-derecho-tributario" className=' flex gap-2 items-center'>
                                        Congreso Internacional de Derecho Tributario
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="noticias/haciendo-la-diferencia" className=' flex gap-2 items-center'>
                                        Haciendo la Diferencia
                                    </a>
                                </li>
                                <li>
                                    <a href="preguntas-frecuentes" className=' flex gap-2 items-center'>
                                        Preguntas Frecuentes
                                    </a>
                                </li>
                                
                            </ul>
                        </li>
                    </ul>
                </ToggleList>
            </div>



        </section>
    )
}
