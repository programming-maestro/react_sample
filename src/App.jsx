import "./App.css";

let language = "JavaScript";
let moon = "ú";

function Header() {
  return (
    <parent>
      <h1>Hello React!</h1>
      <h2>Vairable value is, {language}!!</h2>
      <h2>Vairable value is, {language.toUpperCase()}!!</h2>
      <h3>{moon}</h3>
    </parent>
  );
}


function App() {

  return (
    <div>
      <Header />
      <main>
        <h1>Make your complex tasks easy with "DoIT"</h1>
      </main>
    </div>
  );
}



export default App
