// bll simulation

import {rerenderTree} from "../render";

let state = {
    thoughts: [
        {id: 1, thought: "I'm awake."},
        {id: 1, thought: "Let's go! Let's go! Let's go! Let's go! Let's go! Let's go!  Let's go! Let's go!"},
        {id: 2, thought: "Maybe do something?"},
        {id: 2, thought: "Maybe do something?!!!!"},
        {id: 3, thought: "Feel good"}
    ],
    characteristics: {
        agility : 7,
        strength : 8,
        intelligence: 7,
        luck: 9
    },
}


export let addThought = (text) => {

  let newText = {
      id: 4,
      thought: text
  };
  state.thoughts.push(newText);
  console.log(state.thoughts);
  rerenderTree(state);
}


export default state;