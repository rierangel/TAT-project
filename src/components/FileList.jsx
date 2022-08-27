import React from 'react'
import Pagination from './Pagination';

export default function FileList() {

  const cont = [...Array(10).keys()];

  return (
    <>
      <h1 className="mb-5">Ponencias</h1>

      <form action="" className='flex gap-[24px] mt-2'>

        <input className='w-1/2'
          type="text"
          placeholder='Escriba su búsqueda'
        />

        <div className="relative">
          <label htmlFor="seccion" className='absolute bottom-[55px] font-bold'>Sección</label>
          <select name="" id="">

            <option className='hidden' >Seleccione</option>
            <option className='bg-[#F7F8FB]' value="select">sadsad</option>
            <option className='bg-[#F7F8FB]' value="select">sadsad</option>
          </select>
        </div>

        <button className='primary px-6'> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.1641 15.8359L13.9844 12.6563C15.0113 11.3456 15.5672 9.72752 15.5625 8.0625C15.5625 6.57914 15.1226 5.1291 14.2985 3.89573C13.4744 2.66236 12.3031 1.70106 10.9326 1.13341C9.56218 0.56575 8.05418 0.417225 6.59933 0.706614C5.14447 0.996003 3.8081 1.71031 2.7592 2.7592C1.71031 3.8081 0.996003 5.14447 0.706614 6.59933C0.417225 8.05418 0.56575 9.56218 1.13341 10.9326C1.70106 12.3031 2.66236 13.4744 3.89573 14.2985C5.1291 15.1226 6.57914 15.5625 8.0625 15.5625C9.72752 15.5672 11.3456 15.0113 12.6563 13.9844L15.8359 17.1641C16.0129 17.3387 16.2514 17.4366 16.5 17.4366C16.7486 17.4366 16.9872 17.3387 17.1641 17.1641C17.2515 17.077 17.3208 16.9735 17.3681 16.8595C17.4154 16.7456 17.4398 16.6234 17.4398 16.5C17.4398 16.3766 17.4154 16.2544 17.3681 16.1405C17.3208 16.0265 17.2515 15.923 17.1641 15.8359ZM2.4375 8.0625C2.4375 6.94998 2.7674 5.86245 3.38549 4.93742C4.00357 4.01239 4.88207 3.29142 5.90991 2.86568C6.93774 2.43994 8.06874 2.32854 9.15989 2.54559C10.251 2.76263 11.2533 3.29836 12.04 4.08503C12.8266 4.8717 13.3624 5.87398 13.5794 6.96512C13.7965 8.05626 13.6851 9.18726 13.2593 10.2151C12.8336 11.2429 12.1126 12.1214 11.1876 12.7395C10.2626 13.3576 9.17502 13.6875 8.0625 13.6875C6.5713 13.6854 5.14175 13.0921 4.08731 12.0377C3.03287 10.9833 2.43957 9.55371 2.4375 8.0625Z" fill="white" />
        </svg>
          Buscar</button>
      </form>

      <div className="border-t my-9">

        <ul className='file-list'>

          {cont.map((e, i) => (

            <li key={i}>
              <a className="flex items-center gap-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.125 2V11.75C15.125 12.0484 15.0065 12.3345 14.7955 12.5455C14.5845 12.7565 14.2984 12.875 14 12.875C13.7016 12.875 13.4155 12.7565 13.2045 12.5455C12.9935 12.3345 12.875 12.0484 12.875 11.75V4.71875L2.79689 14.7969C2.5846 15.0064 2.29831 15.1239 2.00002 15.1239C1.70172 15.1239 1.41544 15.0064 1.20314 14.7969C1.09826 14.6924 1.01504 14.5682 0.958263 14.4314C0.901482 14.2947 0.872253 14.1481 0.872253 14C0.872253 13.8519 0.901482 13.7053 0.958263 13.5686C1.01504 13.4318 1.09826 13.3076 1.20314 13.2031L11.2813 3.125H4.25002C3.95165 3.125 3.6655 3.00647 3.45452 2.7955C3.24354 2.58452 3.12502 2.29837 3.12502 2C3.12502 1.70163 3.24354 1.41548 3.45452 1.2045C3.6655 0.993526 3.95165 0.875 4.25002 0.875H14C14.2984 0.875 14.5845 0.993526 14.7955 1.2045C15.0065 1.41548 15.125 1.70163 15.125 2Z" fill="#0054A4" />
                </svg>

                Mapa del sitio
              </a>

              <button className='border2'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.71094 7.28906C1.53482 7.11294 1.43587 6.87407 1.43587 6.625C1.43587 6.37593 1.53482 6.13706 1.71094 5.96094C1.88706 5.78482 2.12593 5.68587 2.375 5.68587C2.62407 5.68587 2.86294 5.78482 3.03906 5.96094L7.0625 9.98438V1C7.0625 0.75136 7.16127 0.512903 7.33709 0.337087C7.5129 0.161272 7.75136 0.0625 8 0.0625C8.24864 0.0625 8.4871 0.161272 8.66291 0.337087C8.83873 0.512903 8.9375 0.75136 8.9375 1V9.98438L12.9609 5.96094C13.1371 5.78482 13.3759 5.68587 13.625 5.68587C13.8741 5.68587 14.1129 5.78482 14.2891 5.96094C14.4652 6.13706 14.5641 6.37593 14.5641 6.625C14.5641 6.87407 14.4652 7.11294 14.2891 7.28906L8.66406 12.9141C8.48715 13.0887 8.24858 13.1866 8 13.1866C7.75142 13.1866 7.51285 13.0887 7.33594 12.9141L1.71094 7.28906ZM14.875 14.4375H1.125C0.87636 14.4375 0.637903 14.5363 0.462087 14.7121C0.286272 14.8879 0.1875 15.1264 0.1875 15.375C0.1875 15.6236 0.286272 15.8621 0.462087 16.0379C0.637903 16.2137 0.87636 16.3125 1.125 16.3125H14.875C15.1236 16.3125 15.3621 16.2137 15.5379 16.0379C15.7137 15.8621 15.8125 15.6236 15.8125 15.375C15.8125 15.1264 15.7137 14.8879 15.5379 14.7121C15.3621 14.5363 15.1236 14.4375 14.875 14.4375Z" fill="#0054A4" />
              </svg>
                descargar</button>

            </li>
          ))}

        </ul>

      </div>

      <Pagination/>

    </>
  )
}
