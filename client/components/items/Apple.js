import React from 'react'
import 'aframe'
import { Entity } from 'aframe-react'
import 'babel-polyfill'

const Apple = () => {
  return (
    <Entity
      id="first-vendor"
    >
      <Entity>
        <a-asset-item
          id="apple-obj"
          src="models/items/apple/model.obj" />
        <a-asset-item
          id="apple-mtl"
          src="models/items/apple/materials.mtl" />
      </Entity>
      <a-obj-model
        id="apple"
        src="#apple-obj"
        mtl="#apple-mtl"
        position="0 1.5 0"
        rotation="0 0 0"
      />
      <Entity
        primitive="a-light"
        type="directional"
        color="#FFF"
        intensity={1}
        position={{ x: 2.5, y: 0.0, z: 0.0 }}
      />
    </Entity>
  )
}

export default Apple
