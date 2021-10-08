// bll simulation

let rerenderTree = () => {}

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
    textarea: 'lorem',
}

export const addThought = () => {
  let newText = {
      id: 4,
      thought: state.textarea
  };
  state.thoughts.push(newText);
  state.textarea = '';
  console.log(state.thoughts);
  rerenderTree();
}

export const changeTextarea = (symbol) => {
    state.textarea = symbol;
    rerenderTree();
    console.log(state.textarea);

}

export const subscribe = (observer) => {
    rerenderTree = observer;
}

export default state;