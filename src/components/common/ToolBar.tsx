import { styled } from "styled-components";
import { Link } from "react-router-dom";
import reactIcon from "../../assets/images/react-icon.svg";
import { AiOutlineClose } from "react-icons/ai";

const Wrapper = styled.div`
  display: flex;
  background-color: #2d2d2d;

`;
const ToolBarItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding: 7px 15px;
  background-color: #2d2d2d;
  gap:5px;
  border-right: 1px solid #1e1e1e;
`;
const Img = styled.img`
  width: 20px;
`;

function ToolBar() {
  return (
    <Wrapper>
      <Link to="/">
        <ToolBarItem>
          <Img src={reactIcon} />
          Home
          <AiOutlineClose fontSize={14} />
        </ToolBarItem>
      </Link>
      <Link to="/about">
        <ToolBarItem>
          <Img src={reactIcon} />
          About
          <AiOutlineClose fontSize={14} />
        </ToolBarItem>
      </Link>

      <Link to="/project">
        <ToolBarItem>
          <Img src={reactIcon} />
          Project
          <AiOutlineClose fontSize={14} />
        </ToolBarItem>
      </Link>

      <Link to="/contact">
        <ToolBarItem>
          <Img src={reactIcon} />
          Contact
          <AiOutlineClose fontSize={14} />
        </ToolBarItem>
      </Link>
    </Wrapper>
  );
}

export default ToolBar;