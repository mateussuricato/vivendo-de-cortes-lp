import { useState } from 'react';
import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ title, content }) => {
  const [active, setActive] = useState(false);

  return (
    <S.AccordionContainer className={`accordion ${active ? 'active' : ''}`}>
      <S.AccordionTitle onClick={() => setActive(!active)}>
        <span>{title}</span>
        <S.AccordionIcon className="accordion__icon">
          <FontAwesomeIcon icon={faChevronDown} className={`icon ${active ? 'rotated' : ''}`} />
        </S.AccordionIcon>
      </S.AccordionTitle>
      <S.AccordionContent className="accordion__content">
        {content}
      </S.AccordionContent>
    </S.AccordionContainer>
  );
};

export default Accordion;
