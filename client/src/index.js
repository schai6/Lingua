import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import 'babel-polyfill';
import 'aframe-particle-system-component';
import 'aframe-environment-component'
// import  Main from '../components/MainScene'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      colorIndex: 0,
      spherePosition: { x: 0.0, y: 4, z: -10.0 }
    };
  };

  render() {
    return (
      <Scene
        environment={{
          preset: 'forest',
          seed: 2,
          lightPosition: { x: 0.0, y: 0.03, z: -0.5 },
          fog: 0.8,
          ground: 'hills',
          groundYScale: 6.31,
          groundTexture: 'none',
          groundColor: '#2c441f',
          grid: 'none'
        }}
      >
        <a-assests>
          <a-asset-item id="octo-obj" src="models/octo/ramenocto.obj"></a-asset-item>
          <a-asset-item id="octo-mtl" src="models/octo/ramenoctomaterials.mtl"></a-asset-item>
        </a-assests>
        <a-obj-model id="octo" src="#octo-obj" mtl="#octo-mtl">
        </a-obj-model>
        <Entity src="#octo" />
      </Scene>
    )
  };
};


ReactDOM.render(<Main />, document.getElementById('app'));

