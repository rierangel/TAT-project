export const fetcher = async (path, method) => {
    try {
        const resApi = await fetch(path, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
        })
        const dataApi = await resApi.json()
        return dataApi
    } catch (error) {
        console.log("network error", error)

        return { data: error }
    }
}


export const Gql = async (query, vars = null) => {
    const bodyData = JSON.stringify({ query, vars })
    try {
        const resApi = await fetch("http://localhost/ttp/graphql", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: bodyData
        })
        const dataApi = resApi.json()
        return dataApi

    } catch (error) {
        console.log("network error", error)
        return false
    }

}

export async function getServerSideProps(context) {

    fetch()


    return { props: {}, }
}