import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
const StyledCounter = styled.div`
    width: 345px;
    color: blue;    
`
const Paragraph = styled.p`
    width: 345px;
`
const Button = styled.button`
    width: 45px;
`

const Lorem = styled.p`
    color: red;
`
class Counter extends React.Component {
//   state = { count: 0 }

//   increment = () => this.setState({ count: this.state.count + 1 })
//   decrement = () => this.setState({ count: this.state.count - 1 })

  render() {
     
    return (
      <StyledCounter>
        <Paragraph>{this.props.count}</Paragraph>
        <Button className="something" onClick={() => this.props.increment(10)}>+</Button>
        <Button onClick={() => this.props.decrement(10)}>-</Button>
        <Lorem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </Lorem>
      </StyledCounter>
    )
  }
}

function mapStateToProps(state) {
   return {
       count: state.count
   } 
}
function mapDispatchToProps(dispatch) {
   return {
    increment: number => dispatch({type: "INCREMENT", payload: number}),
    decrement: number => dispatch({type: "DECREMENT", payload: number})
   } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);