import React from 'react'
import Layer from 'src/components/Layer'
import SvgFondo from 'src/components/icons/fondo'

import Title from 'src/components/Layer/Title'
import { fetcher } from 'src/lib/Fetcher'
import TextBack from 'src/components/Layer/TextBack'
import ImgBack from 'src/components/Layer/ImgBack'

export default function page({ data }) {
  const feats = ["Ser reconocidos", "Mejorar la calidad", "Mejorar la efectividad", "Mantener el recurso humano", "Tener un personal calificado"]
  const valores = [
    {
      name: "Compromiso",
      svg: <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4999 0.00598148C16.6462 0.00584823 17.7493 0.44346 18.5837 1.22939C19.4182 2.01532 19.921 3.09024 19.9894 4.23448L19.9969 4.49848H23.3734C23.9943 4.49841 24.595 4.71838 25.069 5.11933C25.543 5.52027 25.8596 6.07624 25.9624 6.68848L25.9909 6.90898L25.9984 7.12498V12.75L22.9999 12.753C22.4704 12.752 21.9574 12.9378 21.5513 13.2777C21.1452 13.6177 20.8721 14.09 20.7799 14.6115L20.7574 14.8095L20.7499 15.003C20.7489 15.5326 20.9347 16.0455 21.2747 16.4516C21.6146 16.8577 22.0869 17.1308 22.6084 17.223L22.8064 17.2455L22.9999 17.253H25.9954L25.9999 22.878C26.0003 23.537 25.7527 24.1721 25.3064 24.657C24.8601 25.1419 24.2478 25.4413 23.5909 25.4955L23.3749 25.503H19.9999L19.9924 25.761C19.9303 26.8145 19.5001 27.8127 18.7768 28.5812C18.0535 29.3497 17.0832 29.8397 16.0354 29.9655L15.7654 29.9895L15.4999 29.997C14.3531 29.9971 13.2495 29.5594 12.4145 28.7732C11.5795 27.9871 11.0763 26.9118 11.0074 25.767L10.9999 25.503H7.62494C7.00481 25.5028 6.40476 25.2831 5.93114 24.8828C5.45752 24.4825 5.14092 23.9274 5.03744 23.316L5.00894 23.094L4.99994 22.8795V19.5L4.75394 19.4925C3.70061 19.4303 2.70261 19 1.93435 18.2767C1.1661 17.5534 0.676435 16.5832 0.550944 15.5355L0.526944 15.2655L0.517944 15C0.517858 13.8524 0.956201 12.7482 1.74332 11.9131C2.53045 11.078 3.60687 10.5752 4.75244 10.5075L4.99694 10.5L4.99994 7.12498C4.99994 5.82448 5.94644 4.74448 7.18844 4.53598L7.41044 4.50748L7.62344 4.49998L10.9999 4.49848L11.0074 4.24198C11.0693 3.18816 11.4997 2.18962 12.2233 1.42103C12.947 0.652429 13.9178 0.162696 14.9659 0.0374817L15.2359 0.0134816L15.4999 0.00598148ZM15.4999 2.25598C14.9404 2.25564 14.4007 2.46382 13.9864 2.83991C13.572 3.21599 13.3127 3.73298 13.2589 4.28998L13.2484 4.50748L13.2469 6.74848H7.62344C7.53896 6.74862 7.457 6.77729 7.39084 6.82983C7.32468 6.88238 7.27821 6.95572 7.25894 7.03798L7.24994 7.12498V12.75L5.01944 12.7515C4.44149 12.7514 3.88566 12.9737 3.46718 13.3723C3.0487 13.7709 2.79966 14.3153 2.7717 14.8926C2.74373 15.4699 2.93898 16.0358 3.31696 16.473C3.69495 16.9102 4.22669 17.1852 4.80194 17.241L5.01944 17.2515H7.24994V22.878C7.24975 22.9627 7.27826 23.045 7.33083 23.1115C7.3834 23.178 7.45693 23.2247 7.53944 23.244L7.62494 23.253H13.2484L13.2499 25.497C13.2455 26.0778 13.4659 26.6379 13.8649 27.06C14.264 27.482 14.8109 27.7334 15.391 27.7615C15.9712 27.7896 16.5398 27.5923 16.9778 27.2107C17.4158 26.8292 17.6892 26.293 17.7409 25.7145L17.7499 25.4985L17.7484 23.253H23.3749C23.4595 23.2533 23.5416 23.225 23.6081 23.1727C23.6745 23.1204 23.7213 23.0472 23.7409 22.965L23.7499 22.8795V19.5H22.9654L22.6954 19.491C21.5978 19.4144 20.5661 18.9387 19.7951 18.1536C19.0241 17.3685 18.5671 16.3284 18.5104 15.2295L18.5029 14.964L18.5134 14.694C18.5882 13.6016 19.0588 12.5739 19.8369 11.8035C20.615 11.0331 21.6473 10.5729 22.7404 10.509L23.0029 10.5015H23.7484L23.7499 7.12498C23.7501 7.05752 23.7321 6.99126 23.6978 6.93318C23.6635 6.87511 23.6141 6.82736 23.5549 6.79498L23.4619 6.75898L23.3749 6.74998L17.7484 6.74848L17.7499 4.50598C17.7499 3.90924 17.5129 3.33695 17.0909 2.91499C16.669 2.49303 16.0967 2.25598 15.4999 2.25598Z" fill="#0054A4" />
      </svg>

    },
    {
      name: "Responsabilidad",
      svg: <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.875 0.5C2.97989 0.5 2.12145 0.85558 1.48851 1.48851C0.855579 2.12145 0.5 2.97989 0.5 3.875V24.1235C0.5 25.0186 0.855579 25.8771 1.48851 26.51C2.12145 27.1429 2.97989 27.4985 3.875 27.4985H12.746L13.28 25.3625L13.31 25.2485H3.875C3.57663 25.2485 3.29048 25.13 3.0795 24.919C2.86853 24.708 2.75 24.4219 2.75 24.1235V3.8735C2.75 3.57513 2.86853 3.28898 3.0795 3.07801C3.29048 2.86703 3.57663 2.7485 3.875 2.7485H24.1235C24.4219 2.7485 24.708 2.86703 24.919 3.07801C25.13 3.28898 25.2485 3.57513 25.2485 3.8735V12.848C25.9655 12.563 26.738 12.452 27.4985 12.518V3.875C27.4985 3.43166 27.4112 2.99267 27.2414 2.5831C27.0717 2.17353 26.823 1.8014 26.5095 1.48798C26.1959 1.17457 25.8237 0.925998 25.414 0.756476C25.0044 0.586955 24.5653 0.499803 24.122 0.5H3.872H3.875ZM19.031 18.4985H12.8735C12.5751 18.4985 12.289 18.617 12.078 18.828C11.867 19.039 11.7485 19.3251 11.7485 19.6235C11.7485 19.9219 11.867 20.208 12.078 20.419C12.289 20.63 12.5751 20.7485 12.8735 20.7485H16.781L19.031 18.4985ZM9.1235 8.3735C9.1235 8.77132 8.96547 9.15286 8.68416 9.43416C8.40286 9.71547 8.02132 9.8735 7.6235 9.8735C7.22568 9.8735 6.84414 9.71547 6.56284 9.43416C6.28154 9.15286 6.1235 8.77132 6.1235 8.3735C6.1235 7.97567 6.28154 7.59414 6.56284 7.31284C6.84414 7.03154 7.22568 6.8735 7.6235 6.8735C8.02132 6.8735 8.40286 7.03154 8.68416 7.31284C8.96547 7.59414 9.1235 7.97567 9.1235 8.3735ZM12.8735 7.2485C12.5751 7.2485 12.289 7.36703 12.078 7.578C11.867 7.78898 11.7485 8.07513 11.7485 8.3735C11.7485 8.67187 11.867 8.95802 12.078 9.16899C12.289 9.37997 12.5751 9.4985 12.8735 9.4985H21.1235C21.4219 9.4985 21.708 9.37997 21.919 9.16899C22.13 8.95802 22.2485 8.67187 22.2485 8.3735C22.2485 8.07513 22.13 7.78898 21.919 7.578C21.708 7.36703 21.4219 7.2485 21.1235 7.2485H12.8735ZM12.8735 12.8735C12.7258 12.8735 12.5795 12.9026 12.443 12.9591C12.3065 13.0157 12.1825 13.0985 12.078 13.203C11.9735 13.3075 11.8907 13.4315 11.8341 13.568C11.7776 13.7045 11.7485 13.8508 11.7485 13.9985C11.7485 14.1462 11.7776 14.2925 11.8341 14.429C11.8907 14.5655 11.9735 14.6895 12.078 14.794C12.1825 14.8985 12.3065 14.9813 12.443 15.0379C12.5795 15.0944 12.7258 15.1235 12.8735 15.1235H21.1235C21.2712 15.1235 21.4175 15.0944 21.554 15.0379C21.6905 14.9813 21.8145 14.8985 21.919 14.794C22.0235 14.6895 22.1063 14.5655 22.1629 14.429C22.2194 14.2925 22.2485 14.1462 22.2485 13.9985C22.2485 13.8508 22.2194 13.7045 22.1629 13.568C22.1063 13.4315 22.0235 13.3075 21.919 13.203C21.8145 13.0985 21.6905 13.0157 21.554 12.9591C21.4175 12.9026 21.2712 12.8735 21.1235 12.8735H12.8735ZM7.625 15.5C8.02282 15.5 8.40436 15.342 8.68566 15.0607C8.96696 14.7794 9.125 14.3978 9.125 14C9.125 13.6022 8.96696 13.2206 8.68566 12.9393C8.40436 12.658 8.02282 12.5 7.625 12.5C7.22718 12.5 6.84564 12.658 6.56434 12.9393C6.28304 13.2206 6.125 13.6022 6.125 14C6.125 14.3978 6.28304 14.7794 6.56434 15.0607C6.84564 15.342 7.22718 15.5 7.625 15.5ZM9.125 19.625C9.125 20.0228 8.96696 20.4044 8.68566 20.6857C8.40436 20.967 8.02282 21.125 7.625 21.125C7.22718 21.125 6.84564 20.967 6.56434 20.6857C6.28304 20.4044 6.125 20.0228 6.125 19.625C6.125 19.2272 6.28304 18.8456 6.56434 18.5643C6.84564 18.283 7.22718 18.125 7.625 18.125C8.02282 18.125 8.40436 18.283 8.68566 18.5643C8.96696 18.8456 9.125 19.2272 9.125 19.625ZM24.65 15.005L15.797 23.8565C15.2803 24.3728 14.9137 25.0199 14.7365 25.7285L14.051 28.4735C13.751 29.669 14.834 30.7505 16.028 30.452L18.773 29.765C19.4815 29.5882 20.1285 29.2222 20.645 28.706L29.495 19.85C30.1214 19.2035 30.4685 18.3367 30.4614 17.4365C30.4542 16.5364 30.0934 15.6751 29.4568 15.0387C28.8202 14.4023 27.9588 14.0417 27.0587 14.0349C26.1585 14.028 25.2918 14.3754 24.6455 15.002L24.65 15.005Z" fill="#0054A4" />
      </svg>


    },
    {
      name: "Honestidad",
      svg: <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.8525 1.73301C11.091 1.66251 11.3475 1.62501 11.625 1.62501C13.269 1.62501 14.244 2.97501 14.244 4.25001V9.75951C14.73 9.58959 15.2411 9.50238 15.756 9.50151C17.853 9.50001 19.5 11.045 19.5 13.25C19.5001 13.4289 19.4576 13.6052 19.3759 13.7643C19.2943 13.9234 19.1759 14.0608 19.0305 14.165L16.4535 16.0085L15.0225 17.2565C14.0646 18.0919 13.2041 19.0329 12.4575 20.0615L11.5575 21.299C11.1752 21.8254 10.6738 22.2539 10.0943 22.5495C9.51479 22.8451 8.87356 22.9995 8.223 23H5.76C5.06179 23.0056 4.3745 22.8267 3.76763 22.4814C3.16077 22.1361 2.65587 21.6366 2.304 21.0335C1.76667 20.1084 1.27752 19.1561 0.8385 18.1805C0.411 17.204 0 16.061 0 15.125V6.12501C0 4.84401 0.987 3.50001 2.625 3.50001C2.79 3.50001 2.949 3.51501 3.099 3.53901C3.3885 2.51751 4.2885 1.62501 5.625 1.62501C5.898 1.62501 6.156 1.66401 6.396 1.73451C6.62677 1.35145 6.95416 1.03576 7.34537 0.819098C7.73658 0.602432 8.17786 0.492393 8.625 0.500008C9.07177 0.492351 9.5127 0.602225 9.90364 0.818622C10.2946 1.03502 10.6218 1.35034 10.8525 1.73301ZM8.355 2.85501C8.28926 2.92851 8.25247 3.0234 8.2515 3.12201V9.87501C8.2515 10.1734 8.13297 10.4595 7.922 10.6705C7.71102 10.8815 7.42487 11 7.1265 11C6.82813 11 6.54198 10.8815 6.331 10.6705C6.12003 10.4595 6.0015 10.1734 6.0015 9.87501V4.17201C5.99291 4.1028 5.96243 4.03816 5.9145 3.98751C5.87743 3.94912 5.8325 3.9192 5.7828 3.89978C5.73309 3.88036 5.67977 3.87191 5.6265 3.87501C5.484 3.87501 5.406 3.92451 5.3565 3.98001C5.28989 4.05428 5.25257 4.15025 5.2515 4.25001V10.625C5.2515 10.9234 5.13297 11.2095 4.922 11.4205C4.71102 11.6315 4.42487 11.75 4.1265 11.75C3.82813 11.75 3.54198 11.6315 3.331 11.4205C3.12003 11.2095 3.0015 10.9234 3.0015 10.625V6.12501C3.00043 6.02525 2.96311 5.92928 2.8965 5.85501C2.8455 5.79951 2.7675 5.75001 2.6265 5.75001C2.4855 5.75001 2.4075 5.79951 2.3565 5.85501C2.28989 5.92928 2.25257 6.02525 2.2515 6.12501V15.125C2.2515 15.545 2.475 16.3025 2.901 17.2745C3.306 18.197 3.8235 19.157 4.2585 19.913C4.5525 20.426 5.1195 20.75 5.7645 20.75H8.22C8.82 20.75 9.384 20.462 9.7365 19.976L10.6335 18.74C11.4801 17.5738 12.4558 16.507 13.542 15.56L15.015 14.2775C15.042 14.2537 15.07 14.2312 15.099 14.21L17.1735 12.725C16.9875 12.113 16.4595 11.75 15.7545 11.75C14.799 11.75 14.1195 12.35 13.8915 12.5525L13.8465 12.5915C13.6829 12.7307 13.4829 12.8201 13.2701 12.8493C13.0573 12.8784 12.8407 12.846 12.6457 12.7559C12.4507 12.6659 12.2856 12.5219 12.1699 12.341C12.0541 12.16 11.9926 11.9498 11.9925 11.735V4.25001C11.9914 4.14981 11.9541 4.05339 11.8875 3.97851C11.8395 3.92301 11.7645 3.87501 11.6235 3.87501C11.481 3.87501 11.403 3.92451 11.3535 3.98001C11.2868 4.05421 11.2494 4.15022 11.2485 4.25001V9.87501C11.2485 10.1734 11.13 10.4595 10.919 10.6705C10.708 10.8815 10.4219 11 10.1235 11C9.82513 11 9.53898 10.8815 9.328 10.6705C9.11703 10.4595 8.9985 10.1734 8.9985 9.87501V3.12201C8.99712 3.0232 8.95979 2.92829 8.8935 2.85501C8.8425 2.79951 8.7645 2.75001 8.6235 2.75001C8.4825 2.75001 8.4045 2.79951 8.3535 2.85501H8.355ZM16.5 21.5C16.8978 21.5 17.2794 21.342 17.5607 21.0607C17.842 20.7794 18 20.3978 18 20C18 19.6022 17.842 19.2207 17.5607 18.9393C17.2794 18.658 16.8978 18.5 16.5 18.5C16.1022 18.5 15.7206 18.658 15.4393 18.9393C15.158 19.2207 15 19.6022 15 20C15 20.3978 15.158 20.7794 15.4393 21.0607C15.7206 21.342 16.1022 21.5 16.5 21.5ZM22.5 21.5C22.8978 21.5 23.2794 21.342 23.5607 21.0607C23.842 20.7794 24 20.3978 24 20C24 19.6022 23.842 19.2207 23.5607 18.9393C23.2794 18.658 22.8978 18.5 22.5 18.5C22.1022 18.5 21.7206 18.658 21.4393 18.9393C21.158 19.2207 21 19.6022 21 20C21 20.3978 21.158 20.7794 21.4393 21.0607C21.7206 21.342 22.1022 21.5 22.5 21.5ZM19.5 32C17.2164 31.9998 14.9951 31.2554 13.1724 29.8796C11.3498 28.5039 10.0251 26.5716 9.399 24.3755C10.1493 24.2148 10.8588 23.9024 11.484 23.4575C11.8362 24.8987 12.5704 26.2183 13.6095 27.2772C14.6486 28.3362 15.954 29.0954 17.3882 29.4748C18.8225 29.8543 20.3325 29.8399 21.7593 29.4333C23.1861 29.0267 24.4769 28.2429 25.4956 27.1643C26.5144 26.0858 27.2235 24.7525 27.5482 23.3049C27.8729 21.8573 27.8012 20.3489 27.3408 18.9385C26.8803 17.5282 26.048 16.2682 24.9316 15.2911C23.8152 14.314 22.4559 13.656 20.997 13.3865L21 13.25C21 12.4505 20.8395 11.7095 20.55 11.0525C23.2305 11.3216 25.7051 12.6106 27.4618 14.6531C29.2185 16.6955 30.123 19.335 29.9881 22.0257C29.8533 24.7163 28.6894 27.2521 26.7372 29.1087C24.7851 30.9652 22.194 32.0003 19.5 32ZM16.797 24.0995C16.5901 23.8845 16.3063 23.7604 16.008 23.7547C15.7097 23.7489 15.4213 23.8619 15.2062 24.0688C14.9912 24.2756 14.8672 24.5594 14.8614 24.8578C14.8557 25.1561 14.9686 25.4445 15.1755 25.6595C15.7348 26.2422 16.4063 26.7057 17.1495 27.022C17.8927 27.3383 18.6923 27.5009 19.5 27.5C20.3077 27.5009 21.1073 27.3383 21.8505 27.022C22.5937 26.7057 23.2652 26.2422 23.8245 25.6595C23.9269 25.553 24.0074 25.4274 24.0613 25.2899C24.1152 25.1523 24.1414 25.0055 24.1386 24.8578C24.1357 24.7101 24.1038 24.5643 24.0446 24.429C23.9855 24.2936 23.9002 24.1712 23.7937 24.0688C23.6873 23.9663 23.5617 23.8859 23.4241 23.832C23.2866 23.7781 23.1397 23.7518 22.992 23.7547C22.8443 23.7575 22.6986 23.7895 22.5632 23.8486C22.4278 23.9078 22.3054 23.993 22.203 24.0995C21.8536 24.464 21.4339 24.7539 20.9694 24.9517C20.5048 25.1494 20.0049 25.2509 19.5 25.25C18.9951 25.2509 18.4952 25.1494 18.0306 24.9517C17.5661 24.7539 17.1464 24.464 16.797 24.0995Z" fill="#0054A4" />
      </svg>


    },
    {
      name: "Justicia",
      svg: <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 1.625C1.5 1.32663 1.61853 1.04048 1.82951 0.829505C2.04048 0.618526 2.32663 0.5 2.625 0.5H27.375C27.6734 0.5 27.9595 0.618526 28.1705 0.829505C28.3815 1.04048 28.5 1.32663 28.5 1.625C28.5 1.92337 28.3815 2.20952 28.1705 2.4205C27.9595 2.63147 27.6734 2.75 27.375 2.75H25.812L29.9175 12.8255C29.9722 12.9603 30.0002 13.1045 30 13.25C30 14.6424 29.4469 15.9777 28.4623 16.9623C27.4777 17.9469 26.1424 18.5 24.75 18.5C23.3576 18.5 22.0223 17.9469 21.0377 16.9623C20.0531 15.9777 19.5 14.6424 19.5 13.25C19.4998 13.1045 19.5278 12.9603 19.5825 12.8255L23.688 2.75H16.125V20.75H22.125C23.0201 20.75 23.8785 21.1056 24.5115 21.7385C25.1444 22.3715 25.5 23.2299 25.5 24.125C25.5 25.0201 25.1444 25.8785 24.5115 26.5115C23.8785 27.1444 23.0201 27.5 22.125 27.5H7.8795C6.9844 27.5 6.12595 27.1444 5.49302 26.5115C4.86008 25.8785 4.5045 25.0201 4.5045 24.125C4.5045 23.2299 4.86008 22.3715 5.49302 21.7385C6.12595 21.1056 6.9844 20.75 7.8795 20.75H13.875V2.75H6.312L10.4175 12.8255C10.4722 12.9603 10.5002 13.1045 10.5 13.25C10.5 13.9394 10.3642 14.6221 10.1004 15.2591C9.83653 15.896 9.44982 16.4748 8.96231 16.9623C8.4748 17.4498 7.89605 17.8365 7.25909 18.1004C6.62213 18.3642 5.93944 18.5 5.25 18.5C4.56056 18.5 3.87787 18.3642 3.24091 18.1004C2.60395 17.8365 2.0252 17.4498 1.53769 16.9623C1.05018 16.4748 0.663471 15.896 0.399633 15.2591C0.135796 14.6221 1.16696e-06 13.9394 1.17723e-06 13.25C-0.00020931 13.1045 0.0278083 12.9603 0.0825013 12.8255L4.188 2.75H2.625C2.32663 2.75 2.04048 2.63147 1.82951 2.4205C1.61853 2.20952 1.5 1.92337 1.5 1.625ZM6.7545 24.125C6.7545 24.746 7.2585 25.25 7.8795 25.25H22.125C22.4234 25.25 22.7095 25.1315 22.9205 24.9205C23.1315 24.7095 23.25 24.4234 23.25 24.125C23.25 23.8266 23.1315 23.5405 22.9205 23.3295C22.7095 23.1185 22.4234 23 22.125 23H7.8795C7.58113 23 7.29498 23.1185 7.08401 23.3295C6.87303 23.5405 6.7545 23.8266 6.7545 24.125ZM8.0325 14.375H2.4675C2.69114 14.9299 3.07555 15.4052 3.57137 15.7399C4.06719 16.0747 4.65177 16.2535 5.25 16.2535C5.84824 16.2535 6.43281 16.0747 6.92863 15.7399C7.42445 15.4052 7.80887 14.9299 8.0325 14.375ZM7.7025 12.125L5.25 6.107L2.7975 12.125H7.7025ZM24.75 16.25C25.3478 16.2503 25.9321 16.0719 26.4279 15.7379C26.9237 15.4038 27.3083 14.9292 27.5325 14.375H21.9675C22.1917 14.9292 22.5763 15.4038 23.0721 15.7379C23.5679 16.0719 24.1522 16.2503 24.75 16.25ZM22.2975 12.125H27.2025L24.75 6.107L22.2975 12.125Z" fill="#0054A4" />
      </svg>

    },

    {
      name: "Respeto",
      svg: <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.36 0.445997C15.1933 0.446058 15.0287 0.483246 14.8783 0.554858C14.7278 0.62647 14.5951 0.730708 14.49 0.859997L14.403 0.924497C12.7719 0.428098 11.0369 0.382552 9.38212 0.792693C7.72729 1.20283 6.21438 2.05336 5.00396 3.254C3.93111 4.31642 3.1333 5.62428 2.67958 7.06438C2.22585 8.50449 2.12988 10.0335 2.39996 11.519L2.37746 11.5415L0.940461 12.968C0.643721 13.262 0.408172 13.6119 0.247422 13.9974C0.0866717 14.383 0.00390625 14.7965 0.00390625 15.2142C0.00390625 15.632 0.0866717 16.0455 0.247422 16.4311C0.408172 16.8166 0.643721 17.1665 0.940461 17.4605C1.28947 17.8071 1.71361 18.0688 2.18001 18.2251C2.64641 18.3814 3.14254 18.4283 3.62996 18.362C3.80378 18.9944 4.16813 19.558 4.67347 19.9762C5.17882 20.3943 5.80065 20.6467 6.45446 20.699C6.52167 21.4682 6.86513 22.187 7.42132 22.7225C7.97751 23.258 8.70881 23.574 9.47996 23.612C9.51896 24.3725 9.82946 25.1195 10.413 25.6985C11.553 26.8325 13.341 26.93 14.5935 25.994L15.174 26.57C15.7782 27.1687 16.5944 27.5046 17.445 27.5046C18.2956 27.5046 19.1117 27.1687 19.716 26.57C20.271 26.018 20.5815 25.313 20.646 24.593C21.3945 24.5296 22.0966 24.2042 22.6289 23.6741C23.1612 23.1441 23.4895 22.4432 23.556 21.695C24.2153 21.6344 24.8395 21.3703 25.3421 20.9392C25.8446 20.5081 26.2007 19.9314 26.361 19.289C26.8411 19.3465 27.328 19.2946 27.7852 19.1372C28.2424 18.9798 28.658 18.7209 29.001 18.38C29.2975 18.086 29.5328 17.7363 29.6934 17.3508C29.8541 16.9654 29.9368 16.552 29.9368 16.1345C29.9368 15.717 29.8541 15.3036 29.6934 14.9182C29.5328 14.5327 29.2975 14.183 29.001 13.889L27.7515 12.6455L28.0095 11.6465C28.5676 9.4725 28.2865 7.16802 27.222 5.192C26.4474 3.75745 25.299 2.55933 23.8985 1.7248C22.498 0.890264 20.8977 0.450439 19.2675 0.451997H16.857C16.754 0.447501 16.651 0.4455 16.548 0.445997H15.3615H15.36ZM19.7475 7.8635L24.9435 13.0265L24.948 13.0325L24.969 13.052L27.4065 15.4745C27.4935 15.5609 27.5626 15.6638 27.6098 15.777C27.657 15.8903 27.6813 16.0118 27.6813 16.1345C27.6813 16.2572 27.657 16.3787 27.6098 16.492C27.5626 16.6052 27.4935 16.7081 27.4065 16.7945C27.2295 16.9695 26.9908 17.0676 26.742 17.0676C26.4931 17.0676 26.2544 16.9695 26.0775 16.7945L23.64 14.372C23.4276 14.1617 23.1408 14.0437 22.842 14.0437C22.5431 14.0437 22.2563 14.1617 22.044 14.372L22.02 14.3975C21.9152 14.5013 21.8321 14.6247 21.7754 14.7608C21.7187 14.8969 21.6895 15.0428 21.6895 15.1902C21.6895 15.3377 21.7187 15.4836 21.7754 15.6197C21.8321 15.7558 21.9152 15.8792 22.02 15.983L23.919 17.8715C24.006 17.9579 24.0751 18.0608 24.1223 18.174C24.1695 18.2873 24.1938 18.4088 24.1938 18.5315C24.1938 18.6542 24.1695 18.7757 24.1223 18.889C24.0751 19.0022 24.006 19.1051 23.919 19.1915C23.7588 19.3509 23.5468 19.4476 23.3214 19.4642C23.096 19.4807 22.8722 19.4159 22.6905 19.2815C22.4723 19.1182 22.2025 19.0389 21.9306 19.0581C21.6588 19.0774 21.4029 19.194 21.21 19.3865C21.0178 19.5786 20.9023 19.8342 20.8852 20.1054C20.8681 20.3766 20.9505 20.6447 21.117 20.8595C21.2553 21.0391 21.3233 21.2631 21.3081 21.4894C21.2929 21.7156 21.1956 21.9285 21.0345 22.088C20.8714 22.2496 20.6552 22.3463 20.4261 22.3601C20.197 22.3739 19.9707 22.3038 19.7895 22.163C19.5726 21.9938 19.3017 21.9093 19.0271 21.925C18.7526 21.9407 18.4931 22.0557 18.297 22.2485C18.1015 22.4408 17.9837 22.6983 17.966 22.9719C17.9483 23.2456 18.0319 23.5161 18.201 23.732C18.3427 23.9144 18.4127 24.1424 18.3978 24.3729C18.3828 24.6034 18.284 24.8204 18.12 24.983C17.9402 25.1607 17.6977 25.2604 17.445 25.2604C17.1922 25.2604 16.9497 25.1607 16.77 24.983L16.212 24.4295L16.3695 24.272C16.666 23.978 16.9013 23.6283 17.0619 23.2428C17.2226 22.8574 17.3053 22.444 17.3053 22.0265C17.3053 21.609 17.2226 21.1956 17.0619 20.8102C16.9013 20.4247 16.666 20.075 16.3695 19.781C15.8085 19.2225 15.0601 18.8922 14.2695 18.854C14.2267 18.0833 13.9062 17.3543 13.3674 16.8017C12.8285 16.249 12.1078 15.9103 11.3385 15.848C11.277 15.0967 10.9487 14.3922 10.413 13.862C10.0639 13.5154 9.63981 13.2537 9.17341 13.0974C8.70701 12.9411 8.21088 12.8942 7.72346 12.9605C7.53305 12.2701 7.1165 11.6635 6.5405 11.2379C5.96449 10.8123 5.26235 10.5923 4.54646 10.613C4.43255 9.55795 4.55803 8.49079 4.91357 7.49094C5.2691 6.49109 5.84553 5.58428 6.59996 4.838C7.30299 4.13958 8.14351 3.59492 9.0682 3.23858C9.99289 2.88224 10.9816 2.72198 11.9715 2.768L9.72596 4.4675C9.36106 4.74367 9.05436 5.08927 8.82353 5.48441C8.5927 5.87956 8.44229 6.31646 8.38095 6.76996C8.31961 7.22346 8.34855 7.68461 8.46611 8.12688C8.58368 8.56915 8.78753 8.98381 9.06596 9.347C9.62828 10.08 10.4576 10.5609 11.3731 10.6848C12.2886 10.8088 13.216 10.5656 13.953 10.0085L16.7865 7.862H19.7475V7.8635ZM11.0835 6.263L15.792 2.696H16.548C16.6415 2.69532 16.7351 2.69782 16.8285 2.7035H19.2675C20.4912 2.70185 21.6926 3.03145 22.7442 3.65733C23.7958 4.28322 24.6584 5.18205 25.2405 6.2585C25.983 7.6385 26.2155 9.2255 25.9065 10.751L21.09 5.957C20.9851 5.84844 20.8595 5.76208 20.7206 5.70307C20.5817 5.64406 20.4324 5.6136 20.2815 5.6135H16.41C16.1647 5.61338 15.926 5.69345 15.7305 5.8415L12.5955 8.216C12.3325 8.4144 12.0019 8.50097 11.6755 8.45687C11.3491 8.41276 11.0533 8.24156 10.8525 7.9805C10.7544 7.85269 10.6826 7.70673 10.6411 7.55104C10.5997 7.39534 10.5895 7.23299 10.6111 7.07334C10.6327 6.91369 10.6857 6.75989 10.7671 6.62082C10.8484 6.48174 10.9564 6.36013 11.085 6.263H11.0835ZM6.05246 18.1955C5.96538 18.1091 5.89627 18.0062 5.84911 17.893C5.80195 17.7797 5.77767 17.6582 5.77767 17.5355C5.77767 17.4128 5.80195 17.2913 5.84911 17.178C5.89627 17.0648 5.96538 16.9619 6.05246 16.8755L7.48796 15.4475C7.66487 15.2725 7.90365 15.1744 8.15246 15.1744C8.40128 15.1744 8.64005 15.2725 8.81696 15.4475C8.99078 15.62 9.08953 15.8541 9.09178 16.099C9.09402 16.3439 8.99959 16.5798 8.82896 16.7555L8.81696 16.7675L7.38146 18.194L7.36796 18.2075C7.1901 18.3768 6.95333 18.4702 6.70778 18.468C6.46223 18.4658 6.2272 18.368 6.05246 18.1955ZM5.31596 13.142C5.48601 13.3176 5.57983 13.5532 5.57702 13.7976C5.57421 14.042 5.475 14.2754 5.30096 14.447L3.86546 15.875C3.68855 16.05 3.44978 16.1481 3.20096 16.1481C2.95215 16.1481 2.71337 16.05 2.53646 15.875C2.44938 15.7886 2.38027 15.6857 2.33311 15.5725C2.28595 15.4592 2.26167 15.3377 2.26167 15.215C2.26167 15.0923 2.28595 14.9708 2.33311 14.8575C2.38027 14.7443 2.44938 14.6414 2.53646 14.555L3.97346 13.1285C4.15037 12.9535 4.38915 12.8554 4.63796 12.8554C4.88678 12.8554 5.12555 12.9535 5.30246 13.1285L5.31596 13.142ZM13.338 24.113C13.161 24.288 12.9223 24.3861 12.6735 24.3861C12.4246 24.3861 12.1859 24.288 12.009 24.113C11.9219 24.0266 11.8528 23.9237 11.8056 23.8105C11.7585 23.6972 11.7342 23.5757 11.7342 23.453C11.7342 23.3303 11.7585 23.2088 11.8056 23.0955C11.8528 22.9823 11.9219 22.8794 12.009 22.793L13.4445 21.3665C13.6214 21.1915 13.8601 21.0934 14.109 21.0934C14.3578 21.0934 14.5965 21.1915 14.7735 21.3665C14.8605 21.4529 14.9296 21.5558 14.9768 21.669C15.024 21.7823 15.0483 21.9038 15.0483 22.0265C15.0483 22.1492 15.024 22.2707 14.9768 22.384C14.9296 22.4972 14.8605 22.6001 14.7735 22.6865L13.338 24.113ZM10.3065 21.101C10.1297 21.2763 9.89089 21.3747 9.64196 21.3747C9.39303 21.3747 9.15418 21.2763 8.97746 21.101C8.80344 20.9287 8.70442 20.6947 8.70189 20.4498C8.69936 20.2049 8.79353 19.9689 8.96396 19.793L8.97746 19.781L10.413 18.3545L10.425 18.341C10.6031 18.1714 10.8403 18.078 11.0862 18.0805C11.3321 18.083 11.5674 18.1813 11.742 18.3545C11.829 18.4409 11.8981 18.5438 11.9453 18.657C11.9925 18.7703 12.0168 18.8918 12.0168 19.0145C12.0168 19.1372 11.9925 19.2587 11.9453 19.372C11.8981 19.4852 11.829 19.5881 11.742 19.6745L10.3065 21.101Z" fill="#0054A4" />
      </svg>


    },
    {
      name: "Confidencialidad",
      svg: <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 14.75C13.0569 14.7537 12.1464 15.0957 11.4342 15.7139C10.722 16.3321 10.2553 17.1855 10.1191 18.1187C9.98283 19.0519 10.1861 20.003 10.6918 20.7991C11.1976 21.5951 11.9723 22.1831 12.875 22.4563V24.875C12.875 25.1734 12.9935 25.4595 13.2045 25.6705C13.4155 25.8815 13.7016 26 14 26C14.2984 26 14.5845 25.8815 14.7955 25.6705C15.0065 25.4595 15.125 25.1734 15.125 24.875V22.4563C16.0277 22.1831 16.8024 21.5951 17.3082 20.7991C17.8139 20.003 18.0172 19.0519 17.8809 18.1187C17.7447 17.1855 17.278 16.3321 16.5658 15.7139C15.8536 15.0957 14.9431 14.7537 14 14.75ZM14 20.375C13.6662 20.375 13.34 20.276 13.0625 20.0906C12.785 19.9052 12.5687 19.6416 12.441 19.3333C12.3132 19.0249 12.2798 18.6856 12.3449 18.3583C12.41 18.0309 12.5708 17.7303 12.8068 17.4943C13.0428 17.2583 13.3434 17.0975 13.6708 17.0324C13.9981 16.9673 14.3374 17.0007 14.6458 17.1285C14.9541 17.2562 15.2177 17.4725 15.4031 17.75C15.5885 18.0275 15.6875 18.3537 15.6875 18.6875C15.6875 19.1351 15.5097 19.5643 15.1932 19.8807C14.8768 20.1972 14.4476 20.375 14 20.375ZM25.25 10.25H20.1875V6.3125C20.1875 4.67147 19.5356 3.09766 18.3752 1.93728C17.2148 0.776896 15.641 0.125 14 0.125C12.359 0.125 10.7852 0.776896 9.62478 1.93728C8.4644 3.09766 7.8125 4.67147 7.8125 6.3125V10.25H2.75C2.15326 10.25 1.58097 10.4871 1.15901 10.909C0.737053 11.331 0.5 11.9033 0.5 12.5V28.25C0.5 28.8467 0.737053 29.419 1.15901 29.841C1.58097 30.2629 2.15326 30.5 2.75 30.5H25.25C25.8467 30.5 26.419 30.2629 26.841 29.841C27.2629 29.419 27.5 28.8467 27.5 28.25V12.5C27.5 11.9033 27.2629 11.331 26.841 10.909C26.419 10.4871 25.8467 10.25 25.25 10.25ZM10.0625 6.3125C10.0625 5.26821 10.4773 4.26669 11.2158 3.52827C11.9542 2.78984 12.9557 2.375 14 2.375C15.0443 2.375 16.0458 2.78984 16.7842 3.52827C17.5227 4.26669 17.9375 5.26821 17.9375 6.3125V10.25H10.0625V6.3125ZM25.25 28.25H2.75V12.5H25.25V28.25Z" fill="#0054A4" />
      </svg>


    },

  ]

  console.log(data);
  return (
    <Layer>
      <section>

        <Title data={data[0]} />


        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0'>

          <TextBack text={data[0].text} className='md:w-4/5 text-justify order-1 ' />

          <div className='flex-center  order-0 md:order-1 h-full ' >
            <ImgBack src={data[0].imagen} alt="" />

          </div>

        </div>
      </section>


      <section className='my-[100px]'>
        <div className=' bg-primary relative color-white gap-6 p-5 rounded-xl  flex flex-col 
                lg:flex-row md:px-[47px] md:py-[71px] '>
          <div >
            <h1>Misión</h1>
            <hr className='subline' />
            <p className='md:w-4/5' >Impartimos Justicia Tributaria en la República de Panamá.</p>
          </div>
          <div >
            <h1>Visión</h1>
            <hr className='subline' />
            <p className='md:mr-[30%]'>Ser reconocidos por la calidad y efectividad de nuestras actuaciones; y por mantener un recurso humano calificado.</p>
          </div>

          <div className='absolute bottom-0 top-0 md:bottom-auto right-[-110px] md:right-0 opacity-10'>

            <SvgFondo width={"100%"} height={"100%"} fill="#ffffff1a" />


          </div>
        </div>
      </section>




      <section>
        <Title data={data[1]} />


        <div className='mt-6'>
          <ImgBack src={data[1].imagen} alt="" />

        </div>


      </section>


      <section>

        <Title data={data[2]} />


        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 mt-6">

          {valores.map((e, i) => (

            <div key={i} className="flex flex-col items-center p-5 md:p-9">
              <div className='svg_rp w-auto h-[30px] md:h-[53px]'>

                {e.svg}
              </div>

              <h3 className='mt-8'>{e.name}</h3>
            </div>
          ))}

        </div>
      </section>


      <section>

        <Title data={data[3]} />



       
        <TextBack text={data[3].text} className='md:w-4/5 text-justify order-1 ' />

        <ImgBack className='mb-20 mt-12 custom' src={data[3].imagen} alt="" />



      </section>
    </Layer>

  )
}

export async function getServerSideProps({ params }) {

  const path = `${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/3`
  const data = await fetcher(path)
  return { props: { data } }

}