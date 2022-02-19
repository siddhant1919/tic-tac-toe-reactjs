import React, { useState } from 'react';

import Icon from './Components/Icon';
import { icons } from 'react-icons/lib';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Card, CardBody, Container, Button, Col, Row, ButtonDropdown } from 'reactstrap';
import { FaFileUpload } from 'react-icons/fa';

const itemArray = new Array(9).fill("empty")

const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty",0,9);
  }


  

  const checkIsWinner = () => {
    if(itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0] !== "empty")
    {
      setWinMessage(`${itemArray[0]} Won`)
    }
    else if(itemArray[3] !== "empty" && itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5])
    {
      setWinMessage(`${itemArray[3]} Won`)
    }
    else if(itemArray[6] !== "empty" && itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8])
    {
      setWinMessage(`${itemArray[6]} Won`)
    }
    else if(itemArray[0] !== "empty" && itemArray[0] === itemArray[3] && itemArray[3] === itemArray[6])
    {
      setWinMessage(`${itemArray[0]} Won`)
    }
    else if(itemArray[1] !== "empty" && itemArray[1] === itemArray[4] && itemArray[4] === itemArray[7])
    {
      setWinMessage(`${itemArray[1]} Won`)
    }
    else if(itemArray[2] !== "empty" && itemArray[2] === itemArray[5] && itemArray[5] === itemArray[8])
    {
      setWinMessage(`${itemArray[2]} Won`)
    }
    else if(itemArray[0] !== "empty" && itemArray[0] === itemArray[4] && itemArray[4] === itemArray[8])
    {
      setWinMessage(`${itemArray[0]} Won`)
    }
    else if(itemArray[2] !== "empty" && itemArray[2] === itemArray[4] && itemArray[4] === itemArray[6])
    {
      setWinMessage(`${itemArray[2]} Won`)
    }

    else if(itemArray[0] !=="empty" && itemArray[1] !=="empty" && itemArray[2] !=="empty" && 
    itemArray[3] !=="empty" && itemArray[4] !=="empty" && itemArray[5] !=="empty" && itemArray[6] !=="empty" && itemArray[7] !=="empty" && itemArray[8] !=="empty")
    {
      setWinMessage(`Game Tied`)
    }
  };

  const changeItem = itemNumber => {
    if(winMessage){
      return toast(winMessage,{type:"success"});
    }
    
    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    }
    else{
      return toast("already filled",{type:"error"})
    }

    checkIsWinner();


  }



  return (
    <Container className="p-5" >
    <ToastContainer position="bottom-center"/>
    <Row>
      <Col md={6} className="offset-md-3">
        {winMessage ? (
          <div className="mb-2 mt-2">
            <h1 className="text-success text-uppercase text-center">
              {winMessage}
            </h1>
            <Button 
            color="success"
            block
            onClick={reloadGame}
            >Reload The Game</Button>
          </div>
        ) : (
          <h1 className="text-warning text-center">
            {isCross ? "Cross's" : "Circle's"} Turn
          </h1>
        )}
        <div className="grid">
          {itemArray.map((item, index) => (
            <Card color="warning" onClick={() => changeItem(index) }>
              <CardBody className="box">
                <Icon name={item}/>
              </CardBody>
            </Card>
          ))}
        </div>
      </Col>
    </Row>
    </Container >
    
  );
}

export default App;
