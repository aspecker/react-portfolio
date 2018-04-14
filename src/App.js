//dependancies
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
//components
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';

const App = () =>(

  <Router basename={process.env.PUBLIC_URL}>
    <div>
    <Navbar />
    <Wrapper>

      <Route exact path = '/' component={Home} />
      <Route exact path = '/home' component={Home} />
      <Route exact path = '/portfolio' component = {Portfolio} />
      <Route exact path = '/contact' component = {Contact} />


    </Wrapper>
    </div>
  </Router>

);

export default App;
