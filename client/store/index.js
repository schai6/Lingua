import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import prompts from './reducers/prompts'
import currentPrompt from './reducers/currentPrompt'
import gameState from './reducers/gameState'
import vendorResponse from './reducers/vendorResponse'
import currentLanguage from './reducers/currentLanguage'
import languages from './reducers/languages'
import quests from './reducers/quests'
import currentQuest from './reducers/currentQuest'
import characters from './reducers/characters'
import currentCharacter from './reducers/currentCharacter'
import loading from './reducers/loading'

const reducer = combineReducers({
  prompts,
  currentPrompt,
  gameState,
  vendorResponse,
  languages,
  currentLanguage,
  quests,
  currentQuest,
  characters,
  currentCharacter,
  loading
})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './reducers/prompts'
export * from './reducers/currentPrompt'
export * from './reducers/gameState'
export * from './reducers/vendorResponse'
export * from './reducers/languages'
export * from './reducers/currentLanguage'
export * from './reducers/quests'
export * from './reducers/currentQuest'
export * from './reducers/characters'
export * from './reducers/currentCharacter'
export * from './reducers/loading'
