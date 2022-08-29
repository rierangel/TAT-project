
export default function index() {

  const feats = ["Ser reconocidos", "Mejorar la calidad", "Mejorar la efectividad", "Mantener el recurso humano", "Tener un personal calificado"]

  const valores = [
    {
      name: "Compromiso",
      svg: <svg width="58" height="52" viewBox="0 0 58 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M56.0585 16.375C55.399 15.633 54.5907 15.038 53.6862 14.6288C52.7817 14.2196 51.8012 14.0054 50.8085 14H38.3335V11C38.3335 8.08264 37.1746 5.28475 35.1117 3.22185C33.0488 1.15895 30.2509 2.164e-05 27.3335 2.164e-05C26.778 -0.00209661 26.2331 0.151334 25.7603 0.442943C25.2876 0.734552 24.9059 1.15269 24.6585 1.65002L15.4835 20H5.3335C4.00944 20.0066 2.74148 20.5355 1.80522 21.4717C0.868961 22.408 0.340067 23.676 0.333496 25V47C0.340067 48.3241 0.868961 49.592 1.80522 50.5283C2.74148 51.4646 4.00944 51.9935 5.3335 52H47.8085C49.5128 51.9959 51.1575 51.3723 52.4361 50.2454C53.7148 49.1186 54.5402 47.5653 54.7585 45.875L57.7585 21.875C57.8749 20.8904 57.7837 19.8923 57.4909 18.945C57.1981 17.9977 56.7102 17.1223 56.0585 16.375ZM6.3335 26H14.3335V46H6.3335V26ZM51.7835 21.125L48.7835 45.125C48.7587 45.3659 48.6451 45.5889 48.4648 45.7507C48.2846 45.9124 48.0507 46.0013 47.8085 46H20.3335V23.7L29.0335 6.30002C29.9978 6.65247 30.8311 7.29187 31.4211 8.13216C32.011 8.97245 32.3295 9.9733 32.3335 11V17C32.3335 17.7957 32.6496 18.5587 33.2122 19.1213C33.7748 19.684 34.5378 20 35.3335 20H50.8085C50.9515 19.9998 51.0929 20.031 51.2225 20.0915C51.3521 20.152 51.4668 20.2402 51.5585 20.35C51.6491 20.4557 51.7161 20.5795 51.7549 20.7132C51.7938 20.8468 51.8035 20.9873 51.7835 21.125Z" fill="#0054A4" />
      </svg>
    },
    {
      name: "Responsabilidad",
      svg: <svg width="50" height="52" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45 0H5C3.67594 0.00657112 2.40799 0.535465 1.47173 1.47173C0.535465 2.40799 0.00657112 3.67594 0 5V19.675C0 42.725 19.525 50.35 23.45 51.65C24.4564 51.9837 25.5436 51.9837 26.55 51.65C30.475 50.35 50 42.725 50 19.675V5C49.9934 3.67594 49.4645 2.40799 48.5283 1.47173C47.592 0.535465 46.3241 0.00657112 45 0ZM44 19.675C44 38.025 28.875 44.5 25 45.85C21.125 44.5 6 38.025 6 19.675V6H44V19.675ZM11.925 26.175C11.3482 25.6247 11.0136 24.8677 10.9948 24.0707C10.976 23.2737 11.2747 22.5018 11.825 21.925C12.3753 21.3482 13.1323 21.0135 13.9293 20.9948C14.7263 20.976 15.4982 21.2747 16.075 21.825L21.325 26.85L33.925 14.825C34.2106 14.5525 34.5471 14.3389 34.9153 14.1965C35.2834 14.054 35.6761 13.9855 36.0707 13.9948C36.4654 14.0041 36.8543 14.091 37.2154 14.2506C37.5764 14.4102 37.9025 14.6394 38.175 14.925C38.4475 15.2106 38.6611 15.5471 38.8035 15.9153C38.946 16.2834 39.0145 16.6761 39.0052 17.0707C38.9959 17.4654 38.909 17.8543 38.7494 18.2154C38.5898 18.5764 38.3606 18.9025 38.075 19.175L23.4 33.175C22.8403 33.7068 22.0971 34.0023 21.325 34C20.5539 33.9972 19.8125 33.7024 19.25 33.175L11.925 26.175Z" fill="#0054A4" />
      </svg>

    },
    {
      name: "Honestidad",
      svg: <svg width="63" height="52" viewBox="0 0 63 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M61.917 17.025L47.917 1.02504C47.6384 0.701569 47.293 0.442407 46.9046 0.265441C46.5161 0.0884758 46.0939 -0.00207649 45.667 3.61326e-05H17.667C17.2401 -0.00207649 16.8179 0.0884758 16.4294 0.265441C16.041 0.442407 15.6955 0.701569 15.417 1.02504L1.41699 17.025C0.924877 17.5828 0.657497 18.3034 0.666736 19.0472C0.675975 19.7909 0.961174 20.5047 1.46699 21.05L29.467 51.05C29.7498 51.3497 30.0907 51.5884 30.4691 51.7515C30.8474 51.9147 31.255 51.9988 31.667 51.9988C32.079 51.9988 32.4866 51.9147 32.8649 51.7515C33.2432 51.5884 33.5842 51.3497 33.867 51.05L61.867 21.05C62.3728 20.5047 62.658 19.7909 62.6672 19.0472C62.6765 18.3034 62.4091 17.5828 61.917 17.025ZM53.067 16H45.417L37.742 6.00004H44.317L53.067 16ZM17.392 22L22.692 35L10.567 22H17.392ZM39.467 22L31.667 41.075L23.867 22H39.467ZM25.467 16L31.667 7.92504L37.867 16H25.467ZM45.942 22H52.767L40.642 35L45.942 22ZM19.017 6.00004H25.592L17.917 16H10.267L19.017 6.00004Z" fill="#0054A4" />
      </svg>

    },
    {
      name: "Justicia",
      svg: <svg width="59" height="50" viewBox="0 0 59 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M58.1085 25.875L50.1085 5.875C50.1069 5.85573 50.098 5.83782 50.0835 5.825C50.0835 5.8 50.0585 5.75 50.0585 5.725L49.9835 5.575C49.968 5.56336 49.9554 5.54826 49.9467 5.5309C49.938 5.51355 49.9335 5.49441 49.9335 5.475L49.7835 5.275C49.7835 5.25 49.7585 5.225 49.7335 5.2L49.6335 5.075L49.5585 5L49.4585 4.875L49.3835 4.8L49.1835 4.65L49.1335 4.6L48.9835 4.5L48.8835 4.425L48.7585 4.35L48.6585 4.3L48.5085 4.25L48.3335 4.175L48.2085 4.125H46.9335L46.7085 4.175H46.6585L32.3335 7.25V3C32.3335 2.20435 32.0174 1.44129 31.4548 0.87868C30.8922 0.316071 30.1291 0 29.3335 0C28.5378 0 27.7748 0.316071 27.2122 0.87868C26.6496 1.44129 26.3335 2.20435 26.3335 3V8.6L10.6835 12.075L10.4085 12.15H10.3335L10.1585 12.225H10.0585L9.8835 12.325L9.8085 12.375L9.6335 12.475L9.5335 12.55L9.4085 12.65L9.3335 12.75L9.1835 12.9C9.1835 12.925 9.1585 12.925 9.1585 12.95C9.08749 13.0044 9.028 13.0724 8.9835 13.15L8.9335 13.2L8.8335 13.35L8.7835 13.425C8.74476 13.4801 8.71128 13.5387 8.6835 13.6V13.65C8.64001 13.7201 8.60636 13.7958 8.5835 13.875H8.5585L0.558496 33.875C0.411822 34.232 0.335425 34.614 0.333496 35C0.333496 38.025 1.8835 40.6 4.7085 42.25C6.72842 43.3961 9.0111 43.9985 11.3335 43.9985C13.6559 43.9985 15.9386 43.3961 17.9585 42.25C20.7835 40.6 22.3335 38.025 22.3335 35C22.3316 34.614 22.2552 34.232 22.1085 33.875L15.4335 17.175L26.3335 14.75V44H23.3335C22.5378 44 21.7748 44.3161 21.2122 44.8787C20.6496 45.4413 20.3335 46.2043 20.3335 47C20.3335 47.7957 20.6496 48.5587 21.2122 49.1213C21.7748 49.6839 22.5378 50 23.3335 50H35.3335C36.1291 50 36.8922 49.6839 37.4548 49.1213C38.0174 48.5587 38.3335 47.7957 38.3335 47C38.3335 46.2043 38.0174 45.4413 37.4548 44.8787C36.8922 44.3161 36.1291 44 35.3335 44H32.3335V13.4L42.4335 11.15L36.5585 25.875C36.4118 26.232 36.3354 26.614 36.3335 27C36.3335 30.025 37.8835 32.6 40.7085 34.25C42.7284 35.3961 45.0111 35.9985 47.3335 35.9985C49.6559 35.9985 51.9386 35.3961 53.9585 34.25C56.7835 32.6 58.3335 30.025 58.3335 27C58.3316 26.614 58.2552 26.232 58.1085 25.875ZM11.3335 38C10.4085 38 6.8335 37.525 6.3835 35.45L11.3335 23.075L16.2835 35.45C15.8335 37.525 12.2585 38 11.3335 38ZM47.3335 30C46.4085 30 42.8335 29.525 42.3835 27.45L47.3335 15.075L52.2835 27.45C51.8335 29.525 48.2585 30 47.3335 30Z" fill="#0054A4" />
      </svg>

    },

    {
      name: "Respeto",
      svg: <svg width="64" height="37" viewBox="0 0 64 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64 32V34C64 34.7957 63.6839 35.5587 63.1213 36.1213C62.5587 36.6839 61.7957 37 61 37C60.2043 37 59.4413 36.6839 58.8787 36.1213C58.3161 35.5587 58 34.7957 58 34V32C58 25.1044 55.2607 18.4912 50.3848 13.6152C45.5088 8.73928 38.8956 6 32 6C25.1044 6 18.4912 8.73928 13.6152 13.6152C8.73928 18.4912 6 25.1044 6 32V34C6 34.7957 5.68393 35.5587 5.12132 36.1213C4.55871 36.6839 3.79565 37 3 37C2.20435 37 1.44129 36.6839 0.87868 36.1213C0.31607 35.5587 0 34.7957 0 34L0 32C0 23.5131 3.37142 15.3737 9.37258 9.37258C15.3737 3.37142 23.5131 0 32 0C40.4869 0 48.6263 3.37142 54.6274 9.37258C60.6286 15.3737 64 23.5131 64 32ZM32 24C29.6131 24 27.3239 24.9482 25.636 26.636C23.9482 28.3239 23 30.6131 23 33V34C23 34.7957 23.3161 35.5587 23.8787 36.1213C24.4413 36.6839 25.2044 37 26 37C26.7956 37 27.5587 36.6839 28.1213 36.1213C28.6839 35.5587 29 34.7957 29 34V33C29 32.2043 29.3161 31.4413 29.8787 30.8787C30.4413 30.3161 31.2044 30 32 30C32.7957 30 33.5587 30.3161 34.1213 30.8787C34.6839 31.4413 35 32.2043 35 33V34C35 34.7957 35.3161 35.5587 35.8787 36.1213C36.4413 36.6839 37.2043 37 38 37C38.7957 37 39.5587 36.6839 40.1213 36.1213C40.6839 35.5587 41 34.7957 41 34V33C41 30.6131 40.0518 28.3239 38.364 26.636C36.6761 24.9482 34.3869 24 32 24ZM32 12C26.4325 12.0066 21.0949 14.2212 17.1581 18.1581C13.2212 22.0949 11.0066 27.4325 11 33V34C11 34.7957 11.3161 35.5587 11.8787 36.1213C12.4413 36.6839 13.2044 37 14 37C14.7956 37 15.5587 36.6839 16.1213 36.1213C16.6839 35.5587 17 34.7957 17 34V33C17 29.0218 18.5804 25.2064 21.3934 22.3934C24.2064 19.5804 28.0218 18 32 18C35.9782 18 39.7936 19.5804 42.6066 22.3934C45.4196 25.2064 47 29.0218 47 33V34C47 34.7957 47.3161 35.5587 47.8787 36.1213C48.4413 36.6839 49.2043 37 50 37C50.7957 37 51.5587 36.6839 52.1213 36.1213C52.6839 35.5587 53 34.7957 53 34V33C52.9934 27.4325 50.7788 22.0949 46.8419 18.1581C42.9051 14.2212 37.5675 12.0066 32 12Z" fill="#0054A4" />
      </svg>

    },
    {
      name: "Confidencialidad",
      svg: <svg width="51" height="56" viewBox="0 0 51 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45.667 18H37.667V12C37.667 8.8174 36.4027 5.76515 34.1523 3.51472C31.9018 1.26428 28.8496 0 25.667 0C22.4844 0 19.4321 1.26428 17.1817 3.51472C14.9313 5.76515 13.667 8.8174 13.667 12V18H5.66699C4.34294 18.0066 3.07498 18.5355 2.13872 19.4717C1.20246 20.408 0.673563 21.6759 0.666992 23V51C0.673563 52.3241 1.20246 53.592 2.13872 54.5283C3.07498 55.4645 4.34294 55.9934 5.66699 56H45.667C46.9911 55.9934 48.259 55.4645 49.1953 54.5283C50.1315 53.592 50.6604 52.3241 50.667 51V23C50.6604 21.6759 50.1315 20.408 49.1953 19.4717C48.259 18.5355 46.9911 18.0066 45.667 18ZM19.667 12C19.667 10.4087 20.2991 8.88258 21.4244 7.75736C22.5496 6.63214 24.0757 6 25.667 6C27.2583 6 28.7844 6.63214 29.9096 7.75736C31.0349 8.88258 31.667 10.4087 31.667 12V18H19.667V12ZM44.667 50H6.66699V24H44.667V50ZM29.667 37C29.667 37.7911 29.4324 38.5645 28.9929 39.2223C28.5533 39.8801 27.9286 40.3928 27.1977 40.6955C26.4668 40.9983 25.6626 41.0775 24.8866 40.9231C24.1107 40.7688 23.398 40.3878 22.8386 39.8284C22.2792 39.269 21.8982 38.5563 21.7439 37.7804C21.5895 37.0044 21.6687 36.2002 21.9715 35.4693C22.2742 34.7384 22.7869 34.1136 23.4447 33.6741C24.1025 33.2346 24.8759 33 25.667 33C26.7279 33 27.7453 33.4214 28.4954 34.1716C29.2456 34.9217 29.667 35.9391 29.667 37Z" fill="#0054A4" />
      </svg>

    },

  ]
  return (
    <>
      <img className='rounded-lg' src="/img/tat.png" alt="" />

      <h1 className='my-6'>Antecedentes</h1>

      <p>
        El Tribunal Administrativo Tributario de Panamá fue creado mediante Ley n.°8 /2010 del 15 de marzo como un tribunal autónomo, de segunda instancia, independiente y especializado, con jurisdicción y competencia nacional para conocer los recursos de apelación contra las decisiones de la Dirección General de Ingresos del Ministerio de Economía y Finanzas. <br /><br />
        El TAT viene a remplazar a la Comisión de Apelaciones de la Dirección General de Ingresos del Ministerio de Economía y Finanzas. <br /><br />
        Mediante Acuerdo n.°4 del 25 de febrero de 2011, se establece como fecha de inicio de las labores del Tribunal para efectos del cumplimiento de los términos y trámites fijados por la Ley 8/2010 de 15 de marzo, el día 1 de junio de 2011. <br /><br />
      </p>


      <div className="my-20 flex flex-col md:flex-row justify-between items-center container">

        <div className="flex gap-7">
          <div className="w-[175px]">
            <svg className='w-full h-auto' viewBox="0 0 187 151" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0938 66.4218H30.1719V102.609H21.125C18.7256 102.609 16.4245 103.562 14.7279 105.259C13.0313 106.956 12.0781 109.257 12.0781 111.656C12.0781 114.056 13.0313 116.357 14.7279 118.053C16.4245 119.75 18.7256 120.703 21.125 120.703H165.875C168.274 120.703 170.575 119.75 172.272 118.053C173.969 116.357 174.922 114.056 174.922 111.656C174.922 109.257 173.969 106.956 172.272 105.259C170.575 103.562 168.274 102.609 165.875 102.609H156.828V66.4218H171.906C173.872 66.4183 175.784 65.7745 177.351 64.5878C178.918 63.4011 180.057 61.7361 180.593 59.8448C181.13 57.9535 181.036 55.9388 180.326 54.1057C179.615 52.2726 178.327 50.7207 176.656 49.6851L98.2496 1.4351C96.8249 0.546044 95.1793 0.074707 93.5 0.074707C91.8207 0.074707 90.1751 0.546044 88.7504 1.4351L10.3441 49.6851C8.67305 50.7207 7.3848 52.2726 6.67435 54.1057C5.9639 55.9388 5.86992 57.9535 6.40664 59.8448C6.94336 61.7361 8.08157 63.4011 9.649 64.5878C11.2164 65.7745 13.1278 66.4183 15.0938 66.4218ZM48.2656 66.4218H66.3594V102.609H48.2656V66.4218ZM102.547 66.4218V102.609H84.4531V66.4218H102.547ZM138.734 102.609H120.641V66.4218H138.734V102.609ZM93.5 19.755L139.941 48.3281H47.0594L93.5 19.755ZM186.984 141.812C186.984 144.212 186.031 146.513 184.335 148.21C182.638 149.906 180.337 150.859 177.938 150.859H9.0625C6.66312 150.859 4.36201 149.906 2.66539 148.21C0.968775 146.513 0.015625 144.212 0.015625 141.812C0.015625 139.413 0.968775 137.112 2.66539 135.415C4.36201 133.719 6.66312 132.766 9.0625 132.766H177.938C180.337 132.766 182.638 133.719 184.335 135.415C186.031 137.112 186.984 139.413 186.984 141.812Z" fill="#E0EAF4" />
            </svg>
          </div>
          {/* <div width="187" height="151">
          </div> */}

          <div className="flex flex-col space-y-4 ">
            <h1 className=''>Misión</h1>
            <hr className='border-b-4 border-b-[#0054A4] w-16' />
            <h3 className='bold w-[313px]'>Impartimos Justicia Tributaria en la República de Panamá.</h3>
          </div>
        </div>


        <div className="flex gap-7">
          <div className="w-[175px]">
            <svg className='w-full h-auto' viewBox="0 0 175 169" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M132.206 168.922C129.295 168.904 126.448 168.068 123.989 166.509L87.4998 143.364L53.6494 164.851C50.8686 166.624 47.6168 167.515 44.3207 167.407C41.0246 167.299 37.8379 166.198 35.1787 164.248C32.4294 162.264 30.3408 159.499 29.1844 156.313C28.0281 153.126 27.8576 149.665 28.6951 146.38L38.5712 107.78L5.62554 80.4133C3.23601 78.3951 1.50115 75.7115 0.641898 72.7041C-0.217356 69.6968 -0.16213 66.5017 0.800544 63.5258C1.74326 60.5811 3.54753 57.9869 5.98013 56.0785C8.41273 54.17 11.3618 53.0351 14.4462 52.8203L57.2681 50.1062L73.2509 9.77226C74.3738 6.90764 76.334 4.44796 78.8758 2.71417C81.4176 0.980378 84.4229 0.0529785 87.4998 0.0529785C90.5766 0.0529785 93.582 0.980378 96.1238 2.71417C98.6656 4.44796 100.626 6.90764 101.749 9.77226L117.731 50.1062L160.553 52.8203C163.638 53.0351 166.587 54.17 169.019 56.0785C171.452 57.9869 173.256 60.5811 174.199 63.5258C175.162 66.5017 175.217 69.6968 174.358 72.7041C173.498 75.7115 171.764 78.3951 169.374 80.4133L136.428 107.78L147.058 149.471C147.846 152.503 147.699 155.702 146.636 158.648C145.574 161.595 143.645 164.151 141.103 165.982C138.527 167.886 135.41 168.917 132.206 168.922ZM87.4998 124.818C90.382 124.799 93.2087 125.61 95.642 127.155L127.909 147.586L118.561 110.72C117.837 107.855 117.935 104.844 118.841 102.031C119.748 99.218 121.427 96.7168 123.687 94.8129L152.939 70.4617L114.867 68.0492C111.964 67.842 109.178 66.8192 106.831 65.0987C104.483 63.3782 102.669 61.0298 101.598 58.3238L87.4998 22.8902L73.4017 58.3238C72.3301 61.0298 70.5163 63.3782 68.1689 65.0987C65.8215 66.8192 63.036 67.842 60.133 68.0492L22.0607 70.4617L51.3123 94.8129C53.5726 96.7168 55.2519 99.218 56.1584 102.031C57.0649 104.844 57.1621 107.855 56.4388 110.72L47.0904 147.586L79.3576 127.155C81.7908 125.61 84.6175 124.799 87.4998 124.818Z" fill="#E0EAF4" />
            </svg>
          </div>

          <div className="flex flex-col space-y-4 ">
            <h1 className=''>Visión</h1>
            <hr className='border-b-4 border-b-[#0054A4] w-16' />
            <h3 className='bold w-[313px]'>
              Ser reconocidos por la calidad y efectividad de nuestras actuaciones; y por mantener un recurso humano calificado.
            </h3>
          </div>
        </div>

      </div>

      <h1 className=''>Metas y Objetivos</h1>

      <ul className='flex flex-col space-y-4 mt-6 mb-20'>
        {feats.map((e, i) => (

          <li className='flex bg-[#F7F8FB] px-9 py-3 rounded-xl items-center gap-6' key={i}>
            <h6 className='text-[#0054A4]'>{i + 1}</h6>

            <h3>{e}</h3>

            <svg className='ml-auto' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.4109 11.4578C23.5646 11.6183 23.6851 11.8075 23.7655 12.0146C23.8459 12.2217 23.8846 12.4427 23.8793 12.6648C23.8741 12.8869 23.8251 13.1058 23.735 13.3089C23.645 13.5121 23.5158 13.6954 23.3547 13.8484L15.1 21.7234C14.7852 22.0226 14.3671 22.1888 13.9328 22.1875C13.4994 22.1845 13.0828 22.0189 12.7656 21.7234L8.64532 17.7859C8.32084 17.4764 8.13263 17.0506 8.12208 16.6023C8.11153 16.1539 8.27951 15.7198 8.58907 15.3953C8.89863 15.0708 9.3244 14.8826 9.77273 14.8721C10.2211 14.8615 10.6552 15.0295 10.9797 15.3391L13.9328 18.1656L21.0203 11.4016C21.1808 11.2479 21.37 11.1274 21.5771 11.047C21.7842 10.9666 22.0052 10.9279 22.2273 10.9332C22.4494 10.9384 22.6683 10.9874 22.8714 11.0775C23.0746 11.1675 23.2579 11.2967 23.4109 11.4578ZM31.1875 16C31.1875 19.0038 30.2968 21.9402 28.628 24.4377C26.9591 26.9353 24.5872 28.8819 21.812 30.0314C19.0369 31.1809 15.9832 31.4817 13.0371 30.8957C10.091 30.3097 7.38483 28.8632 5.26082 26.7392C3.13681 24.6152 1.69034 21.909 1.10433 18.9629C0.518317 16.0168 0.819081 12.9631 1.96859 10.188C3.11809 7.41284 5.06471 5.04088 7.56228 3.37206C10.0599 1.70323 12.9962 0.8125 16 0.8125C20.0268 0.816223 23.8877 2.41753 26.7351 5.26493C29.5825 8.11233 31.1838 11.9732 31.1875 16ZM27.8125 16C27.8125 13.6637 27.1197 11.3799 25.8217 9.43733C24.5238 7.49477 22.6789 5.98073 20.5205 5.08667C18.362 4.19261 15.9869 3.95869 13.6955 4.41447C11.4041 4.87026 9.29932 5.99529 7.64731 7.6473C5.9953 9.29931 4.87027 11.4041 4.41448 13.6955C3.95869 15.9869 4.19262 18.362 5.08668 20.5204C5.98074 22.6789 7.49478 24.5238 9.43733 25.8217C11.3799 27.1197 13.6637 27.8125 16 27.8125C19.1317 27.8088 22.1341 26.5631 24.3486 24.3486C26.5631 22.1341 27.8088 19.1317 27.8125 16Z" fill="#0054A4" />
            </svg>

          </li>
        ))}
      </ul>


      <h1 >Valores</h1>

      <div className="grid grid-cols-3 gap-6 mt-6">

        {valores.map((e, i) => (

          <div className="flex flex-col items-center bg-[#F7F8FB] h-[193px] px-12 py-9 rounded-xl">
            {e.svg}

            <h3 className='mt-8'>{e.name}</h3>
          </div>
        ))}

      </div>


      <h1 className="mt-20 mb-6">Equipo de Trabajo</h1>

      <p >El Tribunal Administrativo Tributario cuenta con una estructura organizacional conformada en cada uno de sus niveles y unidades administrativas por personal altamente calificado, idóneo y técnico. <br /><br />

        Cada colaborador ha sido seleccionado por sus competencias, capacidad y años de experiencia; con el fin de cumplir la misión del tribunal, y promover la excelencia en la prestación del servicio que brindamos a la sociedad panameña.</p>

      <img className='mb-20 mt-12 custom' src="/img/flujograma.png" alt="" />


      <div className="rounded-xl bg-[#EBF5FF]  flex justify-between my-20">

        <div className="my-auto mx-12 ">
          <h1>¿Tiene más preguntas?</h1>
          <h3 className='mt-2 mb-6'>Comunicate con nosotros, y te respondemos en la brevedad.</h3>
          <a href="/contacto">
            <button className="primary">Contacto</button>
          </a>

        </div>

        <div className="h-[260px]">
          <svg width="302" height="260" viewBox="0 0 302 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_104_788)">
              <path d="M242.411 113.886C242.411 113.886 251.322 97.9445 265.836 98.3068C281.991 98.6933 289.212 114.079 289.212 114.079L292.376 110.046V165.6L289.429 161.542C289.429 161.542 283.03 177.532 266.198 177.532C249.366 177.532 242.411 161.759 242.411 161.759C242.411 161.759 234.441 177.967 218.744 177.532C203.047 177.097 195.464 161.542 195.464 161.542C195.464 161.542 186.553 177.967 171.605 177.532C156.657 177.097 148.808 162.122 148.808 162.122L145.91 166.832C146.522 162.212 146.821 157.555 146.804 152.895C146.907 147.31 146.729 141.723 146.272 136.156C145.161 124.393 141.225 110.674 129.609 106.398C127.404 105.453 124.989 105.104 122.606 105.384C122.075 105.553 120.94 104.563 118.766 102.969C116.593 101.374 114.347 100.022 114.347 100.022C114.347 100.022 131.928 90.7225 148.277 113.862C148.711 114.442 157.743 97.6547 171.025 98.2344C181.796 98.7416 189.475 102.582 195.464 114.055C196.165 115.48 202.154 98.4518 218.986 98.2827C235.818 98.1136 242.411 113.886 242.411 113.886ZM172.595 104.466C160.834 104.466 151.271 119.514 151.271 138.088C151.271 156.663 160.931 171.663 172.595 171.663C184.259 171.663 193.871 156.615 193.871 138.088C193.871 119.562 184.38 104.466 172.595 104.466ZM219.638 104.466C207.877 104.466 198.338 119.514 198.338 138.088C198.338 156.663 207.998 171.614 219.638 171.614C231.278 171.614 240.913 156.566 240.913 138.04C240.913 119.514 231.423 104.466 219.638 104.466ZM266.681 104.466C254.896 104.466 245.357 119.514 245.357 138.088C245.357 156.663 254.896 171.663 266.681 171.663C278.466 171.663 288.005 156.615 288.005 138.088C288.005 119.562 278.441 104.466 266.681 104.466Z" fill="#004A99" fill-opacity="0.2" />
              <path d="M136.226 193.111C138.063 190.261 139.678 187.273 141.056 184.174H292.448V205.43H126.784C130.24 201.57 133.397 197.452 136.226 193.111ZM252.457 200.357C251.628 199.678 250.96 198.823 250.502 197.854C250.043 196.885 249.805 195.826 249.805 194.754C249.805 193.682 250.043 192.623 250.502 191.654C250.96 190.685 251.628 189.83 252.457 189.15C250.971 189.15 249.546 189.74 248.495 190.791C247.444 191.842 246.854 193.268 246.854 194.754C246.854 196.24 247.444 197.665 248.495 198.716C249.546 199.767 250.971 200.357 252.457 200.357ZM289.285 200.357C288.456 199.678 287.788 198.823 287.329 197.854C286.871 196.885 286.633 195.826 286.633 194.754C286.633 193.682 286.871 192.623 287.329 191.654C287.788 190.685 288.456 189.83 289.285 189.15C287.799 189.15 286.374 189.74 285.323 190.791C284.272 191.842 283.682 193.268 283.682 194.754C283.682 196.24 284.272 197.665 285.323 198.716C286.374 199.767 287.799 200.357 289.285 200.357ZM265.135 194.778C265.153 195.857 264.915 196.926 264.441 197.896C263.967 198.865 263.269 199.709 262.406 200.357H262.527C264.013 200.357 265.438 199.767 266.489 198.716C267.539 197.665 268.13 196.24 268.13 194.754C268.13 193.268 267.539 191.842 266.489 190.791C265.438 189.74 264.013 189.15 262.527 189.15H262.406C263.272 189.807 263.97 190.659 264.444 191.637C264.918 192.615 265.155 193.691 265.135 194.778ZM257.721 200.599C258.833 200.613 259.925 200.296 260.856 199.688C261.787 199.08 262.517 198.209 262.951 197.185C263.386 196.161 263.506 195.031 263.296 193.938C263.086 192.846 262.556 191.841 261.773 191.051C260.99 190.261 259.989 189.722 258.899 189.502C257.809 189.283 256.678 189.393 255.65 189.818C254.622 190.244 253.745 190.966 253.129 191.892C252.513 192.818 252.186 193.907 252.191 195.019C252.188 195.749 252.328 196.472 252.605 197.147C252.881 197.823 253.287 198.437 253.801 198.955C254.314 199.473 254.925 199.885 255.598 200.167C256.27 200.449 256.992 200.596 257.721 200.599ZM283.223 199.464C282.483 198.013 282.097 196.407 282.097 194.778C282.097 193.149 282.483 191.543 283.223 190.092H269.41C270.125 191.556 270.483 193.169 270.454 194.798C270.425 196.428 270.009 198.027 269.241 199.464H283.223ZM150.209 195.019C150.199 193.927 149.866 192.861 149.252 191.957C148.637 191.054 147.769 190.352 146.756 189.942C145.743 189.531 144.632 189.43 143.561 189.651C142.491 189.871 141.51 190.404 140.743 191.182C139.975 191.96 139.455 192.948 139.248 194.021C139.042 195.094 139.157 196.205 139.581 197.212C140.005 198.22 140.717 199.079 141.629 199.682C142.54 200.285 143.61 200.604 144.703 200.599C145.432 200.599 146.154 200.454 146.827 200.173C147.499 199.892 148.11 199.48 148.622 198.96C149.134 198.441 149.538 197.826 149.811 197.149C150.083 196.473 150.218 195.749 150.209 195.019ZM137.796 195.019C137.774 193.927 138.014 192.846 138.498 191.867C138.981 190.887 139.693 190.038 140.573 189.392H140.38C139.718 189.383 139.062 189.506 138.448 189.754C138.279 189.754 138.013 190.116 136.323 192.991C135.115 195.092 134.85 195.406 134.85 195.72C135.059 197.046 135.727 198.256 136.738 199.139C137.749 200.022 139.038 200.522 140.38 200.551H140.501C139.623 199.913 138.912 199.073 138.428 198.101C137.945 197.13 137.703 196.056 137.723 194.971M173.778 194.971C173.749 193.888 173.977 192.813 174.443 191.835C174.909 190.857 175.599 190.003 176.459 189.343C174.973 189.343 173.548 189.934 172.497 190.985C171.447 192.035 170.856 193.461 170.856 194.947C170.856 196.433 171.447 197.859 172.497 198.909C173.548 199.96 174.973 200.551 176.459 200.551C175.603 199.899 174.914 199.053 174.448 198.083C173.982 197.113 173.753 196.047 173.778 194.971ZM212.031 194.971C212.004 193.881 212.24 192.8 212.719 191.82C213.198 190.841 213.907 189.991 214.784 189.343H214.639C213.153 189.343 211.728 189.934 210.677 190.985C209.627 192.035 209.036 193.461 209.036 194.947C209.036 196.433 209.627 197.859 210.677 198.909C211.728 199.96 213.153 200.551 214.639 200.551H214.784C213.91 199.91 213.204 199.069 212.725 198.098C212.246 197.127 212.008 196.054 212.031 194.971ZM227.124 194.971C227.147 196.049 226.914 197.117 226.443 198.087C225.973 199.057 225.28 199.901 224.419 200.551C225.905 200.551 227.33 199.96 228.381 198.909C229.432 197.859 230.022 196.433 230.022 194.947C230.022 193.461 229.432 192.035 228.381 190.985C227.33 189.934 225.905 189.343 224.419 189.343C225.282 190.002 225.976 190.855 226.447 191.833C226.917 192.811 227.149 193.886 227.124 194.971ZM189.21 194.971C189.233 196.049 188.999 197.117 188.529 198.087C188.059 199.057 187.365 199.901 186.505 200.551H186.626C188.112 200.551 189.537 199.96 190.587 198.909C191.638 197.859 192.228 196.433 192.228 194.947C192.228 193.461 191.638 192.035 190.587 190.985C189.537 189.934 188.112 189.343 186.626 189.343H186.505C187.367 190.002 188.062 190.855 188.532 191.833C189.002 192.811 189.234 193.886 189.21 194.971ZM151.802 194.971C151.824 196.046 151.593 197.111 151.127 198.081C150.662 199.05 149.975 199.896 149.122 200.551C150.608 200.551 152.033 199.96 153.084 198.909C154.134 197.859 154.725 196.433 154.725 194.947C154.725 193.461 154.134 192.035 153.084 190.985C152.033 189.934 150.608 189.343 149.122 189.343C149.977 190.007 150.665 190.862 151.13 191.839C151.596 192.816 151.826 193.889 151.802 194.971ZM186.553 194.971C186.544 193.877 186.21 192.811 185.594 191.907C184.979 191.002 184.109 190.301 183.095 189.891C182.081 189.481 180.968 189.382 179.897 189.604C178.826 189.827 177.846 190.363 177.079 191.143C176.312 191.923 175.794 192.913 175.59 193.988C175.386 195.063 175.505 196.174 175.933 197.181C176.36 198.188 177.076 199.045 177.991 199.645C178.906 200.245 179.978 200.56 181.071 200.551C181.798 200.544 182.516 200.395 183.184 200.111C183.853 199.827 184.459 199.415 184.968 198.897C185.477 198.378 185.879 197.765 186.151 197.092C186.423 196.418 186.56 195.698 186.553 194.971ZM225.192 194.971C225.178 193.883 224.842 192.824 224.226 191.927C223.61 191.03 222.742 190.335 221.732 189.931C220.722 189.527 219.615 189.431 218.55 189.655C217.486 189.88 216.512 190.415 215.751 191.193C214.99 191.97 214.477 192.956 214.276 194.026C214.074 195.095 214.195 196.2 214.621 197.201C215.047 198.202 215.76 199.055 216.67 199.651C217.58 200.247 218.647 200.56 219.734 200.551C221.197 200.532 222.592 199.934 223.615 198.888C224.638 197.842 225.205 196.434 225.192 194.971ZM155.956 190.14C156.678 191.603 157.039 193.216 157.01 194.847C156.98 196.477 156.561 198.077 155.787 199.512H169.794C169.054 198.061 168.668 196.455 168.668 194.826C168.668 193.197 169.054 191.591 169.794 190.14H155.956ZM193.871 190.14C194.592 191.603 194.952 193.219 194.918 194.85C194.884 196.481 194.459 198.08 193.677 199.512H207.732C206.998 198.059 206.615 196.454 206.615 194.826C206.615 193.198 206.998 191.593 207.732 190.14H193.871ZM231.833 190.14C232.547 191.606 232.902 193.22 232.869 194.85C232.835 196.479 232.414 198.078 231.64 199.512H245.623C244.896 198.057 244.517 196.453 244.517 194.826C244.517 193.2 244.896 191.595 245.623 190.14H231.833ZM292.448 189.851C291.416 190.275 290.534 190.996 289.913 191.923C289.292 192.85 288.961 193.94 288.961 195.056C288.961 196.171 289.292 197.262 289.913 198.189C290.534 199.115 291.416 199.837 292.448 200.261" fill="#004A99" fill-opacity="0.2" />
              <path d="M93.9408 94.1523C86.5117 93.7792 79.0895 95.0122 72.18 97.7674C65.2705 100.523 59.0359 104.735 53.9012 110.118C34.5818 130.069 34.5818 166.856 58.3688 183.595C64.8073 188.411 72.6479 190.982 80.6876 190.912C88.7274 190.842 96.5222 188.136 102.876 183.208C108.57 178.461 112.729 172.132 114.827 165.021C116.924 157.909 116.867 150.336 114.661 143.257C109.155 128.137 92.6367 117.219 77.5917 125.722C70.9748 128.91 64.213 136.808 66.2657 150.407C67.8837 160.528 79.5478 167.46 91.6707 162.774C100.485 158.474 102.345 151.132 101.137 143.451C99.4468 134.586 91.0187 126.543 78.606 130.963C99.0846 115.311 129.706 155.117 95.8486 176.856C91.7431 179.14 87.1525 180.412 82.4571 180.568C77.7618 180.723 73.0971 179.757 68.8496 177.749C56.9923 172.121 49.8924 158.885 51.3414 140.745C52.3315 128.668 61.0011 116.785 69.9364 111.205C92.1779 98.4034 121.326 114.152 130.189 138.113C142.771 171.638 116.327 212.29 81.3831 211.686C60.3974 211.372 37.5522 200.985 26.2261 181.59C6.90669 148.547 10.6498 103.234 54.2152 80.6744C70.0571 72.4378 100.896 74.5634 100.896 74.5634H292.351L292.472 61.0613L70.7816 60.8439C69.2377 60.7425 67.6888 60.7425 66.1449 60.8439C17.0977 73.6456 -0.0241699 107.389 -0.0241699 142.968C2.6564 212.652 56.5818 225.55 82.0835 224.753C118.525 223.618 140.67 196.976 145.886 168.257C152.455 132.461 127.267 96.5194 93.9408 94.1523Z" fill="#004A99" fill-opacity="0.2" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M214.132 356.441C214.132 233.497 214.132 233.497 214.132 228.304C214.132 217.652 232.654 217.338 232.654 228.424V356.441H239.392V228.304C239.439 226.243 239.065 224.195 238.294 222.284C237.522 220.373 236.368 218.639 234.903 217.19C233.438 215.741 231.693 214.605 229.774 213.854C227.855 213.103 225.803 212.751 223.743 212.821C207.829 212.676 207.201 228.376 207.201 228.376V356.392L214.132 356.441Z" fill="#004A99" fill-opacity="0.2" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M259.557 356.441V228.304C259.557 217.628 278.079 217.338 278.079 228.424V356.441H284.769V228.304C284.819 226.246 284.449 224.201 283.681 222.291C282.913 220.382 281.764 218.65 280.304 217.2C278.843 215.751 277.102 214.615 275.188 213.862C273.273 213.109 271.225 212.755 269.168 212.821C253.181 212.676 252.553 228.376 252.553 228.376V356.392L259.557 356.441Z" fill="#004A99" fill-opacity="0.2" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M168.49 356.441C168.49 233.497 168.49 233.497 168.49 228.304C168.49 217.652 187.012 217.338 187.012 228.424V356.441H193.677V228.304C193.731 226.248 193.364 224.202 192.599 222.293C191.834 220.384 190.687 218.651 189.229 217.201C187.77 215.752 186.031 214.615 184.117 213.862C182.204 213.109 180.156 212.754 178.101 212.821C162.09 212.676 161.51 228.376 161.51 228.376V356.392L168.49 356.441Z" fill="#004A99" fill-opacity="0.2" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M122.896 356.441C122.896 233.497 122.896 233.497 122.896 228.304C122.896 217.652 141.442 217.338 141.467 228.424V356.441H148.156V228.304C148.21 226.241 147.841 224.19 147.072 222.276C146.302 220.361 145.149 218.625 143.682 217.174C142.216 215.723 140.468 214.589 138.546 213.84C136.624 213.091 134.569 212.744 132.507 212.821C116.496 212.676 115.965 228.376 115.965 228.376V356.392L122.896 356.441Z" fill="#004A99" fill-opacity="0.2" />
              <path d="M219.131 107.195C228.525 107.195 236.204 121.06 236.035 138.088C235.866 155.117 228.235 168.885 218.744 168.861C209.254 168.836 201.84 154.948 201.84 137.919C201.84 120.891 209.664 107.171 219.131 107.195ZM203.772 137.968C203.772 154.272 210.703 167.532 219.396 167.58C228.09 167.629 235.238 154.465 235.335 138.137C235.432 121.809 228.38 108.548 219.686 108.5C210.992 108.451 203.893 121.64 203.772 137.968Z" fill="#004A99" fill-opacity="0.2" />
              <path d="M188.968 137.968C188.968 155.02 181.434 168.861 172.064 168.885C162.694 168.909 154.845 155.141 154.773 138.161C154.7 121.181 162.356 107.268 171.798 107.22C181.24 107.171 188.896 120.891 188.968 137.968ZM173.054 108.548C164.336 108.548 157.309 121.905 157.429 138.209C157.55 154.513 164.674 167.653 173.271 167.58C181.868 167.508 188.992 154.344 188.944 137.992C188.896 121.64 181.772 108.5 173.054 108.548Z" fill="#004A99" fill-opacity="0.2" />
              <path d="M268.202 108.476C276.413 110.118 282.426 123.451 281.822 139.465C281.219 155.479 274.288 168.257 265.956 169.199C266.415 169.199 266.777 169.464 267.26 169.513C276.099 169.923 283.778 156.566 284.43 139.683C285.083 122.799 278.321 108.79 269.482 108.282C269.023 108.282 268.564 108.451 268.178 108.476" fill="#004A99" fill-opacity="0.2" />
              <path d="M301.649 399H85.8266L95.4863 356.972L94.786 223.376C94.786 223.376 101.644 221.565 103.287 220.961C104.298 220.577 105.207 219.966 105.943 219.173V356.634L292.593 356.513V61.0613L66.3864 60.8681L66.7004 59.8294C66.7004 59.8294 66.9419 50.506 63.0538 47.1969C59.1658 43.8878 54.3842 38.5498 53.2251 32.7045C52.5653 26.197 52.3153 19.6545 52.4764 13.1156V0.120728H301.818L301.649 399ZM292.351 12.5359H64.9375V26.8592H292.351V12.5359ZM74.8145 46.6655H292.327V36.7623H66.9177L74.8145 46.6655ZM292.158 51.8345H76.4567V59.0807H292.134L292.158 51.8345ZM292.52 364.653H104.47L98.6016 392.237H292.52V364.653Z" fill="#004A99" fill-opacity="0.2" />
            </g>
            <defs>
              <clipPath id="clip0_104_788">
                <rect width="302" height="399" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </div>
      </div>

    </>

  )
}
