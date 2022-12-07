import React, { useEffect, useState } from 'react'
import Layer from 'src/components/Layer'
import FileList from 'src/components/Layer/data_display/FileList'
import QueryLayer from 'src/components/Layer/QueryLayer/QueryLayer'

import Title from 'src/components/Layer/Title'
import { fetcher } from 'src/lib/Fetcher'

export default function Page() {

  const [data, setData] = useState()

  useEffect(() => {


    // data
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/nosotros/otras-instituciones/`)
      .then(res => setData(res))
      .catch(error => console.log(error))

  }, [])

  useEffect(()=>{
    console.log(data);
  },[data])

  const path = `nosotros/otras-instituciones`
  const query = `${process.env.NEXT_PUBLIC_URL_BACKEND}/${path}/`
  const ListQuery = QueryLayer(FileList, data, false, query, path)

  const page = {
    "id": 32,
    "contenido": [],
    "titulo": "otras instituciones",
    "icono": `<svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M25.0516 8.57346L17.1766 0.698456C16.9622 0.489518 16.6743 0.373331 16.375 0.375018H2.875C2.27826 0.375018 1.70597 0.612071 1.28401 1.03403C0.862053 1.45598 0.625 2.02828 0.625 2.62502V27.375C0.625 27.9718 0.862053 28.5441 1.28401 28.966C1.70597 29.388 2.27826 29.625 2.875 29.625H23.125C23.7217 29.625 24.294 29.388 24.716 28.966C25.1379 28.5441 25.375 27.9718 25.375 27.375V9.37502C25.3767 9.07571 25.2605 8.78777 25.0516 8.57346ZM17.5 4.21408L21.5359 8.25002H17.5V4.21408ZM23.125 27.375H2.875V2.62502H15.25V9.37502C15.25 9.67339 15.3685 9.95953 15.5795 10.1705C15.7905 10.3815 16.0766 10.5 16.375 10.5H23.125V27.375ZM18.625 16.125C18.625 16.4234 18.5065 16.7095 18.2955 16.9205C18.0845 17.1315 17.7984 17.25 17.5 17.25H8.5C8.20163 17.25 7.91548 17.1315 7.7045 16.9205C7.49353 16.7095 7.375 16.4234 7.375 16.125C7.375 15.8266 7.49353 15.5405 7.7045 15.3295C7.91548 15.1185 8.20163 15 8.5 15H17.5C17.7984 15 18.0845 15.1185 18.2955 15.3295C18.5065 15.5405 18.625 15.8266 18.625 16.125ZM18.625 20.625C18.625 20.9234 18.5065 21.2095 18.2955 21.4205C18.0845 21.6315 17.7984 21.75 17.5 21.75H8.5C8.20163 21.75 7.91548 21.6315 7.7045 21.4205C7.49353 21.2095 7.375 20.9234 7.375 20.625C7.375 20.3266 7.49353 20.0405 7.7045 19.8295C7.91548 19.6185 8.20163 19.5 8.5 19.5H17.5C17.7984 19.5 18.0845 19.6185 18.2955 19.8295C18.5065 20.0405 18.625 20.3266 18.625 20.625Z" fill="#0054A4"></path></svg>`,
    "imagen": null,
    "text": "",
    "posicion": 1,
    "pagina": 25
}
  return (
    <Layer>
      <Title data={page} />

      <div className="border-t my-9">
        <ul className='file-list '>
          {data && data.map((v, i) => (
            <li key={i}>
              <a href={v.url}  rel="noreferrer" target="_blank"  className="flex items-center gap-4 text-[#0054A4] text-base font-medium mr-auto">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.125 2V11.75C15.125 12.0484 15.0065 12.3345 14.7955 12.5455C14.5845 12.7565 14.2984 12.875 14 12.875C13.7016 12.875 13.4155 12.7565 13.2045 12.5455C12.9935 12.3345 12.875 12.0484 12.875 11.75V4.71875L2.79689 14.7969C2.5846 15.0064 2.29831 15.1239 2.00002 15.1239C1.70172 15.1239 1.41544 15.0064 1.20314 14.7969C1.09826 14.6924 1.01504 14.5682 0.958263 14.4314C0.901482 14.2947 0.872253 14.1481 0.872253 14C0.872253 13.8519 0.901482 13.7053 0.958263 13.5686C1.01504 13.4318 1.09826 13.3076 1.20314 13.2031L11.2813 3.125H4.25002C3.95165 3.125 3.6655 3.00647 3.45452 2.7955C3.24354 2.58452 3.12502 2.29837 3.12502 2C3.12502 1.70163 3.24354 1.41548 3.45452 1.2045C3.6655 0.993526 3.95165 0.875 4.25002 0.875H14C14.2984 0.875 14.5845 0.993526 14.7955 1.2045C15.0065 1.41548 15.125 1.70163 15.125 2Z" fill="#0054A4" />
                </svg>
                {v.titulo}
              </a>
            
            </li>
          ))}
        </ul>

      </div>
    </Layer>
  )
}
