import React, { Component } from 'react'
import firebase from 'firebase';

class ChatRoom extends Component {
    constructor (props, context){
        super(props, context)
        this.updateMessage = this.updateMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this.state = {
            message: '',
            messages: []
        }
    }

    componentDidMount(){
        console.log('didmount!');
        // Initialize Firebase
          var config = {
            apiKey: "AIzaSyAxClGZezG6hsJQEO6kaHOuEIJCO6TOZd4",
            authDomain: "chatroom-8d393.firebaseapp.com",
            databaseURL: "https://chatroom-8d393.firebaseio.com",
            projectId: "chatroom-8d393",
            storageBucket: "chatroom-8d393.appspot.com",
            messagingSenderId: "624598906460"
          };
        firebase.initializeApp(config);

        firebase.database().ref('messages/').on('value', (snapshot) => {
            const data = snapshot.val()
            const keys = Object.keys(data)

            const currentMessages = keys.map(function(v) {return data[v]})

            if(currentMessages != null){
                this.setState({
                    messages: currentMessages
                })
            }
        })
    }

    updateMessage(event){
        console.log('UpdateMessage:' +event.target.value)
        this.setState({
            message: event.target.value
        })
    }

    submitMessage(event){
        console.log('Submit Message' + this.state.message);
        const nextMessage = {
            id: this.state.messages.length,
            text: this.state.message
        }

		// var list = Object.assign([], this.state.messages)
		// list.push(nextMessage)
		// list.setState({
		// 	messages: list
		// })

		firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
        /*var list = Object.assign([], this.state.messages)
        list.push(nextMessage)
        this.setState({
            messages: list
        })*/
    }

    render(){
        const currentMessage = this.state.messages.map((message, i) => {
            return (
                <li key={message.id}> {message.text} </li>
            )
        })

        return (
            <div>
                <ol>
                    {currentMessage}
                </ol>
                <input onChange={this.updateMessage} type="text" placeholder="Message" />
                <br />
                <button onClick={this.submitMessage}> Submit Messagem</button>
             </div>
        )
    }
}

export default ChatRoom
