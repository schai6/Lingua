# Lingua

### An Immersive Virtual Reality Language Learning Web App

### Description:
Lingua is a language learning app built to address the shortcomings of the traditional language learning model. Many of the popular applications in language learning follow a model of prompting the user to simply read and translate. Lingua, however, immerses the user in a three dimensional world to leverage the learning advantage gained by conversing with a native speaker, and keeps the learning interesting by implementing a progressive user experience through a quest-reward based system.

## Developers:
* Leigh Blechman
* Samuel Chai
* Owen Hagerty

## Information for Developers:
### Setup/Module Installation:
1. Clone the repo
2. `npm install` the dependencies
3. In your terminal, create the Lingua postgres database with `createdb lingua`
4. `npm run seed` to seed the database
5. `npm run start-dev` to start the server and bundle. (Be patient - webpack takes about 30 seconds to bundle)
6. Head to localhost:5000 on Chrome or Firefox and make sure you have a working microphone. Accept use of your mic if prompted.

## Information for Users:
Either follow the "Information for Developers" steps above to run locally, or simply head to [our heroku app](https://lingua-learn.herokuapp.com "Lingua").

### How to Play:
The center circle is your cursor. Click and drag the screen to position your cursor and then click again to select. First click to sign in. Then select your desired language and click "Select" to move on to the choose quest screen. Select your quest. Once loading finishes, use the WASD keys or the arrow keys to move around. Click on a character to begin your conversation. Note, you may be prompted to enable your microphone. Given the prompt, speak one of the possible answer choices when the blue "Listening!" text is displayed. If pronounced correctly, the character will display its next prompt. If pronounced incorrectly, red text saying "I do not understand" will appear. If sound is not detected, then the "Listening!" text will disappear and you will have to click on the vendor again. After your second incorrect response, a hint will be displayed. After 5 incorrect responses, then the accuracy threshold will be reduced to allow you to progress through the conversation. Have fun, and don't miss the donut guy on the left!

