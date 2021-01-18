import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import { Container } from  '@material-ui/core';

import Block from './Components/Block';
import MovieBlock from './Components/MovieBlock';

import { BrowserRouter, Route,Switch } from "react-router-dom";
import MovieView from './Components/MovieView';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/movies/:id" component={MovieView}/>
          <Route path="/">
            <Header/>
            <Container>
              <Block/>
              <MovieBlock id={27}/>
              <MovieBlock id={36}/>
              <MovieBlock id={53}/>
              <MovieBlock id={37}/>  
            </Container>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
