import { useState } from "react";
// hook do react para mudança de estado
import "./Style.scss";

export default function App() {
  //variavel de estado
  //primeiroValor é a variavel de estado
  //setPrimeiroValor é a função atualizadora
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  //arrow function () => {}
  // fução especial

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };
  return (
    <main>
      <h1>Calculadora</h1>
      {/* onChange evento de mudança */}
      <input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoPrimeiroValor}
      />
      <input onChange={capturandoSegundoValor} />
      <button onClick={soma}>+</button>
      <button onClick={subtracao}>-</button>
      <button>x</button>
      <button>/</button>
      <h3>{resultado}</h3>
    </main>
  );
}
