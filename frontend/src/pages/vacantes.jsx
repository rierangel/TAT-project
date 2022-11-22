import React, { useEffect, useState } from 'react'
import Layer from 'src/components/Layer'
import TextBack from 'src/components/Layer/TextBack'
import Title from 'src/components/Layer/Title'
import { fetcher } from 'src/lib/Fetcher'

export default function Page() {

    const [page, setPage] = useState()
    const [pageData, setPageData] = useState()
    useEffect(() => {
        // page
        fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/19`)
            .then(res => setPage(res))
            .catch(error => console.log(error))

        // data
        fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/nosotros/vacantes/`)
            .then(res => setPageData(res))
            .catch(error => console.log(error))
    }, [])
    console.log(pageData);

    return (
        <Layer>

            <section>
                {page && <Title data={page[0]}/> }
              

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {pageData && pageData.map((v,i)=>(


                    <div key={i} className="border1 rounded-2xl px-9 py-6">
                        <h2>{v.titulo}</h2>
                        <p>{v.lugar}</p>

                        <hr className='my-4' />

                        <div className=''>
                            <h5>Requisitos</h5>
                            <TextBack text={v.requisitos}/>
                            <ul className='list'>
                            </ul>
                        </div>
                        <hr className='my-4' />
                        <div >
                            <p className='mb-1'>Enviar CV actualizado a:</p>
                            <span>{v.email}</span>
                        </div>

                        <div className='flex flex-start mt-9'>
                            <div className='dot_gray'>
                                <i><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.25C6.66498 1.25 5.35994 1.64588 4.2499 2.38758C3.13987 3.12928 2.27471 4.18349 1.76382 5.41689C1.25292 6.65029 1.11925 8.00749 1.3797 9.31686C1.64015 10.6262 2.28303 11.829 3.22703 12.773C4.17104 13.717 5.37377 14.3599 6.68314 14.6203C7.99252 14.8808 9.34972 14.7471 10.5831 14.2362C11.8165 13.7253 12.8707 12.8601 13.6124 11.7501C14.3541 10.6401 14.75 9.33502 14.75 8C14.7483 6.2103 14.0367 4.49437 12.7711 3.22886C11.5056 1.96335 9.78971 1.25165 8 1.25ZM8 13.25C6.96165 13.25 5.94662 12.9421 5.08326 12.3652C4.2199 11.7883 3.547 10.9684 3.14964 10.0091C2.75228 9.04978 2.64831 7.99418 2.85088 6.97578C3.05345 5.95738 3.55347 5.02192 4.28769 4.28769C5.02192 3.55346 5.95738 3.05345 6.97578 2.85088C7.99418 2.64831 9.04978 2.75227 10.0091 3.14963C10.9684 3.54699 11.7883 4.2199 12.3652 5.08326C12.9421 5.94661 13.25 6.96165 13.25 8C13.2484 9.39188 12.6947 10.7263 11.7105 11.7105C10.7263 12.6947 9.39188 13.2483 8 13.25ZM9.25 11C9.25 11.1989 9.17099 11.3897 9.03033 11.5303C8.88968 11.671 8.69892 11.75 8.5 11.75H8C7.80109 11.75 7.61033 11.671 7.46967 11.5303C7.32902 11.3897 7.25 11.1989 7.25 11V8.45625C7.1034 8.4054 6.97638 8.30997 6.88672 8.18333C6.79706 8.05668 6.74926 7.90517 6.75 7.75C6.75 7.55109 6.82902 7.36032 6.96967 7.21967C7.11033 7.07902 7.30109 7 7.5 7H8C8.19892 7 8.38968 7.07902 8.53033 7.21967C8.67099 7.36032 8.75 7.55109 8.75 7.75V10.2938C8.8966 10.3446 9.02363 10.44 9.11329 10.5667C9.20295 10.6933 9.25075 10.8448 9.25 11ZM6.875 5.25C6.875 5.05222 6.93365 4.85888 7.04353 4.69443C7.15342 4.52998 7.30959 4.40181 7.49232 4.32612C7.67505 4.25043 7.87611 4.23063 8.07009 4.26922C8.26407 4.3078 8.44226 4.40304 8.58211 4.54289C8.72196 4.68275 8.8172 4.86093 8.85579 5.05491C8.89437 5.24889 8.87457 5.44996 8.79888 5.63268C8.7232 5.81541 8.59502 5.97159 8.43057 6.08147C8.26613 6.19135 8.07278 6.25 7.875 6.25C7.60979 6.25 7.35543 6.14464 7.1679 5.95711C6.98036 5.76957 6.875 5.51522 6.875 5.25Z" fill="#0F1620" /></svg></i>
                                <p>Vigente hasta el {new Date(v.expiracion).toLocaleString("es", {  year: "numeric", month: "long", day: "numeric" })}
                                </p>

                                {/* {console.log()} */}
                            </div>
                        </div>


                    </div>
                    ))}


                </div>
            </section>
        </Layer>
    )
}

