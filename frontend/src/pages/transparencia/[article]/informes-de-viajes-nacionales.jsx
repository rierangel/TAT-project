import React from 'react'
import Layer from 'src/components/Layer'
import DataGrid from 'src/components/Layer/data_display/DataGrid'

export default function informes_nacionales() {

    const data = [
        {
            Nombre:"Jorge Pinzón",
            Cargo: "Cargo",
            Destino:"Veraguas",
            Participación:"Conductor asignado para trasladar a la jefa de Recursos Humanos.",
            Salida:"01/07/2022",
            Regreso:"02/07/2022",
            Costo:"10.00",
            Viático	:"106.00",
            Informe:"http://www.tribunaltributario.gob.pa/transparencia/download-convenio/Convenio_Marco_MEF-TAT.pdf",

        },
        {
            Nombre:"Jorge Pinzón",
            Cargo: "Cargo",
            Destino:"Veraguas",
            Participación:"Conductor asignado para trasladar a la jefa de Recursos Humanos.",
            Salida:"01/07/2022",
            Regreso:"02/07/2022",
            Costo:"10.00",
            Viático	:"106.00",
            Informe:"http://www.tribunaltributario.gob.pa/transparencia/download-convenio/Convenio_Marco_MEF-TAT.pdf",

        },
        {
            Nombre:"Jorge Pinzón",
            Cargo: "Cargo",
            Destino:"Veraguas",
            Participación:"Conductor asignado para trasladar a la jefa de Recursos Humanos.",
            Salida:"01/07/2022",
            Regreso:"02/07/2022",
            Costo:"10.00",
            Viático	:"106.00",
            Informe:"http://www.tribunaltributario.gob.pa/transparencia/download-convenio/Convenio_Marco_MEF-TAT.pdf",

        }
        ,
        {
            Nombre:"Jorge Pinzón",
            Cargo: "Cargo",
            Destino:"Veraguas",
            Participación:"Conductor asignado para trasladar a la jefa de Recursos Humanos.",
            Salida:"01/07/2022",
            Regreso:"02/07/2022",
            Costo:"10.00",
            Viático	:"106.00",
            Informe:"http://www.tribunaltributario.gob.pa/transparencia/download-convenio/Convenio_Marco_MEF-TAT.pdf",

        }
        ,
        {
            Nombre:"Jorge Pinzón",
            Cargo: "Cargo",
            Destino:"Veraguas",
            Participación:"Conductor asignado para trasladar a la jefa de Recursos Humanos.",
            Salida:"01/07/2022",
            Regreso:"02/07/2022",
            Costo:"10.00",
            Viático	:"106.00",
            Informe:"http://www.tribunaltributario.gob.pa/transparencia/download-convenio/Convenio_Marco_MEF-TAT.pdf",

        }
    ]

    
    return (
        <Layer>
            <div className='flex justify-between items-center'>

                <div className="subtitle">
                    <i><svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.0516 8.57346L17.1766 0.698456C16.9622 0.489518 16.6743 0.373331 16.375 0.375018H2.875C2.27826 0.375018 1.70597 0.612071 1.28401 1.03403C0.862053 1.45598 0.625 2.02828 0.625 2.62502V27.375C0.625 27.9718 0.862053 28.5441 1.28401 28.966C1.70597 29.388 2.27826 29.625 2.875 29.625H23.125C23.7217 29.625 24.294 29.388 24.716 28.966C25.1379 28.5441 25.375 27.9718 25.375 27.375V9.37502C25.3767 9.07571 25.2605 8.78777 25.0516 8.57346ZM17.5 4.21408L21.5359 8.25002H17.5V4.21408ZM23.125 27.375H2.875V2.62502H15.25V9.37502C15.25 9.67339 15.3685 9.95953 15.5795 10.1705C15.7905 10.3815 16.0766 10.5 16.375 10.5H23.125V27.375ZM18.625 16.125C18.625 16.4234 18.5065 16.7095 18.2955 16.9205C18.0845 17.1315 17.7984 17.25 17.5 17.25H8.5C8.20163 17.25 7.91548 17.1315 7.7045 16.9205C7.49353 16.7095 7.375 16.4234 7.375 16.125C7.375 15.8266 7.49353 15.5405 7.7045 15.3295C7.91548 15.1185 8.20163 15 8.5 15H17.5C17.7984 15 18.0845 15.1185 18.2955 15.3295C18.5065 15.5405 18.625 15.8266 18.625 16.125ZM18.625 20.625C18.625 20.9234 18.5065 21.2095 18.2955 21.4205C18.0845 21.6315 17.7984 21.75 17.5 21.75H8.5C8.20163 21.75 7.91548 21.6315 7.7045 21.4205C7.49353 21.2095 7.375 20.9234 7.375 20.625C7.375 20.3266 7.49353 20.0405 7.7045 19.8295C7.91548 19.6185 8.20163 19.5 8.5 19.5H17.5C17.7984 19.5 18.0845 19.6185 18.2955 19.8295C18.5065 20.0405 18.625 20.3266 18.625 20.625Z" fill="#0054A4" />
                    </svg>
                    </i>
                    <h1>Informes de Viajes Nacionales</h1>
                </div>

                <div className="dot_gray">
                    <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0.5625C7.33122 0.5625 5.69992 1.05735 4.31238 1.98448C2.92484 2.9116 1.84338 4.22936 1.20477 5.77111C0.566156 7.31286 0.399065 9.00936 0.724628 10.6461C1.05019 12.2828 1.85379 13.7862 3.03379 14.9662C4.2138 16.1462 5.71721 16.9498 7.35393 17.2754C8.99064 17.6009 10.6871 17.4338 12.2289 16.7952C13.7706 16.1566 15.0884 15.0752 16.0155 13.6876C16.9427 12.3001 17.4375 10.6688 17.4375 9C17.4354 6.76287 16.5458 4.61796 14.9639 3.03607C13.382 1.45418 11.2371 0.564569 9 0.5625ZM9 15.5625C7.70206 15.5625 6.43327 15.1776 5.35407 14.4565C4.27488 13.7354 3.43374 12.7105 2.93704 11.5114C2.44034 10.3122 2.31038 8.99272 2.5636 7.71972C2.81682 6.44672 3.44183 5.27739 4.35962 4.35961C5.2774 3.44183 6.44672 2.81681 7.71972 2.5636C8.99272 2.31038 10.3122 2.44034 11.5114 2.93704C12.7105 3.43374 13.7354 4.27487 14.4565 5.35407C15.1776 6.43327 15.5625 7.70206 15.5625 9C15.5604 10.7398 14.8684 12.4078 13.6381 13.6381C12.4078 14.8684 10.7399 15.5604 9 15.5625ZM10.5625 12.75C10.5625 12.9986 10.4637 13.2371 10.2879 13.4129C10.1121 13.5887 9.87364 13.6875 9.625 13.6875H9C8.75136 13.6875 8.51291 13.5887 8.33709 13.4129C8.16128 13.2371 8.0625 12.9986 8.0625 12.75V9.57031C7.87925 9.50675 7.72047 9.38746 7.6084 9.22916C7.49633 9.07085 7.43657 8.88146 7.4375 8.6875C7.4375 8.43886 7.53628 8.2004 7.71209 8.02459C7.88791 7.84877 8.12636 7.75 8.375 7.75H9C9.24864 7.75 9.4871 7.84877 9.66292 8.02459C9.83873 8.2004 9.9375 8.43886 9.9375 8.6875V11.8672C10.1208 11.9308 10.2795 12.05 10.3916 12.2083C10.5037 12.3666 10.5634 12.556 10.5625 12.75ZM7.59375 5.5625C7.59375 5.31527 7.66706 5.0736 7.80442 4.86804C7.94177 4.66248 8.13699 4.50226 8.3654 4.40765C8.59381 4.31304 8.84514 4.28829 9.08762 4.33652C9.33009 4.38475 9.55282 4.5038 9.72764 4.67862C9.90245 4.85343 10.0215 5.07616 10.0697 5.31864C10.118 5.56111 10.0932 5.81245 9.9986 6.04085C9.90399 6.26926 9.74378 6.46449 9.53822 6.60184C9.33265 6.73919 9.09098 6.8125 8.84375 6.8125C8.51223 6.8125 8.19429 6.6808 7.95987 6.44638C7.72545 6.21196 7.59375 5.89402 7.59375 5.5625Z" fill="#0F1620" />
                    </svg>
                    </i>
                    Actualizado al mes de julio del 2022
                </div>
            </div>

            <DataGrid data={data} btn={["Informe"]} downld={true}/>


        </Layer>
    )
}
