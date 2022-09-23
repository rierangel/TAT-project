import React from 'react'

export default function index() {
    return (
        <>

            <h1 className='mb-6 md:mb-2'>Realizar búsqueda</h1>
            <div className='svg_rp w-auto absolute right-10 top-5 p-5'>

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5469 13.9531C15.6518 14.0576 15.735 14.1818 15.7918 14.3186C15.8485 14.4553 15.8778 14.6019 15.8778 14.75C15.8778 14.8981 15.8485 15.0447 15.7918 15.1814C15.735 15.3182 15.6518 15.4424 15.5469 15.5469C15.3346 15.7564 15.0483 15.8739 14.75 15.8739C14.4517 15.8739 14.1654 15.7564 13.9531 15.5469L8.00002 9.59375L2.04689 15.5469C1.8346 15.7564 1.54831 15.8739 1.25002 15.8739C0.951724 15.8739 0.665436 15.7564 0.453141 15.5469C0.348261 15.4424 0.265044 15.3182 0.208263 15.1814C0.151482 15.0447 0.122253 14.8981 0.122253 14.75C0.122253 14.6019 0.151482 14.4553 0.208263 14.3186C0.265044 14.1818 0.348261 14.0576 0.453141 13.9531L6.40627 8L0.453141 2.04687C0.241796 1.83553 0.123064 1.54888 0.123064 1.25C0.123064 1.10201 0.152214 0.955461 0.208848 0.818733C0.265483 0.682005 0.348494 0.557771 0.453141 0.453123C0.557788 0.348476 0.682022 0.265466 0.81875 0.208831C0.955478 0.152196 1.10202 0.123047 1.25002 0.123047C1.5489 0.123047 1.83555 0.241779 2.04689 0.453123L8.00002 6.40625L13.9531 0.453123C14.1645 0.241779 14.4511 0.123047 14.75 0.123047C15.0489 0.123047 15.3355 0.241779 15.5469 0.453123C15.7582 0.664468 15.877 0.951112 15.877 1.25C15.877 1.54888 15.7582 1.83553 15.5469 2.04687L9.59377 8L15.5469 13.9531Z" fill="#0054A4" />
                </svg>

            </div>

            <form action="" className='flex flex-col md:flex-row gap-[24px] mt-2 text-black'>
                <input className='w-full input-buscador'
                    type="text"
                    placeholder='Escriba su búsqueda'
                />
                <div className='relative w-full'>

                    <label htmlFor="seleccion" className='absolute top-[-10px] md:top-[-30px]'>Sección</label>
                    <select name="" id="seleccion" className='input-buscador mt-3 md:mt-0 w-full h-full'>
                        <option className='w-full' value="all">Todas las secciones</option>
                        <option className='w-full' value="Noticias">Noticias</option>
                        <option className='w-full' value="Acuerdos">Acuerdos</option>
                        <option className='w-full' value="Memorias">Memorias</option>
                    </select>

                </div>


                <button className='primary px-6 gap-[10px] center'>
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
