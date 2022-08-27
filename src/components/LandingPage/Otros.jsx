import Link from 'next/link';
import styles from './styles.module.scss'

export default function Otros() {

  const images = [...Array(5).keys()];
  return (
    <>
      <h1 className='mt-20 mb-9'>Otras Instituciones</h1>
      <div className="flex justify-between">
        {images.map((e, i) => (
          <div key={i}>

            <img src={`/img/inst/${e}.png`} alt="" />
          </div>
        ))}
      </div>


      <div className="flex justify-between mt-20 mb-6">

        <h1>Nuestras Oficinas</h1>

        <Link href="/">
          <a className="flex items-center gap-4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.125 2V11.75C15.125 12.0484 15.0065 12.3345 14.7955 12.5455C14.5845 12.7565 14.2984 12.875 14 12.875C13.7016 12.875 13.4155 12.7565 13.2045 12.5455C12.9935 12.3345 12.875 12.0484 12.875 11.75V4.71875L2.79689 14.7969C2.5846 15.0064 2.29831 15.1239 2.00002 15.1239C1.70172 15.1239 1.41544 15.0064 1.20314 14.7969C1.09826 14.6924 1.01504 14.5682 0.958263 14.4314C0.901482 14.2947 0.872253 14.1481 0.872253 14C0.872253 13.8519 0.901482 13.7053 0.958263 13.5686C1.01504 13.4318 1.09826 13.3076 1.20314 13.2031L11.2813 3.125H4.25002C3.95165 3.125 3.6655 3.00647 3.45452 2.7955C3.24354 2.58452 3.12502 2.29837 3.12502 2C3.12502 1.70163 3.24354 1.41548 3.45452 1.2045C3.6655 0.993526 3.95165 0.875 4.25002 0.875H14C14.2984 0.875 14.5845 0.993526 14.7955 1.2045C15.0065 1.41548 15.125 1.70163 15.125 2Z" fill="#0054A4" />
            </svg>
            Ir a Contacto
          </a>
        </Link>
      </div>


      <div className="flex gap-6 ">

        <div className="w-full  border2">
          <iframe width="100%" height="320px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.875474099567!2d-79.52399448570355!3d8.983604792173047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8e4bce9708b%3A0xbf9d5b7bd5b19015!2sTribunal%20Administrativo%20Tributario!5e0!3m2!1ses-419!2sve!4v1661480954020!5m2!1ses-419!2sve" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div className="m-9 space-y-[18px]">
            <h4 className='text-[24px] font-bold'>Sede Central</h4>
            <p className='center gap-[15.5px]'>
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7594 19.625H12.0844C12.5625 19.1562 13.0875 18.6219 13.6125 18.0219C16.2469 14.9937 17.6344 11.7875 17.6344 8.75C17.6344 6.46251 16.7257 4.26871 15.1082 2.6512C13.4907 1.0337 11.2969 0.125 9.0094 0.125C6.72191 0.125 4.5281 1.0337 2.9106 2.6512C1.2931 4.26871 0.384399 6.46251 0.384399 8.75C0.384399 13.4375 3.58127 17.3656 5.9344 19.625H2.2594C1.96103 19.625 1.67488 19.7435 1.4639 19.9545C1.25293 20.1655 1.1344 20.4516 1.1344 20.75C1.1344 21.0484 1.25293 21.3345 1.4639 21.5455C1.67488 21.7565 1.96103 21.875 2.2594 21.875H15.7594C16.0578 21.875 16.3439 21.7565 16.5549 21.5455C16.7659 21.3345 16.8844 21.0484 16.8844 20.75C16.8844 20.4516 16.7659 20.1655 16.5549 19.9545C16.3439 19.7435 16.0578 19.625 15.7594 19.625ZM2.6344 8.75C2.6344 7.05925 3.30605 5.43774 4.50159 4.24219C5.69714 3.04665 7.31865 2.375 9.0094 2.375C10.7002 2.375 12.3217 3.04665 13.5172 4.24219C14.7127 5.43774 15.3844 7.05925 15.3844 8.75C15.3844 11.8719 13.5188 14.6937 11.9438 16.5031C11.0505 17.5311 10.0686 18.4785 9.0094 19.3344C7.95018 18.4785 6.96828 17.5311 6.07502 16.5031C4.5094 14.6937 2.6344 11.8719 2.6344 8.75ZM9.0094 12.875C9.82525 12.875 10.6228 12.6331 11.3011 12.1798C11.9795 11.7266 12.5082 11.0823 12.8204 10.3286C13.1326 9.57482 13.2143 8.74542 13.0551 7.94525C12.896 7.14508 12.5031 6.41008 11.9262 5.83318C11.3493 5.25629 10.6143 4.86342 9.81415 4.70426C9.01398 4.5451 8.18458 4.62679 7.43083 4.939C6.67709 5.25121 6.03285 5.77992 5.57959 6.45827C5.12633 7.13663 4.8844 7.93415 4.8844 8.75C4.8844 9.84402 5.319 10.8932 6.09258 11.6668C6.86617 12.4404 7.91538 12.875 9.0094 12.875ZM9.0094 6.875C9.38024 6.875 9.74275 6.98497 10.0511 7.19099C10.3594 7.39702 10.5998 7.68986 10.7417 8.03247C10.8836 8.37508 10.9207 8.75208 10.8484 9.1158C10.776 9.47951 10.5974 9.8136 10.3352 10.0758C10.073 10.338 9.73891 10.5166 9.37519 10.589C9.01148 10.6613 8.63448 10.6242 8.29187 10.4823C7.94926 10.3404 7.65642 10.1 7.45039 9.79169C7.24437 9.48335 7.1344 9.12084 7.1344 8.75C7.13686 8.25348 7.3352 7.778 7.6863 7.4269C8.0374 7.0758 8.51288 6.87746 9.0094 6.875Z" fill="#0054A4" />
              </svg>
              Calle 53 Este y Av. 3ra. Sur - Edificio Victoria Plaza, Obarrio, Piso 3.
            </p>

            <p className='center gap-[15.5px]'>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 20.375C6.85 20.375 0.625 14.15 0.625 6.50002C0.625381 5.13185 1.1244 3.81072 2.02864 2.78396C2.93288 1.75719 4.18035 1.0952 5.5375 0.921894C5.9407 0.871468 6.34934 0.954062 6.70131 1.15712C7.05328 1.36018 7.32933 1.6726 7.4875 2.04689L9.37188 6.43439C9.4963 6.71889 9.54775 7.02994 9.52156 7.33935C9.49537 7.64876 9.39236 7.94674 9.22187 8.20627L7.77813 10.4C8.41772 11.6087 9.40795 12.5957 10.6188 13.2313L12.7844 11.7875C13.0449 11.6155 13.344 11.5109 13.6549 11.4831C13.9658 11.4552 14.2787 11.5051 14.5656 11.6281L18.9531 13.5125C19.3274 13.6707 19.6398 13.9467 19.8429 14.2987C20.046 14.6507 20.1286 15.0593 20.0781 15.4625C19.9048 16.8197 19.2428 18.0671 18.2161 18.9714C17.1893 19.8756 15.8682 20.3746 14.5 20.375ZM5.5375 3.20002C4.78336 3.3629 4.10779 3.77924 3.62333 4.37971C3.13886 4.98017 2.87476 5.72849 2.875 6.50002C2.87748 9.5824 4.10305 12.5378 6.28263 14.7174C8.4622 16.897 11.4176 18.1225 14.5 18.125C15.2715 18.1253 16.0199 17.8612 16.6203 17.3767C17.2208 16.8922 17.6371 16.2167 17.8 15.4625L13.8625 13.775L11.6875 15.2281C11.417 15.4071 11.1048 15.5133 10.7813 15.5362C10.4577 15.5592 10.1337 15.4983 9.84063 15.3594C8.02089 14.4781 6.54882 13.0126 5.65937 11.1969C5.51634 10.9053 5.45232 10.5813 5.4737 10.2572C5.49509 9.9331 5.60114 9.62029 5.78125 9.35002L7.225 7.13752L5.5375 3.20002Z" fill="#0054A4" />
              </svg>

              504-3400 / 504-3401
            </p>

            <p className='center gap-[15.5px]'>
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0.125H2C1.70163 0.125 1.41548 0.243526 1.2045 0.454505C0.993526 0.665483 0.875 0.951631 0.875 1.25V14C0.877464 14.4965 1.0758 14.972 1.4269 15.3231C1.778 15.6742 2.25348 15.8725 2.75 15.875H19.25C19.7465 15.8725 20.222 15.6742 20.5731 15.3231C20.9242 14.972 21.1225 14.4965 21.125 14V1.25C21.125 0.951631 21.0065 0.665483 20.7955 0.454505C20.5845 0.243526 20.2984 0.125 20 0.125ZM17.1125 2.375L11 7.97187L4.8875 2.375H17.1125ZM3.125 13.625V3.80938L10.2406 10.325C10.447 10.5168 10.7183 10.6233 11 10.6233C11.2817 10.6233 11.553 10.5168 11.7594 10.325L18.875 3.80938V13.625H3.125Z" fill="#0054A4" />
              </svg>

              central@tribunaltributario.gob.pa
            </p>


          </div>
        </div>



        <div className="w-full  border2">
          <iframe width="100%" height="320px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.875474099567!2d-79.52399448570355!3d8.983604792173047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8e4bce9708b%3A0xbf9d5b7bd5b19015!2sTribunal%20Administrativo%20Tributario!5e0!3m2!1ses-419!2sve!4v1661480954020!5m2!1ses-419!2sve" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div className="m-9 space-y-[18px]">
            <h4 className='text-[24px] font-bold'>Sede Central</h4>
            <p className='center gap-[15.5px]'>
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7594 19.625H12.0844C12.5625 19.1562 13.0875 18.6219 13.6125 18.0219C16.2469 14.9937 17.6344 11.7875 17.6344 8.75C17.6344 6.46251 16.7257 4.26871 15.1082 2.6512C13.4907 1.0337 11.2969 0.125 9.0094 0.125C6.72191 0.125 4.5281 1.0337 2.9106 2.6512C1.2931 4.26871 0.384399 6.46251 0.384399 8.75C0.384399 13.4375 3.58127 17.3656 5.9344 19.625H2.2594C1.96103 19.625 1.67488 19.7435 1.4639 19.9545C1.25293 20.1655 1.1344 20.4516 1.1344 20.75C1.1344 21.0484 1.25293 21.3345 1.4639 21.5455C1.67488 21.7565 1.96103 21.875 2.2594 21.875H15.7594C16.0578 21.875 16.3439 21.7565 16.5549 21.5455C16.7659 21.3345 16.8844 21.0484 16.8844 20.75C16.8844 20.4516 16.7659 20.1655 16.5549 19.9545C16.3439 19.7435 16.0578 19.625 15.7594 19.625ZM2.6344 8.75C2.6344 7.05925 3.30605 5.43774 4.50159 4.24219C5.69714 3.04665 7.31865 2.375 9.0094 2.375C10.7002 2.375 12.3217 3.04665 13.5172 4.24219C14.7127 5.43774 15.3844 7.05925 15.3844 8.75C15.3844 11.8719 13.5188 14.6937 11.9438 16.5031C11.0505 17.5311 10.0686 18.4785 9.0094 19.3344C7.95018 18.4785 6.96828 17.5311 6.07502 16.5031C4.5094 14.6937 2.6344 11.8719 2.6344 8.75ZM9.0094 12.875C9.82525 12.875 10.6228 12.6331 11.3011 12.1798C11.9795 11.7266 12.5082 11.0823 12.8204 10.3286C13.1326 9.57482 13.2143 8.74542 13.0551 7.94525C12.896 7.14508 12.5031 6.41008 11.9262 5.83318C11.3493 5.25629 10.6143 4.86342 9.81415 4.70426C9.01398 4.5451 8.18458 4.62679 7.43083 4.939C6.67709 5.25121 6.03285 5.77992 5.57959 6.45827C5.12633 7.13663 4.8844 7.93415 4.8844 8.75C4.8844 9.84402 5.319 10.8932 6.09258 11.6668C6.86617 12.4404 7.91538 12.875 9.0094 12.875ZM9.0094 6.875C9.38024 6.875 9.74275 6.98497 10.0511 7.19099C10.3594 7.39702 10.5998 7.68986 10.7417 8.03247C10.8836 8.37508 10.9207 8.75208 10.8484 9.1158C10.776 9.47951 10.5974 9.8136 10.3352 10.0758C10.073 10.338 9.73891 10.5166 9.37519 10.589C9.01148 10.6613 8.63448 10.6242 8.29187 10.4823C7.94926 10.3404 7.65642 10.1 7.45039 9.79169C7.24437 9.48335 7.1344 9.12084 7.1344 8.75C7.13686 8.25348 7.3352 7.778 7.6863 7.4269C8.0374 7.0758 8.51288 6.87746 9.0094 6.875Z" fill="#0054A4" />
              </svg>
              Calle 53 Este y Av. 3ra. Sur - Edificio Victoria Plaza, Obarrio, Piso 3.
            </p>

            <p className='center gap-[15.5px]'>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 20.375C6.85 20.375 0.625 14.15 0.625 6.50002C0.625381 5.13185 1.1244 3.81072 2.02864 2.78396C2.93288 1.75719 4.18035 1.0952 5.5375 0.921894C5.9407 0.871468 6.34934 0.954062 6.70131 1.15712C7.05328 1.36018 7.32933 1.6726 7.4875 2.04689L9.37188 6.43439C9.4963 6.71889 9.54775 7.02994 9.52156 7.33935C9.49537 7.64876 9.39236 7.94674 9.22187 8.20627L7.77813 10.4C8.41772 11.6087 9.40795 12.5957 10.6188 13.2313L12.7844 11.7875C13.0449 11.6155 13.344 11.5109 13.6549 11.4831C13.9658 11.4552 14.2787 11.5051 14.5656 11.6281L18.9531 13.5125C19.3274 13.6707 19.6398 13.9467 19.8429 14.2987C20.046 14.6507 20.1286 15.0593 20.0781 15.4625C19.9048 16.8197 19.2428 18.0671 18.2161 18.9714C17.1893 19.8756 15.8682 20.3746 14.5 20.375ZM5.5375 3.20002C4.78336 3.3629 4.10779 3.77924 3.62333 4.37971C3.13886 4.98017 2.87476 5.72849 2.875 6.50002C2.87748 9.5824 4.10305 12.5378 6.28263 14.7174C8.4622 16.897 11.4176 18.1225 14.5 18.125C15.2715 18.1253 16.0199 17.8612 16.6203 17.3767C17.2208 16.8922 17.6371 16.2167 17.8 15.4625L13.8625 13.775L11.6875 15.2281C11.417 15.4071 11.1048 15.5133 10.7813 15.5362C10.4577 15.5592 10.1337 15.4983 9.84063 15.3594C8.02089 14.4781 6.54882 13.0126 5.65937 11.1969C5.51634 10.9053 5.45232 10.5813 5.4737 10.2572C5.49509 9.9331 5.60114 9.62029 5.78125 9.35002L7.225 7.13752L5.5375 3.20002Z" fill="#0054A4" />
              </svg>

              504-3400 / 504-3401
            </p>

            <p className='center gap-[15.5px]'>
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0.125H2C1.70163 0.125 1.41548 0.243526 1.2045 0.454505C0.993526 0.665483 0.875 0.951631 0.875 1.25V14C0.877464 14.4965 1.0758 14.972 1.4269 15.3231C1.778 15.6742 2.25348 15.8725 2.75 15.875H19.25C19.7465 15.8725 20.222 15.6742 20.5731 15.3231C20.9242 14.972 21.1225 14.4965 21.125 14V1.25C21.125 0.951631 21.0065 0.665483 20.7955 0.454505C20.5845 0.243526 20.2984 0.125 20 0.125ZM17.1125 2.375L11 7.97187L4.8875 2.375H17.1125ZM3.125 13.625V3.80938L10.2406 10.325C10.447 10.5168 10.7183 10.6233 11 10.6233C11.2817 10.6233 11.553 10.5168 11.7594 10.325L18.875 3.80938V13.625H3.125Z" fill="#0054A4" />
              </svg>

              central@tribunaltributario.gob.pa
            </p>


          </div>
        </div>



      </div>




    </>


  )
}
