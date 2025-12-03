/* Note: Props are passed from parent function to child function. */
import { useState } from "react"
import "./App.css";
import taskImg from "./images/images.png"

let language = "JavaScript";
let moon = "ú";

const items = [

  "Crutial/Urgent",
  "Important",
  "Move Ahead",
  "Trivial/Delegate",

];

const itemObjects = items.map((cat, i) => ({
  id: i,
  title: cat
}));
// console.log(itemObjects)
//child function
function Main1({ categories }) {
  /* Wrong practise, react recommend not to use this, it may produce rendering issue*/
  return (
    <>
      <div>
        <h2>Welcome to DoIt App</h2>
      </div>
      <main>
        <img src={taskImg} height={200} alt="Photo of app image"></img>
        <img src="https://github.com/programming-maestro.png" height={300} alt="Dynamic Image of my profile pic from GitHub"></img>
        <ul>
          {categories.map((category) => (
            <li key={category.id} style={{ listStyleType: "none" }}>{category.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

function Main({ categories }) {
  /* Wrong practise, react recommend not to use this, it may produce rendering issue*/
  return (
    <ul>
      {categories.map((category, idx) => (
        <li key={idx} style={{ listStyleType: "none" }}>{category}</li>
      ))}
    </ul>
  );
}

// child function
function Header(props) {
  return (
    <parent>
      <h1>Hello React!</h1>
      <h2>Vairable value is, {language}!!</h2>
      <h2>Vairable value is, {language.toUpperCase()}!!</h2>
      <h3>{moon}</h3>

      {/* Properties, props */}
      <div>
        <h1> {props.name}'s Application </h1>
        <h3>Copyright {props.year} -- from props</h3>

        <h3>Copyright {new Date().getFullYear()} -- through date function </h3>
      </div>


    </parent>
  );
}

// child function: Destructure the app & year properties directly in the function parameters.
function Content({ app, year }) {
  return (
    <div>
      <h1> {app} Application </h1>
      <h3>Copyright {year} </h3>
    </div>
  );
}

// parent function
function App() {
  const [status, setStatus] = useState(true);

  return (

    < div >
      <h1> The app is {status ? "open" : "closed"}</h1>
      <button onClick={() => setStatus(!status)}>{status ? "Close" : "Open"} App</button>
      <Header name="Chetan" year={2025} />
      <Main categories={items} />
      <Main1 categories={itemObjects} />
      <Content app="DoIT" year={2025} />
    </div >
  );
}



export default App
