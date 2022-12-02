import { useEffect, useRef } from 'react'


/**
 * 
 * @param children  Contenido
 * @param ID IdRequired for useRef
 * @param item useSate
 * @param setItem SetUsestate
 * @returns 
 */
export default function DropImg({ children, item, setItem }) {


    function getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setItem(reader.result.split(",")[1]);

            // setItem(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }


    const itemRef = useRef()

    const handleDrop = (e) => {
        e.preventDefault()
        if (e.dataTransfer.items) {
            e.dataTransfer.items.clear();
        } else {
            e.dataTransfer.clearData();
        }
        const file = e.dataTransfer.items[0].getAsFile()
        itemRef.current.append(file)
        getBase64(file)
        setItem(file)
    }




    return (

        <label className='' onDrop={(e) => handleDrop(e)} onDragOver={(e) => { e.preventDefault() }} >

            {item ?
                <div className='cursor-pointer items-center flex justify-center flex-col w-1/4  mx-auto p-5'>
                    <div className="w-full relative">
                        <svg className='w-4/5' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 11V11.5H14C14.1989 11.5 14.3897 11.579 14.5303 11.7197C14.671 11.8603 14.75 12.0511 14.75 12.25C14.75 12.4489 14.671 12.6397 14.5303 12.7803C14.3897 12.921 14.1989 13 14 13H13V13.75C13 13.9489 12.921 14.1397 12.7803 14.2803C12.6397 14.421 12.4489 14.5 12.25 14.5C12.0511 14.5 11.8603 14.421 11.7197 14.2803C11.579 14.1397 11.5 13.9489 11.5 13.75V10.25C11.5 10.0511 11.579 9.86032 11.7197 9.71967C11.8603 9.57902 12.0511 9.5 12.25 9.5H14.25C14.4489 9.5 14.6397 9.57902 14.7803 9.71967C14.921 9.86032 15 10.0511 15 10.25C15 10.4489 14.921 10.6397 14.7803 10.7803C14.6397 10.921 14.4489 11 14.25 11H13ZM2 7.75V2.75C2.00164 2.41899 2.13387 2.102 2.36793 1.86793C2.602 1.63387 2.91899 1.50164 3.25 1.5H9.75C9.9487 1.50152 10.1391 1.57992 10.2812 1.71875L13.7812 5.21875C13.9201 5.36091 13.9985 5.5513 14 5.75V7.75C14 7.94891 13.921 8.13968 13.7803 8.28033C13.6397 8.42098 13.4489 8.5 13.25 8.5C13.0511 8.5 12.8603 8.42098 12.7197 8.28033C12.579 8.13968 12.5 7.94891 12.5 7.75V7H9.25C9.05109 7 8.86032 6.92098 8.71967 6.78033C8.57902 6.63968 8.5 6.44891 8.5 6.25V3H3.5V7.75C3.5 7.94891 3.42098 8.13968 3.28033 8.28033C3.13968 8.42098 2.94891 8.5 2.75 8.5C2.55109 8.5 2.36032 8.42098 2.21967 8.28033C2.07902 8.13968 2 7.94891 2 7.75ZM10 3.5625V5.5H11.9375L10 3.5625ZM10.5 12C10.5 12.663 10.2366 13.2989 9.76777 13.7678C9.29893 14.2366 8.66304 14.5 8 14.5H7C6.80109 14.5 6.61032 14.421 6.46967 14.2803C6.32902 14.1397 6.25 13.9489 6.25 13.75V10.25C6.25 10.0511 6.32902 9.86032 6.46967 9.71967C6.61032 9.57902 6.80109 9.5 7 9.5H8C8.66304 9.5 9.29893 9.76339 9.76777 10.2322C10.2366 10.7011 10.5 11.337 10.5 12ZM9 12C9 11.7348 8.89464 11.4804 8.70711 11.2929C8.51957 11.1054 8.26522 11 8 11H7.75V13H8C8.26522 13 8.51957 12.8946 8.70711 12.7071C8.89464 12.5196 9 12.2652 9 12ZM5.25 11.5C5.24835 12.0299 5.03711 12.5377 4.66239 12.9124C4.28768 13.2871 3.77993 13.4984 3.25 13.5H3V13.75C3 13.9489 2.92098 14.1397 2.78033 14.2803C2.63968 14.421 2.44891 14.5 2.25 14.5C2.05109 14.5 1.86032 14.421 1.71967 14.2803C1.57902 14.1397 1.5 13.9489 1.5 13.75V10.25C1.5 10.0511 1.57902 9.86032 1.71967 9.71967C1.86032 9.57902 2.05109 9.5 2.25 9.5H3.25C3.77993 9.50165 4.28768 9.71289 4.66239 10.0876C5.03711 10.4623 5.24835 10.9701 5.25 11.5ZM3.75 11.5C3.75 11.3674 3.69732 11.2402 3.60355 11.1464C3.50979 11.0527 3.38261 11 3.25 11H3V12H3.25C3.38261 12 3.50979 11.9473 3.60355 11.8536C3.69732 11.7598 3.75 11.6326 3.75 11.5Z" fill="#FF3737" />
                        </svg>

                    </div>
                    <h4 className=''><span className='span'>Click para editar </span></h4>
                </div>
                :
                <>
                    {children}
                </>
            }
            <div className='flex justify-end'>
                <input required accept="application/pdf" ref={itemRef} onChange={e => itemRef.current.files[0] ? getBase64(itemRef.current.files[0]) : setItem(itemRef.current.files[0])}
                    className='border border- required:border-red-500 invalid:border-red-500' type="file" name="" />
            </div>
        </label>


    )
}