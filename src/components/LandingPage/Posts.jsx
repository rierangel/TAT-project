import styles from './styles.module.scss'


export default function Posts() {


  const cont = [...Array(4).keys()];

  return (
    <div className="grid grid-cols-2 gap-6">

      <div className="flex flex-col  space-y-[12px] hover1 ">

        <div className={styles.posts}>
          <img src="/img/post/post1.png" alt="" />
        </div>
        <h1 className='post' >Comunicado cierre Sede Central del TAT en Agosto de 2022</h1>
        <p  >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nihil dolores rem eligendi, doloremque, nulla odio aut assumenda repudiandae enim eveniet asperiores nesciunt tempore aperiam? Exercitationem nostrum voluptates pariatur! Facere.
          Porro ut quo aperiam. Odit, vero cumque. Dicta tempora earum iste accusamus culpa maxime fugiat, itaque voluptate quaerat facilis in tempore quo exercitationem, laudantium repellat iusto? Placeat quam facilis doloremque!
        </p>

      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[550px]  ">

        {cont.map((e, i) => (          
          <div className="hover1">
            <div className={styles.posts}>
              <img src="/img/post/post2.png" alt="" />
            </div>
            <h3 className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
        ))}



      </div>
    </div>
  )
}
