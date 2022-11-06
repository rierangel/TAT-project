import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  // const imgs = document.getElementsByTagName("img")
  return (
    <Html className="dark">
      <Head>

        {/* <script dangerouslySetInnerHTML={{ __html: initialScript }}></script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// const SetUrlImg = () => {
//   return console.log("hello word");
// }


// const initialScript = `(function() {
// 	${SetUrlImg()}
// 	SetUrlImg();
// })()
// `;


export default Document