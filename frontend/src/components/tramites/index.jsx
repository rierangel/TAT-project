import React, { useState } from 'react'
import DropImg from 'src/lib/useDropImg'


import ConsulEstado from './ConsulEstado'
import Success from './Success'
import LocalTime from './LocalTime'


import Title from 'src/components/Layer/Title';
import TextBack from '../Layer/TextBack'



export default function Index({ data }) {

    const [imageFile, setImageFile] = useState()

    const [sussefull, setSussefull] = useState()



    const handleModal = (e) => {
        setSussefull(true)
    }




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
                                <span className='span text-base leading-6 font-bold'>Solicitud de apelación</span>
                                <div className=' p-5 border border-dashed border-[#E0EAF4] m-5 rounded-md'>
                                    <DropImg item={imageFile} setItem={setImageFile} >
                                        <div className='cursor-pointer flex-center flex-col py-7'>
                                            <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M26.8823 16.1954L15.337 27.7126C14.5646 28.5416 13.6331 29.2065 12.5981 29.6676C11.5631 30.1288 10.4458 30.3767 9.31291 30.3967C8.18 30.4167 7.05467 30.2083 6.00406 29.784C4.95344 29.3596 3.99906 28.728 3.19785 27.9268C2.39664 27.1255 1.76501 26.1712 1.34065 25.1206C0.916289 24.0699 0.707887 22.9446 0.727876 21.8117C0.747864 20.6788 0.995835 19.5615 1.45699 18.5265C1.91815 17.4915 2.58305 16.56 3.41203 15.7876L17.2073 2.02039C18.2628 0.96491 19.6944 0.371948 21.187 0.371948C22.6797 0.371948 24.1112 0.96491 25.1667 2.02039C26.2222 3.07587 26.8152 4.5074 26.8152 6.00008C26.8152 7.49275 26.2222 8.92429 25.1667 9.97977C25.1527 9.97977 25.1527 9.99383 25.1386 10.0079L11.6667 22.9595C11.3385 23.2239 10.9233 23.3559 10.5027 23.3296C10.082 23.3032 9.68648 23.1205 9.39381 22.8172C9.10114 22.514 8.93253 22.1122 8.92116 21.6909C8.90978 21.2696 9.05646 20.8593 9.33234 20.5407L22.7902 7.57508C23.1762 7.14538 23.3822 6.58366 23.3655 6.00626C23.3488 5.42886 23.1106 4.88 22.7004 4.47336C22.2901 4.06671 21.7392 3.83343 21.1616 3.82182C20.5841 3.81022 20.0242 4.02118 19.598 4.41101L5.78859 18.1782C5.3186 18.6491 4.94597 19.208 4.69197 19.8229C4.43797 20.4378 4.30757 21.0968 4.30822 21.7621C4.30954 23.1058 4.84457 24.3939 5.79562 25.343C6.74667 26.2922 8.03583 26.8247 9.3795 26.8234C10.7232 26.8221 12.0113 26.2871 12.9605 25.336L24.4917 13.8048C24.8087 13.4877 25.2387 13.3097 25.687 13.3097C26.1354 13.3097 26.5653 13.4877 26.8823 13.8048C27.1994 14.1218 27.3775 14.5517 27.3775 15.0001C27.3775 15.4484 27.1994 15.8784 26.8823 16.1954Z" fill="#CAD0D9" />
                                            </svg>
                                            <h4 className='py-[13px]'><span className='span'>Click para cargar archivos </span>o arrastre y suelte en este recuadro</h4>
                                            <h6>PNG, JPG, PDF de hasta 2MB</h6>
                                        </div>
                                    </DropImg>
                                </div>
                            </div>




                        </div>



                        <div className='mt-9 flex justify-between items-start '>

                            <div onClick={(e) => handleModal(e)} className='btn primary flex items-center gap-3 btn-xs'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.12663 11.3125C5.87809 11.3115 5.6398 11.2133 5.46256 11.0391L1.08756 6.6641C0.911443 6.48798 0.8125 6.24911 0.8125 6.00004C0.8125 5.75097 0.911443 5.5121 1.08756 5.33598C1.26368 5.15986 1.50255 5.06091 1.75163 5.06091C2.0007 5.06091 2.23957 5.15986 2.41569 5.33598L6.12663 9.04691L14.2126 0.960977C14.2998 0.873771 14.4033 0.804595 14.5172 0.7574C14.6312 0.710204 14.7533 0.685913 14.8766 0.685913C15 0.685913 15.1221 0.710204 15.236 0.7574C15.35 0.804595 15.4535 0.873771 15.5407 0.960977C15.6279 1.04818 15.6971 1.15171 15.7443 1.26565C15.7915 1.37959 15.8158 1.50171 15.8158 1.62504C15.8158 1.74837 15.7915 1.87049 15.7443 1.98443C15.6971 2.09837 15.6279 2.2019 15.5407 2.2891L6.79069 11.0391C6.61345 11.2133 6.37516 11.3115 6.12663 11.3125Z" fill="white" />
                                </svg>
                                Iniciar trámite
                            </div>

                            <button className='text-[#0054A4] flex items-center gap-3 btn-xs'>
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.875 3.75H12.0625V2.8125C12.0604 2.23297 11.8293 1.67777 11.4195 1.26798C11.0097 0.858188 10.4545 0.627059 9.875 0.625H6.125C5.54547 0.627059 4.99027 0.858188 4.58048 1.26798C4.17069 1.67777 3.93956 2.23297 3.9375 2.8125V3.75H1.125C0.87636 3.75 0.637903 3.84877 0.462087 4.02459C0.286272 4.2004 0.1875 4.43886 0.1875 4.6875C0.1875 4.93614 0.286272 5.1746 0.462087 5.35041C0.637903 5.52623 0.87636 5.625 1.125 5.625H1.4375V16.25C1.43955 16.6638 1.60483 17.06 1.89741 17.3526C2.19 17.6452 2.58623 17.8104 3 17.8125H13C13.4138 17.8104 13.81 17.6452 14.1026 17.3526C14.3952 17.06 14.5604 16.6638 14.5625 16.25V5.625H14.875C15.1236 5.625 15.3621 5.52623 15.5379 5.35041C15.7137 5.1746 15.8125 4.93614 15.8125 4.6875C15.8125 4.43886 15.7137 4.2004 15.5379 4.02459C15.3621 3.84877 15.1236 3.75 14.875 3.75ZM5.8125 2.8125C5.8125 2.72962 5.84542 2.65013 5.90403 2.59153C5.96263 2.53292 6.04212 2.5 6.125 2.5H9.875C9.95788 2.5 10.0374 2.53292 10.096 2.59153C10.1546 2.65013 10.1875 2.72962 10.1875 2.8125V3.75H5.8125V2.8125ZM12.6875 15.9375H3.3125V5.625H12.6875V15.9375ZM7.0625 8.125V13.125C7.0625 13.3736 6.96373 13.6121 6.78791 13.7879C6.6121 13.9637 6.37364 14.0625 6.125 14.0625C5.87636 14.0625 5.6379 13.9637 5.46209 13.7879C5.28627 13.6121 5.1875 13.3736 5.1875 13.125V8.125C5.1875 7.87636 5.28627 7.6379 5.46209 7.46209C5.6379 7.28627 5.87636 7.1875 6.125 7.1875C6.37364 7.1875 6.6121 7.28627 6.78791 7.46209C6.96373 7.6379 7.0625 7.87636 7.0625 8.125ZM10.8125 8.125V13.125C10.8125 13.3736 10.7137 13.6121 10.5379 13.7879C10.3621 13.9637 10.1236 14.0625 9.875 14.0625C9.62636 14.0625 9.3879 13.9637 9.21209 13.7879C9.03627 13.6121 8.9375 13.3736 8.9375 13.125V8.125C8.9375 7.87636 9.03627 7.6379 9.21209 7.46209C9.3879 7.28627 9.62636 7.1875 9.875 7.1875C10.1236 7.1875 10.3621 7.28627 10.5379 7.46209C10.7137 7.6379 10.8125 7.87636 10.8125 8.125Z" fill="#0054A4" />
                                </svg>
                                Limpiar campos
                            </button>

                        </div>

                    </form>
                </div>
            </section>

            {/* sussefull */}
            {sussefull && <Success handleModal={setSussefull} />}


        </>
    )
}
