import React from "react";
import styled from "styled-components";

const main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;