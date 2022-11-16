import React, { useEffect, useState } from 'react'


import SvgFondo from '../../icons/fondo'
import SvgFondo2 from '../../icons/fondo2'
import SvgDots from '../../icons/dots'

export default function LocalTime() {

    const [horaLocal, sethoraLocal] = useState()

    useEffect(() => {
        sethoraLocal(new Date().toLocaleString().split(",")[1])
    }, [horaLocal]);


    return (
        <section className=''>
            <div className='
                bg-primary relative color-white gap-6 py-[55px] px-12 rounded-xl  
                flex flex-col
                md:flex-row md:px-[55px] md:py-12 '>

                <div className='text-white text-center'>
                    <h2 className='uppercase'>Hora oficial de Panamá</h2>

                    <div className='border-2 border-[#80AAD2] rounded-xl py-3 px-5  mt-3'>
                        <h1 className='mb-1 uppercase'>
                            {horaLocal}
                        </h1>
                        <p>
                            {new Date().toLocaleDateString('es', { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                        </p>
                    </div>

                </div>


                <div className='absolute top-[105px] right-[480px] hidden xl:flex'>
                    <SvgDots width={"100%"} height={"100%"} fill="#ffffff1a" />
                </div>

                <div className='absolute bottom-0 top-0  right-[280px] hidden xl:flex'>
                    <SvgFondo2 width={"100%"} height={"100%"} fill="#ffffff1a" />
                </div>

                <div className='absolute overflow-hidden bottom-0 top-0 md:bottom-auto right-[-60px] md:right-0 opacity-10'>
                    <SvgFondo width={"100%"} height={"100%"} fill="#ffffff1a" />
                </div>
            </div>

        </section>
    )
}
