import Layer from "src/components/Layer";
import LandingPage from "src/components/LandingPage"

export default function Home() {

  return (
    <Layer>
      <LandingPage />
    </Layer>
  )
}


export async function getServerSideProps({ params }) {

  // const path = `${process.env.NEXT_PUBLIC_URL_BACKEND}/wp-json/wp/v2/posts?slug=${"void"}`

  // const res = await fetch("http://127.0.0.1:8000/tat/wp-json/wp/v2/posts?slug=void")
  // const data = await res.json()
 
  const query =  `query{
    posts{
      nodes {
        slug
        date
      }
    }
  }`
  fetch("http://127.0.0.1:80/ttp/graphql", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({query})
  })
    .then(res => res.json())
    .then(res => console.log(res))

  return { props: {}, }
}
