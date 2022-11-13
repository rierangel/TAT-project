import React from 'react'
import styles from './article.module.scss'

export default function TextBack({text, className}) {
  return (
    <article className={styles.article}  dangerouslySetInnerHTML={{ __html: text }} />
  )
}
