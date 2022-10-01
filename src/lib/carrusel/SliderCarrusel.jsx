import React, { useEffect, useRef, useState } from 'react'
import style from './style.module.scss'


export function SliderCarrusel({ children, dot_control = false }) {
    const carrusel_slider_Ref = useRef(null)
    const sliderRef = useRef(null)
    const [slider, setSlider] = useState(null)    // const sliderRef = useRef(null)


    useEffect(() => {
        if (carrusel_slider_Ref.current) {


            carrusel_slider_Ref.current.querySelector(".slider_container")

            setSlider(carrusel_slider_Ref.current.querySelector(".slider_container"))

            console.log(slider);
            if (slider && slider.children.length > 0) {

                for (let index = 0; index < slider.children.length; index++) {
                    const element = slider.children[index]
                    element.classList.add(style.item_slider)
                    // sliderRef.current.appendChild(element)
                }
                slider.className = style.slider
            }


        }
    },)


    const getWidth = () => {
        const widthChild = sliderRef.current.children[0].offsetWidth
        const cols = sliderRef.current.offsetWidth / widthChild
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
        sliderRef.current.scrollLeft = getWidth() * index
    }


    const arrowControl = (bool) => {
        if (bool == true) {
            if (current + 1 >= sliderRef.current.children.length) {
                sliderRef.current.scrollLeft = 0
                current = 0
            } else {
                current++
                sliderRef.current.scrollLeft += getWidth()
            }

        } else {
            if (current < 1) {
                sliderRef.current.scrollLeft = sliderRef.current.children.length * getWidth()
                current = sliderRef.current.children.length - 1
            } else {
                sliderRef.current.scrollLeft -= getWidth()
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
        const arrow_control_cont = carrusel_slider_Ref.current.querySelector("arrow_control")
        if(arrow_control_cont){

            arrow_control_cont.querySelector(".left_arrow_control").onclick = () => arrowControl(false)
            arrow_control_cont.querySelector(".right_arrow_control").onclick = () => arrowControl(true)
        }

        carrusel_slider_Ref.current.className = style.carrusel_slider

    }, [dotRef])


    return (
        <div ref={carrusel_slider_Ref} className={"hidden"}>

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





