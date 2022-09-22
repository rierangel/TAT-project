import { useGql } from 'src/lib/Fetcher'
import { useEffect } from 'react'

export default function Contact() {

    const query = `mutation SEND_EMAIL {
        sendEmail(
          input: {
            to: "test@test.com"
            from: "test@test.com"
            subject: "test email"
            body: "test email"
            clientMutationId: "test"
          }
        ) {
          origin
          sent
          message
        }
      }
      `

    const [res, isload, isfet, refetcher] = useGql(query)

    return (
        <>
            <h1>Contacto</h1>
            <p>Si tiene dudas, consultas o comentarios, no dude en comunicarse con nosotros.</p>


            <form action="" className='p-9 border rounded-xl mt-6 mb-20 space-y-6'>

                <div className='bg-[#EBF5FF] gap-3 p-6 flex'>
                    <i>
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.4375 0.500061C6.76872 0.500061 5.13742 0.994912 3.74988 1.92204C2.36234 2.84916 1.28088 4.16692 0.64227 5.70867C0.00365585 7.25042 -0.163435 8.94692 0.162128 10.5836C0.487691 12.2204 1.29129 13.7238 2.47129 14.9038C3.6513 16.0838 5.15471 16.8874 6.79143 17.2129C8.42814 17.5385 10.1246 17.3714 11.6664 16.7328C13.2081 16.0942 14.5259 15.0127 15.453 13.6252C16.3802 12.2376 16.875 10.6063 16.875 8.93756C16.8729 6.70043 15.9833 4.55552 14.4014 2.97363C12.8195 1.39174 10.6746 0.50213 8.4375 0.500061ZM8.4375 15.5001C7.13956 15.5001 5.87077 15.1152 4.79157 14.3941C3.71238 13.673 2.87124 12.6481 2.37454 11.4489C1.87784 10.2498 1.74788 8.93028 2.0011 7.65728C2.25432 6.38428 2.87933 5.21495 3.79712 4.29717C4.7149 3.37939 5.88422 2.75437 7.15722 2.50116C8.43022 2.24794 9.74972 2.3779 10.9489 2.8746C12.148 3.3713 13.1729 4.21243 13.894 5.29163C14.6151 6.37083 15 7.63962 15 8.93756C14.9979 10.6774 14.3059 12.3454 13.0756 13.5757C11.8453 14.8059 10.1774 15.498 8.4375 15.5001ZM10 12.6876C10 12.9362 9.90123 13.1747 9.72542 13.3505C9.5496 13.5263 9.31114 13.6251 9.0625 13.6251H8.4375C8.18886 13.6251 7.95041 13.5263 7.77459 13.3505C7.59878 13.1747 7.5 12.9362 7.5 12.6876V9.50787C7.31675 9.44431 7.15797 9.32502 7.0459 9.16672C6.93383 9.00841 6.87407 8.81902 6.875 8.62506C6.875 8.37642 6.97378 8.13796 7.14959 7.96215C7.32541 7.78633 7.56386 7.68756 7.8125 7.68756H8.4375C8.68614 7.68756 8.9246 7.78633 9.10042 7.96215C9.27623 8.13796 9.375 8.37642 9.375 8.62506V11.8047C9.55825 11.8683 9.71703 11.9876 9.82911 12.1459C9.94118 12.3042 10.0009 12.4936 10 12.6876ZM7.03125 5.50006C7.03125 5.25283 7.10456 5.01116 7.24192 4.8056C7.37927 4.60004 7.57449 4.43982 7.8029 4.34521C8.03131 4.2506 8.28264 4.22585 8.52512 4.27408C8.76759 4.32231 8.99032 4.44136 9.16514 4.61618C9.33995 4.79099 9.459 5.01372 9.50724 5.2562C9.55547 5.49867 9.53071 5.75001 9.4361 5.97842C9.34149 6.20682 9.18128 6.40205 8.97572 6.5394C8.77015 6.67675 8.52848 6.75006 8.28125 6.75006C7.94973 6.75006 7.63179 6.61836 7.39737 6.38394C7.16295 6.14952 7.03125 5.83158 7.03125 5.50006Z" fill="#0F1620" />
                        </svg>
                    </i>
                    <small>Los datos que proporcione serán almacenados y podrían ser usados para contactarnos con usted.</small>

                </div>

                <div>
                    <div className='flex gap-3 mb-3'>
                        <div className='flex flex-col space-y-2 w-1/2'>
                            <label htmlFor="name">Nombre y Apellido</label>
                            <input type="text" name="" id="name" />
                        </div>

                        <div className='flex flex-col space-y-2 w-1/2'>

                            <label htmlFor="name">Nombre y Apellido</label>
                            <input type="text" name="" id="name" />
                        </div>
                    </div>

                    <div className='flex gap-3 mb-3'>
                        <div className='flex flex-col space-y-2 w-1/2'>
                            <label htmlFor="name">Nombre y Apellido</label>
                            <input type="text" name="" id="name" />
                        </div>

                        <div className='flex flex-col space-y-2 w-1/2'>

                            <label htmlFor="name">Nombre y Apellido</label>
                            <input type="text" name="" id="name" />
                        </div>

                    </div>

                    <div className='flex flex-col space-y-2 '>
                        <label htmlFor="name">Nombre y Apellido</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>



                </div>




                <button className='primary' type="submit">Enviar mensaje</button>

            </form>


        </>
    )
}
