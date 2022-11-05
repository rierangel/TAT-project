import Layer from "src/components/Layer";
import LandingPage from "src/components/home"
import { fetcher } from "src/lib/Fetcher";




export default function Home({data}) {
  

  return (
    <Layer>
      
      <LandingPage data={data} />
    </Layer>
  )
}


export async function getServerSideProps({ params }) {

  const path = `${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/1`
  const data = await fetcher(path)
  return { props: {data} }

}
