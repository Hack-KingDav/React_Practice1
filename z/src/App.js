import './App.css';
import Nav from './Components/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
// import rivateComponent from './Components/PrivateComponent';
function App() {
  return (
    <div className = "App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Product Listing Component</h1>} />
        <Route path="/add" element={<h1>Add Product Component</h1>} />
        <Route path="/update" element={<h1>Update Product Information</h1>} />
        <Route path="/profile" element={<h1>This is Profile Page</h1>} />
        <Route path="/logout" element={<h1>Logout Page</h1>} />
        <Route path="/SignUP" element={<SignUp />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
    
  );
}

export default App;
