import React from 'react'
import styles from './styles.module.scss'

export default function DataTable({ data, path }) {


    const th = Object.keys(data[0])

    const renderTitle =(nombre)=>{
        let newNombre = nombre.split("_").join(" ")

        switch (nombre) {
            case "descripcion ":
                return "descripción"

            case "titulo":
                return "título"
            case "categoria":
                return "Categoría"
            case "pdf" :
                return "PDF"
            case "cvs" :
                return "CVS"
            case "xlsx" :
                return "XLSX"
            default:
                return newNombre

        }
    }

    
    const selectClass =(nombre)=>{

        switch (nombre) {
            case "id":
                return "hidden"
            case "cvs" :
                return "text-right"
            case "xlsx" :
                return "text-right"
            case  "pdf" :
                return "text-right"
            case "descargar" :
                return "text-right"
            case "ver":
                return "text-right"
            case "link":
                return "text-right"
            case "informe":
                return "text-right"
                
            default:
                return ""
        }
        // e == "id" && "hidden" || e == "cvs" && "text-right" || e == "xlsx" && "text-right" || e == "pdf" && "text-right" || e == "descargar" && "text-right" || e == "ver" && "text-right" || e == "titulo" && ""
    }


    const renderContent =(nombre)=>{

        switch (nombre) {
            case "id":
                return ""
            case "cvs" || "xlsx" || "pdf" || "descargar" || "ver":
                    return "text-right"
            default:
                return ""
        }
        // e == "id" && "hidden" || e == "cvs" && "text-right" || e == "xlsx" && "text-right" || e == "pdf" && "text-right" || e == "descargar" && "text-right" || e == "ver" && "text-right" || e == "titulo" && ""
    }


    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
      
        return date.toLocaleString('es', { month: 'long' });
      }
      




    return (
        <table className={styles.table_grid}>
            <thead>
                <tr>
                    {th.map((e, i) => (
                        <th className='capitalize' key={i}>
                            <div className={selectClass(e)}>
                           { renderTitle(e)}
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((e, i) => (
                    <tr key={i}>
                        {Object.entries(e).map((key, index) => (
                            <td key={index} >
                                
                                {
                                key[0] == "id" ?
                                <></>
                                :
                                key[0] == "mes" ?
                                getMonthName(key[1])

                                :
                                key[0] == "link" ? key[1] &&
                                <a href={`${key[1]}`} rel="noreferrer" target="_blank" 
                                        className='ml-auto w-min bg-[#F9FCFF] rounded-lg flex gap-2 py-3 px-4 border border-[#E0EAF4]'>
                                        <i>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.9398 1V9.125C11.9398 9.37364 11.841 9.6121 11.6652 9.78791C11.4894 9.96373 11.2509 10.0625 11.0023 10.0625C10.7537 10.0625 10.5152 9.96373 10.3394 9.78791C10.1636 9.6121 10.0648 9.37364 10.0648 9.125V3.26562L1.66636 11.6641C1.48945 11.8387 1.25088 11.9366 1.0023 11.9366C0.753726 11.9366 0.515152 11.8387 0.338239 11.6641C0.250839 11.577 0.181492 11.4735 0.134175 11.3595C0.0868573 11.2456 0.0625 11.1234 0.0625 11C0.0625 10.8766 0.0868573 10.7544 0.134175 10.6405C0.181492 10.5265 0.250839 10.423 0.338239 10.3359L8.73668 1.9375H2.8773C2.62866 1.9375 2.3902 1.83873 2.21439 1.66291C2.03857 1.4871 1.9398 1.24864 1.9398 1C1.9398 0.75136 2.03857 0.512903 2.21439 0.337087C2.3902 0.161272 2.62866 0.0625 2.8773 0.0625H11.0023C11.2509 0.0625 11.4894 0.161272 11.6652 0.337087C11.841 0.512903 11.9398 0.75136 11.9398 1Z" fill="#0054A4" />
                                            </svg>
                                        </i>
                                        ver
                                </a>

                                :                                
                                key[0] == "ver"  ?
                                    <a href={`${process.env.NEXT_PUBLIC_HOST}${key[1]}`} rel="noreferrer" target="_blank" 
                                        className='ml-auto w-min bg-[#F9FCFF] rounded-lg flex gap-2 py-3 px-4 border border-[#E0EAF4]'>
                                        <i>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.9398 1V9.125C11.9398 9.37364 11.841 9.6121 11.6652 9.78791C11.4894 9.96373 11.2509 10.0625 11.0023 10.0625C10.7537 10.0625 10.5152 9.96373 10.3394 9.78791C10.1636 9.6121 10.0648 9.37364 10.0648 9.125V3.26562L1.66636 11.6641C1.48945 11.8387 1.25088 11.9366 1.0023 11.9366C0.753726 11.9366 0.515152 11.8387 0.338239 11.6641C0.250839 11.577 0.181492 11.4735 0.134175 11.3595C0.0868573 11.2456 0.0625 11.1234 0.0625 11C0.0625 10.8766 0.0868573 10.7544 0.134175 10.6405C0.181492 10.5265 0.250839 10.423 0.338239 10.3359L8.73668 1.9375H2.8773C2.62866 1.9375 2.3902 1.83873 2.21439 1.66291C2.03857 1.4871 1.9398 1.24864 1.9398 1C1.9398 0.75136 2.03857 0.512903 2.21439 0.337087C2.3902 0.161272 2.62866 0.0625 2.8773 0.0625H11.0023C11.2509 0.0625 11.4894 0.161272 11.6652 0.337087C11.841 0.512903 11.9398 0.75136 11.9398 1Z" fill="#0054A4" />
                                            </svg>
                                        </i>
                                        ver
                                    </a>
                                :                                
                                key[0] == "informe"  ?
                                    <a href={`${key[1]}`} rel="noreferrer" target="_blank" 
                                        className='ml-auto w-min bg-[#F9FCFF] rounded-lg flex gap-2 py-3 px-4 border border-[#E0EAF4]'>
                                        <i>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.9398 1V9.125C11.9398 9.37364 11.841 9.6121 11.6652 9.78791C11.4894 9.96373 11.2509 10.0625 11.0023 10.0625C10.7537 10.0625 10.5152 9.96373 10.3394 9.78791C10.1636 9.6121 10.0648 9.37364 10.0648 9.125V3.26562L1.66636 11.6641C1.48945 11.8387 1.25088 11.9366 1.0023 11.9366C0.753726 11.9366 0.515152 11.8387 0.338239 11.6641C0.250839 11.577 0.181492 11.4735 0.134175 11.3595C0.0868573 11.2456 0.0625 11.1234 0.0625 11C0.0625 10.8766 0.0868573 10.7544 0.134175 10.6405C0.181492 10.5265 0.250839 10.423 0.338239 10.3359L8.73668 1.9375H2.8773C2.62866 1.9375 2.3902 1.83873 2.21439 1.66291C2.03857 1.4871 1.9398 1.24864 1.9398 1C1.9398 0.75136 2.03857 0.512903 2.21439 0.337087C2.3902 0.161272 2.62866 0.0625 2.8773 0.0625H11.0023C11.2509 0.0625 11.4894 0.161272 11.6652 0.337087C11.841 0.512903 11.9398 0.75136 11.9398 1Z" fill="#0054A4" />
                                            </svg>
                                        </i>
                                        ver
                                    </a>
                                :
                                key[0] == "descargar" ?
                                    <a href={`${process.env.NEXT_PUBLIC_URL_BACKEND}/${path}/${key[1]}`} rel="noreferrer" target="_blank"
                                        className='ml-auto w-min bg-[#F9FCFF] rounded-lg flex gap-2 py-3 px-4 border border-[#E0EAF4]'>
                                        <i>
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http:www.w3.org/2000/svg"><path d="M1.71094 7.28906C1.53482 7.11294 1.43587 6.87407 1.43587 6.625C1.43587 6.37593 1.53482 6.13706 1.71094 5.96094C1.88706 5.78482 2.12593 5.68587 2.375 5.68587C2.62407 5.68587 2.86294 5.78482 3.03906 5.96094L7.0625 9.98438V1C7.0625 0.75136 7.16127 0.512903 7.33709 0.337087C7.5129 0.161272 7.75136 0.0625 8 0.0625C8.24864 0.0625 8.4871 0.161272 8.66291 0.337087C8.83873 0.512903 8.9375 0.75136 8.9375 1V9.98438L12.9609 5.96094C13.1371 5.78482 13.3759 5.68587 13.625 5.68587C13.8741 5.68587 14.1129 5.78482 14.2891 5.96094C14.4652 6.13706 14.5641 6.37593 14.5641 6.625C14.5641 6.87407 14.4652 7.11294 14.2891 7.28906L8.66406 12.9141C8.48715 13.0887 8.24858 13.1866 8 13.1866C7.75142 13.1866 7.51285 13.0887 7.33594 12.9141L1.71094 7.28906ZM14.875 14.4375H1.125C0.87636 14.4375 0.637903 14.5363 0.462087 14.7121C0.286272 14.8879 0.1875 15.1264 0.1875 15.375C0.1875 15.6236 0.286272 15.8621 0.462087 16.0379C0.637903 16.2137 0.87636 16.3125 1.125 16.3125H14.875C15.1236 16.3125 15.3621 16.2137 15.5379 16.0379C15.7137 15.8621 15.8125 15.6236 15.8125 15.375C15.8125 15.1264 15.7137 14.8879 15.5379 14.7121C15.3621 14.5363 15.1236 14.4375 14.875 14.4375Z" fill="#0054A4" /></svg>
                                        </i>
                                        Descargar
                                    </a>
                                :
                                key[0] == "pdf" && key[1] !== null?
                                    <div className="flex justify-end">

                                        <a href={`${key[1]}`} rel="noreferrer" target={"_blank"} className="btn btn-sm pdf">
                                            <i className='w-5 h-5'>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.25 13.75V14.375H17.5C17.7486 14.375 17.9871 14.4738 18.1629 14.6496C18.3387 14.8254 18.4375 15.0639 18.4375 15.3125C18.4375 15.5611 18.3387 15.7996 18.1629 15.9754C17.9871 16.1512 17.7486 16.25 17.5 16.25H16.25V17.1875C16.25 17.4361 16.1512 17.6746 15.9754 17.8504C15.7996 18.0262 15.5611 18.125 15.3125 18.125C15.0639 18.125 14.8254 18.0262 14.6496 17.8504C14.4738 17.6746 14.375 17.4361 14.375 17.1875V12.8125C14.375 12.5639 14.4738 12.3254 14.6496 12.1496C14.8254 11.9738 15.0639 11.875 15.3125 11.875H17.8125C18.0611 11.875 18.2996 11.9738 18.4754 12.1496C18.6512 12.3254 18.75 12.5639 18.75 12.8125C18.75 13.0611 18.6512 13.2996 18.4754 13.4754C18.2996 13.6512 18.0611 13.75 17.8125 13.75H16.25ZM2.5 9.6875V3.4375C2.50205 3.02373 2.66733 2.6275 2.95991 2.33491C3.2525 2.04233 3.64873 1.87705 4.0625 1.875H12.1875C12.4359 1.8769 12.6739 1.97489 12.8516 2.14844L17.2266 6.52344C17.4001 6.70113 17.4981 6.93913 17.5 7.1875V9.6875C17.5 9.93614 17.4012 10.1746 17.2254 10.3504C17.0496 10.5262 16.8111 10.625 16.5625 10.625C16.3139 10.625 16.0754 10.5262 15.8996 10.3504C15.7238 10.1746 15.625 9.93614 15.625 9.6875V8.75H11.5625C11.3139 8.75 11.0754 8.65123 10.8996 8.47541C10.7238 8.2996 10.625 8.06114 10.625 7.8125V3.75H4.375V9.6875C4.375 9.93614 4.27623 10.1746 4.10041 10.3504C3.9246 10.5262 3.68614 10.625 3.4375 10.625C3.18886 10.625 2.9504 10.5262 2.77459 10.3504C2.59877 10.1746 2.5 9.93614 2.5 9.6875ZM12.5 4.45312V6.875H14.9219L12.5 4.45312ZM13.125 15C13.125 15.8288 12.7958 16.6237 12.2097 17.2097C11.6237 17.7958 10.8288 18.125 10 18.125H8.75C8.50136 18.125 8.2629 18.0262 8.08709 17.8504C7.91127 17.6746 7.8125 17.4361 7.8125 17.1875V12.8125C7.8125 12.5639 7.91127 12.3254 8.08709 12.1496C8.2629 11.9738 8.50136 11.875 8.75 11.875H10C10.8288 11.875 11.6237 12.2042 12.2097 12.7903C12.7958 13.3763 13.125 14.1712 13.125 15ZM11.25 15C11.25 14.6685 11.1183 14.3505 10.8839 14.1161C10.6495 13.8817 10.3315 13.75 10 13.75H9.6875V16.25H10C10.3315 16.25 10.6495 16.1183 10.8839 15.8839C11.1183 15.6495 11.25 15.3315 11.25 15ZM6.5625 14.375C6.56044 15.0374 6.29639 15.6721 5.82799 16.1405C5.3596 16.6089 4.72491 16.8729 4.0625 16.875H3.75V17.1875C3.75 17.4361 3.65123 17.6746 3.47541 17.8504C3.2996 18.0262 3.06114 18.125 2.8125 18.125C2.56386 18.125 2.3254 18.0262 2.14959 17.8504C1.97377 17.6746 1.875 17.4361 1.875 17.1875V12.8125C1.875 12.5639 1.97377 12.3254 2.14959 12.1496C2.3254 11.9738 2.56386 11.875 2.8125 11.875H4.0625C4.72491 11.8771 5.3596 12.1411 5.82799 12.6095C6.29639 13.0779 6.56044 13.7126 6.5625 14.375ZM4.6875 14.375C4.6875 14.2092 4.62165 14.0503 4.50444 13.9331C4.38723 13.8158 4.22826 13.75 4.0625 13.75H3.75V15H4.0625C4.22826 15 4.38723 14.9342 4.50444 14.8169C4.62165 14.6997 4.6875 14.5408 4.6875 14.375Z" />
                                                </svg>
                                            </i>
                                            Descargar PDF
                                        </a>
                                    </div>
                                :
                                key[0] == "cvs" && key[1] !== null ?
                                    <div className="flex justify-end">
                                        <a href={`${key[1]}`} rel="noreferrer" target={"_blank"} className="btn btn-sm cvs">
                                            <i className='w-5 h-5'>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.25 13.75V14.375H17.5C17.7486 14.375 17.9871 14.4738 18.1629 14.6496C18.3387 14.8254 18.4375 15.0639 18.4375 15.3125C18.4375 15.5611 18.3387 15.7996 18.1629 15.9754C17.9871 16.1512 17.7486 16.25 17.5 16.25H16.25V17.1875C16.25 17.4361 16.1512 17.6746 15.9754 17.8504C15.7996 18.0262 15.5611 18.125 15.3125 18.125C15.0639 18.125 14.8254 18.0262 14.6496 17.8504C14.4738 17.6746 14.375 17.4361 14.375 17.1875V12.8125C14.375 12.5639 14.4738 12.3254 14.6496 12.1496C14.8254 11.9738 15.0639 11.875 15.3125 11.875H17.8125C18.0611 11.875 18.2996 11.9738 18.4754 12.1496C18.6512 12.3254 18.75 12.5639 18.75 12.8125C18.75 13.0611 18.6512 13.2996 18.4754 13.4754C18.2996 13.6512 18.0611 13.75 17.8125 13.75H16.25ZM2.5 9.6875V3.4375C2.50205 3.02373 2.66733 2.6275 2.95991 2.33491C3.2525 2.04233 3.64873 1.87705 4.0625 1.875H12.1875C12.4359 1.8769 12.6739 1.97489 12.8516 2.14844L17.2266 6.52344C17.4001 6.70113 17.4981 6.93913 17.5 7.1875V9.6875C17.5 9.93614 17.4012 10.1746 17.2254 10.3504C17.0496 10.5262 16.8111 10.625 16.5625 10.625C16.3139 10.625 16.0754 10.5262 15.8996 10.3504C15.7238 10.1746 15.625 9.93614 15.625 9.6875V8.75H11.5625C11.3139 8.75 11.0754 8.65123 10.8996 8.47541C10.7238 8.2996 10.625 8.06114 10.625 7.8125V3.75H4.375V9.6875C4.375 9.93614 4.27623 10.1746 4.10041 10.3504C3.9246 10.5262 3.68614 10.625 3.4375 10.625C3.18886 10.625 2.9504 10.5262 2.77459 10.3504C2.59877 10.1746 2.5 9.93614 2.5 9.6875ZM12.5 4.45312V6.875H14.9219L12.5 4.45312ZM13.125 15C13.125 15.8288 12.7958 16.6237 12.2097 17.2097C11.6237 17.7958 10.8288 18.125 10 18.125H8.75C8.50136 18.125 8.2629 18.0262 8.08709 17.8504C7.91127 17.6746 7.8125 17.4361 7.8125 17.1875V12.8125C7.8125 12.5639 7.91127 12.3254 8.08709 12.1496C8.2629 11.9738 8.50136 11.875 8.75 11.875H10C10.8288 11.875 11.6237 12.2042 12.2097 12.7903C12.7958 13.3763 13.125 14.1712 13.125 15ZM11.25 15C11.25 14.6685 11.1183 14.3505 10.8839 14.1161C10.6495 13.8817 10.3315 13.75 10 13.75H9.6875V16.25H10C10.3315 16.25 10.6495 16.1183 10.8839 15.8839C11.1183 15.6495 11.25 15.3315 11.25 15ZM6.5625 14.375C6.56044 15.0374 6.29639 15.6721 5.82799 16.1405C5.3596 16.6089 4.72491 16.8729 4.0625 16.875H3.75V17.1875C3.75 17.4361 3.65123 17.6746 3.47541 17.8504C3.2996 18.0262 3.06114 18.125 2.8125 18.125C2.56386 18.125 2.3254 18.0262 2.14959 17.8504C1.97377 17.6746 1.875 17.4361 1.875 17.1875V12.8125C1.875 12.5639 1.97377 12.3254 2.14959 12.1496C2.3254 11.9738 2.56386 11.875 2.8125 11.875H4.0625C4.72491 11.8771 5.3596 12.1411 5.82799 12.6095C6.29639 13.0779 6.56044 13.7126 6.5625 14.375ZM4.6875 14.375C4.6875 14.2092 4.62165 14.0503 4.50444 13.9331C4.38723 13.8158 4.22826 13.75 4.0625 13.75H3.75V15H4.0625C4.22826 15 4.38723 14.9342 4.50444 14.8169C4.62165 14.6997 4.6875 14.5408 4.6875 14.375Z" />
                                                </svg>
                                            </i>
                                            Descargar cvs
                                        </a>
                                    </div>
                                :
                                key[0] == "xlsx" && key[1] !== null ?
                                    <div className="flex justify-end">

                                        <a href={`${key[1]}`} rel="noreferrer" target={"_blank"} className="btn btn-sm xlsx">
                                            <i className='w-5 h-5'>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.25 13.75V14.375H17.5C17.7486 14.375 17.9871 14.4738 18.1629 14.6496C18.3387 14.8254 18.4375 15.0639 18.4375 15.3125C18.4375 15.5611 18.3387 15.7996 18.1629 15.9754C17.9871 16.1512 17.7486 16.25 17.5 16.25H16.25V17.1875C16.25 17.4361 16.1512 17.6746 15.9754 17.8504C15.7996 18.0262 15.5611 18.125 15.3125 18.125C15.0639 18.125 14.8254 18.0262 14.6496 17.8504C14.4738 17.6746 14.375 17.4361 14.375 17.1875V12.8125C14.375 12.5639 14.4738 12.3254 14.6496 12.1496C14.8254 11.9738 15.0639 11.875 15.3125 11.875H17.8125C18.0611 11.875 18.2996 11.9738 18.4754 12.1496C18.6512 12.3254 18.75 12.5639 18.75 12.8125C18.75 13.0611 18.6512 13.2996 18.4754 13.4754C18.2996 13.6512 18.0611 13.75 17.8125 13.75H16.25ZM2.5 9.6875V3.4375C2.50205 3.02373 2.66733 2.6275 2.95991 2.33491C3.2525 2.04233 3.64873 1.87705 4.0625 1.875H12.1875C12.4359 1.8769 12.6739 1.97489 12.8516 2.14844L17.2266 6.52344C17.4001 6.70113 17.4981 6.93913 17.5 7.1875V9.6875C17.5 9.93614 17.4012 10.1746 17.2254 10.3504C17.0496 10.5262 16.8111 10.625 16.5625 10.625C16.3139 10.625 16.0754 10.5262 15.8996 10.3504C15.7238 10.1746 15.625 9.93614 15.625 9.6875V8.75H11.5625C11.3139 8.75 11.0754 8.65123 10.8996 8.47541C10.7238 8.2996 10.625 8.06114 10.625 7.8125V3.75H4.375V9.6875C4.375 9.93614 4.27623 10.1746 4.10041 10.3504C3.9246 10.5262 3.68614 10.625 3.4375 10.625C3.18886 10.625 2.9504 10.5262 2.77459 10.3504C2.59877 10.1746 2.5 9.93614 2.5 9.6875ZM12.5 4.45312V6.875H14.9219L12.5 4.45312ZM13.125 15C13.125 15.8288 12.7958 16.6237 12.2097 17.2097C11.6237 17.7958 10.8288 18.125 10 18.125H8.75C8.50136 18.125 8.2629 18.0262 8.08709 17.8504C7.91127 17.6746 7.8125 17.4361 7.8125 17.1875V12.8125C7.8125 12.5639 7.91127 12.3254 8.08709 12.1496C8.2629 11.9738 8.50136 11.875 8.75 11.875H10C10.8288 11.875 11.6237 12.2042 12.2097 12.7903C12.7958 13.3763 13.125 14.1712 13.125 15ZM11.25 15C11.25 14.6685 11.1183 14.3505 10.8839 14.1161C10.6495 13.8817 10.3315 13.75 10 13.75H9.6875V16.25H10C10.3315 16.25 10.6495 16.1183 10.8839 15.8839C11.1183 15.6495 11.25 15.3315 11.25 15ZM6.5625 14.375C6.56044 15.0374 6.29639 15.6721 5.82799 16.1405C5.3596 16.6089 4.72491 16.8729 4.0625 16.875H3.75V17.1875C3.75 17.4361 3.65123 17.6746 3.47541 17.8504C3.2996 18.0262 3.06114 18.125 2.8125 18.125C2.56386 18.125 2.3254 18.0262 2.14959 17.8504C1.97377 17.6746 1.875 17.4361 1.875 17.1875V12.8125C1.875 12.5639 1.97377 12.3254 2.14959 12.1496C2.3254 11.9738 2.56386 11.875 2.8125 11.875H4.0625C4.72491 11.8771 5.3596 12.1411 5.82799 12.6095C6.29639 13.0779 6.56044 13.7126 6.5625 14.375ZM4.6875 14.375C4.6875 14.2092 4.62165 14.0503 4.50444 13.9331C4.38723 13.8158 4.22826 13.75 4.0625 13.75H3.75V15H4.0625C4.22826 15 4.38723 14.9342 4.50444 14.8169C4.62165 14.6997 4.6875 14.5408 4.6875 14.375Z" />
                                                </svg>
                                            </i>
                                            Descargar xlsx
                                        </a>
                                    </div>
                                :
                                key[1]
                                }
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}


{/*
 <button className="xls">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.3276 13.3594L6.14791 15L7.3276 16.6406C7.47264 16.8437 7.53107 17.096 7.49005 17.3422C7.44903 17.5883 7.3119 17.8081 7.10885 17.9531C6.90579 18.0982 6.65344 18.1566 6.40729 18.1156C6.16115 18.0746 5.94139 17.9374 5.79635 17.7344L4.99947 16.6094L4.2026 17.7344C4.13078 17.8349 4.03986 17.9203 3.93504 17.9857C3.83021 18.0511 3.71353 18.0953 3.59165 18.1156C3.46978 18.1359 3.34509 18.132 3.22472 18.1041C3.10435 18.0763 2.99064 18.0249 2.8901 17.9531C2.78955 17.8813 2.70414 17.7904 2.63873 17.6856C2.57333 17.5807 2.52921 17.4641 2.5089 17.3422C2.48858 17.2203 2.49247 17.0956 2.52035 16.9752C2.54822 16.8549 2.59953 16.7412 2.67135 16.6406L3.85104 15L2.67135 13.3594C2.59953 13.2588 2.54822 13.1451 2.52035 13.0248C2.49247 12.9044 2.48858 12.7797 2.5089 12.6578C2.52921 12.5359 2.57333 12.4193 2.63873 12.3144C2.70414 12.2096 2.78955 12.1187 2.8901 12.0469C2.99064 11.9751 3.10435 11.9237 3.22472 11.8959C3.34509 11.868 3.46978 11.8641 3.59165 11.8844C3.71353 11.9047 3.83021 11.9489 3.93504 12.0143C4.03986 12.0797 4.13078 12.1651 4.2026 12.2656L4.99947 13.3906L5.79635 12.2656C5.94139 12.0626 6.16115 11.9254 6.40729 11.8844C6.65344 11.8434 6.90579 11.9018 7.10885 12.0469C7.3119 12.1919 7.44903 12.4117 7.49005 12.6578C7.53107 12.904 7.47264 13.1563 7.3276 13.3594ZM11.562 16.25H10.312V12.8125C10.312 12.5639 10.2132 12.3254 10.0374 12.1496C9.86157 11.9738 9.62311 11.875 9.37447 11.875C9.12583 11.875 8.88738 11.9738 8.71156 12.1496C8.53575 12.3254 8.43697 12.5639 8.43697 12.8125V17.1875C8.43697 17.4361 8.53575 17.6746 8.71156 17.8504C8.88738 18.0262 9.12583 18.125 9.37447 18.125H11.562C11.8106 18.125 12.0491 18.0262 12.2249 17.8504C12.4007 17.6746 12.4995 17.4361 12.4995 17.1875C12.4995 16.9389 12.4007 16.7004 12.2249 16.5246C12.0491 16.3488 11.8106 16.25 11.562 16.25ZM17.4995 7.1875V9.6875C17.4995 9.93614 17.4007 10.1746 17.2249 10.3504C17.0491 10.5262 16.8106 10.625 16.562 10.625C16.3133 10.625 16.0749 10.5262 15.8991 10.3504C15.7232 10.1746 15.6245 9.93614 15.6245 9.6875V8.75H11.562C11.3133 8.75 11.0749 8.65123 10.8991 8.47541C10.7232 8.2996 10.6245 8.06114 10.6245 7.8125V3.75H4.37447V9.6875C4.37447 9.93614 4.2757 10.1746 4.09989 10.3504C3.92407 10.5262 3.68561 10.625 3.43697 10.625C3.18833 10.625 2.94988 10.5262 2.77406 10.3504C2.59825 10.1746 2.49947 9.93614 2.49947 9.6875V3.4375C2.50153 3.02373 2.66681 2.6275 2.95939 2.33491C3.25197 2.04233 3.64821 1.87705 4.06197 1.875H12.187C12.4353 1.8769 12.6733 1.97489 12.851 2.14844L17.226 6.52344C17.3996 6.70113 17.4976 6.93913 17.4995 7.1875ZM12.4995 6.875H14.9213L12.4995 4.45312V6.875ZM15.5463 14.0625C15.3823 14.0078 15.1323 13.9375 14.9995 13.875C15.0151 13.7969 15.0542 13.75 15.2338 13.75C15.4322 13.7556 15.6237 13.824 15.7807 13.9453H15.7651C15.8987 14.0704 16.0661 14.1536 16.2464 14.1847C16.4268 14.2158 16.6124 14.1934 16.7802 14.1203C16.948 14.0472 17.0907 13.9266 17.1908 13.7733C17.2908 13.6201 17.3438 13.4408 17.3432 13.2578C17.3432 13.129 17.3168 13.0016 17.2658 12.8834C17.2147 12.7652 17.14 12.6586 17.0463 12.5703C16.5431 12.1319 15.9011 11.8857 15.2338 11.875C14.0151 11.875 13.1245 12.75 13.1245 13.9531C13.1245 15.2969 14.351 15.6641 15.0151 15.8594C15.2026 15.9141 15.4995 16 15.6245 16.0781C15.6263 16.1152 15.621 16.1524 15.6088 16.1875C15.5854 16.2031 15.476 16.25 15.2338 16.25C15.0355 16.2444 14.844 16.176 14.687 16.0547H14.7026C14.569 15.9296 14.4016 15.8464 14.2213 15.8153C14.0409 15.7842 13.8553 15.8066 13.6875 15.8797C13.5197 15.9528 13.377 16.0734 13.2769 16.2267C13.1769 16.3799 13.1239 16.5592 13.1245 16.7422C13.1245 16.871 13.1509 16.9984 13.2019 17.1166C13.253 17.2348 13.3276 17.3414 13.4213 17.4297C13.9246 17.8681 14.5666 18.1143 15.2338 18.125C16.6088 18.125 17.4995 17.3125 17.4995 16.0469C17.4995 14.6406 16.2338 14.2656 15.5463 14.0625Z" />
</svg>
Descargar XLS
</button>
<button className="pdf">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.25 13.75V14.375H17.5C17.7486 14.375 17.9871 14.4738 18.1629 14.6496C18.3387 14.8254 18.4375 15.0639 18.4375 15.3125C18.4375 15.5611 18.3387 15.7996 18.1629 15.9754C17.9871 16.1512 17.7486 16.25 17.5 16.25H16.25V17.1875C16.25 17.4361 16.1512 17.6746 15.9754 17.8504C15.7996 18.0262 15.5611 18.125 15.3125 18.125C15.0639 18.125 14.8254 18.0262 14.6496 17.8504C14.4738 17.6746 14.375 17.4361 14.375 17.1875V12.8125C14.375 12.5639 14.4738 12.3254 14.6496 12.1496C14.8254 11.9738 15.0639 11.875 15.3125 11.875H17.8125C18.0611 11.875 18.2996 11.9738 18.4754 12.1496C18.6512 12.3254 18.75 12.5639 18.75 12.8125C18.75 13.0611 18.6512 13.2996 18.4754 13.4754C18.2996 13.6512 18.0611 13.75 17.8125 13.75H16.25ZM2.5 9.6875V3.4375C2.50205 3.02373 2.66733 2.6275 2.95991 2.33491C3.2525 2.04233 3.64873 1.87705 4.0625 1.875H12.1875C12.4359 1.8769 12.6739 1.97489 12.8516 2.14844L17.2266 6.52344C17.4001 6.70113 17.4981 6.93913 17.5 7.1875V9.6875C17.5 9.93614 17.4012 10.1746 17.2254 10.3504C17.0496 10.5262 16.8111 10.625 16.5625 10.625C16.3139 10.625 16.0754 10.5262 15.8996 10.3504C15.7238 10.1746 15.625 9.93614 15.625 9.6875V8.75H11.5625C11.3139 8.75 11.0754 8.65123 10.8996 8.47541C10.7238 8.2996 10.625 8.06114 10.625 7.8125V3.75H4.375V9.6875C4.375 9.93614 4.27623 10.1746 4.10041 10.3504C3.9246 10.5262 3.68614 10.625 3.4375 10.625C3.18886 10.625 2.9504 10.5262 2.77459 10.3504C2.59877 10.1746 2.5 9.93614 2.5 9.6875ZM12.5 4.45312V6.875H14.9219L12.5 4.45312ZM13.125 15C13.125 15.8288 12.7958 16.6237 12.2097 17.2097C11.6237 17.7958 10.8288 18.125 10 18.125H8.75C8.50136 18.125 8.2629 18.0262 8.08709 17.8504C7.91127 17.6746 7.8125 17.4361 7.8125 17.1875V12.8125C7.8125 12.5639 7.91127 12.3254 8.08709 12.1496C8.2629 11.9738 8.50136 11.875 8.75 11.875H10C10.8288 11.875 11.6237 12.2042 12.2097 12.7903C12.7958 13.3763 13.125 14.1712 13.125 15ZM11.25 15C11.25 14.6685 11.1183 14.3505 10.8839 14.1161C10.6495 13.8817 10.3315 13.75 10 13.75H9.6875V16.25H10C10.3315 16.25 10.6495 16.1183 10.8839 15.8839C11.1183 15.6495 11.25 15.3315 11.25 15ZM6.5625 14.375C6.56044 15.0374 6.29639 15.6721 5.82799 16.1405C5.3596 16.6089 4.72491 16.8729 4.0625 16.875H3.75V17.1875C3.75 17.4361 3.65123 17.6746 3.47541 17.8504C3.2996 18.0262 3.06114 18.125 2.8125 18.125C2.56386 18.125 2.3254 18.0262 2.14959 17.8504C1.97377 17.6746 1.875 17.4361 1.875 17.1875V12.8125C1.875 12.5639 1.97377 12.3254 2.14959 12.1496C2.3254 11.9738 2.56386 11.875 2.8125 11.875H4.0625C4.72491 11.8771 5.3596 12.1411 5.82799 12.6095C6.29639 13.0779 6.56044 13.7126 6.5625 14.375ZM4.6875 14.375C4.6875 14.2092 4.62165 14.0503 4.50444 13.9331C4.38723 13.8158 4.22826 13.75 4.0625 13.75H3.75V15H4.0625C4.22826 15 4.38723 14.9342 4.50444 14.8169C4.62165 14.6997 4.6875 14.5408 4.6875 14.375Z" />
</svg>
Descargar PDF
</button>
<button className="cvs">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.0625 13.1562L16.3438 17.5312C16.2727 17.705 16.1516 17.8537 15.9957 17.9583C15.8399 18.0629 15.6565 18.1188 15.4688 18.1188C15.281 18.1188 15.0976 18.0629 14.9418 17.9583C14.7859 17.8537 14.6648 17.705 14.5938 17.5312L12.875 13.1562C12.8299 13.0413 12.8078 12.9187 12.8101 12.7952C12.8123 12.6718 12.8389 12.55 12.8882 12.4368C12.9375 12.3237 13.0087 12.2213 13.0976 12.1357C13.1865 12.05 13.2913 11.9826 13.4062 11.9375C13.6383 11.8463 13.8971 11.8511 14.1257 11.9507C14.2388 12 14.3412 12.0712 14.4268 12.1601C14.5125 12.249 14.5799 12.3538 14.625 12.4688L15.4688 14.625L16.3125 12.4688C16.3576 12.3538 16.425 12.249 16.5107 12.1601C16.5963 12.0712 16.6987 12 16.8118 11.9507C16.925 11.9014 17.0468 11.8748 17.1702 11.8726C17.2937 11.8703 17.4163 11.8924 17.5312 11.9375C17.6462 11.9826 17.751 12.05 17.8399 12.1357C17.9288 12.2213 18 12.3237 18.0493 12.4368C18.0986 12.55 18.1252 12.6718 18.1274 12.7952C18.1297 12.9187 18.1076 13.0413 18.0625 13.1562ZM2.5 9.6875V3.4375C2.50205 3.02373 2.66733 2.6275 2.95991 2.33491C3.2525 2.04233 3.64873 1.87705 4.0625 1.875H12.1875C12.4359 1.8769 12.6739 1.97489 12.8516 2.14844L17.2266 6.52344C17.4001 6.70113 17.4981 6.93913 17.5 7.1875V9.6875C17.5 9.93614 17.4012 10.1746 17.2254 10.3504C17.0496 10.5262 16.8111 10.625 16.5625 10.625C16.3139 10.625 16.0754 10.5262 15.8996 10.3504C15.7238 10.1746 15.625 9.93614 15.625 9.6875V8.75H11.5625C11.3139 8.75 11.0754 8.65123 10.8996 8.47541C10.7238 8.2996 10.625 8.06114 10.625 7.8125V3.75H4.375V9.6875C4.375 9.93614 4.27623 10.1746 4.10041 10.3504C3.9246 10.5262 3.68614 10.625 3.4375 10.625C3.18886 10.625 2.9504 10.5262 2.77459 10.3504C2.59877 10.1746 2.5 9.93614 2.5 9.6875ZM12.5 4.45312V6.875H14.9219L12.5 4.45312ZM4.84375 13.75C5.04506 13.7519 5.24111 13.8145 5.40625 13.9297C5.61138 14.0706 5.86408 14.1242 6.10875 14.0788C6.35343 14.0334 6.57004 13.8926 6.71094 13.6875C6.85183 13.4824 6.90547 13.2297 6.86005 12.985C6.81463 12.7403 6.67388 12.5237 6.46875 12.3828C5.99013 12.0547 5.42404 11.8778 4.84375 11.875C3.20312 11.875 1.875 13.2734 1.875 15C1.875 16.7266 3.20312 18.125 4.84375 18.125C5.42404 18.1222 5.99013 17.9453 6.46875 17.6172C6.67388 17.4763 6.81463 17.2597 6.86005 17.015C6.90547 16.7703 6.85183 16.5176 6.71094 16.3125C6.57004 16.1074 6.35343 15.9666 6.10875 15.9212C5.86408 15.8758 5.61138 15.9294 5.40625 16.0703C5.24111 16.1855 5.04506 16.2481 4.84375 16.25C4.24219 16.25 3.75 15.6875 3.75 15C3.75 14.3125 4.24219 13.75 4.84375 13.75ZM10.2344 14.0625C10.0703 14.0078 9.82031 13.9375 9.6875 13.875C9.70312 13.7969 9.74219 13.75 9.92188 13.75C10.1202 13.7556 10.3117 13.824 10.4688 13.9453H10.4531C10.5868 14.0704 10.7541 14.1536 10.9345 14.1847C11.1148 14.2158 11.3004 14.1934 11.4682 14.1203C11.636 14.0472 11.7787 13.9266 11.8788 13.7733C11.9788 13.6201 12.0318 13.4408 12.0312 13.2578C12.0312 13.129 12.0048 13.0016 11.9538 12.8834C11.9027 12.7652 11.8281 12.6586 11.7344 12.5703C11.2312 12.1319 10.5892 11.8857 9.92188 11.875C8.70312 11.875 7.8125 12.75 7.8125 13.9531C7.8125 15.2969 9.03906 15.6641 9.70312 15.8594C9.89062 15.9141 10.1875 16 10.3125 16.0781C10.3144 16.1152 10.3091 16.1524 10.2969 16.1875C10.2734 16.2031 10.1641 16.25 9.92188 16.25C9.72351 16.2444 9.53203 16.176 9.375 16.0547H9.39062C9.25699 15.9296 9.08966 15.8464 8.90928 15.8153C8.72891 15.7842 8.54337 15.8066 8.37557 15.8797C8.20776 15.9528 8.06503 16.0734 7.96497 16.2267C7.86491 16.3799 7.81191 16.5592 7.8125 16.7422C7.81255 16.871 7.83891 16.9984 7.88996 17.1166C7.94101 17.2348 8.01567 17.3414 8.10938 17.4297C8.61258 17.8681 9.25459 18.1143 9.92188 18.125C11.2969 18.125 12.1875 17.3125 12.1875 16.0469C12.1875 14.6406 10.9219 14.2656 10.2344 14.0625Z" />
</svg>
Descargar CSV
</button> 
*/}