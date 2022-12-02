import { data } from 'autoprefixer'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { fetcher } from 'src/lib/Fetcher'
import TextBack from '../TextBack'
import Title from '../Title'

export default function Component() {

    const [queryArray, setQueryArray] = useState()

    const [searsh, setSearsh] = useState("")
    const [currentSeccion, setCurrentSeccion] = useState([{ name: "Todas", path: "" }])
    const [newcurrentSeccion, setNewCurrentSeccion] = useState([])

    const [dataResult, setDataResult] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(queryArray);
        let lastresult = []
        for (let index = 0; index < queryArray.length; index++) {
            const element = queryArray[index];
            fetcher(element)
                .then(res => {
                    let newArray = ""
                    if (currentSeccion.name == "Todas") {
                        newArray = newcurrentSeccion[index]
                    } else {
                        newArray = currentSeccion
                    }
                    newArray["results"] = res.results
                    lastresult.push(newArray)

                    if (index == queryArray.length - 1) {
                        setDataResult(lastresult);

                    } else {

                    }

                })
                .catch(error => console.log(error))
            console.log(lastresult);
        }
        console.log(lastresult);

    }
    useEffect(() => {
        console.log(dataResult);
    }, [dataResult])

    const seccion = [
        // { name: "Todas", path: "", internalPath: "" },
        { name: "Noticias", path: "/entradas/noticias/", internalPath: "/entradas/noticias/" },
        { name: "Haciendo la diferencia", path: "/entradas/haciendo-la-diferencia/", internalPath: "/entradas/haciendo-la-diferencia/" },
        { name: "Congreso", path: "/entradas/congreso/", internalPath: "/entradas/congreso-internacional-de-derecho-tributario/" },
        { name: "Resoluciones", path: "/publicaciones/resoluciones/", internalPath: "/publicaciones/resoluciones/" },
        { name: "Ponencias", path: "/publicaciones/ponencias/", internalPath: "/publicaciones/ponencias/" },
        { name: "Revista tributaria", path: "/publicaciones/revista-tributaria/", internalPath: "/publicaciones/revista-tributaria/" },
        { name: "Memorias", path: "/publicaciones/memorias/", internalPath: "/publicaciones/memorias/" },
        { name: "Otros", path: "/publicaciones/otros/", internalPath: "/publicaciones/otros/" },
    ]

    const handleChange = () => {
        const backUrl = `${process.env.NEXT_PUBLIC_URL_BACKEND}`
        let newUrl = `?searsh=${searsh}`
        let arrayPath = []
        // todo debe modificarse onchange
        let newArrayCurrentSeccion = []
        if (currentSeccion[0].name !== "Todas") {
            let newQueryUrl = `${backUrl}${currentSeccion[0].path}${newUrl}`
            console.log(currentSeccion);
            arrayPath.push(newQueryUrl)
            newArrayCurrentSeccion.push(seccion[0])

        } else {

            for (let index = 1; index < 4; index++) {

                if (currentSeccion[0].name !== "Todas") {
                    setCurrentSeccion([])
                }
                const element = seccion[index];
                let newQueryUrl = `${backUrl}${element.path}${newUrl}`
                arrayPath.push(newQueryUrl)
                newArrayCurrentSeccion.push(element)
            }
        }

        setQueryArray(arrayPath)
        setNewCurrentSeccion(newArrayCurrentSeccion);
    }

    useEffect(() => {
        handleChange()
    }, [searsh, currentSeccion])




    return (
        <>
            <h1 className='mb-6 md:mb-2'>Realizar búsqueda</h1>

            <form onSubmit={handleSubmit} action="" className='flex flex-col md:flex-row gap-[24px] mt-2 pb-9 border-b'>
                <input

                    className='w-full'
                    type="text"
                    // placeholder={v.titulo}
                    value={searsh}
                    onChange={(e) => { setSearsh(e.target.value) }}
                />


                <div className="relative ">
                    <select
                        // value={""}
                        onChange={(e) => setCurrentSeccion(seccion.filter((o) => o.name == e.target.value))}
                        // ; setCurrentSeccion(seccion[e.target.value])
                        name="" id={"currentSeccion"} className='w-full md:w-auto inset-0 h-full '>
                        {seccion.map((ef, kf) => (
                            <option
                                onClick={() => console.log("hello")}
                                key={kf} className='bg-[#F7F8FB]' name={ef.name} value={ef.name}>{ef.name}</option>
                        ))}
                    </select>
                    <label htmlFor={"currentSeccion"} className='hidden md:flex absolute left-0 -top-8 '>{"Sección"}</label>
                </div>


                <button className='w-full md:w-auto primary gap-2'> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1641 15.8359L13.9844 12.6563C15.0113 11.3456 15.5672 9.72752 15.5625 8.0625C15.5625 6.57914 15.1226 5.1291 14.2985 3.89573C13.4744 2.66236 12.3031 1.70106 10.9326 1.13341C9.56218 0.56575 8.05418 0.417225 6.59933 0.706614C5.14447 0.996003 3.8081 1.71031 2.7592 2.7592C1.71031 3.8081 0.996003 5.14447 0.706614 6.59933C0.417225 8.05418 0.56575 9.56218 1.13341 10.9326C1.70106 12.3031 2.66236 13.4744 3.89573 14.2985C5.1291 15.1226 6.57914 15.5625 8.0625 15.5625C9.72752 15.5672 11.3456 15.0113 12.6563 13.9844L15.8359 17.1641C16.0129 17.3387 16.2514 17.4366 16.5 17.4366C16.7486 17.4366 16.9872 17.3387 17.1641 17.1641C17.2515 17.077 17.3208 16.9735 17.3681 16.8595C17.4154 16.7456 17.4398 16.6234 17.4398 16.5C17.4398 16.3766 17.4154 16.2544 17.3681 16.1405C17.3208 16.0265 17.2515 15.923 17.1641 15.8359ZM2.4375 8.0625C2.4375 6.94998 2.7674 5.86245 3.38549 4.93742C4.00357 4.01239 4.88207 3.29142 5.90991 2.86568C6.93774 2.43994 8.06874 2.32854 9.15989 2.54559C10.251 2.76263 11.2533 3.29836 12.04 4.08503C12.8266 4.8717 13.3624 5.87398 13.5794 6.96512C13.7965 8.05626 13.6851 9.18726 13.2593 10.2151C12.8336 11.2429 12.1126 12.1214 11.1876 12.7395C10.2626 13.3576 9.17502 13.6875 8.0625 13.6875C6.5713 13.6854 5.14175 13.0921 4.08731 12.0377C3.03287 10.9833 2.43957 9.55371 2.4375 8.0625Z" fill="white" />
                </svg>
                    Buscar
                </button>
            </form>

            {dataResult && dataResult[0] ? dataResult.map((v, i) => (
                <div key={i}>
                    <hr />
                    <div className='flex flex-col gap-2 py-6 md:py-9 px-3'>
                        <h2>{v.name}</h2>
                        {v.results && v.results.map((result, indexResult) => (

                            <div className="mb-5">
                                <div className='flex items-center space-x-4'>

                                    <h5>{result.titulo}</h5>
                                    {result.slug ? 
                                    <Link href={v[0].internalPath + result.slug}><a className='btn btn-xs outline'>ver mas</a></Link>
                                :
                                result.ver && <a href={process.env.NEXT_PUBLIC_HOST+result.ver} rel="noreferrer" target="_blank"  className='btn btn-xs outline'>ver mas</a> 
                                }

                                </div>

                                <div className='truncate h-[52px]'>
                                    {result.text && <TextBack text={result.text} />}
                                    {result.contenido && <TextBack text={result.contenido} />}
                                </div>

                                <hr />

                            </div>


                        ))}

                    </div>
                    <hr />
                </div>

            ))
                :

                <p className='mt-9 text-[#6B7380] text-center'>No hay resultados para mostrar.</p>
            }


        </>
    )
}
