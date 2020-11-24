import React from "react";
import {Col, Row, Form, Label, Input, FormGroup} from "reactstrap";
import styled from "styled-components";

const StyledContact = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-items: center;

  #column{
    align-content: center;
    text-align: center;
  };

  .h2{
    color: rgb(44, 141, 44);
  };
`;

const Contact = () => {
  return(
    <StyledContact>
      <Row>
        <Col Col md="4" id="column">
          <h2><a href="mailto:ingrambrianholly@hotmail.com">Email</a></h2>
        </Col>
        <Col Col md="4" id="column">
          <h2><a href="https://www.linkedin.com/in/brian-ingram-90b40b126/">LinkedIn</a></h2>
        </Col>
        <Col Col md="4" id="column">
          <h2>Resume</h2>
        </Col>
      </Row>
    </StyledContact>



    // <StyledContact>
    //   <Form class="form mx-auto" action="mailto:ingrambrianholly@hotmail.com" method="post" enctype="text/plain">
    //     <FormGroup class="form-group">
    //       <Label for="nameInput">Name</Label>
    //       <Input type="name" class="form-control" id="nameInput" placeholder="Jane Doe"/>
    //     </FormGroup>
    //     <FormGroup class="form-group mx-auto">
    //       <Label for="emailInput">Email address</Label>
    //       <Input type="email" class="form-control" id="emailInput" placeholder="name@example.com"/>
    //     </FormGroup>
    //     <FormGroup class="form-group">
    //       <Label for="messageText">Message</Label>
    //       <Input type="textarea" class="form-control" id="messageText" rows="8"/>
    //     </FormGroup>
    //     <Input type="submit" value="Send"/>
    //     <Input type="reset" value="Reset"/>
    //   </Form>
    // </StyledContact>
  );
};

export default Contact;