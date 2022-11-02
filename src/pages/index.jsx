import Layer from "src/components/Layer";
import LandingPage from "src/components/home"
import { fetcher } from "src/lib/Fetcher";




export default function Home({data}) {
  console.log(data);
  return (
    <Layer>

      <LandingPage data={data} />
      

    </Layer>
  )
}


export async function getServerSideProps({ params }) {

  const data = await fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/1`)
 
  return { props: {data} }

}
