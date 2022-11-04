import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import style from './style.module.scss'


// // document.getElementById("").classList.contains

export default function SliderCarrusel({ children, dot_control }) {

    const caruselRef = useRef(null)
    const [slider, setSlider] = useState(null)
    const [current, setCurrent] = useState(0)
    const dotRef = useRef()

    const [cols, setCols] = useState(1)

    const getWidth = () => {
        const slider = caruselRef.current.querySelector(".slider_container")

        const widthChild = slider.children[0].offsetWidth
        const cols = slider.offsetWidth / widthChild
        console.log("cols", cols);
        return widthChild * cols
    }


    // let current = 0


    const reSetDot = (i) => {
        for (let dot of dotRef.current.children) {
            dot.className = ""
        }
        dotRef.current.children[i].classList.add(style.active)
    }

    const handleDot = (e) => {
        const slider = caruselRef.current.querySelector(".slider_container")
        const index = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
        reSetDot(index)
        slider.scrollLeft = getWidth() * index
        setCurrent(index)

    }


    const arrowControl = (bool) => {
        const slider = caruselRef.current.querySelector(".slider_container")
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
        if (caruselRef !== null) {
            setSlider(caruselRef.current.querySelector(".slider_container"))
            if (slider !== null) {
                for (let index = 0; index < slider.children.length; index++) {
                    const element = slider.children[index]
                    element.classList.add(style.item_slider)
                }
                slider.classList.add(style.slider)
                if (slider.classList.contains(style.slider)) {
                    caruselRef.current.className = style.carrusel_slider
                }
            }
        }
        const arrow_control_cont = caruselRef.current.querySelector(".arrow_control")
        if (arrow_control_cont) {
            arrow_control_cont.querySelector(".left_arrow_control").onclick = () => arrowControl(false)
            arrow_control_cont.querySelector(".right_arrow_control").onclick = () => arrowControl(true)
        }
    },[])


    useEffect(() => {
        if (dotRef.current.children[0] !== undefined) {
            reSetDot(current)
        }
    }, [current])



    return (
        <div ref={caruselRef} className={style.hidden} >

            {children}


            {/* dotControl */}
            {dot_control &&
                <div ref={dotRef} className={style.dot_control}>
                    {caruselRef.current != undefined && [...Array(caruselRef.current.querySelector(".slider_container").offsetWidth, caruselRef.current.querySelector(".slider_container").children[0].offsetWidth).keys()].map((e, i) => (
                        <>
                            {console.log()}

                            <div key={i} onClick={(e) => handleDot(e)} />
                        </>
                    ))}
                </div>
            }
        </div>
    )
}





