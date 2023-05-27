import { Route, Routes, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./routes/Home";
import Register from "./routes/Register";
import Login from "./routes/Login";
import CategoryFiltred from "./routes/CategoryFiltred";
import ProductRegister from "./routes/ProductRegister";
import Details from "./routes/Details";
import { Footer } from "./components/footer";
import './styles.css';
import { FormNewCategory } from "./routes/FormNewCategory";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/category/:id" element={<CategoryFiltred/>}/>
                <Route path="/Admin" element={<ProductRegister/>}/>
                <Route path="/Detail/:id" element={<Details/>}/>
                <Route path="/newCategory" element={<FormNewCategory/>}/>
            </Routes>
            <Footer/>
        </div>
        
    );
}

export default App;