const fetcher = async (path, method) => {
    try {
        const resApi = await fetch(path, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
        })
        const dataApi = await resApi.json()
        return dataApi
    } catch (error) {
        console.log("network error")
        return { data: error }
    }
  }