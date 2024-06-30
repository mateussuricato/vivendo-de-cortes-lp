import styled from 'styled-components';

export const AccordionContainer = styled.div`
  background-color: #FF9300;
  margin-bottom: 0.7rem;
    width: 100%;
    max-width: 900px;

  &.active .accordion__content {
    padding: 1.5rem 0.5rem;
    max-height: 9em;
  }
`;

export const AccordionTitle = styled.div`
  padding: 1rem 0.5rem;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  color: #000;
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
  padding: 0 0.5rem;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
  background-color: #ffc170;
`;
