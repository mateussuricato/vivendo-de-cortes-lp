import styled from 'styled-components';

export const AccordionContainer = styled.div`
  background-color: #DDDDDD;
  margin-bottom: 0.7rem;
    width: 100%;
    max-width: 900px;

  &.active .accordion__content {
    padding: 0.7rem;
    max-height: 9em;
  }
`;

export const AccordionTitle = styled.div`
  padding: 0.7rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AccordionIcon = styled.div`
  .icon {
    transition: transform 0.3s ease-in-out;
  }
  .rotated {
    transform: rotate(180deg);
  }
`;

export const AccordionContent = styled.div`
  padding: 0rem 0.1rem;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
  background-color: #fff;
`;
