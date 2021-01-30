import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import VideoView from './pages/VideoView';
import ImgView from './pages/ImgView'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/img" component={ImgView}/>
        <Route exact path="/video" component={VideoView}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
