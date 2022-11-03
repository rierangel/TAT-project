

const path = `${process.env.NEXT_PUBLIC_URL_BACKEND}/wp-json/wp/v2/posts?slug=${"void"}`


export default async  function handler(req, res) {

    const resApi  = await fetch(path)
    const data = await resApi.json()


    res.status(200).json({ name: 'John Doe' })
  }
  