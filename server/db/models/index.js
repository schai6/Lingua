const Quest = require('./quest')
const Character = require('./character')
const promptResponse = require('./promptResponse')
const Language = require('./language')
const Prompt = require('./prompt')
const Scene = require('./scene')
const User = require('./user')
const Response = require('./response')

User.belongsToMany(Language, { through: 'user_languages' })
Language.belongsToMany(User, { through: 'user_languages' })

User.belongsToMany(Scene, { through: 'user_scenes' })
Scene.belongsToMany(User, { through: 'user_scenes' })

Scene.belongsToMany(Quest, { through: 'scene_quests' })
Quest.belongsToMany(Scene, { through: 'scene_quests' })

Scene.belongsToMany(Character, { through: 'scene_characters' })
Character.belongsToMany(Scene, { through: 'scene_characters' })

Character.belongsToMany(Prompt, { through: 'character_prompts' })
Prompt.belongsToMany(Character, { through: 'character_prompts' })

Prompt.belongsToMany(Response, { through: promptResponse })
Response.belongsToMany(Prompt, { through: promptResponse })

module.exports = {
  Quest,
  Character,
  promptResponse,
  Language,
  Prompt,
  Scene,
  User,
  Response
}
