import React from 'react'

export default function TextBack({text, className}) {
  return (
    <article className={className}  dangerouslySetInnerHTML={{ __html: text }} />
  )
}
