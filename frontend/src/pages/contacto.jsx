import Contact from 'src/components/contacto'
import Oficinas from 'src/components/contacto/oficinas'
import Layer from 'src/components/Layer'

export default function contacto() {


  return (
    <Layer>

    <Contact/>

    <hr className='my-16 invisible'/>
    <Oficinas/>
    </Layer>
  )
}
