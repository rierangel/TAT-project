import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'



export default function useGql(path, name="") {
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
    

    const { data, error, isLoading, refetch } = useQuery([name], async () => fetcher(path));
    const [res, setRes] = useState()

    useEffect(() => {
        if (!isLoading) {
            if (data) {
                setRes(data[0])                
            }           
        }
        refetch()
    }, [isLoading, data])


    return [ res, isLoading, refetch]
}
