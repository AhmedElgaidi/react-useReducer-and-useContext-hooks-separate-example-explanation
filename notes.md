# React state mangement using context API

## What is Global state?
- The state that you make globally available for any component in the component tree (access that state) without have to prop drill and that's very usefull especially when we have big tree with many components and many nested components in them and so on.
- When we talk about context as a global state, we basically create a component which is this context component and we wrap this component around our entire application component (App component, our root component of our tree components)
- This context component has access to the global state and manages it, so this makes all the children components in our tree component have access to the gobal state without need of prop drilling and that's reallly good if the tree is big and nested, It makes the mangement a lot easier than in the case of prop drilling.

## There are two hooks (useReducer, useContext) that we need to understand when dealling with the context componet as a global state

### useReducer hook for state mangement:
- useReducer hook is just like useState hook that manges states in a component, but it's really simple in state mangement (changing or binding in an input element and so on, not like useReducer())
- useReducer() hook is for complex state mangement, for those challenging ones, especially when you want to do more changes with one different action.
- usereducer hook we use it by destructuring the useReducer() after importing it from 'React' as follows:

// (1) our reducer function (do different actions)
const reducerFunction = (state, action) => {
    // we usually use switch instead of using if conditions to make code cleaner
    switch(action.type) {
        case 'increament: {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case 'decrement: {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case 'initCount': {
            return {
                ...state,
                count: action.payload
            }
        }
        // if none of these cases is defined
        default:
            return state;
    }
};

// (2) Our intialized state
const initalState = {
    count: 0
}

// (3) destructure it
const [input, setInput] = useState('');
const [state, dispatch] = useReducer(reducerFuntion, initial state);

// (4) Now we can bind the dispatch function in our component elments as follows:
// Note: we can pass the action type to dispatch function and we can also pass payload object that we can do a certain action for it in our reducerFunction
<p>{state}</p>
<button onClick={() => dispatch({type: 'increment'})}>increment</button>
<button onClick={() => dispatch({type: 'decrement'})}>decrement</button>
<input/>
// here we are passing the input elment value to the input state and then passing it as a payload to this button
<button onClick={() => dispatch({type: 'initCount', paload: input})}>iniate count</button>

### useContext hook for state mangement:
- is a way of sharing data (make certain states globals, so we can access them from other different tree components). So userReducer is for manipulating state, while useContext is used to be wrapped around all the components that need to access that specific state.
- It's common to create context folder and put there all the states we want to share (make many files as we want).