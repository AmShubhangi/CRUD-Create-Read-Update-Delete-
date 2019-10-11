import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, deletePost } from '../actions';
import { Link } from 'react-router-dom';
import moment from 'moment';

class PostsShow extends Component {
    componentDidMount() {
        var start = moment.duration("09:45", "HH:mm");
        var end = moment.duration("10:30", "HH:mm");
        var diff = end.subtract(start);
        var a = moment([11 / 10 / 2019]);
        var b = moment([11 / 10 / 2019]);
        console.log(a.diff(b, 'days') + ' days' + ' ' + diff.hours() + ' ' + 'Hours' + " " + diff.minutes() + ' ' + 'Mins');// return hours

        const { id } = this.props.match.params;
        this.props.fetchSinglePost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push("/")
        });
    }

    render() {
        const { posts } = this.props;
        if (!posts) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <Link to='/' className="">Back To Home</Link>
                <br/>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete</button>
                <h3>{posts.title}</h3>
                <h6>Categories: {posts.categories}</h6>
                <p>{posts.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { posts: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchSinglePost, deletePost })(PostsShow);