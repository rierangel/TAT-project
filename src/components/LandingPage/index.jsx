import Convocatoria from './Convocatoria'
import Giras from './Giras'
import LastResolutions from './LastResolutions'
import Otros from './Otros'
import Paginas from './Paginas'
import Posts from './Posts'

export default function Index() {
  return (
    <>
      <Posts />
      <Giras />
      <Convocatoria />
      <LastResolutions />
      <Paginas />
      {/* <Otros /> */}
    </>
  )
}
