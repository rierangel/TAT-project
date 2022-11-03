import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'


// // document.getElementById("").classList.contains

export default function SliderCarrusel({ children, dot_control }) {

    const caruselRef = useRef(null)
    const dotRef = useRef()
    const sliderRef = useRef()


    const [current, setCurrent] = useState(0)


    const getWidth = () => {
        const slider = sliderRef.current
        const widthChild = slider.children[0].offsetWidth
        const cols = slider.offsetWidth / widthChild
        return widthChild * cols
    }


    // let current = 0


    const reSetDot = (i) => {
        for (let dot of dotRef.current.children) {
            dot.className = ""
        }
        dotRef.current.children[i].classList.add("active")
    }

    const handleDot = (e) => {
        const slider = sliderRef.current

        const index = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
        reSetDot(index)
        slider.scrollLeft = getWidth() * index
        setCurrent(index)

    }


    const arrowControl = (bool) => {
        const slider = sliderRef.current
        if (bool == true) {
            if (current + 1 >= slider.children.length) {
                slider.scrollLeft = 0
                setCurrent(0)
            } else {
                let newCurrent = current + 1
                slider.scrollLeft = getWidth() * newCurrent
                setCurrent(newCurrent)
            }

        } else {
            if (current < 1) {
                slider.scrollLeft = slider.children.length * getWidth()
                let newCurrent = slider.children.length - 1
                setCurrent(newCurrent)
            } else {
                slider.scrollLeft -= getWidth()
                setCurrent(current - 1)
            }
        }
    }


    useEffect(() => {
        if (dotRef.current.children[0] !== undefined) {
            reSetDot(current)
        }


    }, [current])

    useEffect(() => {
        const interval = setTimeout(() => {
            arrowControl(true)
        }, 5000);
        return () => clearInterval(interval);
    }, [current]);



    const cont = [
        "https://usercontent.one/wp/www.entornoestudiantil.com/wp-content/uploads/2018/03/La-clasificacion-de-las-empresas.jpg",
        "https://clippingrrpp.com/wp-content/uploads/2015/02/abogados-marketing-legal1.jpg",
        "https://www.bufetesemperejaen.com/wp-content/uploads/2019/02/Abogados-Elche-reunidos-despacho-sempere.jpg",
        "https://d500.epimg.net/cincodias/imagenes/2018/10/15/legal/1539584672_711277_1539585056_noticia_normal.jpg",
        "https://d500.epimg.net/cincodias/imagenes/2017/11/27/legal/1511775346_282834_1511863279_rrss_normal.jpg",
        "https://www.armentalrialabogados.es/images/cuadro-despacho.jpg",
    ];


    return (
        <div ref={caruselRef} className="carrusel_slider">

            <div className='relative flex items-center'>
                <div className="absolute left-[-8rem] inset-y-0 flex items-center">

                    <div onClick={() => arrowControl(false)} className='btn hover1 border1 '>
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8128 7.00004C15.8128 7.24868 15.7141 7.48714 15.5383 7.66295C15.3624 7.83877 15.124 7.93754 14.8753 7.93754H3.39097L7.41441 11.961C7.50181 12.0481 7.57116 12.1516 7.61848 12.2655C7.66579 12.3795 7.69015 12.5017 7.69015 12.625C7.69015 12.7484 7.66579 12.8706 7.61848 12.9846C7.57116 13.0985 7.50181 13.202 7.41441 13.2891C7.2375 13.4637 6.99893 13.5616 6.75035 13.5616C6.50177 13.5616 6.2632 13.4637 6.08629 13.2891L0.461286 7.6641C0.373886 7.577 0.304539 7.47351 0.257222 7.35956C0.209904 7.2456 0.185547 7.12343 0.185547 7.00004C0.185547 6.87665 0.209904 6.75448 0.257222 6.64052C0.304539 6.52657 0.373886 6.42307 0.461286 6.33598L6.08629 0.710977C6.26241 0.534857 6.50128 0.435913 6.75035 0.435913C6.87368 0.435913 6.9958 0.460204 7.10974 0.5074C7.22368 0.554595 7.32721 0.623771 7.41441 0.710977C7.50162 0.798183 7.57079 0.901711 7.61799 1.01565C7.66518 1.12959 7.68948 1.25171 7.68948 1.37504C7.68948 1.49837 7.66518 1.62049 7.61799 1.73443C7.57079 1.84837 7.50162 1.9519 7.41441 2.0391L3.39097 6.06254H14.8753C15.124 6.06254 15.3624 6.16131 15.5383 6.33713C15.7141 6.51294 15.8128 6.7514 15.8128 7.00004Z" fill="#0054A4" />
                        </svg>
                    </div>
                </div>

                <div ref={sliderRef} className="slider w-full">
                    {cont.map((e, i) => (
                        <div className='flex flex-col  justify-center' key={i}>
                            <div className='flex items-end rounded-t-xl  relative object-center z-10 w-full h-[211px] md:h-[311px]  lg:h-[411px] overflow-hidden'>
                                <img className='rounded-t-xl w-full object-contain object-center' src={e} alt="" />
                            </div>
                            <div className="border3 p-9 flex-col text-left justify-start -mt-4 ">
                                <h3 className='pb-2'>11° Aniversario del Tribunal Administrativo Tributario</h3>
                                <p >En el marco de esta significativa fecha, a nombre del Pleno de Magistrados, les extendemos un cordial saludo, recordando que cada uno de los logros alcanzados durante este tiempo, son fruto del esfuerzo individual y colectivo de todos los servidores públicos que fieles a los valores institucionales que nos identifican: transparencia, confidencialidad,</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute right-[-8rem] inset-y-0 flex items-center">
                    <div onClick={() => arrowControl(true)} className='btn hover1 border1 '>
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5391 7.6641L9.91406 13.2891C9.73715 13.4637 9.49858 13.5616 9.25 13.5616C9.00142 13.5616 8.76285 13.4637 8.58594 13.2891C8.49854 13.202 8.42919 13.0985 8.38187 12.9846C8.33455 12.8706 8.3102 12.7484 8.3102 12.625C8.3102 12.5017 8.33455 12.3795 8.38187 12.2655C8.42919 12.1516 8.49854 12.0481 8.58594 11.961L12.6094 7.93754H1.125C0.87636 7.93754 0.637903 7.83877 0.462087 7.66295C0.286272 7.48714 0.1875 7.24868 0.1875 7.00004C0.1875 6.7514 0.286272 6.51294 0.462087 6.33713C0.637903 6.16131 0.87636 6.06254 1.125 6.06254H12.6094L8.58594 2.0391C8.40982 1.86298 8.31087 1.62411 8.31087 1.37504C8.31087 1.25171 8.33517 1.12959 8.38236 1.01565C8.42956 0.901711 8.49873 0.798183 8.58594 0.710977C8.67314 0.623771 8.77667 0.554595 8.89061 0.5074C9.00455 0.460204 9.12667 0.435913 9.25 0.435913C9.49907 0.435913 9.73794 0.534857 9.91406 0.710977L15.5391 6.33598C15.6265 6.42307 15.6958 6.52657 15.7431 6.64052C15.7904 6.75448 15.8148 6.87665 15.8148 7.00004C15.8148 7.12343 15.7904 7.2456 15.7431 7.35956C15.6958 7.47351 15.6265 7.577 15.5391 7.6641Z" fill="#0054A4" />
                        </svg>
                    </div>
                </div>
            </div>

            <div ref={dotRef} className="dot_control mt-8">
                {cont.map((e, i) => (
                    <>
                        <div key={i} onClick={(e) => handleDot(e)} />
                    </>
                ))}
            </div>

        </div>
    )
}





