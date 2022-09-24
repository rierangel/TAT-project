import React from 'react'
import SvgFondo from '../icons/fondo'

import SvgFondo2 from '../icons/fondo2'
import ConsulEstado from './ConsulEstado'

export default function index() {
    return (
        <>

            {/* hora */}
            <section className=''>
                <div className='
        bg-primary relative color-white gap-6 py-[55px] px-12 rounded-xl  
        flex flex-col
        md:flex-row md:px-[55px] md:py-12 '>

                    <div className='text-white text-center'>
                        <h2 className=''>Hora oficial de Panamá</h2>
                        <div className='border-2 border-[#80AAD2] rounded-xl py-3 px-5  mt-3'>
                            <h1 className='mb-1'>11:52:18 AM</h1>
                            <p>Miércoles, 14 de septiembre de 2022</p>
                        </div>

                    </div>



                    <div className='absolute bottom-0 top-0  right-[238px] hidden lg:flex'>
                        <SvgFondo2 width={"100%"} height={"100%"} fill="#ffffff1a" />
                    </div>

                    <div className='absolute overflow-hidden bottom-0 top-0 md:bottom-auto right-[-60px] md:right-0 opacity-10'>
                        <SvgFondo width={"100%"} height={"100%"} fill="#ffffff1a" />
                    </div>
                </div>

            </section>
            <ConsulEstado />


        </>
    )
}
