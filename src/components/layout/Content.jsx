import { Route, Routes } from 'react-router-dom'

import Home from '../../views/example/Home'
import Param from '../../views/example/Param';
import About from '../../views/example/About';
import NotFound from '../../views/example/NotFound';

import './Content.css';

const Content = props => (
  <main className="Content">
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/param/:id" element={<Param />} />
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  </main>
)

export default Content