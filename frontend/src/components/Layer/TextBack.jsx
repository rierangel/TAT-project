import React, { useRef } from 'react'
import styles from './article.module.scss'

export default function TextBack({ text, className }) {

  const articleRef = useRef()
  // document
  if (articleRef.current) {

    for (let index = 0; index < articleRef.current.getElementsByTagName("span").length; index++) {
      const element = articleRef.current.getElementsByTagName("span")[index];
      element.style = "null"
    }
  }

  return (
    <article ref={articleRef} className={styles.article} dangerouslySetInnerHTML={{ __html: text }} />
  )
}
