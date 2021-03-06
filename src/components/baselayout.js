import React from 'react';
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom'
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import Badge from 'react-bootstrap/lib/badge';
import Row from 'react-bootstrap/lib/Row'
import { withRouter } from 'react-router';


class Menu extends React.Component{

  render(){
    return(

      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink exact to ="/">BookStore</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem>
                <NavLink exact to ="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to ="/about">About</NavLink>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem >
                <NavLink exact to ="/admin">Admin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to ="/cart">Your Cart&nbsp;&nbsp;
                  { (this.props.totalQTY > 0) ? (<Badge className="badge">{this.props.totalQTY}</Badge>):('')}
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          {this.props.children}
        </div>
        <footer>
          <Row>
            <p>&copy; 2017 Ronald Hong </p>
          </Row>
        </footer>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    totalQTY: state.cart.totalQTY
  }
}
export default withRouter(connect(mapStateToProps,{pure:false})(Menu));
