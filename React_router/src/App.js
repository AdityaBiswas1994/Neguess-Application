import './App.css';
import './Styling.css'

import AboutUs from './components/AboutUs';
import Rules from './components/Rules';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <Router>
      <Header/>
        <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/Rules" component={Rules} />

          <Route path="/AboutUs" component={AboutUs} />
        </Switch>

        </Router>
        <div class="container">
          <p>
          <a href="https://twitter.com/negationInKBs?ref_src=twsrc%5Etfw" target="_blank">Tweets by negationInKBs</a> 
        </p>
        <p>
        <span>Copyright @ 2021 by Max Planck Institute for Informatics | </span>
        <a href="https://imprint.mpi-klsb.mpg.de/inf/neguess" target="_blank">Imprint / Impressum</a>&nbsp;  
        | <a href="https://data-protection.mpi-klsb.mpg.de/inf/neguess" target="_blank"> Data Protection / Datenschutzhinweis</a>
        </p>
      </div>
    </div>
  );
}

export default App;
