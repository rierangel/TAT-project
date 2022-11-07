import Oficinas from 'src/contacto/oficinas'
import LastResolutions from './LastResolutions'
import Paginas from './Paginas'

import CarruselNoticias from "src/components/entradas/CarruselNoticias";


import SvgFondo from 'src/icons/fondo'
import SvgDots from 'src/icons/dots'
import Link from 'next/link'


import Title from 'src/components/Layer/Title';
import ImgBack from 'src/components/Layer/ImgBack';
import TextBack from 'src/components/Layer/TextBack';


export default function Index({ data }) {

  return (
    <>
      <div className='flex flex-col-reverse md:flex-row '>
        <div className='w-full h-auto md:my-auto -mt-[10%]'>
          <h1 className='w.full md:w-4/5'>{data[0].titulo}</h1>
            <TextBack className="md:mt-6 md:mb-9 mb-6 mt-1" text={data[0].text} />
          <div className='flex flex-col md:flex-row gap-3 md:gap-6'>
            <Link href={"/tramites#t-apelacion"}>
              <a className='btn primary flex-center'>
                <div className='svg_rp h-auto md:w-[27px] w-[15px]'>
                  <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.75 10.75C27.7525 10.5837 27.7204 10.4187 27.6558 10.2654C27.5913 10.1121 27.4957 9.97384 27.375 9.85938L18.6406 1.10938L18.5469 1.03125H18.5156L18.4375 0.984375H18.4219L18.3438 0.921875H18.3281L18.2344 0.875H18.2188L18.1094 0.828125H2.75C2.10028 0.827808 1.47595 1.08045 1.00929 1.53252C0.542633 1.9846 0.270304 2.60059 0.25 3.25V30.75C0.25 31.413 0.513392 32.0489 0.982233 32.5178C1.45107 32.9866 2.08696 33.25 2.75 33.25H25.25C25.913 33.25 26.5489 32.9866 27.0178 32.5178C27.4866 32.0489 27.75 31.413 27.75 30.75V10.75ZM19 5.01562L23.4844 9.5H19V5.01562ZM25.25 30.75H2.75V3.25H16.5V10.75C16.5 11.0815 16.6317 11.3995 16.8661 11.6339C17.1005 11.8683 17.4185 12 17.75 12H25.25V30.75ZM19.2656 19.2344C19.5004 19.4714 19.632 19.7914 19.632 20.125C19.632 20.4586 19.5004 20.7786 19.2656 21.0156C19.0267 21.2467 18.7074 21.3758 18.375 21.3758C18.0426 21.3758 17.7233 21.2467 17.4844 21.0156L15.25 18.7656V25.75C15.25 26.0815 15.1183 26.3995 14.8839 26.6339C14.6495 26.8683 14.3315 27 14 27C13.6685 27 13.3505 26.8683 13.1161 26.6339C12.8817 26.3995 12.75 26.0815 12.75 25.75V18.7656L10.5156 21.0156C10.2728 21.215 9.96443 21.3168 9.65061 21.3014C9.3368 21.286 9.03993 21.1544 8.81776 20.9322C8.5956 20.7101 8.46401 20.4132 8.44859 20.0994C8.43318 19.7856 8.53505 19.4772 8.73438 19.2344L13.1094 14.8594L13.2031 14.7812L13.25 14.75L13.3125 14.7031L13.3594 14.6719L13.4062 14.6406H13.4688L13.5156 14.6094H13.5781L13.6406 14.5781H14.3594L14.4219 14.6094H14.4844L14.5312 14.6406H14.5938L14.6406 14.6719L14.6875 14.7031L14.75 14.75L14.7969 14.7812L14.8906 14.8594L19.2656 19.2344Z" fill="white" />
                  </svg>
                </div>
                Realizar trámites
              </a>
            </Link>
            <Link href={"/tramites#t-estado"}>
              <a className='btn outline flex-center'>
                <div className='svg_rp h-auto md:w-[27px] w-[15px]'>
                  <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.75 10.75C27.7525 10.5837 27.7204 10.4187 27.6559 10.2654C27.5913 10.1121 27.4957 9.97384 27.375 9.85938L18.6406 1.10938L18.5469 1.03125H18.5156L18.4375 0.984375H18.4219L18.3438 0.921875H18.3281L18.2344 0.875H18.2188L18.1094 0.828125H2.75C2.10028 0.827808 1.47595 1.08045 1.00929 1.53252C0.542633 1.9846 0.270304 2.60059 0.25 3.25V30.75C0.25 31.413 0.513392 32.0489 0.982233 32.5178C1.45107 32.9866 2.08696 33.25 2.75 33.25H25.25C25.913 33.25 26.5489 32.9866 27.0178 32.5178C27.4866 32.0489 27.75 31.413 27.75 30.75V10.75ZM19 5.01563L23.4844 9.5H19V5.01563ZM25.25 30.75H2.75V3.25H16.5V10.75C16.5 11.0815 16.6317 11.3995 16.8661 11.6339C17.1005 11.8683 17.4185 12 17.75 12H25.25V30.75ZM18.1406 23.125C18.7059 22.2268 19.0039 21.1863 19 20.125C18.9986 18.6328 18.4091 17.2012 17.3594 16.1406C16.61 15.3935 15.6651 14.873 14.6331 14.6388C13.6012 14.4045 12.5242 14.4661 11.5257 14.8165C10.5272 15.1668 9.64776 15.7917 8.98843 16.6193C8.32909 17.447 7.91659 18.4438 7.79829 19.4954C7.67999 20.5469 7.8607 21.6105 8.31966 22.5639C8.77862 23.5174 9.49721 24.3221 10.3929 24.8855C11.2886 25.4489 12.325 25.7483 13.3832 25.7492C14.4414 25.7501 15.4783 25.4525 16.375 24.8906L18.0781 26.6094C18.3181 26.8387 18.6368 26.9673 18.9688 26.9688C19.3001 26.9642 19.6177 26.8361 19.8594 26.6094C20.0941 26.3724 20.2258 26.0523 20.2258 25.7188C20.2258 25.3852 20.0941 25.0651 19.8594 24.8281L18.1406 23.125ZM11.1719 22.3281C10.6701 21.8191 10.36 21.152 10.2944 20.4402C10.2288 19.7284 10.4117 19.0158 10.812 18.4236C11.2124 17.8314 11.8054 17.3961 12.4904 17.1917C13.1753 16.9873 13.9099 17.0264 14.5693 17.3023C15.2287 17.5782 15.7722 18.074 16.1075 18.7053C16.4427 19.3366 16.549 20.0645 16.4083 20.7653C16.2676 21.4661 15.8885 22.0966 15.3355 22.5496C14.7826 23.0025 14.0898 23.25 13.375 23.25C12.9649 23.2509 12.5587 23.1697 12.1804 23.0114C11.8021 22.8531 11.4592 22.6208 11.1719 22.3281V22.3281Z" fill="#0F1620" />
                  </svg>
                </div>
                Consultar trámites
              </a>
            </Link>
          </div>
        </div>

        <div className='w-full h-auto mb-20 scale-110 md:mb-0'>
          <ImgBack src={data[0].imagen} alt="" />
        </div>

      </div>

      <hr className='invisible my-[50px]' />
      <Title data={data[1]} link={"/publicaciones/resoluciones/"} />
      <LastResolutions />

      <CarruselNoticias />


      <div className=' my-[100px]
                    bg-primary relative color-white gap-6 p-6  rounded-xl  
                    flex flex-col
                    md:flex-row md:px-[55px] md:py-12 '>

        <div className='text-white w-full md:w-1/2'>
          <h2 className=''>Cultura Tributaria</h2>
          <p className=' mt-2 mb-6'>Educación para los contribuyentes, divulgación y promoción para fortalecer la moral tributaria en el cumplimiento de obligaciones de los ciudadanos.</p>
          <button className='btn-sm white w-full text-center flex justify-center md:mr-auto md:w-auto'>
            Acceder al contenido
          </button>
        </div>



        <div className='absolute top-[120px] right-[500px] hidden lg:flex'>
          <SvgDots width={"100%"} height={"100%"} fill="#ffffff1a" />
        </div>

        <div className='absolute top-0 right-[320px] hidden lg:flex'>
          <svg width="261" height="182" viewBox="0 0 261 182" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M253.194 150.515C253.33 151.694 253.228 152.889 252.898 154.029C252.567 155.17 252.015 156.234 251.273 157.159C250.528 158.086 249.609 158.855 248.567 159.422C247.526 159.992 246.38 160.349 245.201 160.471C244.019 160.596 242.826 160.485 241.688 160.146C240.55 159.805 239.491 159.245 238.571 158.493C237.652 157.74 236.892 156.816 236.332 155.768C235.772 154.721 235.426 153.574 235.311 152.392L233.879 138.852C233.653 136.492 234.366 134.138 235.866 132.302C237.368 130.466 239.532 129.297 241.891 129.049C244.248 128.802 246.609 129.495 248.458 130.98C250.307 132.464 251.494 134.619 251.762 136.975L253.194 150.515Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M228 146.958L228.69 153.626C228.904 155.676 229.521 157.665 230.502 159.477C231.484 161.289 232.814 162.89 234.416 164.187C236.014 165.486 237.858 166.455 239.832 167.043C241.808 167.629 243.881 167.822 245.93 167.608C247.981 167.392 249.968 166.778 251.78 165.796C253.593 164.812 255.194 163.484 256.493 161.883C257.79 160.281 258.761 158.441 259.347 156.464C259.933 154.488 260.126 152.416 259.912 150.366L259.222 143.698" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M245.932 167.608L247.265 180.057" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M240.597 180.75L253.887 179.365" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M109.014 152.076L131.419 162.549L127.394 114.967L107.073 129.115" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M87.7928 114.068C92.3147 113.673 96.8148 115.004 100.394 117.797C103.972 120.59 106.36 124.633 107.072 129.115L108.944 150.683C109.152 153.037 108.893 155.409 108.184 157.665C107.475 159.92 106.327 162.015 104.806 163.825C103.285 165.634 101.425 167.129 99.3262 168.219C97.2279 169.308 94.9321 169.973 92.5779 170.174L49.2992 173.779C46.9413 173.995 44.5652 173.742 42.306 173.037C40.0505 172.328 37.9522 171.18 36.1426 169.659C34.3295 168.138 32.8343 166.27 31.7486 164.168C30.6629 162.066 30.0012 159.771 29.8075 157.413L28.0747 137.307C27.8591 134.949 28.1113 132.573 28.8168 130.317C29.526 128.058 30.6702 125.96 32.1946 124.15C33.7153 122.337 35.5797 120.842 37.6817 119.756C39.7873 118.671 42.083 118.009 44.4409 117.815L87.7928 114.068Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M259 90.4812L250.506 69.7483C255.699 62.0315 258.21 52.8213 257.652 43.5369C256.112 19.1714 233.479 0.251207 206.507 1.02278C178.969 1.79067 157.252 22.8041 158.02 47.9523C158.784 74.4996 183.626 93.5047 210.764 91.9062C220.486 91.2934 229.86 88.0609 237.892 82.5513L259 90.4812Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M9.31015 34.459C8.60855 35.131 7.72334 35.58 6.76654 35.749C5.80994 35.918 4.82455 35.7996 3.93515 35.4086C3.04575 35.0176 2.29215 34.3716 1.76995 33.5522C1.24775 32.733 0.980148 31.7772 1.00115 30.8058C1.02215 29.8346 1.33075 28.8912 1.88795 28.0954C2.44495 27.2994 3.22554 26.6864 4.13115 26.3342C5.03654 25.982 6.02615 25.9062 6.97475 26.1162C7.92315 26.3264 8.78815 26.8132 9.46015 27.515C10.3579 28.4572 10.8462 29.7168 10.818 31.018C10.79 32.3192 10.2478 33.5564 9.31015 34.459Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M88.4861 46L90.1941 66.72" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M99.718 55.4861L79 57.2321" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
        <div className='absolute overflow-hidden bottom-0 top-0 md:bottom-auto right-[-60px] md:right-0 opacity-10'>
          <SvgFondo width={"100%"} height={"100%"} fill="#ffffff1a" />
        </div>
      </div>


      <Title data={data[2]} />
      <Paginas />

      <Title data={data[3]} link={"/contacto"} />
      <Oficinas />

    </>
  )
}
