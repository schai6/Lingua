import React from 'react'
import 'aframe'
import { Entity } from 'aframe-react'
import 'babel-polyfill'

const Woman = (props) => {
  const animation = props.matchCharacter ?
  `property: position;
    dir: alternate;
    loop: true;
    to: 0 0.05 0;`
  : null
  return (
    <Entity>
      <Entity
        id='second-vendor'
        class='clickable'
        events={{
          click: props.handleVendorClick
        }}
        animation={animation}
      >
        <Entity
          primitive='a-obj-model'
          id='woman'
          src='models/woman/model.obj'
          mtl='models/woman/materials.mtl'
          position={props.vendorPosition}
          rotation={props.vendorRotation}
        />
      </Entity>
      <Entity
        primitive='a-light'
        type='directional'
        color='#FFF'
        intensity={1}
        position={{ x: 2.5, y: 0.0, z: 0.0 }}
      />
    </Entity>
  )
}

export default Woman
