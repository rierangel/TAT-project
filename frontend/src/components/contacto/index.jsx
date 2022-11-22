import { fetcher } from 'src/lib/Fetcher'
import { useEffect, useState } from 'react'

function Contact() {

    const url = `${process.env.NEXT_PUBLIC_URL_BACKEND}/nosotros/departamentos/`
    const [data, setData] = useState([])

    useEffect(() => {
        fetcher(url).then(res => {
            setData(res)
        })

    },[])



    return (
        <>
            <h1>Contacto</h1>
            <p className='my-4'>Si tiene dudas, consultas o comentarios, no dude en comunicarse con nosotros.</p>

            <div className='flex gap-6 flex-col md:flex-row'>

                <div className="border1 border1_form w-full">

                    <form action="" className='form'>

                        {/* <div className='dot_interes'>
                            <div className="subtitle text">
                                <i>
                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.4375 0.500061C6.76872 0.500061 5.13742 0.994912 3.74988 1.92204C2.36234 2.84916 1.28088 4.16692 0.64227 5.70867C0.00365585 7.25042 -0.163435 8.94692 0.162128 10.5836C0.487691 12.2204 1.29129 13.7238 2.47129 14.9038C3.6513 16.0838 5.15471 16.8874 6.79143 17.2129C8.42814 17.5385 10.1246 17.3714 11.6664 16.7328C13.2081 16.0942 14.5259 15.0127 15.453 13.6252C16.3802 12.2376 16.875 10.6063 16.875 8.93756C16.8729 6.70043 15.9833 4.55552 14.4014 2.97363C12.8195 1.39174 10.6746 0.50213 8.4375 0.500061ZM8.4375 15.5001C7.13956 15.5001 5.87077 15.1152 4.79157 14.3941C3.71238 13.673 2.87124 12.6481 2.37454 11.4489C1.87784 10.2498 1.74788 8.93028 2.0011 7.65728C2.25432 6.38428 2.87933 5.21495 3.79712 4.29717C4.7149 3.37939 5.88422 2.75437 7.15722 2.50116C8.43022 2.24794 9.74972 2.3779 10.9489 2.8746C12.148 3.3713 13.1729 4.21243 13.894 5.29163C14.6151 6.37083 15 7.63962 15 8.93756C14.9979 10.6774 14.3059 12.3454 13.0756 13.5757C11.8453 14.8059 10.1774 15.498 8.4375 15.5001ZM10 12.6876C10 12.9362 9.90123 13.1747 9.72542 13.3505C9.5496 13.5263 9.31114 13.6251 9.0625 13.6251H8.4375C8.18886 13.6251 7.95041 13.5263 7.77459 13.3505C7.59878 13.1747 7.5 12.9362 7.5 12.6876V9.50787C7.31675 9.44431 7.15797 9.32502 7.0459 9.16672C6.93383 9.00841 6.87407 8.81902 6.875 8.62506C6.875 8.37642 6.97378 8.13796 7.14959 7.96215C7.32541 7.78633 7.56386 7.68756 7.8125 7.68756H8.4375C8.68614 7.68756 8.9246 7.78633 9.10042 7.96215C9.27623 8.13796 9.375 8.37642 9.375 8.62506V11.8047C9.55825 11.8683 9.71703 11.9876 9.82911 12.1459C9.94118 12.3042 10.0009 12.4936 10 12.6876ZM7.03125 5.50006C7.03125 5.25283 7.10456 5.01116 7.24192 4.8056C7.37927 4.60004 7.57449 4.43982 7.8029 4.34521C8.03131 4.2506 8.28264 4.22585 8.52512 4.27408C8.76759 4.32231 8.99032 4.44136 9.16514 4.61618C9.33995 4.79099 9.459 5.01372 9.50724 5.2562C9.55547 5.49867 9.53071 5.75001 9.4361 5.97842C9.34149 6.20682 9.18128 6.40205 8.97572 6.5394C8.77015 6.67675 8.52848 6.75006 8.28125 6.75006C7.94973 6.75006 7.63179 6.61836 7.39737 6.38394C7.16295 6.14952 7.03125 5.83158 7.03125 5.50006Z" fill="#0F1620" />
                                    </svg>
                                </i>
                                <small>Los datos que proporcione serán almacenados y podrían ser usados para contactarnos con usted.</small>
                            </div>
                        </div> */}

                        <div className='form-control w-full'>
                            <label htmlFor="name">Nombre y Apellido</label>
                            <input type="text" name="" id="name" />
                        </div>
                        <div className='form-control w-full'>
                            <label htmlFor="name">Nombre y Apellido</label>
                            <input type="text" name="" id="name" />
                        </div>

                        <div className='group-inline'>
                            <div className='form-control'>
                                <label htmlFor="name">Nombre y Apellido</label>
                                <input type="text" name="" id="name" />
                            </div>
                            <div className='form-control'>

                                <label htmlFor="name">Nombre y Apellido</label>
                                <input type="text" name="" id="name" />
                            </div>
                        </div>
                        <div className='single'>
                            <label htmlFor="name">Nombre y Apellido</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>


                        <div className='flex'>


                        <button className='primary mt-4 w-full md:w-auto' type="submit">Enviar mensaje</button>
                        </div>

                    </form>
                </div>

                <div className=' w-full
                space-y-4 p-5 lg:p-9 flex flex-col rounded-xl gap-9 justify-start
                border  border-[#E0EAF4] bg-white
                '>
                    <h2>Otros Departamentos</h2>

                    {data.map((v, i) => (
                        <div key={i}>
                            <div className='mb-3 h3'>{v.titulo}</div>
                            <div className='subtitle'>
                                <div className='w-auto h-5'>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.5 20.375C6.85 20.375 0.625 14.15 0.625 6.50002C0.625381 5.13185 1.1244 3.81072 2.02864 2.78396C2.93288 1.75719 4.18035 1.0952 5.5375 0.921894C5.9407 0.871468 6.34934 0.954062 6.70131 1.15712C7.05328 1.36018 7.32933 1.6726 7.4875 2.04689L9.37188 6.43439C9.4963 6.71889 9.54775 7.02994 9.52156 7.33935C9.49537 7.64876 9.39236 7.94674 9.22187 8.20627L7.77813 10.4C8.41772 11.6087 9.40795 12.5957 10.6188 13.2313L12.7844 11.7875C13.0448 11.6155 13.344 11.5109 13.6549 11.4831C13.9658 11.4552 14.2787 11.5051 14.5656 11.6281L18.9531 13.5125C19.3274 13.6707 19.6398 13.9467 19.8429 14.2987C20.046 14.6507 20.1286 15.0593 20.0781 15.4625C19.9048 16.8197 19.2428 18.0671 18.2161 18.9714C17.1893 19.8756 15.8682 20.3746 14.5 20.375V20.375ZM5.5375 3.20002C4.78336 3.3629 4.10779 3.77924 3.62333 4.37971C3.13886 4.98017 2.87476 5.72849 2.875 6.50002C2.87748 9.5824 4.10305 12.5378 6.28263 14.7174C8.4622 16.897 11.4176 18.1225 14.5 18.125C15.2715 18.1253 16.0199 17.8612 16.6203 17.3767C17.2208 16.8922 17.6371 16.2167 17.8 15.4625L13.8625 13.775L11.6875 15.2281C11.417 15.4071 11.1048 15.5133 10.7813 15.5362C10.4577 15.5592 10.1337 15.4983 9.84063 15.3594C8.02089 14.4781 6.54882 13.0126 5.65937 11.1969C5.51634 10.9053 5.45232 10.5813 5.4737 10.2572C5.49509 9.9331 5.60114 9.62029 5.78125 9.35002L7.225 7.13752L5.5375 3.20002Z" fill="#0054A4" />
                                    </svg>
                                </div>
                                <p>{v.telefono}</p>
                            </div>
                        </div>
                    ))}



                </div>
            </div>
        </>
    )
}


export default Contact