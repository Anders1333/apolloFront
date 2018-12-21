import React from 'react';
import './App.css';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { GetAll, FindUserByUsername } from './components/Queries'
import { AddUser, AddLocationBlog, LikeLocationBlog } from './components/Mutations'
import { GET_ALL_USERS, GET_ALL_POSITIONS, GET_ALL_LOCATIONBLOGS } from './statements/queries'

const client = new ApolloClient({
  uri: "The backend endpoint for graphql... Couldnt make it work.."
});

function DisplayComponent({ category }) {
  switch (category) {
    case 'users':
      return <GetAll statement={GET_ALL_USERS} />
    case 'positions':
      return <GetAll statement={GET_ALL_POSITIONS} />
    case 'locationblogs':
      return <GetAll statement={GET_ALL_LOCATIONBLOGS} />
    case 'finduser':
      return <FindUserByUsername />
    case 'adduser':
      return <AddUser />
    case 'addlocationblog':
      return <AddLocationBlog />
    case 'likelocationblog':
      return <LikeLocationBlog />
    default:
      return null;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: 'select'
    }
  }

  change = (event) => {
    this.setState({ category: event.target.value })
  }

  render() {
    return (
        <ApolloProvider client={client}>
              <div>
                <select name="category" id="category" onChange={this.change} value={this.state.category}>
                  <option value="users">users</option>
                  <option value="positions">positions</option>
                  <option value="locationblogs">locationblogs</option>
                  <option value="finduser">finduser</option>
                  <option value="adduser">adduser</option>
                  <option value="addlocationblog">addlocationblog</option>
                  <option value="likelocationblog">likelocationblog</option>
                </select>
              </div>
              <DisplayComponent category={this.state.category} />
        </ApolloProvider>
    )
  }
}

export default App;
