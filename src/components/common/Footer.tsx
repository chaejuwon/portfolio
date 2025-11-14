import styled from "styled-components";
import { FaTerminal } from "react-icons/fa";
import { VscSourceControl } from "react-icons/vsc";
import { VscError } from "react-icons/vsc";
import { FaRegBell } from "react-icons/fa";
import { IoMdWifi } from "react-icons/io";
const FooterWrap = styled.div`
  position: absolute;
  bottom:0;
  width: 100%;
  height: 30px;
  background: ${props => props.theme.colors.backgroundPrimary};
  border-top: 1px solid ${props => props.theme.colors.border}
`;
const FooterIconWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FooterIcon = styled.li`
  svg {
    font-size: 16px;
  }
`;
const TerminalItem = styled.div`
  display: inline-block;
  padding: 5px 10px;
  background: ${props => props.theme.colors.accent};
  transition: all .3s;
  &:hover {
    background: ${props => props.theme.colors.accentHover};
  }
}
`;
const ControlItem = styled.div`
  padding: 5px 10px;
  display: inline-flex;
  align-items: center;
  gap:5px;
  svg {
    margin-left: 5px;
  }
`;
const BellWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-right:10px;
  svg {
    margin-left: 5px;
  }
`;
function Footer() {
  return (
    <FooterWrap>
      <FooterIconWrap>
        <FooterIcon>
          <TerminalItem>
            <FaTerminal />
          </TerminalItem>
          <ControlItem>
            <VscSourceControl />0
            <VscError />0
          </ControlItem>
        </FooterIcon>
        <FooterIcon>
          <BellWrap>
            <IoMdWifi /> Go Live
            <FaRegBell />
          </BellWrap>
        </FooterIcon>
      </FooterIconWrap>
    </FooterWrap>
  )
}
export default Footer;