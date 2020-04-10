import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { countIncrement2, countDecrement2 } from '../actions/count2.actions';
const StyledCounter = styled.div`
    width: 345px;
    color: red;    
`
const Paragraph = styled.p`
    width: 345px;
`
const Button = styled.button`
    width: 45px;
`

const Lorem = styled.p`
    color: white;
`
function Counter2({ count, increment, decrement }){
    return (
      <StyledCounter>
        <Paragraph>{count}</Paragraph>
        <Button className="something" onClick={() => increment(10)}>+</Button>
        <Button onClick={() => decrement(10)}>-</Button>
        <Lorem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </Lorem>
      </StyledCounter>
    )
}

function mapStateToProps(state) {
   return {
       count: state.count2.count
   } 
}
function mapDispatchToProps(dispatch) {
   return {
    increment: number => dispatch(countIncrement2(number)),
    decrement: number => dispatch(countDecrement2(number))
   } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);