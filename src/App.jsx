import "./App.css";
import Link from "./components/Link";

function App() {
  return (
    <div className="App">
      <h1>ISOTOPE.A</h1>
      <p className="bio">
        20 // architectural graduate // watercolour, ink & doodles!!! ◡̈
      </p>
      <Link name="Twitter" src="https://twitter.com/a_isotope" />
      <Link name="Instagram" src="https://www.instagram.com/isotope.a/" />
      <Link name="Ko-fi" src="https://ko-fi.com/isotopea" />
    </div>
  );
}

export default App;
