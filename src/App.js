
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Articles from './components/Articles';
import Article from './components/Article';
import EditArticle from './components/EditArticle';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Articles/>}/>
          <Route path='/new' element={<Article />} />
          <Route path='/:id/edit' element={<EditArticle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
