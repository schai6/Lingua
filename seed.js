const {
  db,
  Item,
  Language,
  Prompt,
  Scene,
  User,
  Response
} = require('./server/db')

const items = []
const prompts = [
  {text: 'Hello, how are you?'},
  {text: 'Do you want to buy a cat?'},
  {text: 'Do you want a nice ham? It\'s very dry.'},
  {text: 'How about some kidneys?'},
  {text: 'Are you a cop?'}
]
const responses = [
  {text: 'I am a goose', isCorrect: false, promptId: 1},
  {text: 'You are a tasty muffin', isCorrect: false, promptId: 1},
  {text: 'I\'m fine, thanks', isCorrect: true, promptId: 1},
  {text: 'I want to buy a dog', isCorrect: false, promptId: 2},
  {text: 'I love bananas', isCorrect: false, promptId: 2},
  {text: 'I want to buy a cat', isCorrect: true, promptId: 2},
  {text: 'I am a vegetarian', isCorrect: false, promptId: 3},
  {text: 'No, my cousin is a pig', isCorrect: false, promptId: 3},
  {text: 'I love dry ham', isCorrect: true, promptId: 3},
  {text: 'I want to purchase a foot', isCorrect: false, promptId: 4},
  {text: 'Are they tasty?', isCorrect: false, promptId: 4},
  {text: 'Please, you can never have too many kidneys', isCorrect: true, promptId: 4},
  {text: 'I am a parrot', isCorrect: false, promptId: 5},
  {text: 'I am a policeman', isCorrect: false, promptId: 5},
  {text: 'I am not a policeman', isCorrect: true, promptId: 5}
]
const languages = [
  {name: 'Spanish', code: 'es-419', google: 'es'},
  {name: 'French', code: 'fr-FR', google: 'fr'},
  {name: 'German', code: 'de-DE', google: 'de'},
  {name: 'Italian', code: 'it-IT', google: 'it'},
  {name: 'Korean', code: 'ko-KR', google: 'ko'}
]

function addPrompts(prompts) {
  return prompts.forEach((prompt) => {
    Prompt.create(prompt)
  })
}

function addResponses(responses) {
  return responses.forEach((response) => {
    Response.create(response)
  })
}

function addLanguages(languages) {
  return languages.forEach((language) => {
    Language.create(language)
  })
}


function seed(prompts, responses, languages) {
  return Promise.all([addPrompts(prompts), addResponses(responses), addLanguages(languages)])
}


// scenes.forEach((scene) => {
//   Scene.create(scene)
// })

// users.forEach((user) => {
//   User.create(user)
// })

db.sync({force: true})
  .then(() => {
    console.log('Seeding database')
    return seed(prompts, responses, languages)
  })
  .then(() => console.log('Seeding successful'))
  .catch(err => {
    console.error('Error while seeding')
    console.error(err.stack)
  })
  .finally(() => {
    db.close()
    return null
  })