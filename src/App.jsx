import "./App.css";
import Link from "./components/Link";

function App() {
  return (
    <div className="App">
      <h1>IsotopeA</h1>
      <p className="bio">
        20 // architectural graduate // watercolour, ink & doodles!!! ◡̈
      </p>
      <Link name="Twitter" src="https://twitter.com/a_isotope" />
      <Link name="Instagram" src="https://www.instagram.com/isotope.a/" />
    </div>
  );
}

export default App;
