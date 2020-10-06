import React from 'react';
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import AllStickers from './containers/AllStickers'
import FavoritesStickers from './containers/FavoritesStickers'
import YouTubePage from './containers/YouTubePage'

function App() {
  return (
    <div >
      <div className='Menu'>
        <NavLink activeClassName='active' to='/' exact> <button className='mebuButton'> Главная страница</button></NavLink>
        <NavLink activeClassName='active' to='/favorites' exact> <button className='mebuButton'>Избранное</button></NavLink>
        <NavLink activeClassName='active' to='/youtube_viewer' exact> <button className='mebuButton'>Youtube Viewer</button></NavLink>

      </div>
      <div>
        <Switch>
          <Route path='/' exact>
            < AllStickers />
          </Route>
          <Route path='/favorites'>
            <FavoritesStickers />
          </Route>
          <Route path='/youtube_viewer'>
            <YouTubePage />
          </Route>
        </Switch>
      </div>

    </div>
  );
}

export default App;
