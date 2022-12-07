import { fetcher } from 'src/lib/Fetcher'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


function Loading() {
    return (
        <div className="fixed inset-0 bg-[#0F162099] bg-opacity-60 z-[100] flex justify-center items-center">
            <div className="flex flex-col items-center py-24 px-40 bg-white rounded-2xl">
                <svg className="animate-spin  h-32 w-32 text-[#0054A4]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>

        </div>
    )
}
function Success({ setSnippet, state }) {
    return (
        <div className="fixed inset-0 bg-[#0F162099] bg-opacity-60 z-[100] flex justify-center items-center">

            <div className="flex flex-col items-center py-12 px-44 bg-white rounded-2xl">
                {state == true ?
                    <>
                        <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M75.7032 35.8594C76.2155 36.3942 76.6171 37.0249 76.885 37.7154C77.153 38.4058 77.2819 39.1423 77.2645 39.8827C77.2471 40.6231 77.0836 41.3527 76.7835 42.0298C76.4834 42.7069 76.0525 43.318 75.5157 43.8281L48 70.0781C46.9505 71.0752 45.557 71.6292 44.1094 71.625C42.6645 71.6151 41.276 71.0631 40.2188 70.0781L26.4844 56.9531C25.4028 55.9213 24.7754 54.502 24.7403 53.0076C24.7051 51.5132 25.265 50.066 26.2969 48.9844C27.3288 47.9028 28.748 47.2754 30.2424 47.2403C31.7369 47.2051 33.1841 47.765 34.2657 48.7969L44.1094 58.2188L67.7344 35.6719C68.2692 35.1596 68.9 34.758 69.5904 34.49C70.2808 34.2221 71.0173 34.0931 71.7577 34.1105C72.4981 34.128 73.2278 34.2914 73.9048 34.5915C74.5819 34.8916 75.193 35.3225 75.7032 35.8594V35.8594ZM101.625 51C101.625 61.0127 98.6559 70.8005 93.0932 79.1258C87.5304 87.451 79.6239 93.9397 70.3734 97.7714C61.1229 101.603 50.9439 102.606 41.1236 100.652C31.3033 98.6989 22.2828 93.8773 15.2027 86.7973C8.12271 79.7173 3.30115 70.6968 1.34777 60.8765C-0.605609 51.0562 0.396935 40.8772 4.22862 31.6267C8.06031 22.3761 14.549 14.4696 22.8743 8.90685C31.1995 3.34411 40.9874 0.375 51 0.375C64.4228 0.387411 77.2923 5.72509 86.7836 15.2164C96.275 24.7078 101.613 37.5772 101.625 51V51ZM90.375 51C90.375 43.2124 88.0657 35.5996 83.7392 29.1244C79.4126 22.6492 73.263 17.6024 66.0682 14.6222C58.8734 11.642 50.9564 10.8623 43.3184 12.3816C35.6803 13.9009 28.6644 17.651 23.1577 23.1577C17.651 28.6644 13.9009 35.6803 12.3816 43.3183C10.8623 50.9563 11.6421 58.8733 14.6223 66.0682C17.6025 73.263 22.6493 79.4126 29.1245 83.7391C35.5996 88.0657 43.2124 90.375 51 90.375C61.4391 90.3626 71.4471 86.2102 78.8287 78.8286C86.2102 71.4471 90.3626 61.4391 90.375 51V51Z" fill="#0054A4" />
                        </svg>
                        <h2 className='mt-5'>Mensaje enviado correctamente</h2>
                    </>
                    :
                    <>

                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60 9.375C49.9873 9.375 40.1995 12.3441 31.8743 17.9069C23.549 23.4696 17.0603 31.3761 13.2286 40.6267C9.39694 49.8772 8.39439 60.0562 10.3478 69.8764C12.3011 79.6967 17.1227 88.7172 24.2027 95.7973C31.2828 102.877 40.3033 107.699 50.1236 109.652C59.9439 111.606 70.1229 110.603 79.3734 106.771C88.6239 102.94 96.5304 96.451 102.093 88.1257C107.656 79.8005 110.625 70.0127 110.625 60C110.613 46.5772 105.275 33.7078 95.7836 24.2164C86.2923 14.7251 73.4228 9.38741 60 9.375ZM60 99.375C52.2124 99.375 44.5996 97.0657 38.1244 92.7391C31.6493 88.4125 26.6025 82.263 23.6223 75.0682C20.6421 67.8733 19.8623 59.9563 21.3816 52.3183C22.9009 44.6803 26.651 37.6644 32.1577 32.1577C37.6644 26.651 44.6803 22.9009 52.3183 21.3816C59.9563 19.8623 67.8733 20.642 75.0682 23.6222C82.263 26.6024 88.4126 31.6492 92.7391 38.1244C97.0657 44.5996 99.375 52.2124 99.375 60C99.3626 70.4391 95.2102 80.4471 87.8287 87.8286C80.4471 95.2102 70.4391 99.3626 60 99.375ZM78.9844 48.9844L67.9688 60L78.9844 71.0156C79.5088 71.5382 79.9249 72.1592 80.2088 72.8429C80.4927 73.5266 80.6388 74.2597 80.6388 75C80.6388 75.7403 80.4927 76.4734 80.2088 77.1571C79.9249 77.8408 79.5088 78.4618 78.9844 78.9844C77.9229 80.0321 76.4915 80.6196 75 80.6196C73.5086 80.6196 72.0771 80.0321 71.0156 78.9844L60 67.9688L48.9844 78.9844C47.9229 80.0321 46.4915 80.6196 45 80.6196C43.5086 80.6196 42.0771 80.0321 41.0156 78.9844C40.4912 78.4618 40.0752 77.8408 39.7913 77.1571C39.5074 76.4734 39.3612 75.7403 39.3612 75C39.3612 74.2597 39.5074 73.5266 39.7913 72.8429C40.0752 72.1592 40.4912 71.5382 41.0156 71.0156L52.0313 60L41.0156 48.9844C39.9589 47.9277 39.3653 46.4944 39.3653 45C39.3653 43.5056 39.9589 42.0723 41.0156 41.0156C42.0724 39.9589 43.5056 39.3652 45 39.3652C46.4945 39.3652 47.9277 39.9589 48.9844 41.0156L60 52.0312L71.0156 41.0156C72.0724 39.9589 73.5056 39.3652 75 39.3652C76.4945 39.3652 77.9277 39.9589 78.9844 41.0156C80.0411 42.0723 80.6348 43.5056 80.6348 45C80.6348 46.4944 80.0411 47.9277 78.9844 48.9844Z" fill="#CD4040" />
                        </svg>
                        <h2 className='mt-5'>Se produjo un error al enviar el mensaje, por favor, intentelo de mas tarde.  </h2>
                    </>
                }





                <div className="flex justify-center mt-12">
                    <button onClick={() => setSnippet(false)} className='primary btn-xxs gap-2'>
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.62663 11.3125C5.37809 11.3115 5.1398 11.2133 4.96256 11.0391L0.587564 6.6641C0.411443 6.48798 0.3125 6.24911 0.3125 6.00004C0.3125 5.75097 0.411443 5.5121 0.587564 5.33598C0.763684 5.15986 1.00255 5.06091 1.25163 5.06091C1.5007 5.06091 1.73957 5.15986 1.91569 5.33598L5.62663 9.04691L13.7126 0.960977C13.7998 0.873771 13.9033 0.804595 14.0172 0.7574C14.1312 0.710204 14.2533 0.685913 14.3766 0.685913C14.5 0.685913 14.6221 0.710204 14.736 0.7574C14.85 0.804595 14.9535 0.873771 15.0407 0.960977C15.1279 1.04818 15.1971 1.15171 15.2443 1.26565C15.2915 1.37959 15.3158 1.50171 15.3158 1.62504C15.3158 1.74837 15.2915 1.87049 15.2443 1.98443C15.1971 2.09837 15.1279 2.2019 15.0407 2.2891L6.29069 11.0391C6.11345 11.2133 5.87516 11.3115 5.62663 11.3125Z" fill="white" />
                        </svg>
                        Aceptar y cerrar ventana
                    </button>
                </div>

            </div>

        </div>
    )
}



function Contact() {



    const url = `${process.env.NEXT_PUBLIC_URL_BACKEND}/nosotros/departamentos/`
    const [data, setData] = useState([])

    useEffect(() => {
        fetcher(url).then(res => {
            setData(res)
        })

    }, [])

    const [snippet, setSnippet] = useState()


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        setSnippet("loading")
        emailjs.sendForm('Personal_Email', 'template_g5zp2qq', form.current, process.env.NEXT_PUBLIC_EMAIL_ID)
            .then((result) => {
                setSnippet("success")
            }, (error) => {
                console.log(error.text);
                setSnippet("fail")

            });
        // e.target.reset();
    };






    return (
        <>
            <h1>Contacto</h1>
            <p className='my-4'>Si tiene dudas, consultas o comentarios, no dude en comunicarse con nosotros.</p>

            <div className='flex gap-6 flex-col md:flex-row'>

                <div className="border1 border1_form w-full">

                    <form ref={form} onSubmit={sendEmail} action="" className='form'>

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
                            <input type="text" name="user_name" id="name" />
                        </div>
                        <div className='form-control w-full'>
                            <label htmlFor="tlf">Teléfono</label>
                            <input type="number" name="tlf" id="tlf" />
                        </div>
                        <div className='form-control w-full'>
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" name="from_email" id="email" />
                        </div>



                        <div className='single'>
                            <label htmlFor="messaje">Mensaje</label>
                            <textarea name="message" id="messaje" cols="30" rows="10"></textarea>
                        </div>
                        <input type="hidden" name='web_site' value={"http://tatsite.arasait.com/"} />
                        <input type="hidden" name='to_email' value={process.env.NEXT_PUBLIC_EMAIL_WEB} />


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

            {snippet == "loading" && <Loading />}
            {snippet == "success" && <Success setSnippet={setSnippet} state={true} />}
            {snippet == "fail" && <Success setSnippet={setSnippet} state={false} />}


        </>
    )
}

// snippets






export default Contact