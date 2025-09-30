# Space Explorer Adventure Plan

## Game Concept
This is a simple space exploration adventure game that runs in the browser.The player is an astronaut traveling through space, making choices where to explore.The player makes choices that affect the storyline and reach different outcomes.
It demonstrates HTML, CSS and JavaScript skills.

## Storyline Overview
- Theme:  Space exploration and discovery.
- Goal: Explore the universe and uncover new mysteries.
- Starting Point: The player leaves Earth to begin their adventure.
- Choices: Each choice leads to a different branch of the story.   
- Endings: Alien technology, rare moon rocks, alien transmission, or a warp to another galaxy.

## Main Scenes and Choices
### Start Scene
- Explore the Moon -> leads to Moon base or moon rocks ending.
- Travel to Saturn -> leads to Saturn rings scene.
- Venture into Deep Space -> leads to drive choice.

### Moon Scene
- Explore alien base -> discover alien technology (success ending).
- Collect moon rocks -> return safely with rare samples (success ending).

### Saturn Scene
- tudy the rings -> discover rare minerals (success ending).
- Search nearby moon -> intercepted by alien signal (mystery ending).

### Deep Space Scene
- Activate warp drive -> warp beyond the galaxy (unknown ending).
- Stay on course -> lost in deep space (game over).

### Ending Scenes
- Alien Technology: Player finds advanced alien tech.
- Rare Moon Rocks: Player safely returns with unique samples.
-Alien Transmission: Player hears mysterious alien messages.
-Galaxy Warp: Player is launched beyond known space.
- Lost in Space: Player drifts endlessly in the void.
- Each ending allows the player to restart the game.

## Technical Breakdown
### index.html
- Structure of the game page.  
- Includes placeholders for story text and dynamic choice buttons.  

### styles.css 
- Dark space theme with readable buttons.  
- Focus on minimal, clean layout that supports readability.  

### script.js  
- Uses a questions[] array of objects to store scenes and choices.
- showQuestion() dynamically updates the story text and choices.
- nextQuestion() resets the game or moves to the next scene.

### DEBUGGING_ANALYSIS  
- Contains breakpoints screenshots and 'DEBUGGER_STEPS.md' to explain testing process.

## Debugging Plan
Use browser DevTools to set breakpoints in 'script.js' at:
   1. The start of showQuestion() to confirm question loading.
   2. Inside the answer button event handler to confirm correct choices.
   3. The end of showQuestion() to ensure the correct text and options display.
Test by clicking through all paths to verify each scene leads to the intended ending.

## Possible Extensions
- Add background images for Moon, Saturn and Deep Space.
- Include sound effects like rocket launch or alien signals.
- Expand with more planets and hidden endings.
- Track number of successful missions.




