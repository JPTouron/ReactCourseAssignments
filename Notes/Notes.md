v# JavaScript Review:

## Tooling

    jsbin.com

## Let & Const

    Let instead of var

## Arrow functions

    const myfunc = ([argument]) => {...}
    examples:
    const myfunc = (name) => {...}
    const myfunc = name => {...}
    const myfunc = (a,b) => {...}
    const myfunc = () => {...}
    usage:
    myfunc('a');
    myfunc(1,2);
    myfunc();

    same as
    fucntion myfunc(){...}

    howev, 'this' would retain context within arrow functions

## Export + Import instructions

    const person = {name:'max'}
    const myfunction = () =>{...}
    export person
    export myfunction

    ....somewhere else...
    import person from './myexports.js' //default import
    import {person} from './myexports.js' // named import
    import {myfunction} from './myexports.js' // named import
    import {myfunction as funky} from './myexports.js' //aliased  named import

## Classes

    class Person extends something{
        cosntructor (){
            super() // calls super ctor, in case we inherit, no need to use this syntax in ES7
            this.name = 'Max'
        }
        call = () =>{console.log(this.name)}
        name ='Max' //another way to setup this prop at ctor
    }

    usage:
        cont APerson = new Person();
        APerson.call()
        console.log(APerson.name)

    inheritance:
        class Person extends Master

## Spread & Rest operators

    ... //the fucking operator, Spread or Rest....
    Spread: (splits)
        const newArray = [...oldArray,1,2]
        const newObject = {...oldObject,newProd: 5}

    Rest: (merges into an array)
        function sortArgs (...Args){
            return args.sort();
        }
        usage:

## Destructuring

    [a,b] = ['hello','max']
    console.log(a); // hello
    console.log(b); // max

    [name] = {name: 'max', age:....}
    console.log(name); // max

## Reference types

    Objects + Arrays

    const person = {name: 'max', age:....}
    const newPerson ={...person}; // using spread operator COPIES the object into a new var instead of copying the Reference to it (const newPerson= person)

    Copying an array:
        use .map () -> array.map(num) {return num}

# React:

## Creating an app

    tool to use:
        create-react-app (github)
        npm package to install and use

        eg:
        **npx create-react-app my-app
        cd my-app
        npm start**

## App anatomy

    src/app.js -> main file, it's a component...
    src/index.js -> startup for the app, invokes ReactDOM.render(<App/> ...) to  insert the app component in the html

## How React works

### Components anatomy:

---

    // all custom components gotta by pascal cased
    import './path-to-css/styles.css' //in case we need css
    function MyComponent(){

        //the component logic in js/ts would fit in here

        return (<your-html-for-the-component>);
    }

    export MyComponent;

    ...wherever you wanna use yer component...
    import MyComponent from './components/MyComponent'

    function App(){
        return (<div><MyComponent></MyComponent></div>);

    }

### Props:

---

    props are attribs (html attribs)
    eg:
    <MyComponent propA={valueA} propB={valueB} />

    meanwhile in the component ....

    function MyComponent(props){ //props maybe named whatev, and it contains all the props sent over from parent component

    return(
        <div>{prop.valueA}</div>
        <div>{prop.valueB}</div>
        );
    }

## Passing arguments beyond props

### props.children:

---

    we can setup a component that would allow that whatever is put (html-wise) between the comoponent's opening and closing tags gets passed around as parameters
    these things usually are used to conform containers of list or stuff
    the plus side is that it may gain some DRY by coalescing duplicated styles/html into a single component

    definition:
    function Card(props){//the 'container' for whatev component
        return (<div className='no-shiv'>{props.children}</div>)
    }

    usage:
    function CompList(props){
        return (
        <Card>
            //this contained stuff would be rendered within the <div> of the Card component
            <ComponentA/>
            <ComponentB/>
            <ComponentC/>

            <div>a custom html...</div>
        </Card>
        )

    }

## State

### useState

    it is a type of hook
    has to be called within the components' defining function (not even in a nested function)

    const [someVar, setSomeVar] = useState(''); //we just created a variable (someVar) which state is gonna be managed by react, and initialized the state to ''
    const [title, setTitle] = useState(props.title); //created a var called title and initialized as props.title

    first part is the current state of a value,
    second part is a function through wich we can update the value of a defined var

    usage:

    const [title, setTitle] = useState(props.title);

    const clickHandler = () =>{ setTitle('new value') }
    invoking the setTitle method not only refreshes the var value and the component is reloaded
    WARNING: invoking setTitle SCHEDULES the var value update, but doesn't do that right away!

# Side Effects

## UseEffect

    executes a function based on whenver a list of provided dependencies gets updated
    IMPORTANT: the function executes ONLY when depdencies change AND AFTER all the components get re-evaluated (refreshed)

    useEffect(()=>{}, []);

    in general terms, we use useEffect whenever we are dealing with anything that does not have to do with rendering (saving to local storage, and such)

    the dependencies items are usually whatever we are using within the useEffect arrow function

    this whole thing can be thought of an observer mechanism that executes a command (the arrow function) whenever the state of any variable declared as a dependency changes

    - You DON'T need to add state updating functions (as we did in the last lecture with setFormIsValid): - React guarantees that those functions never change, hence you don't need to add them as dependencies - (you could though)

    - You also DON'T need to add "built-in" APIs or functions like fetch(), localStorage etc (functions and features built-into the browser and hence available globally): These browser APIs / global functions are not related to the React component render cycle and they also never change

    - You also DON'T need to add variables or functions you might've defined OUTSIDE of your components (e.g. - if you create a new helper function in a separate file): Such functions or variables also are not - created inside of a component function and hence changing them won't affect your components (components - won't be re-evaluated if such variables or functions change and vice-versa)

### CleanUp
---
    is a technique where we may return a function within the useEffect() hook that will execute AFTER the intended main function has run

    Note that this happens EXCEPT for the first run, the first run  the cleanUp defined method will not execute

    It also runs whenever the component dismounts

# UseReducer
    is a 'replacement' for useState, though it is more complex than useState

    is typically used when a state (think of a single var ) depends on another state (another var even in the same component), eg:
    const [state1,setState1] = useState();
    const [state2,setState2] = useState();
    ....
    setState1(state2);//here state1 depends on state2....

# Redux
    not related to useReducer(), it is an npm independent package: npm i redux
    it also depends on node.js

    Redux uses Reducer Functions, these are not hooks, but rather transform their input to something else

    They are used to change / update data in the React's central store as components can subscribe to changes in that data but cannot change it directly themselves (they go through reducer functions)

## On React
    Basically we need to use package react-redux and import it
    then we need to create a store and the subscribers and publishers are hidden away from our prod code 
    since it is implemented by the react-redux lib

# Routing

    Yet another package: react-router-dom (yup, -dom..., there is a react-router but we dont need that)
    there are other libs we can install for this crap such as: react-navigation (for native)
## Routes definition
    create a component with a react-navigation function: const YourNavComponent = createStackNavigator({...})
    parameter is simply an object that maps a key to a component, so you end up with smthng like:
    myScreen1:Screen1Component

    thenn you gotta export that shit with smthg like: export default createAppContainer(YourNavComponent), calling the function allows the framework to find your navigator

### Methods
--
navigate: moves to next screen and readies a back button 
pop() + goBack(): do the same, trigger a goBack() invoke
popToTop(): moves all the way back of a stack to the first screen that launched the whole stack
replace(): moves to a next screen but without a Back button (ie: on a login screen, dont wanna go back)


