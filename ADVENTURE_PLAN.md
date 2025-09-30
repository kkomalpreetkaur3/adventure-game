# Space Explorer Adventure Plan

## Game Concept
This is a simple space exploration adventure game that runs in the browser.The player is an astronaut exploring a mysterious alien planet. The player makes choices that affect the storyline and reach different outcomes.
It demonstrates HTML, CSS and JavaScript skills.

## Storyline Overview
- Theme:  Space exploration on an alien planet.
- Goal: Survive the planet and find a spaceship to escape.
- Starting Point: The player lands on the alien planet and must choose which path to explore first.  
- Choices: Each choice leads to a different branch of the story.   
- Endings: Safe escape, trapped by aliens, or discover alien treasure.   

## Main Scenes and Choices
### Start Scene
- Explore the cave -> leads to cave scene.  
- Explore the crater -> leads to crater scene.

### Cave Scene
- Touch the glowing crystal -> treasure ending.  
- Leave the crystal -> alien ambush (bad ending). 

### Crater Scene
- Investigate alien symbols -> alien ambush (bad ending).  
- Retreat to spaceship -> safe escape ending.

### Treasure Scene
- Player finds powerful alien artifact -> success ending.  
- Option to play again -> returns to start scene.  

### Alien Ambush Scene
- Aliens trap the player -> game over.  
- Option to play again -> returns to start scene.

### Safe Zone Scene
- Player retreats to spaceship safely -> success ending.  
- Option to play again -> returns to start scene.

## Technical Breakdown
### index.html
- Structure of the game page.  
- Includes placeholders for story text and dynamic choice buttons.  

### styles.css 
- Dark space theme with readable buttons.  
- Focus on minimal, clean layout that supports readability.  

### script.js  
- Stores game scenes and choices as objects.  
- Dynamically updates story text and choice buttons on user interaction.  
- Uses 'loadScene(sceneName)' function to manage navigation between story paths.  

### DEBUGGING_ANALYSIS  
- Contains breakpoints screenshots and 'DEBUGGER_STEPS.md' to explain testing process.

## Debugging Plan
Use browser DevTools to set breakpoints in 'script.js' at:
  1. Start of 'loadScene' function.
  2. Inside the button onclick event.
  3. End of 'loadScene' to verify buttons are correctly created.
- Inspect variables like 'sceneName' and 'scene.text' to ensure correct story progression.  
- Play through all paths to confirm each choice leads to the intended outcome.  

## Possible Extensions
- Add images for each scene (crater, cave, spaceship).
- Include background music or sound effects for choices.
- Add more storybranches with multiple hidden endings.
- Track player choices for achievements or score.





