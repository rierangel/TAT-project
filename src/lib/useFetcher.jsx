import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'



export default function useGql(path, name = "") {
    const fetcher = async (path) => {
        try {
            const resApi = await fetch(path, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            const dataApi = await resApi.json()
            return dataApi
        } catch (error) {
            console.log("network error")
            return { data: error }
        }
    }


    const {
        data,
        error,
        isLoading,
        refetch,
        isRefetching,
        isFetching } = useQuery([name], async () => fetcher(path), {
            refetchOnWindowFocus: false,
            enabled: false
        });


    const [res, setRes] = useState()

    useEffect(() => {
        refetch()

        if (!isLoading) {
            if (data) {
                setRes(data[0])
            }
        }

    }, [isLoading, data])

    return [res, isLoading, isFetching, refetch]
}
