import React from "react";
import { connect } from "react-redux";
import { add as addMessage } from "../actions/messages";
import MessageLayout from "./MessagesLayout";
//elle return les messages
const mapStateToProps = ({ messages }, ownProps) => {
    return {
        messages,
        ...ownProps
        };
};

class Messages extends React.Component {
    handleSubmitMessage(message) {
        this.props.dispatch(addMessage(message));
    }

    render() {
        return <MessageLayout
            renderMessages={() => (
                    <div>
                    {this.props.messages.map(message =>(
                                <div>{message.text}</div>
                                ))}
                    </div>
                    )}
        renderInput={() => <MessageInput onSubmit={this.handleSubmitMessage.bind(this)}/>}
        />;
    }
}

const MessageInput = ({onSubmit = () => {}}) => {
    let inputRef = React.createRef();
    return (
        <div>
            <input ref={inputRef} />
            <button onClick={()=> { onSubmit(inputRef.current.value);
            inputRef.current.value = "" }}>send</button>
            </div>
            )
    }
//connect c'est un HEC, elle va nous lier au state global de l'application. A chaque fois qu'il y aura un message MapState sera prévenu
export default connect(mapStateToProps)(Messages);
