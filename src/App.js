
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
