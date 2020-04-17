import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';

import { setNodeName } from '../actions/nodeList.actions';
const SpaceForm = styled.div`
  margin: 25px
`

function InputNode({nodeListName, setNode}) {

  const [input, setInput] = useState('')


  const handleNodeName = (value) => {
    setInput(value)
  }

  // console.log(input);
  console.log('nodeListName', nodeListName);
  
  return (
    <SpaceForm>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter email"
            onChange={name => handleNodeName(name.target.value)}
            />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        </Form>
        <Button 
        onClick={ () => setNode(input)
        }
        variant="primary">
          Submit
        </Button>
    </SpaceForm>
  )
}


function mapStateToProps(state) {
  return {
    nodeListName: state.nodeNameList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setNode: number => dispatch(setNodeName(number))
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(InputNode)