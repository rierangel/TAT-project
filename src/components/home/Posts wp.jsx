import { useGql } from 'src/lib/Fetcher';
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function Posts() {
  const query = `
  query{
    posts(
      where:{
        categoryName: "noticia", 
        orderby:{field:DATE order:DESC}
        }
      first:9
    ){
      nodes {
        title
        slug
        date
        excerpt
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
  `
  const [posts, isLoading,isFetching, refetch] = useGql(query, "posts", "nodes")

  const [right, setRight] = useState()
  const [bottom, setBottom] = useState()

  useEffect(() => {
    refetch()
    if (!isLoading && posts) {
      setRight(posts.posts.nodes.filter((e, i) => i > 0 && i < 5))
      setBottom(posts.posts.nodes.filter((e, i) => i > 4))
    }
    console.log(posts)
  }, [isLoading, posts])

  right = []
  return (posts &&
    <>
      <div className="grid grid-cols-2 gap-6">
        {/* left */}
        <Link href={`/noticias/${posts.posts.nodes[0].date.split("-")[0]}/${posts.posts.nodes[0].slug}`}>
          <a className="h-auto flex flex-col  space-y-[12px] hover1 ">
            <div className="box w-[628px] h-[320px]">
              <img className='post max-w-[628px] max-h-[320px]' src={posts.posts.nodes[0].featuredImage ? posts.posts.nodes[0].featuredImage.node.mediaItemUrl : "/img/logo.png"} alt={posts.posts.nodes[0].title} />
            </div>
            <div className='text-clip overflow-hidden h-[224px]'>
              <h1 className='post' >{posts.posts.nodes[0].title}</h1>
              <p className='' dangerouslySetInnerHTML={{ __html: posts.posts.nodes[0].excerpt }}></p>
            </div>
          </a>
        </Link>

        {/* right */}
        <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[550px]  ">

          {right && right.map((e, i) => (!isLoading &&
            <Link href={`/noticias/${e.date.split("-")[0]}/${e.slug}`}>
              <a key={i} className="hover1">
                <div className="box w-[302px] h-[190px]">
                  <img className='post object-bottom max-w-[302px] max-h-[190px]' src={e.featuredImage ? e.featuredImage.node.mediaItemUrl : "/img/logo.png"} alt={e.title} />
                </div>
                <h3 className='mt-3'>{e.title}</h3>
              </a>
            </Link>
          ))}
        </div>

      </div>

      <div className="flex gap-6 mt-16 mb-20">
        {bottom && bottom.map((e, i) => (
          <Link key={i} href={`/noticias/${e.date.split("-")[0]}/${e.slug}`} >
            <a className='hover1 border2 p-9 rounded-xl w-1/4 '>
              <h3>{e.title}</h3>
            </a>
          </Link>
        ))}
      
      </div>
    </>

  )

}
