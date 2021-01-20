import React from 'react'
import Card from 'react-bootstrap/Card';

function Main() {
  return (
    <div className="main">
        <div className="upper">upper</div>
        <div className="mainContent">
            <h1>Uniquely Yours</h1>

            <Card className="gradient">
                <Card.Img variant="top" src="https://picsum.photos/200/200" />
                <Card.Body>
                    <Card.Title>Song Title</Card.Title>
                    <Card.Text>
                    Example
                    </Card.Text>
                </Card.Body>
            </Card>

            </div>
    </div>
  );
}

export default Main;
