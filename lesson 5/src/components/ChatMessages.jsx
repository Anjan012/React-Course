import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

function ChatMessages({ chatMessages }) {

  const chatMessagesRef = useRef(null); // React will take the html and save it inside this ref/container

  // put the hook at the top of the componenet 
  // Hooks should not be inside anything (function , if statement...)
  useEffect(() => {
    // React will run this function after the component is created or everytime the componenet is updated 
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      // scroll top: how far from the top we should scroll
      // scroll height: gives us total height of the element 
      containerElem.scrollTop = containerElem.scrollHeight; // This will scroll all the way to the bottom 
    }
  }, [chatMessages]); // The second parameter controls when useEffect runs [] means only run once, after the component is created This is also known as the dependency array that lets us control when the effect runs

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            time={chatMessage.time}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;