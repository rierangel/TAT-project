import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

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
        console.log("FAIL FETCH TO PATH", path);
        return { data: error }
    }
}

export const Gql = async (query, vars = null) => {
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

export function useFetch(path, name = "", method) {

    // const {
    //     data,
    //     isLoading,
    //     refetch,
    //     isFetching } = useQuery([name], async () => fetcher(path, method), {
    //         refetchOnWindowFocus: false,
    //         enabled: false
    //     });

    const { data, isLoading, isFetching, refetch } = useQuery([name], async () => fetcher(path, method), {
        refetchOnWindowFocus: false,
        enabled: false 
      });


    const [res, setRes] = useState()

    useEffect(() => {
        if (!isLoading) {
            if (data) {
                setRes(data[0])
            }
        }

    }, [isLoading, data, isFetching])

    return [res, isLoading, isFetching, refetch]
}


export function useGql(query, name = "") {
    const { data, isLoading, isFetching, refetch } = useQuery([name], async () => Gql(query), {
        refetchOnWindowFocus: false,
        enabled: false 
      });

    const [res, setRes] = useState()
    useEffect(() => {
        if (!isLoading) {
            if (data.data) {
                setRes(data.data)
            }
        }
    }, [isLoading, data])
    return [res, isLoading, isFetching, refetch]
}
