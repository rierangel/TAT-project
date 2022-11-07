import React from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import Footer from './Footer'
import Path from './path'
import SvgFondo from '../../icons/fondo'
export default function Layer({ children }) {
    return (
        <>
            <Head>
                <meta name="description" content="El Tribunal Administrativo Tributario cuenta con una estructura orgánica diseñada para cumplir con calidad y eficiencia todas las funciones que le asigna la ley, como institución autónoma e independiente.  Cada colaborador del tribunal contribuye con sus competencias a implementar la cultura organizacional y al logro de la misión y visión institucional." />
                <title>TAT | Tribunal Tributario</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <div className='relative'>

                <main className="container relative min-h-screen">
                    <Path />
                    {children}

                </main>

                <div className='hidden lg:flex fixed bottom-0 right-0 -z-50'>
                    <SvgFondo />
                </div>
            </div>


            <div className=" hidden fixed bottom-5 right-5 rounded-full z-20">
                <button className="contact">
                    <div className='h-5'>

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 17.4375C7.62493 17.4386 6.27046 17.1034 5.05469 16.4609L2.83594 17.0938C2.56833 17.1697 2.28531 17.1728 2.0161 17.1028C1.74689 17.0328 1.50125 16.8922 1.30455 16.6955C1.10786 16.4988 0.967236 16.2531 0.897216 15.9839C0.827197 15.7147 0.830315 15.4317 0.90625 15.1641L1.53906 12.9453C0.67687 11.3154 0.372336 9.44795 0.672043 7.62858C0.971751 5.8092 1.8592 4.13809 3.19864 2.87086C4.53808 1.60364 6.25576 0.810073 8.08894 0.611554C9.92211 0.413035 11.7699 0.820493 13.3495 1.7716C14.9292 2.72271 16.1538 4.1651 16.836 5.87814C17.5183 7.59118 17.6206 9.48055 17.1273 11.2572C16.634 13.0339 15.5723 14.6001 14.1046 15.7162C12.6368 16.8323 10.8439 17.4369 9 17.4375ZM5.17187 14.5156C5.34031 14.5122 5.50603 14.5584 5.64844 14.6484C6.66487 15.2448 7.82155 15.5602 9 15.5625C10.2979 15.5625 11.5667 15.1776 12.6459 14.4565C13.7251 13.7354 14.5663 12.7105 15.063 11.5114C15.5597 10.3122 15.6896 8.99273 15.4364 7.71973C15.1832 6.44673 14.5582 5.2774 13.6404 4.35962C12.7226 3.44184 11.5533 2.81682 10.2803 2.56361C9.00728 2.31039 7.68778 2.44035 6.48864 2.93705C5.2895 3.43375 4.26458 4.27488 3.54348 5.35408C2.82238 6.43328 2.4375 7.70207 2.4375 9.00001C2.43976 10.1785 2.75522 11.3351 3.35156 12.3516C3.41796 12.4605 3.46124 12.5819 3.47871 12.7082C3.49618 12.8345 3.48747 12.9631 3.45312 13.0859L2.86719 15.1328L4.91406 14.5469C4.99821 14.5249 5.08492 14.5144 5.17187 14.5156Z" fill="white" />
                        </svg>

                    </div>
                    Chat en línea
                </button>
            </div>
            <Footer />



        </>

    )
}
