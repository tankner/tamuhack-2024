import "./Loading.css";
import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";


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
    
    <Bubbles>
        <ReactLoading type="cylon" color="#000000" height={100} width={50}/>
    </Bubbles>
  );
};
export default Loading;
