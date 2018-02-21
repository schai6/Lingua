import React from 'react'
import { FirstVendor } from './index'
import { mapState, mapDispatch } from './VendorsContainer'
import { Entity } from 'aframe-react'
import enzyme from 'enzyme'
import { connect } from 'react-redux'
import { shallowWithStore } from 'enzyme-redux'
import { createMockStore } from 'redux-test-utils'
import { getPrompt } from '../store'
import Adapter from 'enzyme-adapter-react-16'

enzyme.configure({ adapter: new Adapter() })

describe("FirstVendor", () => {
  let props
  let store
  beforeEach(() => {
    props = {
      currentPrompt: {responses: []},
      vendorResponse: [],
      currentQuest: undefined,
      currentCharacter: 0,
      language: undefined,
      currentLanguage: undefined,
      correctAdjustPosition: undefined,
      promptAdjustPosition: undefined,
      hintAdjustPosition: undefined,
      responseAdjustPosition: undefined,
      matchCharacter: undefined,
      displayPromptResponses: undefined,
      listeningAdjustPosition: undefined,
      dispatch: ()=>{}
    }
    store = createMockStore(props)
  })

  describe('state', () => {
    it('receives correct props from store', () => {
      const expectedProps = props
      const ConnectedComponent = connect(mapState)(FirstVendor)
      const component = shallowWithStore(<ConnectedComponent />, store)
      expect(Object.keys(component.props()).sort()).toEqual(Object.keys(expectedProps).sort())
    })
  })

  describe('dispatch', () => {
    it('dispatches the correct actions', () => {
      const ConnectedComponent = connect(null, mapDispatch)(FirstVendor)
      const component = shallowWithStore(<ConnectedComponent />, store)
      component.props().setCurrentPrompt()
      expect(store.isActionDispatched(getPrompt())).toBe(true)
    })
  })

  describe('renders an A-frame react component', () => {
    let mockState
    beforeEach(() => {
      mockState = () => {
        return {
<<<<<<< HEAD
          prompts: true,
          currentPrompt: {responses: []},
=======
          currentPrompt: 'test',
>>>>>>> c89eaab66d746ebe25cbf44ad1f85b1e3785d43f
          vendorResponse: '',
          language: {
            nativeLang: 'en',
            learningLang: 'en',
            learningLangCode: 'en-US'
          },
          listen: ()=>{}
        }
      }
    })

    it('that is an Entity', () => {
      const ConnectedComponent = connect(mockState, mapDispatch)(FirstVendor)
      const component = shallowWithStore(<ConnectedComponent />, store)
      const entities = component.dive().dive().first()
      expect(entities.type().name).toBe('Entity')
    })

    it('that contains everything else that gets rendered', () => {
      const ConnectedComponent = connect(mockState, mapDispatch)(FirstVendor)
      const component = shallowWithStore(<ConnectedComponent />, store)
      const entities = component.dive().dive().find(Entity)
      const wrappingEntity = entities.first()
      expect(wrappingEntity.children().length).toEqual(component.dive().dive().children().length)
    })
  })
})
