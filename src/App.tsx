import { createContext, useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return <ContextoProvider><Rotas /></ContextoProvider>

}

function Rotas() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/a" element={<A />} />
            <Route path="/b" element={<B />} />
            <Route path="/c" element={<C />} />
            <Route path="/d" element={<D />} />
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

function D() {
  return <div>Componente D</div>
}

function Erro() {
  return <div>Indisponível</div>
}

export default App;

interface Props {
  logado: boolean
  setLogado: Function;
}

const Contexto = createContext({} as Props);

function ContextoProvider({ children }: any) {
  const [logado, setLogado] = useState(false);
  return (
    <Contexto.Provider value={{ logado, setLogado }}>
      {children}
    </Contexto.Provider>
  )
}

function useLogado() {
  const contexto = useContext(Contexto);
  return Contexto
}