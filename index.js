// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
const stringList = ['foo', 'bar'];
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2? The difference between the 2 is that counter1 is is function scoped and can only be called using the function countermaker.
 * 
 * 2. Which of the two uses a closure? How can you tell?c Counter1 uses closure as it has a return function inside which can only be accessed inside that function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? counter1 would be used when counting hits inside a game or calling the funciton to add 2 counts together from different data. Counter 2 would be go to just act as a regualar counter to be called into a set function.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){ 
  let runs = Math.floor(Math.random() *3);
  return runs;
}


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
// create function finalScore so it calls back inning
//add innings together
//return final score as an object

function finalScore(callback, index){
  let home = 0;
  let away = 0;
  const result = [];
  for(let i = 1; i <= index; i++){    
    home += callback();
    away += callback(); 
    result.push(`${i} inning: homeTeam ${home} - awayTeam ${away}`)
    }
   return result; //{"Home": home, "Away": away};
  }
console.log(finalScore(inning,9));
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */






function scoreboard(callback, callback1, index){
  return finalScore(callback1,index)
}
console.log(scoreboard(finalScore, inning,9));

