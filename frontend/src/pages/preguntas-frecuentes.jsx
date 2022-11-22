import { useEffect, useState } from "react";
import Layer from "src/components/Layer";
import Title from "src/components/Layer/Title";
import { fetcher } from "src/lib/Fetcher";
import ToggleList from 'src/lib/ToggleList'

export default function Page() {


    const [page, setPage] = useState()
    const [pageData, setPageData] = useState()
    useEffect(() => {
        // page
        fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/paginas/25`)
            .then(res => setPage(res))
            .catch(error => console.log(error))

        // data
        fetcher(`${process.env.NEXT_PUBLIC_URL_BACKEND}/nosotros/proguntas-frecuentes/`)
            .then(res => setPageData(res))
            .catch(error => console.log(error))
    }, [])
    console.log(pageData);

    return (
        <Layer>
            {page && <Title data={page[0]} />}




            <section className='mt-6 space-y-6 text-[16px] custom-list'>

                {pageData && pageData.map((v, i) => (
                        <div key={i} className='p-9 border1 rounded-xl'>
                            <ToggleList title={v.titulo}>
                                <div className="pt-4">
                                    <p>
                                        {v.text}
                                    </p>
                                </div>
                            </ToggleList>
                        </div>
                    ))}



            </section>

        </Layer>
    )
}
