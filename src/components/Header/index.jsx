import { useState } from "react";
import logo from "./logo.svg";

function Header({showProducts}) {
  const [inputValue, setInputValue] = useState("");

  return (
    <header>
      <figure>
        <img src={logo} alt="logomarca Burguer Kenzie" />
        <figcaption>Logomarca Burguer Kenzie</figcaption>
      </figure>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          onChange={event => setInputValue(event.target.value)}
          value={inputValue}
        />
        <button onClick={() => showProducts(inputValue)}>Pesquisar</button>
      </form>
    </header>
  );
}

export default Header;
