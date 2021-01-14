import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from "./components/Posts.js";
import CreatePost from "./components/CreatePost.js";
import PostDetails from "./components/PostDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [ 
        {
          id:1,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
        },
        {
          id:2,
          title: 'qui est esse',
          body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
        },
        {
          id:3,
          title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
          body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'
        },
        {
          id: 4,
          title: 'eum et est occaecati',
          body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit'
        },
        {
          id: 5,
          title: 'nesciunt quas odio',
          body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque'
        },
        
      ],
      title: '',
      body: ''
    }
    this.setFields = this.setFields.bind(this)
    this.storeBlogPost = this.storeBlogPost.bind(this)
  }

  // Store input values in the state
  setFields (key, value) {
    this.setState({
      [key]: value
    })
  }

  storeBlogPost() {
    const newPost = {
      id: Date.now(),
      title: this.state.title,
      body: this.state.body
    }
    const newArray = [...this.state.posts, newPost];
    this.setState({
      posts: newArray,
      title: '',
      body: ''
    })
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Welcome to my Blog</h1>
  
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/create-post">Create Post</Link>
                </li>
              </ul>
            </nav>
  
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <Posts blogPosts={this.state.posts} />
              </Route>
              <Route exact path="/create-post">
                <CreatePost setFields={this.setFields} storePost={this.storeBlogPost} title={this.state.title} body={this.state.body}/>
              </Route>
              <Route path="/posts/:id">
                <PostDetails />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;