import Layer from "src/components/Layer";
import Noticia from "src/components/noticia/nobackend";

export default function page() {
    const cont = [...Array(10).keys()];

    return (
        <Layer>

            <div className="subtitle ">
                <i>
                    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.131 11C20.58 11 21.756 12.176 21.756 13.625V18.5H21.75V18.875C21.75 19.1734 21.6315 19.4595 21.4205 19.6705C21.2095 19.8815 20.9234 20 20.625 20C20.3266 20 20.0405 19.8815 19.8295 19.6705C19.6185 19.4595 19.5 19.1734 19.5 18.875V15.5H19.506V13.625C19.506 13.5255 19.4665 13.4302 19.3962 13.3598C19.3258 13.2895 19.2305 13.25 19.131 13.25H10.878C10.7785 13.25 10.6832 13.2895 10.6128 13.3598C10.5425 13.4302 10.503 13.5255 10.503 13.625V18.5H10.5V18.875C10.5 19.1734 10.3815 19.4595 10.1705 19.6705C9.95952 19.8815 9.67337 20 9.375 20C9.07663 20 8.79048 19.8815 8.5795 19.6705C8.36853 19.4595 8.25 19.1734 8.25 18.875V15.5H8.253V13.625C8.253 12.176 9.4275 11 10.878 11H19.131ZM27.75 13.625V18.875C27.75 19.1734 27.8685 19.4595 28.0795 19.6705C28.2905 19.8815 28.5766 20 28.875 20C29.1734 20 29.4595 19.8815 29.6705 19.6705C29.8815 19.4595 30 19.1734 30 18.875V13.625C30 12.9288 29.7234 12.2611 29.2312 11.7688C28.7389 11.2766 28.0712 11 27.375 11H22.3125C22.827 11.6225 23.163 12.398 23.2395 13.25H27.375C27.4745 13.25 27.5698 13.2895 27.6402 13.3598C27.7105 13.4302 27.75 13.5255 27.75 13.625ZM0 18.875C6.28765e-09 19.1734 0.118526 19.4595 0.329505 19.6705C0.540483 19.8815 0.826631 20 1.125 20C1.42337 20 1.70952 19.8815 1.9205 19.6705C2.13147 19.4595 2.25 19.1734 2.25 18.875V13.625C2.25 13.5255 2.28951 13.4302 2.35984 13.3598C2.43016 13.2895 2.52554 13.25 2.625 13.25H6.7695C6.84411 12.4236 7.1673 11.6391 7.6965 11H2.625C1.92881 11 1.26113 11.2766 0.768845 11.7688C0.276562 12.2611 0 12.9288 0 13.625V18.875ZM15 0.5C16.1935 0.5 17.3381 0.974106 18.182 1.81802C19.0259 2.66193 19.5 3.80653 19.5 5C19.5 6.19347 19.0259 7.33807 18.182 8.18198C17.3381 9.0259 16.1935 9.5 15 9.5C13.8065 9.5 12.6619 9.0259 11.818 8.18198C10.9741 7.33807 10.5 6.19347 10.5 5C10.5 3.80653 10.9741 2.66193 11.818 1.81802C12.6619 0.974106 13.8065 0.5 15 0.5ZM15 2.75C14.4033 2.75 13.831 2.98705 13.409 3.40901C12.9871 3.83097 12.75 4.40326 12.75 5C12.75 5.59674 12.9871 6.16903 13.409 6.59099C13.831 7.01295 14.4033 7.25 15 7.25C15.5967 7.25 16.169 7.01295 16.591 6.59099C17.0129 6.16903 17.25 5.59674 17.25 5C17.25 4.40326 17.0129 3.83097 16.591 3.40901C16.169 2.98705 15.5967 2.75 15 2.75ZM24.75 2C25.7446 2 26.6984 2.39509 27.4016 3.09835C28.1049 3.80161 28.5 4.75544 28.5 5.75C28.5 6.74456 28.1049 7.69839 27.4016 8.40165C26.6984 9.10491 25.7446 9.5 24.75 9.5C23.7554 9.5 22.8016 9.10491 22.0984 8.40165C21.3951 7.69839 21 6.74456 21 5.75C21 4.75544 21.3951 3.80161 22.0984 3.09835C22.8016 2.39509 23.7554 2 24.75 2ZM24.75 4.25C24.3522 4.25 23.9706 4.40804 23.6893 4.68934C23.408 4.97064 23.25 5.35218 23.25 5.75C23.25 6.14782 23.408 6.52936 23.6893 6.81066C23.9706 7.09196 24.3522 7.25 24.75 7.25C25.1478 7.25 25.5294 7.09196 25.8107 6.81066C26.092 6.52936 26.25 6.14782 26.25 5.75C26.25 5.35218 26.092 4.97064 25.8107 4.68934C25.5294 4.40804 25.1478 4.25 24.75 4.25ZM5.25 2C6.24456 2 7.19839 2.39509 7.90165 3.09835C8.60491 3.80161 9 4.75544 9 5.75C9 6.74456 8.60491 7.69839 7.90165 8.40165C7.19839 9.10491 6.24456 9.5 5.25 9.5C4.25544 9.5 3.30161 9.10491 2.59835 8.40165C1.89509 7.69839 1.5 6.74456 1.5 5.75C1.5 4.75544 1.89509 3.80161 2.59835 3.09835C3.30161 2.39509 4.25544 2 5.25 2ZM5.25 4.25C4.85218 4.25 4.47064 4.40804 4.18934 4.68934C3.90804 4.97064 3.75 5.35218 3.75 5.75C3.75 6.14782 3.90804 6.52936 4.18934 6.81066C4.47064 7.09196 4.85218 7.25 5.25 7.25C5.64782 7.25 6.02936 7.09196 6.31066 6.81066C6.59196 6.52936 6.75 6.14782 6.75 5.75C6.75 5.35218 6.59196 4.97064 6.31066 4.68934C6.02936 4.40804 5.64782 4.25 5.25 4.25ZM1.125 21.5C0.826631 21.5 0.540483 21.6185 0.329505 21.8295C0.118526 22.0405 0 22.3266 0 22.625V23.375C0 24.8668 0.592632 26.2976 1.64752 27.3525C2.70242 28.4074 4.13316 29 5.625 29H24.375C25.8668 29 27.2976 28.4074 28.3525 27.3525C29.4074 26.2976 30 24.8668 30 23.375V22.625C30 22.3266 29.8815 22.0405 29.6705 21.8295C29.4595 21.6185 29.1734 21.5 28.875 21.5H1.125ZM5.625 26.75C4.79484 26.75 3.99382 26.444 3.37506 25.8905C2.75631 25.3371 2.36324 24.575 2.271 23.75H27.729C27.6368 24.575 27.2437 25.3371 26.6249 25.8905C26.0062 26.444 25.2052 26.75 24.375 26.75H5.625Z" fill="#0054A4" />
                    </svg>
                </i>
                <h1 className="">Congreso Internacional de Derecho Tributario</h1>
            </div>

            <Noticia />
        </Layer>
    )
}