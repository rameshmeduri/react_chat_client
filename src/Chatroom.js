import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Message from './Message.js';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [

                {
                    username: "Kevin Hsu",
                    content: 'Hello World!'
                },
                {
                    username: "Kevin Hsu",
                    content: 'Hello World!'
                },
                {
                    username: "Kevin Hsu",
                    content: 'Hello World!'
                },
                {
                    username: "Kevin Hsu",
                    content: 'Hello World!'
                },



                {
                    username: "Alice Chen",
                    content: 'Love it! :heart'
                }, {
                    username: "Kevin Hsu",
                    content: 'Check out'
                }, {
                    username: "KevHs",
                    content: <p>Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.</p>,

                }, {
                    username: "Kevin Hsu",
                    content: 'Lorem ipsum dolor sit amet',

                }, {
                    username: "Kevin Hsu",
                    content: 'Lorem ipsum dolor sit amet',

                }, {
                    username: "Kevin Hsu",
                    content: 'Lorem ipsum dolor sit amet',

                }, {
                    username: "Alice Chen",
                    content: 'Lorem ipsum dolor sit amet'
                }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "Kevin Hsu",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "Kevin Hsu";
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <h3>Velocity 2.0</h3>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat, index) => (
                            <Message key={index} chat={chat} user={username} />
                        ))
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Chatroom;