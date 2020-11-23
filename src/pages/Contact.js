import React from "react";
import {Form, Label, Input, FormGroup} from "reactstrap";
import styled from "styled-components";

const StyledContact = styled.div`

`;

const Contact = () => {
  return(
    <StyledContact>
      <Form class="form mx-auto" action="mailto:ingrambrianholly@hotmail.com" method="post" enctype="text/plain">
        <FormGroup class="form-group">
          <Label for="nameInput">Name</Label>
          <Input type="name" class="form-control" id="nameInput" placeholder="Jane Doe"/>
        </FormGroup>
        <FormGroup class="form-group mx-auto">
          <Label for="emailInput">Email address</Label>
          <Input type="email" class="form-control" id="emailInput" placeholder="name@example.com"/>
        </FormGroup>
        <FormGroup class="form-group">
          <Label for="messageText">Message</Label>
          <Input type="textarea" class="form-control" id="messageText" rows="8"/>
        </FormGroup>
        <Input type="submit" value="Send"/>
        <Input type="reset" value="Reset"/>
      </Form>
    </StyledContact>
  );
};

export default Contact;