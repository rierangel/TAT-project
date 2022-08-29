import useGql from 'src/lib/useGql';
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
  const [posts, isLoading, refetch] = useGql(query, "posts", "nodes")

  const [first, setFirst] = useState()
  const [second, setSecond] = useState()

  useEffect(() => {
    if (!isLoading && posts) {
      setFirst(posts.posts.nodes[0])
      setSecond(posts.posts.nodes.filter((e) => e !== posts.posts.nodes[0]))
    }
  }, [isLoading, posts])
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* left */}
      {first &&
        <Link href={`/noticias/${first.date.split("-")[0]}/${first.slug}`}>
          <a className="h-auto flex flex-col  space-y-[12px] hover1 ">
            <div className="box w-[628px] h-[320px]">
              <img className='post max-w-[628px] max-h-[320px]' src={first.featuredImage ? first.featuredImage.node.mediaItemUrl : "/img/logo.png"} alt={first.title} />
            </div>
            <div className='text-clip overflow-hidden h-[224px]'>
              <h1 className='post' >{first.title}</h1>
              <p className='' dangerouslySetInnerHTML={{ __html: first.excerpt }}></p>
            </div>
          </a>
        </Link>
      }

      {/* right */}
      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[550px]  ">
        {second && second.map((e, i) => (!isLoading &&
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
  )
}
