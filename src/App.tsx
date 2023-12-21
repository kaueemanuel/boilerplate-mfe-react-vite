import { Routes, Route } from "react-router-dom"
import ExampleModuleScreen from "./modules/example-module/screens/ScreenDefault"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<ExampleModuleScreen />} />
    </Routes>
  )
}

export default App
