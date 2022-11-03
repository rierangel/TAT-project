import React from 'react'

export default function ImgBack({src, alt, className}) {

  return (
    <img src={`${process.env.NEXT_PUBLIC_URL_BACKEND}${src}`} alt={alt} className={className} />
  )
}
