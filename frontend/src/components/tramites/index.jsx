import React, { useState } from 'react'



import ConsulEstado from './ConsulEstado'
import LocalTime from './LocalTime'


import Title from 'src/components/Layer/Title';
import TextBack from '../Layer/TextBack'
import IniciarTramite from './FormIniciarTramite'



export default function Index({ data }) {

  
    return (
        <>

            {/* hora */}

            <LocalTime />


            <ConsulEstado data={data[0]} />

            <section id='t-apelacion' >
                <Title data={data[1]} />
                <div className="border1 p-9 rounded-xl" >
                    <div className="dot_interes">


                        <div className="subtitle">
                            <i dangerouslySetInnerHTML={{ __html: data[1].contenido[0].icono }}></i>

                            <h2>{data[1].contenido[0].titulo}</h2>
                        </div>
                        <TextBack text={data[1].contenido[0].text} />
                    </div>


                    <IniciarTramite />
                </div>
            </section>

        



        </>
    )
}
