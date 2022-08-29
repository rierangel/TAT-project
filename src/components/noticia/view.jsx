import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useFetcher from 'src/lib/useFetcher'
import useGql from 'src/lib/useGql'
import Content from './Content'

export default function () {
  const rute = useRouter()

  const path = `${process.env.NEXT_PUBLIC_URL_BACKEND}/wp-json/wp/v2/posts?slug=${rute.query.view}`
  const [post, isLoading, refetch] = useFetcher(path)



  const query = `
  query{
    posts(
      where:{
        categoryName: "noticia", 
        orderby:{field:DATE order:DESC}
        }
      first:5
    ){
      nodes {
        title
        slug
        date
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
  `
  const [posts] = useGql(query, "posts")

  const [More, setMore] = useState()

  useEffect(() => {
    if (posts) {
      setMore(posts.posts.nodes.filter((e) => rute.query.view !== e.slug))
    }
  }, [posts])

  const cont = [...Array(4).keys()]
  return (
    <>

      {!isLoading && post && <>
        <h1 className='mb-9'>{post.title.rendered}</h1>

        <Content data={post.content.rendered} />
      </>
      }

      <hr className='mb-20' />


      <div >
        <h1>Más Noticias</h1>
        <div className="flex gap-6 my-6">

          {More && More.map((e, i) => (
            <div className='hover1' key={i}>
              <div className="w-[302px] h-[190px] mb-4 ">
                <img className='cover rounded-lg'
                  src={e.featuredImage ? e.featuredImage.node.mediaItemUrl : "/img/logo.png"} alt={e.title} />
              </div>

              <h3 className='w-[90%] '>{e.title}</h3>

            </div>
          ))}
        </div>
      </div>

    </>

  )
}
