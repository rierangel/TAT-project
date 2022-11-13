import Layer from "src/components/Layer";
import NoticiaList from "src/components/Layer/data_display/EntradasList";


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