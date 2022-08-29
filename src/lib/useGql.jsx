import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'


const Gql = async (query, vars = null) => {
    const bodyData = JSON.stringify({ query, vars })//
    try {
        const resApi = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/graphql`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: bodyData
        })

        const dataApi = resApi.json()
        return dataApi


    } catch (error) {
        console.log("network error")
        return { data: error }
    }
}


export default function useGql(query, name) {

    const { data, error, isLoading, refetch } = useQuery(["posts"], async () => Gql(query));
    const [res, setRes] = useState(null)

    useEffect(() => {
        const string = `${name}`

        if (!isLoading) {
            if (data.data) {
                setRes(data.data[name].nodes)              
            }           
        }

        
        console.log(isLoading)
        refetch()
        console.log(isLoading)
    }, [data])


    return [ res, isLoading, refetch]
}
