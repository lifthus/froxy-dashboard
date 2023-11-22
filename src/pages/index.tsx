import { useState } from "react";
import froxyLogo from "/froxy.jpg";
import { css } from "@emotion/react";

const logoCss = css`
  border-radius: 25%;
  width: 20rem;
  padding: 1.5rem;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 2rem #646cffaa);
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://github.com/lifthus/froxy" target="_blank">
          <img css={logoCss} src={froxyLogo} alt="Froxy logo" />
        </a>
      </div>
      <h1>Froxy</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
