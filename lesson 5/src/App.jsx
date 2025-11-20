import { useState} from 'react';
import { ChatInput } from './components/ChatInput'; // named export
import ChatMessages from './components/ChatMessages'; // default export it does not need {}
import './App.css'; // vite lets us import any type of file like this



function App() {
  const [chatMessages, setChatMessages] = useState([
    {
    sender: 'user',
    id: 'id1',
    time: 1736127288920
  }, {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    id: 'id2',
    time: 1736127291230
  }, {
    message: 'can you get me todays date?',
    sender: 'user',
    id: 'id3',
    time: 1736127385356
  }, {
    message: 'Today is September 27',
    sender: 'robot',
    id: 'id4',
    time: 1736127385500
  }
  ]);


  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
