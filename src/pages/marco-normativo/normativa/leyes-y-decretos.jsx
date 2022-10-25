import React from 'react'
import Layer from 'src/components/Layer'
import FileList from 'src/components/FileList'

export default function index() {
  return (
    <Layer><FileList buscador={true}/></Layer>
  )
}
