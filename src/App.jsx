import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'

// Each new page = one file in /pages + one <Route> here.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
