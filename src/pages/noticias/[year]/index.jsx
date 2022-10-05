import Layer from "src/components/Layer";
import Noticia from "src/components/noticia";

export default function Page({slug}) {
  return (
    <Layer>
        <Noticia slug={slug}/>
    </Layer>
  )
}



export async function getServerSideProps({ params }) {
  return { props: { slug: params.year } }
}