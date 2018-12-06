import React from 'react'
import { connect } from 'react-redux'
import { fetchFriends } from '../actions'

class FriendsListView extends React.Component {
    constructor() {
        super();
        this.state = {
            inputText: "",
            name: "",
            age: 0,
            email: ""
         
        };
    }

    componentDidMount() {
        this.props.fetchFriends();
    }

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addFriend(this.state.name);
        this.props.addFriend(this.state.age);
        this.props.addFriend(this.state.email);
    }

    render() {
        return (
            <div>
                <h1>This is my Friend List</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="name"
                    onChange={this.handleChanges}
                    placeholder="Friend Name"
                    value={this.state.name}
                    autoComplete="off"
                    />
                    <button>Add Friend</button>
                </form>
                {this.props.friends.map(friend => (
                    <h4 key={friend.id}>{friend.name}</h4>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

export default connect(mapStateToProps, {fetchFriends})(FriendsListView)

