import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import styled from "styled-components";

const StyledCard = styled.div`
  .card-title{
    text-align:center;
  }
`;

function Project( {name, img, github, deploy}) {
  return (
    <StyledCard>       
      <Card>
        <CardTitle tag="h5"><a href={github} alt={name} target="_blank" rel="noopener noreferrer">
          Github Repo</a></CardTitle>
        <CardImg top width="90%" src={img} alt={name}/>
        <CardTitle tag="h5"><a href={deploy} alt={name} target="_blank" rel="noopener noreferrer">
          {name}</a></CardTitle>
      </Card>
    </StyledCard> 
  )
}     

export default Project;