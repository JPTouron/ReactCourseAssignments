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
