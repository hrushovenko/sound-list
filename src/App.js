import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Main } from './pages/main';
import { AboutArtist } from './pages/aboutArtist';
import { SearchTrack } from './pages/searchTrack';
import { Navbar } from './components/navbar';

import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from 'redux-thunk'

import rootReducer from './rootReducer';

const middleware = [thunk]

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
)

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
      {/* <FetchData /> */}
        <Navbar />
        <div className="container pt-4">
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/about/:name' exact component={AboutArtist} />
            <Route path='/search' exact component={SearchTrack} />
          </Switch>
        </div>
        
      </BrowserRouter>
    </Provider>
  );
}

export default App 
