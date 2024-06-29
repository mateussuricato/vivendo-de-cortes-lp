import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    details {
	background-color: #DDDDDD;
	width: 100%;
	border: 1px solid #000000;
	cursor: pointer;
  }
  
  summary {
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	color: #000000;
	padding: 0.7rem;
  }
  
  summary::marker,
  summary::-webkit-details-marker {
	color: #ff5000;
  }
  
  .reposta {
	font-family: 'Poppins', sans-serif;
	text-align: left;
	color: #000000;
	padding: 0.7rem;
	cursor: text;
	max-width: 100%;
  }
  
`