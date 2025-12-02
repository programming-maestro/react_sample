import "./App.css";

let language = "JavaScript";
let moon = "ú";

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


function App() {

  return (
    <div>
      <Header name="Chetan" year={2025} />
      <main>
        <h1>Make your complex tasks easy with "DoIT"</h1>
      </main>
    </div>
  );
}



export default App
