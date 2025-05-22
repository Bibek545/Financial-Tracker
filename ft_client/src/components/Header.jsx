import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useUser } from "../context/UserContext";

const Header = () => {
  const { user, setUser } = useUser();

  return (
    <div className="w-100">
      <Navbar expand="lg" variant="dark" className="shadow-lg">
        <Container>
          <Navbar.Brand href="#home">Financial Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {user?._id ? (
                <>
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link href="/transaction">Transaction</Nav.Link>
                  <Button
                    variant="warning"
                    onClick={() => {
                      setUser({});
                      localStorage.removeItem("accessJWT");
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/signup">Singnup</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
