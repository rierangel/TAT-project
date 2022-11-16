import React, { useEffect, useState } from 'react'
import Layer from 'src/components/Layer'
import Tramites from 'src/components/tramites'
import { fetcher } from "src/lib/Fetcher";


export default function Page() {

    const path = `${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/2`
    const [data, setData] = useState()
  
    useEffect(() => {
       fetcher(path)
       .then(res=>setData(res))
       .catch(error=>console.log(error))
  
    }, [])

    return (
        <Layer>
            {data && 
            <Tramites data={data} />
            }
        </Layer>
    )
}

// export async function getServerSideProps({ params }) {

//     const path = `${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/2`
//     const data = await fetcher(path)
//     return { props: {data} }
  
//   }
  