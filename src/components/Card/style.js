import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem;
    gap: 2rem;
    max-width: 500px;
    background-color: #00000020;
	backdrop-filter: blur(1px);
	border-radius: 15px;
	margin-bottom: 1rem;
	padding: 2rem 1rem 2rem 1rem;
`

export const Emoji = styled.p`
    font-size: 30pt;
`

export const Text = styled.p`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 17pt;
color: #0E0F1D;
`