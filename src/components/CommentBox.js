import React, { Component } from 'react';

class CommentBox extends Component {
  state = { comment: ''};

  handleChange = event => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(`submitting: ${this.state.comment}`);
    // TODO: Call action creator
    // save comment
    this.setState({ comment: '' });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange}/>
        <div>
          <button type="submit">Submit content</button>
        </div>
      </form>
    )
  }
}

export default CommentBox;
