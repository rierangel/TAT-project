import Layer from "src/components/Layer";

export default function page({ data, more }) {
  return (
    <Layer>
      {/* {post && <NoticiaView data={post} more={posts && posts.posts.nodes.filter((e) => path !== e.slug)}/>} */}

      {false &&
        <h1 className='mb-9'>{data.title.rendered}</h1>
        // {/* <Content data={data.content.rendered} /> */}
      }

      <hr className='mb-20' />

      <div >
        <h1>Más Noticias</h1>
        <div className="flex gap-6 my-6">

          {false && more.map((e, i) => (
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




export async function getServerSideProps({params}) {
  const path = `${process.env.NEXT_PUBLIC_URL_BACKEND}/wp-json/wp/v2/posts?slug=${params.slug}`
  fetch(path, {
    method: "GET",
    headers: { 'Content-Type': 'application/json' },
  })

  return {
    props: {}, // will be passed to the page component as props
  }
}
