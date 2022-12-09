import { SiTwitter, SiInstagram, SiKofi } from "react-icons/si";

import "./App.css";
import Header from "./components/Header";
import Link from "./components/Link";

function App() {
  return (
    <div className="App">
      <Header
        title="ISOTOPE.A"
        bio="20 // architectural graduate // watercolour, ink & doodles!!! ◡̈"
      />
      <Link
        name="Twitter"
        icon={<SiTwitter />}
        src="https://twitter.com/a_isotope"
      />
      <Link
        name="Instagram"
        icon={<SiInstagram />}
        src="https://www.instagram.com/isotope.a/"
      />
      <Link name="Ko-fi" icon={<SiKofi />} src="https://ko-fi.com/isotopea" />
    </div>
  );
}

export default App;
