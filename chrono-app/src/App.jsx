import './App.css'
import Chrono from "./component/Chrono.jsx";

function App() {
 

  return (
    <>
      <Chrono step={1} />
      <Chrono step={2} cyclique={true} />
    </>
  )
}

export default App