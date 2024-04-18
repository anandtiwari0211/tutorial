import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export default class Bootstrap extends React.Component {
    render() {
        return (
            <>
                <div>
                    <h1>Bootstrap</h1>
                    <Button>Click Me</Button>
                    <Container>
                        <Row>
                            <Col>1 of 1</Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}