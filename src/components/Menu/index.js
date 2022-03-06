import React from 'react';
import {
  MenuContainer,
  Icon,
  CloseIcon,
  MenuWrapper,
  MenuMenu,
  MenuLink,
  MenuRoute,
  SideBtnWrap,
  MenuBtnConnect,
} from './Menu';

const Menu = ({ isOpen, toggle }) => {
  return (
    <MenuContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MenuWrapper>
        <MenuMenu>
          <MenuLink
            to='buy'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Buy
          </MenuLink>
          <MenuLink
            to='bandidos'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Bandidos
          </MenuLink>
          <MenuLink
            to='rewards'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Rewards
          </MenuLink>
          <MenuLink
            to='suggestions'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Suggestions
          </MenuLink>
          <MenuLink
            to='projects'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Projects
          </MenuLink>
        </MenuMenu>
        <SideBtnWrap>
          <MenuBtnConnect >Connect Wallet</MenuBtnConnect>
        </SideBtnWrap>
        <SideBtnWrap>
          <MenuRoute to='/whitepaper'>Whitepaper</MenuRoute>
        </SideBtnWrap>
        <SideBtnWrap>
          <MenuRoute to='/faq'>FAQ</MenuRoute>
        </SideBtnWrap>
      </MenuWrapper>
    </MenuContainer>
  );
};

export default Menu;
