import { createContext, useContext, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return <ContextoProvider><Rotas /></ContextoProvider>

}

function Rotas() {
  const {logado} = useLogado();
  return logado?<DoisRotas /> : <UmRotas/>
}

function UmRotas() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Menu />
          <Routes>
            <Route path="/a" element={<A />} />
            <Route path="/b" element={<B />} />
            <Route path="*" element={<Erro />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

function DoisRotas() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Menu />
          <Routes>
            <Route path="/c" element={<C />} />
            <Route path="/d" element={<D />} />
            <Route path="*" element={<Erro />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

function Menu() {
  const {logado,setLogado} = useLogado();
  return (
    <div style={{backgroundColor:'yellow'}}>
      <button onClick={() => setLogado(true)}>Login</button>
      <button onClick={() => setLogado(false)}>Logout</button>
      <span>{logado?'Logado':'Desconectado'}</span>
      <Link to="a">A</Link>
      <Link to="b">B</Link>
      <Link to="c">C</Link>
      <Link to="d">D</Link>
    </div>
  )
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
  return contexto
}