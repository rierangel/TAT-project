import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'




export default function useGql(query, name = "") {

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
            return false
        }
    }


    const { data, isLoading, refetch, isError, fetchStatus } = useQuery([name], async () => Gql(query));
    const [res, setRes] = useState()

    useEffect(() => {
        if (!isLoading) {
            if (data.data) {
                setRes(data.data)
            }
        }
        refetch()
    }, [isLoading, data])

    return [res, isLoading, refetch]

}
