import React from 'react'

export default function ImgBack({src, alt, className}) {

  return (
    // <img src={`${process.env.NEXT_PUBLIC_URL_BACKEND}${src}`} alt={alt} className={className} />
    <img src={`https://tatsite.arasait.com${src}`} alt={alt} className={className} />
  )
}
