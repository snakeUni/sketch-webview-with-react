import * as React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import routes from './routes'

export default function App() {
  return (
    <Router>
      <Switch>
        {routes.map((r) => {
          return <Route key={r.path} exact path={r.path} component={require(r.component).default} />
        })}
      </Switch>
      <Redirect to="/" />
    </Router>
  )
}
