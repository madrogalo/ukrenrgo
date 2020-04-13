import React from 'react';
import styled from 'styled-components';
import InputNode from './InputNode';

const StyledSideBar = styled.div`
  position: absolute;
  right: 0px;
  width: 300px;
  height: 100%;
  border-left: solid 4px #ffeeba;
  color: #856404;
  background-color: #fff3cd;
`

function Sidebar() {
  return (
    <StyledSideBar variant={'primary'}>
      Sidebar
      <InputNode />
    </StyledSideBar>
  )
}

export default Sidebar