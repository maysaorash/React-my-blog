import React from 'react';
import {useParams} from "react-router-dom";

class PostDetails extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  componentDidMount() {
      let { id } = useParams();
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => this.setState({title: json.title, body: json.body}));
  }
  
  render() {
    return (

      <article>
        <h2>{this.state.title}</h2>
        <p>{this.state.body}</p>
      </article>
    )
  }
}

export default PostDetails; 