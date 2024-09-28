import { useState } from "react";
import { Row, Col, FormControl, Form, Button } from "react-bootstrap";

const WaitingRoom = ({ joinChatRoom}) => {

    const[username, setUsername] = useState();
    const[chatroom, setChatroom] = useState();

    return <Form onSubmit={
        e => {
            e.preventDefault();
            joinChatRoom(username, chatroom);
        } }>
    
        <Row className="px-5 py-5">
            <Col sm={12}>
                <Form.Group>
                    <FormControl placeholder="username" onChange={e => setUsername(e.target.value)}/>
                    <FormControl placeholder="chatroom" onChange={e => setChatroom(e.target.value)}/>
                </Form.Group>
            </Col>
            <Col sm={12}>
                <hr/>
                <Button type="submit" variant="success">Join Chat Room</Button>
            </Col>
        </Row>
    </Form>
}

export default WaitingRoom;