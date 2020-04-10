import React from 'react';
import { connect } from 'react-redux'
import { Button, Navbar, Nav } from 'react-bootstrap';
import { showSidebar } from './../actions/showsidebar.actions'

function Header({showsidebar, handleSideBar}) {
  console.log(showsidebar)
  
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">UA ENERGY</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
        </Nav>
        <Button
          variant="outline-success"
          onClick={() => handleSideBar(!showsidebar)}
          
          active={showsidebar}
        >
          {showsidebar ? 'Hide side bar' : 'Show side bar'}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

function mapStateToProps(state) {
  return {
    showsidebar: state.showsidebar.showsidebar
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleSideBar: bool => dispatch(showSidebar(bool))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);