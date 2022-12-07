import React, { useRef } from 'react'
import TextBack from '../Layer/TextBack'
import Title from '../Layer/Title'
import ApiConsult from './ApiConsult'
export default function ConsulEstado({ data }) {

    const scrollSliderRef = useRef()

    const handleScroll = (e, value) => {
        const widthScroll = scrollSliderRef.current.children[0].offsetWidth
        scrollSliderRef.current.scrollLeft = widthScroll * value
        for (let index = 0; index < e.target.parentNode.children.length; index++) {
            const element = e.target.parentNode.children[index];
            element.className = ""
        }
        e.target.className = "active"
    }

    // const fetch = async (path, method, body) => {
    //     try {
    //         const resApi = await fetch(path, {
    //             method: method,
    //             body: body
    //         })
    //         const dataApi = await resApi.json()
    //         return dataApi
    //     } catch (error) {
    //         return { data: error }
    //     }
    // }


  
    const apiConsl = "https://prod-14.westus.logic.azure.com/workflows/0906b8c176a34e159ff46fc7d654003c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=hM8kS6VVsYvIrNb4fa96JVQVQroMYIJ2hCGmTu97YkM"
    const apiSolicitar = "https://prod-130.westus.logic.azure.com:443/workflows/01336a84efaa40609b10c148140522f4/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=fLfzqZvO9Xq_t_-eykvbkBIvGBnU6-OaBX3ZO6s3GR8"

    return (


        <section className='mt-16 lg:mt-6' id='t-estado'>
            <Title data={data} />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className="border1 border1_form ">
                    {/* select form */}
                    <div className='slect-form-consulta cursor-pointer text-2xl'>
                        <div onClick={(e) => handleScroll(e, 0)} className='active'>Trámites</div>
                        <div onClick={(e) => handleScroll(e, 1)} className=''>Expedientes</div>
                    </div>
                    <div ref={scrollSliderRef} className="scroll-slider">

                        <ApiConsult path={apiConsl}/>
                        <ApiConsult path={apiSolicitar}/>
                    
                    </div>

                </div>

                <div className='dot_interes'>
                    <div className="subtitle text">
                        <i dangerouslySetInnerHTML={{ __html: data.contenido[0].icono }}></i>
                        <h3>{data.contenido[0].titulo}</h3>
                    </div>
                    <TextBack text={data.contenido[0].text} />
                </div>
            </div>

        </section>

    )
}
