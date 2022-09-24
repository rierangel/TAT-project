import { useRef } from 'react'

export default function useScrollSlider() {
    const scrollSliderRef = useRef()
    
    const handleControlSlider = (bool) => {
        const child_with = scrollSliderRef.current.children[0].offsetWidth
        if (bool) {
            console.log("here");
            scrollSliderRef.current.scrollLeft += child_with
        } else {
            console.log("here2");
            scrollSliderRef.current.scrollLeft -= child_with
        }
    }

    return {scrollSliderRef, handleControlSlider}
}
