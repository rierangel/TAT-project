import { useRef } from 'react'


/**
 * 
 * @param children  Contenido
 * @param ID IdRequired for useRef
 * @param item useSate
 * @param setItem SetUsestate
 * @returns 
 */
export default function DropImg({ children, item, setItem }) {


    const itemRef = useRef()
    // get drop iten
    /**
     * @param {current} e 
     */
    const handleDrop = (e) => {
        e.preventDefault()
        if (e.dataTransfer.items) {
            e.dataTransfer.items.clear();
        } else {
            e.dataTransfer.clearData();
        }
        const file = e.dataTransfer.items[0].getAsFile()
        itemRef.current.append(file)
        setItem(file)
    }

    return (
      
            <label onDrop={(e) => handleDrop(e)} onDragOver={(e) => { e.preventDefault() }} >
                <input ref={itemRef} onChange={e => setItem(itemRef.current.files[0])} className='hidden' type="file" name="" />
                {item ?
                    <>
                        <div className='flex justify-center'>
                            <img src={URL.createObjectURL(item)} alt=""  className='opacity-50 object-contain'/>
                        </div>
                    </>
                    :
                    <>
                        {children}
                    </>
                }

            </label>
      

    )
}