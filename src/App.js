import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';


const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="a8906316-5d21-4451-a634-8f677593e9ec"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;