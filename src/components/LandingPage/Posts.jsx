
import styles from './styles.module.scss'
export default function Posts() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col h-[628px] space-y-[12px]">

        <div className={styles.img}>
          <img src="/img/post/post1.png" alt="" />
        </div>
        <h1 >Lorem ipsum dolor sit amet consectetur.</h1>
        <p  >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nihil dolores rem eligendi, doloremque, nulla odio aut assumenda repudiandae enim eveniet asperiores nesciunt tempore aperiam? Exercitationem nostrum voluptates pariatur! Facere.
          Porro ut quo aperiam. Odit, vero cumque. Dicta tempora earum iste accusamus culpa maxime fugiat, itaque voluptate quaerat facilis in tempore quo exercitationem, laudantium repellat iusto? Placeat quam facilis doloremque!
        </p>

      </div>

      <div className="grid grid-cols-2 gap-6 h-[550px] ">

        <div className="">
          <div>
            <img src="/img/post/post2.png" alt="" />
          </div>
          <h2 className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </div>

        <div className="">
          <div>
            <img src="/img/post/post2.png" alt="" />
          </div>
          <h2 className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing eliipsum dolor sit amet consectetur adipisicing elit.</h2>
        </div>

        <div className="">
          <div>
            <img src="/img/post/post2.png" alt="" />
          </div>
          <h2 className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </div>
        <div className="">
          <div>
            <img src="/img/post/post2.png" alt="" />
          </div>
          <h2 className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </div>
       

      </div>
    </div>
  )
}
