import React from 'react'
import Layer from 'src/components/Layer'
import Tramites from 'src/components/tramites'
import { fetcher } from "src/lib/Fetcher";


export default function tramites() {

    return (
        <Layer>
            {/* <Tramites data={data} /> */}
        </Layer>
    )
}

// export async function getServerSideProps({ params }) {

//     const path = `${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/2`
//     const data = await fetcher(path)
//     return { props: {data} }
  
//   }
  