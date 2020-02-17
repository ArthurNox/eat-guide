import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Detail from './pages/Detail'
import Form from './pages/Form'

export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/detail" component={Detail} render={props => <Home />} name="Tulio" />
        <Route path="/form" component={Form} />
    </Switch>
  )
}