import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from './components'
import { TodoList, TodoInsert, TodoUpdate } from './pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/todo/list" exact component={TodoList} />
                <Route path="/todo/create" exact component={TodoInsert} />
                <Route path="/todo/update/:id" exact component={TodoUpdate} />
            </Switch>
        </Router>
    )
}

export default App
