import React, { useState } from 'react'
import DropImg from 'src/lib/useDropImg'
import SvgFondo from '../icons/fondo'

import SvgFondo2 from '../icons/fondo2'
import ConsulEstado from './ConsulEstado'

export default function index() {

    const [imageFile, setImageFile] = useState()
    const [imageFile2, setImageFile2] = useState()
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

            <section>
                <div className="subtitle">
                    <i><svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.375 9.375C25.3772 9.22532 25.3484 9.07681 25.2903 8.93885C25.2322 8.80088 25.1461 8.67646 25.0375 8.57344L17.1766 0.698438L17.0922 0.628125H17.0641L16.9937 0.585938H16.9797L16.9094 0.529688H16.8953L16.8109 0.4875H16.7969L16.6984 0.445313H2.875C2.29025 0.445027 1.72835 0.672404 1.30836 1.07927C0.888369 1.48614 0.643273 2.04053 0.625 2.625V27.375C0.625 27.9717 0.862053 28.544 1.28401 28.966C1.70597 29.3879 2.27826 29.625 2.875 29.625H23.125C23.7217 29.625 24.294 29.3879 24.716 28.966C25.1379 28.544 25.375 27.9717 25.375 27.375V9.375ZM17.5 4.21406L21.5359 8.25H17.5V4.21406ZM23.125 27.375H2.875V2.625H15.25V9.375C15.25 9.67337 15.3685 9.95952 15.5795 10.1705C15.7905 10.3815 16.0766 10.5 16.375 10.5H23.125V27.375ZM17.7391 17.0109C17.9503 17.2242 18.0688 17.5123 18.0688 17.8125C18.0688 18.1127 17.9503 18.4008 17.7391 18.6141C17.524 18.822 17.2366 18.9382 16.9375 18.9382C16.6384 18.9382 16.351 18.822 16.1359 18.6141L14.125 16.5891V22.875C14.125 23.1734 14.0065 23.4595 13.7955 23.6705C13.5845 23.8815 13.2984 24 13 24C12.7016 24 12.4155 23.8815 12.2045 23.6705C11.9935 23.4595 11.875 23.1734 11.875 22.875V16.5891L9.86406 18.6141C9.64548 18.7935 9.36798 18.8851 9.08555 18.8713C8.80312 18.8574 8.53594 18.739 8.33599 18.539C8.13604 18.3391 8.01761 18.0719 8.00373 17.7894C7.98986 17.507 8.08154 17.2295 8.26094 17.0109L12.1984 13.0734L12.2828 13.0031L12.325 12.975L12.3812 12.9328L12.4234 12.9047L12.4656 12.8766H12.5219L12.5641 12.8484H12.6203L12.6766 12.8203H13.3234L13.3797 12.8484H13.4359L13.4781 12.8766H13.5344L13.5766 12.9047L13.6187 12.9328L13.675 12.975L13.7172 13.0031L13.8016 13.0734L17.7391 17.0109Z" fill="#0054A4" /></svg></i>
                    <h1>Iniciar Trámite de Apelación</h1>
                </div>
                <div className="border1 p-9 rounded-xl">
                    <div className="dot_interes">
                        <div className="subtitle">
                            <i><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5234 0.300049C8.52091 0.300049 6.56334 0.89387 4.89829 2.00642C3.23325 3.11897 1.9355 4.70028 1.16916 6.55038C0.402825 8.40048 0.202316 10.4363 0.592991 12.4003C0.983666 14.3644 1.94798 16.1685 3.36399 17.5845C4.77999 19.0005 6.58409 19.9648 8.54815 20.3555C10.5122 20.7462 12.548 20.5457 14.3981 19.7793C16.2482 19.013 17.8295 17.7152 18.9421 16.0502C20.0546 14.3851 20.6484 12.4276 20.6484 10.425C20.646 7.74049 19.5784 5.1666 17.6802 3.26833C15.7819 1.37007 13.208 0.302531 10.5234 0.300049ZM10.5234 18.3C8.96591 18.3 7.44336 17.8382 6.14833 16.9729C4.85329 16.1076 3.84393 14.8776 3.24789 13.4387C2.65185 11.9997 2.4959 10.4163 2.79976 8.88871C3.10362 7.36111 3.85364 5.95792 4.95498 4.85658C6.05631 3.75524 7.45951 3.00522 8.98711 2.70136C10.5147 2.39751 12.0981 2.55346 13.5371 3.1495C14.976 3.74554 16.2059 4.7549 17.0713 6.04993C17.9366 7.34497 18.3984 8.86752 18.3984 10.425C18.396 12.5129 17.5655 14.5145 16.0892 15.9908C14.6129 17.4671 12.6113 18.2976 10.5234 18.3ZM12.3984 14.925C12.3984 15.2234 12.2799 15.5096 12.0689 15.7205C11.858 15.9315 11.5718 16.05 11.2734 16.05H10.5234C10.2251 16.05 9.93892 15.9315 9.72795 15.7205C9.51697 15.5096 9.39844 15.2234 9.39844 14.925V11.1094C9.17854 11.0331 8.98801 10.89 8.85352 10.7C8.71903 10.5101 8.64732 10.2828 8.64844 10.05C8.64844 9.75168 8.76697 9.46553 8.97795 9.25455C9.18892 9.04358 9.47507 8.92505 9.77344 8.92505H10.5234C10.8218 8.92505 11.108 9.04358 11.3189 9.25455C11.5299 9.46553 11.6484 9.75168 11.6484 10.05V13.8657C11.8683 13.942 12.0589 14.0851 12.1934 14.2751C12.3279 14.465 12.3996 14.6923 12.3984 14.925ZM8.83594 6.30005C8.83594 6.00338 8.92391 5.71337 9.08874 5.46669C9.25356 5.22002 9.48783 5.02776 9.76192 4.91423C10.036 4.8007 10.3376 4.77099 10.6286 4.82887C10.9195 4.88675 11.1868 5.02961 11.3966 5.23939C11.6064 5.44917 11.7492 5.71644 11.8071 6.00741C11.865 6.29838 11.8353 6.59998 11.7218 6.87407C11.6082 7.14816 11.416 7.38243 11.1693 7.54725C10.9226 7.71208 10.6326 7.80005 10.3359 7.80005C9.93812 7.80005 9.55659 7.64201 9.27528 7.36071C8.99398 7.0794 8.83594 6.69787 8.83594 6.30005Z" fill="#0F1620" /></svg></i>
                            <h2>Importante</h2>
                        </div>
                        <ul>
                            <li>Posiciona la cámara  de manera que los datos de tu cédula se vean bien legibles al frente (adelante) y dorso (atrás).</li>
                            <li>La fotografía de los datos de la cédula de identidad deben ser legibles. (No debe reflejar la luz, ni debe estar borrosa ya que se debe observar la fotografía y el texto legible).</li>
                        </ul>
                    </div>


                    <form action="" className="form">

                        {/* Apoderado */}
                        <div className='mt-9'>
                            <h1 className='mb-6 '>Apoderado</h1>
                            <div className="group-inline">
                                <div className="form-control">
                                    <label htmlFor="name_1">Nombre o Razón Social</label>
                                    <input type="text" id='name_1' />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="name_1">Cédula o RUC</label>
                                    <input type="text" id='name_1' />
                                </div>
                            </div>
                            <div className="group-inline">
                                <div className="form-control">
                                    <label htmlFor="name_1">Teléfono</label>
                                    <input type="text" id='name_1' />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="name_1">Domicilio</label>
                                    <input type="text" id='name_1' />
                                </div>
                            </div>
                            <div className="group-inline">
                                <div className="form-control">
                                    <label htmlFor="name_1">Correo Electrónico</label>
                                    <input type="email" id='name_1' />
                                </div>

                            </div>
                        </div>

                        {/* contribullente */}
                        <div className='mt-9'>
                            <h1 className='mb-6 '>Contribuyente</h1>
                            <div className="group-inline">
                                <div className="form-control">
                                    <label htmlFor="name_1">Nombre o Razón Social</label>
                                    <input type="text" id='name_1' />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="name_1">RUC</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="group-inline">
                                <div className="form-control">
                                    <label htmlFor="name_1">D.V.</label>
                                    <select name="" id="">
                                        <option value="undefine" >Seleccione</option>
                                        <option value="">option1</option>
                                        <option value="">option2</option>
                                        <option value="">option3</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="name_1">Tipo Contribuyente</label>
                                    <select name="" id="">
                                        <option value="undefine" >Seleccione</option>
                                        <option value="">option1</option>
                                        <option value="">option2</option>
                                        <option value="">option3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="group-inline">
                                <div className="form-control">
                                    <label htmlFor="name_1">Provincia</label>
                                    <select name="" id="">
                                        <option value="undefine" >Seleccione</option>
                                        <option value="">option1</option>
                                        <option value="">option2</option>
                                        <option value="">option3</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        {/* Origen */}
                        <div className='mt-9'>
                            <h1 className='mb-6 '>Origen</h1>
                            <div className="group-inline">
                                <div className="form-control">
                                    <label htmlFor="name_1">Nro. Res. Apelada</label>
                                    <input type="text" id='name_1' />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="name_1">Fecha Res. Apelada</label>
                                    <input type={"date"} placeholder="DD  /  MM  /  AAAA" />
                                </div>
                            </div>
                            <div className="group-inline">
                                <div className="form-control">
                                    <label htmlFor="name_1">Nro. Res. Confirmatoria</label>
                                    <input type="text" />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="name_1">Fecha Res. Confirmatoria</label>
                                    <input type={"date"} placeholder="DD  /  MM  /  AAAA" />
                                </div>
                            </div>
                            <div className="group-inline">
                                <div className="form-control">
                                    <label htmlFor="name_1">Período</label>
                                    <select name="" id="">
                                        <option value="undefine" >Seleccione</option>
                                        <option value="">option1</option>
                                        <option value="">option2</option>
                                        <option value="">option3</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="name_1">Materia</label>
                                    <select name="" id="">
                                        <option value="undefine" >Seleccione</option>
                                        <option value="">option1</option>
                                        <option value="">option2</option>
                                        <option value="">option3</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        {/* Origen */}
                        <div className='mt-9'>
                            <h1 className='mb-6 '>Adjuntar Documentos</h1>
                            <div className="single">
                                <span className='text-base leading-6 font-bold'>Adjuntar foto de cédula (frente)</span>
                                <div className='p-5 border border-dashed border-[#E0EAF4] m-5 rounded-md'>
                                    <DropImg item={imageFile} setItem={setImageFile} >
                                        <div className='flex-center flex-col py-7'>
                                            <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M26.8823 16.1954L15.337 27.7126C14.5646 28.5416 13.6331 29.2065 12.5981 29.6676C11.5631 30.1288 10.4458 30.3767 9.31291 30.3967C8.18 30.4167 7.05467 30.2083 6.00406 29.784C4.95344 29.3596 3.99906 28.728 3.19785 27.9268C2.39664 27.1255 1.76501 26.1712 1.34065 25.1206C0.916289 24.0699 0.707887 22.9446 0.727876 21.8117C0.747864 20.6788 0.995835 19.5615 1.45699 18.5265C1.91815 17.4915 2.58305 16.56 3.41203 15.7876L17.2073 2.02039C18.2628 0.96491 19.6944 0.371948 21.187 0.371948C22.6797 0.371948 24.1112 0.96491 25.1667 2.02039C26.2222 3.07587 26.8152 4.5074 26.8152 6.00008C26.8152 7.49275 26.2222 8.92429 25.1667 9.97977C25.1527 9.97977 25.1527 9.99383 25.1386 10.0079L11.6667 22.9595C11.3385 23.2239 10.9233 23.3559 10.5027 23.3296C10.082 23.3032 9.68648 23.1205 9.39381 22.8172C9.10114 22.514 8.93253 22.1122 8.92116 21.6909C8.90978 21.2696 9.05646 20.8593 9.33234 20.5407L22.7902 7.57508C23.1762 7.14538 23.3822 6.58366 23.3655 6.00626C23.3488 5.42886 23.1106 4.88 22.7004 4.47336C22.2901 4.06671 21.7392 3.83343 21.1616 3.82182C20.5841 3.81022 20.0242 4.02118 19.598 4.41101L5.78859 18.1782C5.3186 18.6491 4.94597 19.208 4.69197 19.8229C4.43797 20.4378 4.30757 21.0968 4.30822 21.7621C4.30954 23.1058 4.84457 24.3939 5.79562 25.343C6.74667 26.2922 8.03583 26.8247 9.3795 26.8234C10.7232 26.8221 12.0113 26.2871 12.9605 25.336L24.4917 13.8048C24.8087 13.4877 25.2387 13.3097 25.687 13.3097C26.1354 13.3097 26.5653 13.4877 26.8823 13.8048C27.1994 14.1218 27.3775 14.5517 27.3775 15.0001C27.3775 15.4484 27.1994 15.8784 26.8823 16.1954Z" fill="#CAD0D9" />
                                            </svg>
                                            <h4 className='py-[13px]'><span className='text-[#0054A4]'>Click para cargar archivos </span>o arrastre y suelte en este recuadro</h4>
                                            <h6>PNG, JPG, PDF de hasta 2MB</h6>
                                        </div>
                                    </DropImg>
                                </div>
                            </div>

                            <div className="single">
                                <span className='text-base leading-6 font-bold'>Adjuntar foto de cédula (dorso)</span>
                                <div className='p-5 border border-dashed border-[#E0EAF4] m-5 rounded-md'>
                                    <DropImg item={imageFile2} setItem={setImageFile2} >
                                        <div className='flex-center flex-col py-7'>
                                            <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M26.8823 16.1954L15.337 27.7126C14.5646 28.5416 13.6331 29.2065 12.5981 29.6676C11.5631 30.1288 10.4458 30.3767 9.31291 30.3967C8.18 30.4167 7.05467 30.2083 6.00406 29.784C4.95344 29.3596 3.99906 28.728 3.19785 27.9268C2.39664 27.1255 1.76501 26.1712 1.34065 25.1206C0.916289 24.0699 0.707887 22.9446 0.727876 21.8117C0.747864 20.6788 0.995835 19.5615 1.45699 18.5265C1.91815 17.4915 2.58305 16.56 3.41203 15.7876L17.2073 2.02039C18.2628 0.96491 19.6944 0.371948 21.187 0.371948C22.6797 0.371948 24.1112 0.96491 25.1667 2.02039C26.2222 3.07587 26.8152 4.5074 26.8152 6.00008C26.8152 7.49275 26.2222 8.92429 25.1667 9.97977C25.1527 9.97977 25.1527 9.99383 25.1386 10.0079L11.6667 22.9595C11.3385 23.2239 10.9233 23.3559 10.5027 23.3296C10.082 23.3032 9.68648 23.1205 9.39381 22.8172C9.10114 22.514 8.93253 22.1122 8.92116 21.6909C8.90978 21.2696 9.05646 20.8593 9.33234 20.5407L22.7902 7.57508C23.1762 7.14538 23.3822 6.58366 23.3655 6.00626C23.3488 5.42886 23.1106 4.88 22.7004 4.47336C22.2901 4.06671 21.7392 3.83343 21.1616 3.82182C20.5841 3.81022 20.0242 4.02118 19.598 4.41101L5.78859 18.1782C5.3186 18.6491 4.94597 19.208 4.69197 19.8229C4.43797 20.4378 4.30757 21.0968 4.30822 21.7621C4.30954 23.1058 4.84457 24.3939 5.79562 25.343C6.74667 26.2922 8.03583 26.8247 9.3795 26.8234C10.7232 26.8221 12.0113 26.2871 12.9605 25.336L24.4917 13.8048C24.8087 13.4877 25.2387 13.3097 25.687 13.3097C26.1354 13.3097 26.5653 13.4877 26.8823 13.8048C27.1994 14.1218 27.3775 14.5517 27.3775 15.0001C27.3775 15.4484 27.1994 15.8784 26.8823 16.1954Z" fill="#CAD0D9" />
                                            </svg>
                                            <h4 className='py-[13px]'><span className='text-[#0054A4]'>Click para cargar archivos </span>o arrastre y suelte en este recuadro</h4>
                                            <h6>PNG, JPG, PDF de hasta 2MB</h6>
                                        </div>
                                    </DropImg>
                                </div>
                            </div>



                        </div>




                    </form>
                </div>

            </section>

        </>
    )
}
