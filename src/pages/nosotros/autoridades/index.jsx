import React from 'react'
import Layer from 'src/components/Layer'
import Equipo from 'src/components/About/Equipo'


export default function page() {
  return (
    <Layer>

      <section>

        <div className="flex flex-col md:flex-row lg:gap-24">
          <div className='lg:w-4/5 lg:order-1 order-3'>
            <div className='subtitle'>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.625 15C29.6258 12.5672 29.0197 10.1727 27.8615 8.03323C26.7034 5.89379 25.0299 4.07704 22.9926 2.74752C20.9552 1.418 18.6184 0.617725 16.1937 0.419161C13.769 0.220597 11.3331 0.630023 9.1066 1.61036C6.88008 2.59069 4.93328 4.11096 3.44253 6.03348C1.95177 7.956 0.964145 10.22 0.569105 12.6205C0.174065 15.021 0.384089 17.4822 1.18015 19.781C1.97622 22.0799 3.33317 24.1438 5.12813 25.7859L5.31094 25.9547C7.98458 28.3194 11.4307 29.6247 15 29.6247C18.5693 29.6247 22.0154 28.3194 24.6891 25.9547L24.8719 25.7859C26.3711 24.4179 27.5683 22.7519 28.3867 20.8946C29.2052 19.0373 29.6269 17.0296 29.625 15V15ZM2.625 15C2.62426 12.9957 3.11035 11.0213 4.04147 9.24642C4.97259 7.47156 6.32088 5.94941 7.97038 4.81089C9.61989 3.67236 11.5213 2.95152 13.511 2.71035C15.5007 2.46918 17.5192 2.71491 19.3929 3.42639C21.2667 4.13788 22.9396 5.29383 24.2677 6.79485C25.5959 8.29587 26.5396 10.097 27.0178 12.0434C27.4959 13.9898 27.4941 16.0233 27.0125 17.9688C26.5309 19.9144 25.584 21.7139 24.2531 23.2125C22.9988 21.3934 21.2316 19.9885 19.1766 19.1766C20.2788 18.3084 21.0831 17.1184 21.4777 15.7719C21.8722 14.4254 21.8373 12.9895 21.3779 11.6637C20.9185 10.338 20.0574 9.18838 18.9144 8.37473C17.7713 7.56108 16.4031 7.12385 15 7.12385C13.5969 7.12385 12.2287 7.56108 11.0857 8.37473C9.94259 9.18838 9.08148 10.338 8.62208 11.6637C8.16268 12.9895 8.12782 14.4254 8.52235 15.7719C8.91689 17.1184 9.7212 18.3084 10.8234 19.1766C8.76836 19.9885 7.00124 21.3934 5.74688 23.2125C3.73224 20.9518 2.62087 18.0282 2.625 15V15ZM10.5 13.875C10.5 12.985 10.7639 12.115 11.2584 11.3749C11.7529 10.6349 12.4557 10.0581 13.2779 9.71755C14.1002 9.37696 15.005 9.28784 15.8779 9.46148C16.7508 9.63511 17.5526 10.0637 18.182 10.693C18.8113 11.3224 19.2399 12.1242 19.4135 12.9971C19.5872 13.87 19.4981 14.7748 19.1575 15.5971C18.8169 16.4194 18.2401 17.1222 17.5001 17.6166C16.76 18.1111 15.89 18.375 15 18.375C13.8077 18.3713 12.6652 17.896 11.8221 17.0529C10.979 16.2098 10.5037 15.0673 10.5 13.875V13.875ZM7.42031 24.7734C8.23442 23.5018 9.35536 22.4555 10.6799 21.7307C12.0045 21.006 13.4901 20.6261 15 20.6261C16.5099 20.6261 17.9955 21.006 19.3201 21.7307C20.6446 22.4555 21.7656 23.5018 22.5797 24.7734C20.4125 26.4588 17.7454 27.3739 15 27.3739C12.2546 27.3739 9.5875 26.4588 7.42031 24.7734V24.7734Z" fill="#0054A4" />
              </svg>


              <h1>Nuestras Autoridades</h1>

            </div>
            <p>El Tribunal Administrativo Tributario está conformado por:</p>

            <div className='subtitle pt-4 '>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="18" fill="#EBF5FF" />
                <path d="M27.7407 25.875C26.3413 23.4643 24.1012 21.6549 21.4501 20.7938C22.7208 20.0381 23.7083 18.8861 24.2609 17.5148C24.8135 16.1435 24.9005 14.6287 24.5087 13.2031C24.1168 11.7775 23.2678 10.52 22.0919 9.62373C20.9161 8.72748 19.4785 8.24207 18.0001 8.24207C16.5216 8.24207 15.084 8.72748 13.9082 9.62373C12.7324 10.52 11.8833 11.7775 11.4915 13.2031C11.0996 14.6287 11.1867 16.1435 11.7392 17.5148C12.2918 18.8861 13.2793 20.0381 14.5501 20.7938C11.8989 21.6549 9.65888 23.4643 8.25944 25.875C8.20074 25.9602 8.16029 26.0566 8.14063 26.1581C8.12097 26.2596 8.12252 26.3642 8.14519 26.4651C8.16785 26.566 8.21115 26.6611 8.27235 26.7445C8.33355 26.8279 8.41133 26.8977 8.50081 26.9495C8.59028 27.0014 8.68952 27.0342 8.79228 27.0459C8.89505 27.0576 8.99912 27.0479 9.09795 27.0174C9.19678 26.9869 9.28824 26.9363 9.36659 26.8688C9.44493 26.8013 9.50846 26.7183 9.55319 26.625C10.4104 25.1438 11.6421 23.914 13.1247 23.059C14.6073 22.204 16.2886 21.754 18.0001 21.754C19.7115 21.754 21.3928 22.204 22.8754 23.059C24.358 23.914 25.5897 25.1438 26.4469 26.625C26.4917 26.7183 26.5552 26.8013 26.6335 26.8688C26.7119 26.9363 26.8033 26.9869 26.9022 27.0174C27.001 27.0479 27.1051 27.0576 27.2078 27.0459C27.3106 27.0342 27.4098 27.0014 27.4993 26.9495C27.5888 26.8977 27.6666 26.8279 27.7278 26.7445C27.789 26.6611 27.8323 26.566 27.8549 26.4651C27.8776 26.3642 27.8792 26.2596 27.8595 26.1581C27.8398 26.0566 27.7994 25.9602 27.7407 25.875ZM12.7501 15C12.7501 13.9617 13.058 12.9467 13.6349 12.0833C14.2117 11.2199 15.0317 10.547 15.991 10.1497C16.9503 9.75231 18.0059 9.64834 19.0243 9.85092C20.0427 10.0535 20.9782 10.5535 21.7124 11.2877C22.4466 12.022 22.9466 12.9574 23.1492 13.9758C23.3518 14.9942 23.2478 16.0498 22.8504 17.0091C22.4531 17.9684 21.7802 18.7884 20.9168 19.3653C20.0535 19.9421 19.0384 20.25 18.0001 20.25C16.6077 20.25 15.2723 19.6969 14.2878 18.7123C13.3032 17.7278 12.7501 16.3924 12.7501 15Z" fill="#0054A4" />
              </svg>
              <h5>Tres Magistrados Principales, con sus respectivos suplentes.</h5>



            </div>
            <div className='pl-16'>
              <div className='subtitle'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.25 9.74999H4.5V15.75H3C2.80109 15.75 2.61032 15.829 2.46967 15.9697C2.32902 16.1103 2.25 16.3011 2.25 16.5C2.25 16.6989 2.32902 16.8897 2.46967 17.0303C2.61032 17.171 2.80109 17.25 3 17.25H21C21.1989 17.25 21.3897 17.171 21.5303 17.0303C21.671 16.8897 21.75 16.6989 21.75 16.5C21.75 16.3011 21.671 16.1103 21.5303 15.9697C21.3897 15.829 21.1989 15.75 21 15.75H19.5V9.74999H21.75C21.913 9.7497 22.0714 9.69632 22.2014 9.59794C22.3313 9.49956 22.4257 9.36153 22.4702 9.20474C22.5147 9.04795 22.5069 8.88093 22.448 8.72896C22.3891 8.57699 22.2823 8.44834 22.1437 8.36248L12.3937 2.36249C12.2758 2.28843 12.1393 2.24915 12 2.24915C11.8607 2.24915 11.7242 2.28843 11.6063 2.36249L1.85625 8.36248C1.71771 8.44834 1.61092 8.57699 1.55202 8.72896C1.49312 8.88093 1.48533 9.04795 1.52983 9.20474C1.57432 9.36153 1.66868 9.49956 1.79862 9.59794C1.92856 9.69632 2.08702 9.7497 2.25 9.74999ZM6 9.74999H9V15.75H6V9.74999ZM13.5 9.74999V15.75H10.5V9.74999H13.5ZM18 15.75H15V9.74999H18V15.75ZM12 3.88124L19.0969 8.24999H4.90312L12 3.88124ZM23.25 19.5C23.25 19.6989 23.171 19.8897 23.0303 20.0303C22.8897 20.171 22.6989 20.25 22.5 20.25H1.5C1.30109 20.25 1.11032 20.171 0.96967 20.0303C0.829018 19.8897 0.75 19.6989 0.75 19.5C0.75 19.3011 0.829018 19.1103 0.96967 18.9697C1.11032 18.829 1.30109 18.75 1.5 18.75H22.5C22.6989 18.75 22.8897 18.829 23.0303 18.9697C23.171 19.1103 23.25 19.3011 23.25 19.5Z" fill="#0054A4" />
                </svg>

                <h5>Dos Magistrados Abogados.</h5>


              </div>
              <div className='subtitle'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5 2.25H6.75C5.95511 2.25247 5.19349 2.56934 4.63141 3.13141C4.06934 3.69349 3.75247 4.45511 3.75 5.25V21C3.75 21.1989 3.82902 21.3897 3.96967 21.5303C4.11032 21.671 4.30109 21.75 4.5 21.75H18C18.1989 21.75 18.3897 21.671 18.5303 21.5303C18.671 21.3897 18.75 21.1989 18.75 21C18.75 20.8011 18.671 20.6103 18.5303 20.4697C18.3897 20.329 18.1989 20.25 18 20.25H5.25C5.25 19.8522 5.40804 19.4706 5.68934 19.1893C5.97064 18.908 6.35218 18.75 6.75 18.75H19.5C19.6989 18.75 19.8897 18.671 20.0303 18.5303C20.171 18.3897 20.25 18.1989 20.25 18V3C20.25 2.80109 20.171 2.61032 20.0303 2.46967C19.8897 2.32902 19.6989 2.25 19.5 2.25ZM18.75 17.25H6.75C6.2234 17.2512 5.70628 17.3902 5.25 17.6531V5.25C5.25 4.85218 5.40804 4.47064 5.68934 4.18934C5.97064 3.90804 6.35218 3.75 6.75 3.75H18.75V17.25Z" fill="#0054A4" />
                </svg>
                <h5>Un Magistrado Contador Público Autorizado.</h5>
              </div>
            </div>

            <div className='bg-[#EBF5FF] p-6 rounded-2xl mt-20'>
              <p>Dichos nombramientos fueron realizados por el Presidente de la República y aprobados por el Órgano Legislativo, cumpliendo así con lo expresado por la Ley 8/2010, por la cual se crea el Tribunal Administrativo Tributario.</p>
            </div>
          </div>

          <div className="lg:h-[454px] lg:-translate-y-12 order-2 ">
            <picture >
              <source media="(min-width:1024px)" srcSet="/img/ab/0.png" />
              <img className='scale-[110%] lg:scale-100 w-auto -my-6 lg:my-0 ' src="/img/ab/1.png" alt="" />
            </picture>

          </div>
        </div>
      </section>
      <Equipo />

    </Layer>
  )
}