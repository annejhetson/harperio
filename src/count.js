import React, { Component } from 'react'
import IncrementCount from './increment-count'

class Count extends Component {
  state = {
    count: 0,
    online: true,
    users: []
  }

  componentDidMount() {
    window.addEventListener('offline', () => { this.setState({online: false}) })
    window.addEventListener('online', () => { this.setState({online: true}) })

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({users: users}))
  }

  render() {
    const { count, online, users } = this.state

    return (
      <div>
        <h1>This is my count {count}</h1>
        <IncrementCount count={ count } increment={ (newCount) => { this.increment(newCount) }} />
        { online ? 'ONLINE' : 'OFFLINE'}
        { users.map((user) => {
          return <p key={user.id}>{ user.name }</p> //remove return when use () instead of {}
        } ) }
      </div>
    )
  }

  increment = (newCount) => {
    this.setState({count: newCount })
  }
}

export default Count
