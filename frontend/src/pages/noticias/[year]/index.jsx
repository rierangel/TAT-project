import Layer from "src/components/Layer";
import NoticiaList from "src/components/noticias/NoticiaList";


export default function Page({slug}) {
  return (
    <Layer>
        <NoticiaList slug={slug}/>
    </Layer>
  )
}



export async function getServerSideProps({ params }) {
  return { props: { slug: params.year } }
}