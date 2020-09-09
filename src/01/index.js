const elBox = document.querySelector('#box');

// Pure function that returns the next state,
// given the current state and sent event
function transition(state, event) {
  switch (
    state
    // Add your state/event transitions here
    // to determine and return the next state
  ) {
  }
}

// Keep track of your current state
let currentState = "inactive";

function send(event) {
  // Determine the next value of `currentState`
  currentState = transition(currentState, event);
  elBox.dataset.state = currentState;
}

let machine = {
  initialState: "inactive",
  states: {
    active: {
      on: {
        DEACTIVATE: "inactive"
      }
    },
    inactive: {
      on: {
        ACTIVATE: "active"
      }
    }
  }
}
function transition(state, event) {
  return machine.states[state]?.on?.[event] || state;
}
// function transition(state, event) {
//   switch (state) {
//     case "inactive":
//       switch (event) {
//         case "ACTIVATE":
//           return "active"
//       }
//       case ("active"):
//         switch(event) {
//           case "DEACTIVATE":
//             return "inactive";
//         }
//   }
//   return currentState;
// }

elBox.addEventListener('click', () => {
  // send a click event
  send(currentState === "active" ? "DEACTIVATE" : "ACTIVATE");
});
