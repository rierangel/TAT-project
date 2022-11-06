import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  // const imgs = document.getElementsByTagName("img")
  return (
    <Html className="dark">
      <Head>
        <meta name="description" content="El Tribunal Administrativo Tributario cuenta con una estructura orgánica diseñada para cumplir con calidad y eficiencia todas las funciones que le asigna la ley, como institución autónoma e independiente.  Cada colaborador del tribunal contribuye con sus competencias a implementar la cultura organizacional y al logro de la misión y visión institucional." />
        <title>TAT | Tribunal Tributario</title>
        <script dangerouslySetInnerHTML={{ __html: initialScript }}></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

const SetUrlImg = () => {
  return console.log("hello word");
}


const initialScript = `(function() {
	${SetUrlImg()}
	SetUrlImg();
})()
`;


export default Document