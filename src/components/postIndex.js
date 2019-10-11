import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchsPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostIndex extends Component {

    componentDidMount() {
        this.props.fetchsPosts();
        console.log(this.props);
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id} >
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/post/new" className="btn btn-primary">Add Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchsPosts })(PostIndex);