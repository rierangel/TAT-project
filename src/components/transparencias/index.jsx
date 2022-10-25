import ToggleList from '../../lib/ToggleList'
export default function index() {

    return (
        <>  
        <div className='flex justify-between flex-col md:flex-row'>

            <div className="subtitle">
                <i>
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0344 6.21564L11.7844 0.965637C11.6415 0.826345 11.4495 0.748887 11.25 0.750012H2.25C1.85218 0.750012 1.47064 0.908047 1.18934 1.18935C0.908035 1.47066 0.75 1.85219 0.75 2.25001V18.75C0.75 19.1478 0.908035 19.5294 1.18934 19.8107C1.47064 20.092 1.85218 20.25 2.25 20.25H15.75C16.1478 20.25 16.5294 20.092 16.8107 19.8107C17.092 19.5294 17.25 19.1478 17.25 18.75V6.75001C17.2511 6.55048 17.1737 6.35851 17.0344 6.21564ZM12 3.30939L14.6906 6.00001H12V3.30939ZM15.75 18.75H2.25V2.25001H10.5V6.75001C10.5 6.94892 10.579 7.13969 10.7197 7.28034C10.8603 7.42099 11.0511 7.50001 11.25 7.50001H15.75V18.75ZM12.75 11.25C12.75 11.4489 12.671 11.6397 12.5303 11.7803C12.3897 11.921 12.1989 12 12 12H6C5.80109 12 5.61032 11.921 5.46967 11.7803C5.32902 11.6397 5.25 11.4489 5.25 11.25C5.25 11.0511 5.32902 10.8603 5.46967 10.7197C5.61032 10.579 5.80109 10.5 6 10.5H12C12.1989 10.5 12.3897 10.579 12.5303 10.7197C12.671 10.8603 12.75 11.0511 12.75 11.25ZM12.75 14.25C12.75 14.4489 12.671 14.6397 12.5303 14.7803C12.3897 14.921 12.1989 15 12 15H6C5.80109 15 5.61032 14.921 5.46967 14.7803C5.32902 14.6397 5.25 14.4489 5.25 14.25C5.25 14.0511 5.32902 13.8603 5.46967 13.7197C5.61032 13.579 5.80109 13.5 6 13.5H12C12.1989 13.5 12.3897 13.579 12.5303 13.7197C12.671 13.8603 12.75 14.0511 12.75 14.25Z" fill="#0054A4" />
                    </svg>

                </i>
                <h1>Transparencia</h1>
            </div>
            <div className='mb-6'>
                <div className='dot_gray'>
                    <i><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.25C6.66498 1.25 5.35994 1.64588 4.2499 2.38758C3.13987 3.12928 2.27471 4.18349 1.76382 5.41689C1.25292 6.65029 1.11925 8.00749 1.3797 9.31686C1.64015 10.6262 2.28303 11.829 3.22703 12.773C4.17104 13.717 5.37377 14.3599 6.68314 14.6203C7.99252 14.8808 9.34972 14.7471 10.5831 14.2362C11.8165 13.7253 12.8707 12.8601 13.6124 11.7501C14.3541 10.6401 14.75 9.33502 14.75 8C14.7483 6.2103 14.0367 4.49437 12.7711 3.22886C11.5056 1.96335 9.78971 1.25165 8 1.25ZM8 13.25C6.96165 13.25 5.94662 12.9421 5.08326 12.3652C4.2199 11.7883 3.547 10.9684 3.14964 10.0091C2.75228 9.04978 2.64831 7.99418 2.85088 6.97578C3.05345 5.95738 3.55347 5.02192 4.28769 4.28769C5.02192 3.55346 5.95738 3.05345 6.97578 2.85088C7.99418 2.64831 9.04978 2.75227 10.0091 3.14963C10.9684 3.54699 11.7883 4.2199 12.3652 5.08326C12.9421 5.94661 13.25 6.96165 13.25 8C13.2484 9.39188 12.6947 10.7263 11.7105 11.7105C10.7263 12.6947 9.39188 13.2483 8 13.25ZM9.25 11C9.25 11.1989 9.17099 11.3897 9.03033 11.5303C8.88968 11.671 8.69892 11.75 8.5 11.75H8C7.80109 11.75 7.61033 11.671 7.46967 11.5303C7.32902 11.3897 7.25 11.1989 7.25 11V8.45625C7.1034 8.4054 6.97638 8.30997 6.88672 8.18333C6.79706 8.05668 6.74926 7.90517 6.75 7.75C6.75 7.55109 6.82902 7.36032 6.96967 7.21967C7.11033 7.07902 7.30109 7 7.5 7H8C8.19892 7 8.38968 7.07902 8.53033 7.21967C8.67099 7.36032 8.75 7.55109 8.75 7.75V10.2938C8.8966 10.3446 9.02363 10.44 9.11329 10.5667C9.20295 10.6933 9.25075 10.8448 9.25 11ZM6.875 5.25C6.875 5.05222 6.93365 4.85888 7.04353 4.69443C7.15342 4.52998 7.30959 4.40181 7.49232 4.32612C7.67505 4.25043 7.87611 4.23063 8.07009 4.26922C8.26407 4.3078 8.44226 4.40304 8.58211 4.54289C8.72196 4.68275 8.8172 4.86093 8.85579 5.05491C8.89437 5.24889 8.87457 5.44996 8.79888 5.63268C8.7232 5.81541 8.59502 5.97159 8.43057 6.08147C8.26613 6.19135 8.07278 6.25 7.875 6.25C7.60979 6.25 7.35543 6.14464 7.1679 5.95711C6.98036 5.76957 6.875 5.51522 6.875 5.25Z" fill="#0F1620" /></svg></i>
                    <p>Actualizado al mes de julio del 2022</p>
                </div>
            </div>
        </div>

            <p>
                En cumplimiento a la Ley n.°6/2002 6 de 22 de enero que dicta normas para la transparencia en la gestión pública, el Tribunal Administrativo Tributario publica la documentación correspondiente.
                En caso de que requiera alguna otra información, consulte la sección de reglas de procedimientos.
                El tribunal considera como información restringida o confidencial aquella que trate sobre los procesos jurisdiccionales, pues, esta información será únicamente reservada para las partes involucradas en el proceso jurisdiccional respectivo. Aunado a ello, también será confidencial cualquier otra documentación que sea reservada porque ha sido estipulado por la Ley de Transparencia.
                En cumplimiento con lo estipulado en el Decreto Ejecutivo No. 511 de 24 de noviembre de 2017, Que adopta la política pública de Datos Abiertos de Gobierno, el Tribunal Administrativo Tributario facilita el acceso a la información pública institucional a través del sitio Datos Abiertos Panamá.
            </p>


            <section className='mt-6 space-y-6'>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"Artículo 9"}>
                        <ul className='pt-9 gap-3 space-y-3'>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>

                        </ul>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"Artículo 10"}>
                        <ul className='pt-9 gap-3 space-y-3'>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>

                        </ul>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"Artículo 11"}>
                        <ul className='pt-9 gap-3 space-y-3'>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>

                        </ul>
                    </ToggleList>
                </div>


                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"Artículo 26"}>
                        <ul className='pt-9 gap-3 space-y-3'>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>

                        </ul>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"Artículo 27"}>
                        <ul className='pt-9 gap-3 space-y-3'>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>
                            <li>
                                <a href="transparencia/article/informes-de-viajes-nacionales" className='text-[#0054A4] flex gap-2 items-center'>
                                    <span className='font-bold text-[16px] text-black'>9.1</span>
                                    <p>Reglamento interno</p>
                                </a>
                            </li>

                        </ul>
                    </ToggleList>
                </div>

            </section>
        </>
    )
}
