import { useState } from "react";
import logo from "./logo.svg";
import {StldHeader} from './styled'

function Header({showProducts}) {
  const [inputValue, setInputValue] = useState("");

  return (
    <StldHeader>
      <figure>
        <img src={logo} alt="logomarca Burguer Kenzie" />
        <figcaption>Logomarca Burguer Kenzie</figcaption>
      </figure>
      <form onSubmit={event => event.preventDefault()}>
        <input
          placeholder="Digitar Pesquisa"
          type="text"
          onChange={event => setInputValue(event.target.value)}
          value={inputValue}
        />
        <button onClick={() => showProducts(inputValue)}>Pesquisar</button>
      </form>
    </StldHeader>
  );
}

export default Header;
