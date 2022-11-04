import Layer from "src/components/Layer";

import NoticiaList from "src/components/noticias/NoticiaList";
import SliderCarrusel from "src/components/noticias/CarruselNoticias";

import { fetcher } from "src/lib/Fetcher";

import Title from 'src/components/Layer/Title';
import QueryLayer from 'src/components/Layer/QueryLayer';



export default function page({ page, datalist }) {


  const NoticiasListQuery = QueryLayer(NoticiaList, datalist, true)
  return (
    <Layer>


      <SliderCarrusel />


      <hr className='my-12 invisible' />
      <Title data={page[0]} />

      <NoticiasListQuery/>

      {/* {datalist &&
        <NoticiasListQuery />
      } */}
    </Layer>
  )
}


export async function getServerSideProps({ params }) {

  const page = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/11`)
  const datalist = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/noticias/`)

  return { props: { page, datalist } }

}
