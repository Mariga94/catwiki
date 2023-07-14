import styled from "styled-components";
import logo from "../assets/logo.svg"
function Footer() {
  return (
    <FooterDiv>
      <Img4 src={logo}/>
      <FooterPara>created by username - devChallenge.io 2021</FooterPara>
    </FooterDiv>
  );
}

export default Footer;

// styled

const Img4 = styled.img`
  width: 7rem;
`;
const FooterDiv = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background: #000;
  height: 7rem;
  width: 100%;
  border-top-left-radius: 1.75rem; /* Add border radius to top left */
  border-top-right-radius: 1.75rem; /* Add border radius to top right */
  padding: 2rem 6rem;
`;

const FooterPara = styled.p``;

