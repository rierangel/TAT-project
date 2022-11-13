import React from 'react'

export default function index() {
    return (
        <>

            <h1 className='mb-6 md:mb-2'>Realizar búsqueda</h1>
        

            <form action="" className='flex flex-col md:flex-row gap-[24px] mt-2 text-black'>
                <input className='w-full input-buscador'
                    type="text"
                    placeholder='Escriba su búsqueda'
                />
                <div className='relative w-full md:w-1/3'>

                    <label htmlFor="seleccion" className='absolute top-[-10px] md:top-[-30px]'>Sección</label>
                    <select name="" id="seleccion" className='input-buscador mt-3 md:mt-0 w-full h-full'>
                        <option value="all">Todas las secciones</option>
                        <option value="Noticias">Noticias</option>
                        <option value="Acuerdos">Acuerdos</option>
                        <option value="Memorias">Memorias</option>
                    </select>

                </div>


                <button className='primary px-6 gap-[10px] flex-center'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1641 15.8359L13.9844 12.6563C15.0113 11.3456 15.5672 9.72752 15.5625 8.0625C15.5625 6.57914 15.1226 5.1291 14.2985 3.89573C13.4744 2.66236 12.3031 1.70106 10.9326 1.13341C9.56218 0.56575 8.05418 0.417225 6.59933 0.706614C5.14447 0.996003 3.8081 1.71031 2.7592 2.7592C1.71031 3.8081 0.996003 5.14447 0.706614 6.59933C0.417225 8.05418 0.56575 9.56218 1.13341 10.9326C1.70106 12.3031 2.66236 13.4744 3.89573 14.2985C5.1291 15.1226 6.57914 15.5625 8.0625 15.5625C9.72752 15.5672 11.3456 15.0113 12.6563 13.9844L15.8359 17.1641C16.0129 17.3387 16.2514 17.4366 16.5 17.4366C16.7486 17.4366 16.9872 17.3387 17.1641 17.1641C17.2515 17.077 17.3208 16.9735 17.3681 16.8595C17.4154 16.7456 17.4398 16.6234 17.4398 16.5C17.4398 16.3766 17.4154 16.2544 17.3681 16.1405C17.3208 16.0265 17.2515 15.923 17.1641 15.8359ZM2.4375 8.0625C2.4375 6.94998 2.7674 5.86245 3.38549 4.93742C4.00357 4.01239 4.88207 3.29142 5.90991 2.86568C6.93774 2.43994 8.06874 2.32854 9.15989 2.54559C10.251 2.76263 11.2533 3.29836 12.04 4.08503C12.8266 4.8717 13.3624 5.87398 13.5794 6.96512C13.7965 8.05626 13.6851 9.18726 13.2593 10.2151C12.8336 11.2429 12.1126 12.1214 11.1876 12.7395C10.2626 13.3576 9.17502 13.6875 8.0625 13.6875C6.5713 13.6854 5.14175 13.0921 4.08731 12.0377C3.03287 10.9833 2.43957 9.55371 2.4375 8.0625Z" fill="white" />
                    </svg>
                    Buscar</button>
            </form>

            <p className='mt-9 text-[#6B7380] text-center'>No hay resultados para mostrar.</p>

            <div>
                <hr />
                <div className='flex flex-col gap-2 py-6 md:py-9 px-3'>
                    <h2>Noticias</h2>
                    <h5>Comunicado cierre Sede Central del TAT en Agosto de 2022</h5>
                    <p>Mediante acuerdo N° 19-2022, con fecha 12 de agosto de 2022, el Pleno de Magistrados dispuso el cierre de la Sede Central del Tribunal Administrativo Tributario, ubicada en la ciudad de Panamá y la suspensión de los términos jurisdiccionales el día 15 de agosto de 2022.</p>
                </div>
                <hr />
                <div className='flex flex-col gap-2 py-6 md:py-9 px-3'>
                    <h2>Noticias</h2>
                    <h5>Comunicado cierre Sede Central del TAT en Agosto de 2022</h5>
                    <p>Mediante acuerdo N° 19-2022, con fecha 12 de agosto de 2022, el Pleno de Magistrados dispuso el cierre de la Sede Central del Tribunal Administrativo Tributario, ubicada en la ciudad de Panamá y la suspensión de los términos jurisdiccionales el día 15 de agosto de 2022.</p>
                </div>
                <hr />
                <div className='flex flex-col gap-2 py-6 md:py-9 px-3'>
                    <h2>Noticias</h2>
                    <h5>Comunicado cierre Sede Central del TAT en Agosto de 2022</h5>
                    <p>Mediante acuerdo N° 19-2022, con fecha 12 de agosto de 2022, el Pleno de Magistrados dispuso el cierre de la Sede Central del Tribunal Administrativo Tributario, ubicada en la ciudad de Panamá y la suspensión de los términos jurisdiccionales el día 15 de agosto de 2022.</p>
                </div>
                <hr />
            </div>


        </>
    )
}
