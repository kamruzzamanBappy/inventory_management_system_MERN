 import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Root from './components/Root'
import Login from './pages/Login'
 const App = () => {
   return (
     <Router>
      <Routes>

<Route path="/" element={<Root/> } />
<Route path="/admin/dashboard" element={<h1>Admin Dashboard</h1>} />
<Route path="/customer/dashboard" element={<h1>Customer Dashboard</h1>} />
<Route path="/login" element={<Login/> } />
      </Routes>
     </Router>
   )
 }
 
 export default App