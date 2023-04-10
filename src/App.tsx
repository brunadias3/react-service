import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/a" element={<A />} />
            <Route path="/b" element={<B />} />
            <Route path="/c" element={<C />} />
            <Route path="*" element={<Erro />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

function A() {
  return <div>Componente A</div>
}

function B() {
  return <div>Componente B</div>
}

function C() {
  return <div>Componente C</div>
}

function Erro() {
  return <div>Indisponível</div>
}

export default App;
