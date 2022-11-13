import { useEffect, useState } from "react";
import Layer from "src/components/Layer";
import { useFetch, useGql } from "src/lib/Fetcher";
import Link from "next/link";
import Content from 'src/components/entradas/Content'

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

export default function Page({ slug }) {

  const path = `${process.env.NEXT_PUBLIC_URL_BACKEND}/wp-json/wp/v2/posts?slug=${slug}`

  const [res, isLoading, isFetching, refetch] = useFetch(path, slug, "GET")


  const [posts, isLoadingPost, isFetchingPost, refetchPost] = useGql(query, "posts")
  const [MorePosts, setMorePosts] = useState()

  useEffect(() => {
    refetch()
    refetchPost()
    if (posts) {
      setMorePosts(posts.posts.nodes.filter((e) => e !== posts.posts.nodes[0]))
    }

  }, [res, posts, slug])




  return (
    <Layer>
      {/* {post && <NoticiaView data={post} more={posts && posts.posts.nodes.filter((e) => path !== e.slug)}/>} */}
      {res &&
        <>
          <h1 onClick={() => refetch()} className='mb-9'>{res.title.rendered}</h1>
          <Content data={res.content.rendered} />
        </>
      }

      <hr className='my-16' />

      <div >
        <h1>Más Noticias</h1>
        <div className="flex gap-6 my-6">

          {MorePosts && MorePosts.map((e, i) => (
            <Link key={i} href={`/noticias/${e.date.split("-")[0]}/${e.slug}`} >
              <a className='hover1' >
                <div className="w-[302px] h-[190px] mb-4 ">
                  <img className='cover rounded-lg'
                    src={e.featuredImage ? e.featuredImage.node.mediaItemUrl : "/img/logo.png"} alt={e.title} />
                </div>
                <h3 className='w-[90%] '>{e.title}</h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layer>
  )
}


export async function getServerSideProps({ params }) {

  return { props: { slug: params.slug } }
}