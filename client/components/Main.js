/* SpeechRecognition webkitSpeechRecognition*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scene, Entity} from 'aframe-react'
import { recognizeSpeech, checkAnswer, getCharacterPrompts } from '../utils'
import { FirstVendor, SecondVendor, ThirdVendor, Player, HomeScreen } from './index'
import AFRAME from 'aframe'

class Main extends Component {
  constructor(props) {
    super(props)
    this.listen = this.listen.bind(this)
  }

  listen(obj, options){
    return recognizeSpeech(obj, options)
  }

  render() {
    const { prompts, gameState, characters } = this.props
    let characterPrompts = {}
    if (characters.length && prompts.length) {
      characters.map(character => characterPrompts[character.id] = getCharacterPrompts(prompts, character.id))
    }
    return (
      <Scene
        id="scene"
        inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js"
        environment={{
          preset: 'forest',
          seed: 2,
          lighting: 'distant',
          lightPosition: {
            x: -0.110,
            y: 1.000,
            z: 0.330
          },
          fog: 0.8,
          ground: 'hills',
          groundYScale: 6.31,
          groundTexture: 'none',
          groundColor: '#2c441f',
          grid: 'none'
        }}
      >
        <Player wasd-controls-enabled="false" />
        <HomeScreen />
        {(gameState === 'loading' || gameState === 'game' ) ?
        <Entity>
          <FirstVendor
            listen={this.listen}
            checkAnswer={checkAnswer}
            firstPromptId={1}
            characterId={1}
            prompts={characterPrompts[1]}
          />
          <SecondVendor
            listen={this.listen}
            checkAnswer={checkAnswer}
            firstPromptId={8}
            characterId={2}
            prompts={characterPrompts[2]}

          />
          <ThirdVendor
            listen={this.listen}
            checkAnswer={checkAnswer}
            firstPromptId={17}
            characterId={3}
            prompts={characterPrompts[3]}
          />
        </Entity> : null }
      </Scene>
    )
  }
}

/**
 * Listen to an event.
 * When that event is emitted, emit an event on another entity.
 */
AFRAME.registerComponent('event-proxy', {
  schema: {
    listen: {default: ''},
    target: {type: 'selector'},
    emit: {default: ''}
  },

  update: function () {
    var data = this.data
    this.el.addEventListener(data.listen, function () {
      data.target.emit(data.emit)
    })
  }
})

export const mapState = ({ gameState, characters, prompts }) => ({ gameState, characters, prompts })

export default connect(mapState)(Main)
