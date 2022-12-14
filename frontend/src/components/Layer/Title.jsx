import Link from 'next/link'
import styles from './styles.module.scss'

export default function Title({ data, link }) {
    return ( data &&


            <div className={styles.title} >
                <div className={styles.title_cont}>
                    {data.icono &&
                        <i dangerouslySetInnerHTML={{ __html: data.icono }}></i>
                    }
                    <h1>{data.titulo}</h1>
                </div>
                {link &&
                    <Link href={link}>
                        <a className={styles.title_link}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.125 2V11.75C15.125 12.0484 15.0065 12.3345 14.7955 12.5455C14.5845 12.7565 14.2984 12.875 14 12.875C13.7016 12.875 13.4155 12.7565 13.2045 12.5455C12.9935 12.3345 12.875 12.0484 12.875 11.75V4.71875L2.79689 14.7969C2.5846 15.0064 2.29831 15.1239 2.00002 15.1239C1.70172 15.1239 1.41544 15.0064 1.20314 14.7969C1.09826 14.6924 1.01504 14.5682 0.958263 14.4314C0.901482 14.2947 0.872253 14.1481 0.872253 14C0.872253 13.8519 0.901482 13.7053 0.958263 13.5686C1.01504 13.4318 1.09826 13.3076 1.20314 13.2031L11.2813 3.125H4.25002C3.95165 3.125 3.6655 3.00647 3.45452 2.7955C3.24354 2.58452 3.12502 2.29837 3.12502 2C3.12502 1.70163 3.24354 1.41548 3.45452 1.2045C3.6655 0.993526 3.95165 0.875 4.25002 0.875H14C14.2984 0.875 14.5845 0.993526 14.7955 1.2045C15.0065 1.41548 15.125 1.70163 15.125 2Z" fill="#0054A4" />
                            </svg>
                            ver todas
                        </a>
                    </Link>
                }

            </div>
    )
}
