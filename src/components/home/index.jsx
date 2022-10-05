import Oficinas from '../contacto/oficinas'
import LastResolutions from './LastResolutions'
import Paginas from './Paginas'


export default function Index() {
  return (
    <>

      {/* // style={{ backgroundImage: `url("")` }} */}
      {/* <div
          className="h-[160px] w-[328px] relative bg-contain bg-no-repeat"
        >

        </div> */}

      <div className='flex flex-col-reverse md:flex-row'>

        <div className='w-full h-auto md:my-auto -mt-[10%] '>
          <h1>Realiza y consulta el estado de tus trámites desde donde te encuentres.</h1>
          <p className='md:mt-6 md:mb-9 mb-6 mt-1'>Toda la información que necesites a un solo click.</p>
          <div className='flex flex-col md:flex-row gap-3 md:gap-6'>

            <button className='primary flex-center'>
              <div className='svg_rp h-auto md:w-[27px] w-[15px]'>

                <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.75 10.75C27.7525 10.5837 27.7204 10.4187 27.6558 10.2654C27.5913 10.1121 27.4957 9.97384 27.375 9.85938L18.6406 1.10938L18.5469 1.03125H18.5156L18.4375 0.984375H18.4219L18.3438 0.921875H18.3281L18.2344 0.875H18.2188L18.1094 0.828125H2.75C2.10028 0.827808 1.47595 1.08045 1.00929 1.53252C0.542633 1.9846 0.270304 2.60059 0.25 3.25V30.75C0.25 31.413 0.513392 32.0489 0.982233 32.5178C1.45107 32.9866 2.08696 33.25 2.75 33.25H25.25C25.913 33.25 26.5489 32.9866 27.0178 32.5178C27.4866 32.0489 27.75 31.413 27.75 30.75V10.75ZM19 5.01562L23.4844 9.5H19V5.01562ZM25.25 30.75H2.75V3.25H16.5V10.75C16.5 11.0815 16.6317 11.3995 16.8661 11.6339C17.1005 11.8683 17.4185 12 17.75 12H25.25V30.75ZM19.2656 19.2344C19.5004 19.4714 19.632 19.7914 19.632 20.125C19.632 20.4586 19.5004 20.7786 19.2656 21.0156C19.0267 21.2467 18.7074 21.3758 18.375 21.3758C18.0426 21.3758 17.7233 21.2467 17.4844 21.0156L15.25 18.7656V25.75C15.25 26.0815 15.1183 26.3995 14.8839 26.6339C14.6495 26.8683 14.3315 27 14 27C13.6685 27 13.3505 26.8683 13.1161 26.6339C12.8817 26.3995 12.75 26.0815 12.75 25.75V18.7656L10.5156 21.0156C10.2728 21.215 9.96443 21.3168 9.65061 21.3014C9.3368 21.286 9.03993 21.1544 8.81776 20.9322C8.5956 20.7101 8.46401 20.4132 8.44859 20.0994C8.43318 19.7856 8.53505 19.4772 8.73438 19.2344L13.1094 14.8594L13.2031 14.7812L13.25 14.75L13.3125 14.7031L13.3594 14.6719L13.4062 14.6406H13.4688L13.5156 14.6094H13.5781L13.6406 14.5781H14.3594L14.4219 14.6094H14.4844L14.5312 14.6406H14.5938L14.6406 14.6719L14.6875 14.7031L14.75 14.75L14.7969 14.7812L14.8906 14.8594L19.2656 19.2344Z" fill="white" />
                </svg>
              </div>

              Realizar trámites</button>
            <button className='outline flex-center'>
              <div className='svg_rp h-auto md:w-[27px] w-[15px]'>
                <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.75 10.75C27.7525 10.5837 27.7204 10.4187 27.6559 10.2654C27.5913 10.1121 27.4957 9.97384 27.375 9.85938L18.6406 1.10938L18.5469 1.03125H18.5156L18.4375 0.984375H18.4219L18.3438 0.921875H18.3281L18.2344 0.875H18.2188L18.1094 0.828125H2.75C2.10028 0.827808 1.47595 1.08045 1.00929 1.53252C0.542633 1.9846 0.270304 2.60059 0.25 3.25V30.75C0.25 31.413 0.513392 32.0489 0.982233 32.5178C1.45107 32.9866 2.08696 33.25 2.75 33.25H25.25C25.913 33.25 26.5489 32.9866 27.0178 32.5178C27.4866 32.0489 27.75 31.413 27.75 30.75V10.75ZM19 5.01563L23.4844 9.5H19V5.01563ZM25.25 30.75H2.75V3.25H16.5V10.75C16.5 11.0815 16.6317 11.3995 16.8661 11.6339C17.1005 11.8683 17.4185 12 17.75 12H25.25V30.75ZM18.1406 23.125C18.7059 22.2268 19.0039 21.1863 19 20.125C18.9986 18.6328 18.4091 17.2012 17.3594 16.1406C16.61 15.3935 15.6651 14.873 14.6331 14.6388C13.6012 14.4045 12.5242 14.4661 11.5257 14.8165C10.5272 15.1668 9.64776 15.7917 8.98843 16.6193C8.32909 17.447 7.91659 18.4438 7.79829 19.4954C7.67999 20.5469 7.8607 21.6105 8.31966 22.5639C8.77862 23.5174 9.49721 24.3221 10.3929 24.8855C11.2886 25.4489 12.325 25.7483 13.3832 25.7492C14.4414 25.7501 15.4783 25.4525 16.375 24.8906L18.0781 26.6094C18.3181 26.8387 18.6368 26.9673 18.9688 26.9688C19.3001 26.9642 19.6177 26.8361 19.8594 26.6094C20.0941 26.3724 20.2258 26.0523 20.2258 25.7188C20.2258 25.3852 20.0941 25.0651 19.8594 24.8281L18.1406 23.125ZM11.1719 22.3281C10.6701 21.8191 10.36 21.152 10.2944 20.4402C10.2288 19.7284 10.4117 19.0158 10.812 18.4236C11.2124 17.8314 11.8054 17.3961 12.4904 17.1917C13.1753 16.9873 13.9099 17.0264 14.5693 17.3023C15.2287 17.5782 15.7722 18.074 16.1075 18.7053C16.4427 19.3366 16.549 20.0645 16.4083 20.7653C16.2676 21.4661 15.8885 22.0966 15.3355 22.5496C14.7826 23.0025 14.0898 23.25 13.375 23.25C12.9649 23.2509 12.5587 23.1697 12.1804 23.0114C11.8021 22.8531 11.4592 22.6208 11.1719 22.3281V22.3281Z" fill="#0F1620" />
                </svg>
              </div>
              Consultar trámites</button>
          </div>
        </div>

        <div className='relative  '>
          <picture className='inset-0 w-full h-full object-cover '>
            <source media="(min-width:768px)" srcSet="/img/index/0.png" />
            <img className='scale-[110%]' src="img/index/mv0.png" alt="" />
          </picture>
        </div>


      </div>
      <LastResolutions />
      <Paginas />
      <Oficinas/>

    </>
  )
}
