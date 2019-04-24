import React, { Component } from 'react'
import { AuctionCard } from './components'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import store, { history } from './redux/store'
import LandingPage from './components/LandingPage/LandingPage';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exaxt path="/auction/:auctionId" component={AuctionCard} />
            </Switch>
          </React.Fragment>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App