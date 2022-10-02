import React, { useCallback, useEffect, useRef, useState } from 'react'
import style from './style.module.scss'


export default function SliderCarrusel({ children, dot_control = false }) {
    const caruselRef = useRef(null)
    const sliderRef = useRef(null)
    const [slider, setSlider] = useState(null)    // const sliderRef = useRef(null)



    useEffect(() => {
        if (caruselRef.current) {

            caruselRef.current.querySelector(".slider_container")
            setSlider(caruselRef.current.querySelector(".slider_container"))

            if (slider && slider.children.length > 0) {
                slider.ref = sliderRef
                console.log(sliderRef);
                for (let index = 0; index < slider.children.length; index++) {
                    const element = slider.children[index]
                    element.classList.add(style.item_slider)
                    //slider.appendChild(element)
                }
                slider.classList.add(style.slider)
                if (slider.classList.contains(style.slider)) {
                    caruselRef.current.className = style.carrusel_slider
                }
            }


        }
    },[sliderRef, slider, caruselRef])


    const getWidth = () => {
        const widthChild = slider.children[0].offsetWidth
        const cols = slider.offsetWidth / widthChild
        return widthChild * cols
    }


    let current = 0
    const dotRef = useRef()

    const reSetDot = (i) => {
        for (let dot of dotRef.current.children) {
            dot.className = ""
        }
        dotRef.current.children[i].classList.add(style.active)
    }

    const handleDot = (e) => {
        const index = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
        current = index
        reSetDot(index)
        slider.scrollLeft = getWidth() * index
    }


    const arrowControl = (bool) => {
        if (bool == true) {
            if (current + 1 >= slider.children.length) {
                slider.scrollLeft = 0
                current = 0
            } else {
                current++
                slider.scrollLeft += getWidth()
            }

        } else {
            if (current < 1) {
                slider.scrollLeft = slider.children.length * getWidth()
                current = slider.children.length - 1
            } else {
                slider.scrollLeft -= getWidth()
                current = current - 1
            }

        }
        if (dot_control) {
            reSetDot(current)
        }
    }

    // configuraciones
    useEffect(() => {

        if (dot_control) {
            dotRef.current.children[0].className = style.active
        }


        //arrow controls
        const arrow_control_cont = caruselRef.current.querySelector(".arrow_control")
        if (arrow_control_cont) {

            arrow_control_cont.querySelector(".left_arrow_control").onclick = () => arrowControl(false)
            arrow_control_cont.querySelector(".right_arrow_control").onclick = () => arrowControl(true)
        }

        caruselRef.current.className = style.carrusel_slider

    }, [dotRef])


    return (
        <div ref={caruselRef} className={"hidden"}>

            {children}
            {/* dotControl */}
            {dot_control &&
                <div ref={dotRef} className={style.dot_control}>
                    {children != undefined && [...Array(children.length).keys()].map((e, i) => (
                        <div key={i} onClick={(e) => handleDot(e)} />
                    ))}
                </div>
            }


        </div>
    )
}





