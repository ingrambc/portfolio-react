import React from "react";
import {Col, Row} from "reactstrap";
import styled from "styled-components";

const StyledAbout = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-items: center;
  background-image: linear-gradient(rgb(187, 243, 187), rgb(44, 141, 44));
  padding:5%;
  

  #colunm{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-items: center; 
   }
   
  h2{
    text-decoration: underline;
   }
`;

const About = () => {
  return(
    <StyledAbout>
      <Row>
        <Col md="4" id="colunm">
          <h2>About Me</h2>
          <p>I am a non-traditional student with traditional values and a proven work ethic. I am a recent graduate from
            Regis University achieving a Bachelor’s of Science in Computer Science maintaining a 3.0 GPA. I am currently
            working to complete Denver University Coding camp for web development. I am a proven fast learner moving from
            no experience to State Trainer in a technical utility field in 15 months.</p>
        </Col>
        <Col md="4" id="colunm">
          <img src="images/Brian.jpg" alt="portrait of Brian" />
          <h2>Education</h2>
          <h3><img src="images/regisT1.png" alt="Regis Shield"/> Regis University</h3>
          <p>BS in Computer Science</p>
          <p>Graduated May 2020, 3.0 GPA</p>
          <br></br>
          <h3><img src="images/duT1.png" alt="DU Shield"/>Denver University</h3>
          <p>Full Stack Web Development</p>
          <p>Coding Bootcamp</p>
          <p>Graduation December 2020</p>
        </Col>
        <Col md="4" id="colunm">
        <h2>Skills</h2>
          <p>Technologies: React, JavaScript, Java, C++, HTML, CSS, Node, Express, SQL,
            MySQL, Oracle 12c, MongDB, Passport, Visual Studio Code, NetBeans, Git, Heroku, AtlasDB
          </p>
          <p>Experience: I have held many positions in my long work history, from labor to upper
            management. As Area manager I managed and assigned workloads for my crew of 16, took care of customer problems, and 
            troublshooted technical issues.  As Vice-Chair of a small non-Profit, I have managed budgets, solved conflicts, 
            and grown the organization. 
          </p>
        </Col>
      </Row>
    </StyledAbout>
  );
};

export default About;