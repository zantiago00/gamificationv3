import { Routes, Route } from 'react-router-dom'
import Intro from './pages/Intro'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/level/1" element={<div>Level 1 placeholder</div>} />
    </Routes>
  )
}

export default App
