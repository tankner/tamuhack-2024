import "./Loading.css";
import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ensure full-screen height */
  width: 100vw; /* Ensure full-screen width */
`;


const Bubbles = styled.div`
display: flex;
cursor: pointer;
align-items: center;
border: 0;
justify-content: center;
flex-direction: column;

`;

const Loading = () => {
  return (
    <Container>
      <Bubbles>
          <ReactLoading type="cylon" color="#000000" height={100} width={50}/>
      </Bubbles>
    </Container>

  );
};
export default Loading;
