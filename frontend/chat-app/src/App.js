import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import WaitingRoom from './components/waitingRoom';
import { useState } from 'react';
import * as signalR from '@microsoft/signalr';

function App() {
  const [connection, setConnection] = useState();

  const joinChatRoom = async (username, chatroom) => {
    try
    {
      const newConnection = new signalR.HubConnectionBuilder()
        .withUrl("http://localhost:5238/chat")
        .configureLogging(signalR.LogLevel.Information)
        .build();

      newConnection.on("JoinChatRoom", (username, message) => {
        console.log(`${username}: ${message}`);
      
      });
      
      await newConnection.start();

      await newConnection.invoke("JoinSpecificChat", { Username: username, ChatRoom: chatroom });

      setConnection(newConnection);
    } 
    catch (e)
    {
      console.log(e);
    }
  };

  return (
    <div>
      <main>
        <Container>
          <Row className='px-5 my-5'>
            <Col sm='12'>
              <h1 className='font-weight-light'>Welcome to the club, buddy</h1>
            </Col>
          </Row>
          <WaitingRoom joinChatRoom={joinChatRoom} />
        </Container>
      </main>
    </div>
  );
}

export default App;
