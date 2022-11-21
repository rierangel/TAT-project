import React, { useEffect, useState } from 'react'
import Layer from 'src/components/Layer'
import QueryLayer from 'src/components/Layer/QueryLayer/QueryLayer'
import DataGrid from 'src/components/Layer/data_display/DataGrid'

import Title from 'src/components/Layer/Title'
import { fetcher } from 'src/lib/Fetcher'
import numberRange from 'src/lib/numberRange'

const title = {
    icono: `<svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.0516 8.57346L17.1766 0.698456C16.9622 0.489518 16.6743 0.373331 16.375 0.375018H2.875C2.27826 0.375018 1.70597 0.612071 1.28401 1.03403C0.862053 1.45598 0.625 2.02828 0.625 2.62502V27.375C0.625 27.9718 0.862053 28.5441 1.28401 28.966C1.70597 29.388 2.27826 29.625 2.875 29.625H23.125C23.7217 29.625 24.294 29.388 24.716 28.966C25.1379 28.5441 25.375 27.9718 25.375 27.375V9.37502C25.3767 9.07571 25.2605 8.78777 25.0516 8.57346ZM17.5 4.21408L21.5359 8.25002H17.5V4.21408ZM23.125 27.375H2.875V2.62502H15.25V9.37502C15.25 9.67339 15.3685 9.95953 15.5795 10.1705C15.7905 10.3815 16.0766 10.5 16.375 10.5H23.125V27.375ZM18.625 16.125C18.625 16.4234 18.5065 16.7095 18.2955 16.9205C18.0845 17.1315 17.7984 17.25 17.5 17.25H8.5C8.20163 17.25 7.91548 17.1315 7.7045 16.9205C7.49353 16.7095 7.375 16.4234 7.375 16.125C7.375 15.8266 7.49353 15.5405 7.7045 15.3295C7.91548 15.1185 8.20163 15 8.5 15H17.5C17.7984 15 18.0845 15.1185 18.2955 15.3295C18.5065 15.5405 18.625 15.8266 18.625 16.125ZM18.625 20.625C18.625 20.9234 18.5065 21.2095 18.2955 21.4205C18.0845 21.6315 17.7984 21.75 17.5 21.75H8.5C8.20163 21.75 7.91548 21.6315 7.7045 21.4205C7.49353 21.2095 7.375 20.9234 7.375 20.625C7.375 20.3266 7.49353 20.0405 7.7045 19.8295C7.91548 19.6185 8.20163 19.5 8.5 19.5H17.5C17.7984 19.5 18.0845 19.6185 18.2955 19.8295C18.5065 20.0405 18.625 20.3266 18.625 20.625Z" fill="#0054A4"></path>
    </svg>`,
    titulo:"Manuales de procedimientos"
}




export default function Component() {


  const [page, setPage] = useState()
  const [data, setData] = useState()

  useEffect(() => {
    // page
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/9`)
      .then(res => setPage(res))
      .catch(error => console.log(error))

    // data
    fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/transparencia/A094_ManualesDeProcedimientosViewSet/`)
      .then(res => setData(res))
      .catch(error => console.log(error))

  }, [])


  
  const tag_year = numberRange(2011, new Date().getFullYear() + 1)

  const buscador = [
    {
      titulo: "Palabra o Frase Clave",
      path: "search",
    },
    // {
    //   titulo: "año",
    //   path: "year",
    //   fields: tag_year
    // }

  ]

  const path = `transparencia/A094_ManualesDeProcedimientosViewSet`
  const query = `${process.env.NEXT_PUBLIC_URL_BACKEND}/${path}/`
  const ListQuery = QueryLayer(DataGrid, data, buscador, query, path)

  return (
    <Layer>
      {page && <Title data={title} />}
      <ListQuery />
    </Layer>
  )
}
