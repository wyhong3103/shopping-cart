import '../styles/Message.css';

const Message = ({msg}) => {
    return(
        <div className="message">
            {msg}
        </div>
    )
}

export default Message;