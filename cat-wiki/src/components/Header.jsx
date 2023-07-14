import SearchBar from "./SearchBar";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import heroImage from "../assets/heroImage.png";
import bengal from "../assets/bengal.jpg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <HeaderDiv>
      <SectionH>
        <Img5 src={logo} />
        <HeaderP>Get to know more about your cat breed</HeaderP>
        <SearchBar />
      </SectionH>
      <SectionDiv>
        <P>Most Searched Breeds</P>
        <StyledLink to="/breeds">
          66+ Breeds For you to discover
        </StyledLink>
        <SectionDiv1>
          <ImgDiv>
            <Img src={bengal} />
            <ImgLabel>Bengal</ImgLabel>
          </ImgDiv>
          <ImgDiv>
            <Img src={bengal} />
            <ImgLabel>Bengal</ImgLabel>
          </ImgDiv>
          <ImgDiv>
            <Img src={bengal} />
            <ImgLabel>Bengal</ImgLabel>
          </ImgDiv>
          <ImgDiv>
            <Img src={bengal} />
            <ImgLabel>Bengal</ImgLabel>
          </ImgDiv>
        </SectionDiv1>
      </SectionDiv>
    </HeaderDiv>
  );
}
export default Header;

// styled components

const Img5 = styled.img`
  width: 25rem;
`;
const HeaderDiv = styled.header`
  width: 100%;
`;

const SectionH = styled.section`
  background: url(${heroImage}) no-repeat center/cover lightgray;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 45rem;
  padding: 9rem 10rem;
`;

const HeaderP = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  font-family: "Montserrat", sans-serif;
`;

const SectionDiv = styled.section`
  background-color: #e3e1dc;
  margin: 0;
  padding: 5rem 10rem;
  border-bottom-left-radius: 1.75rem; /* Add border radius to top left */
  border-bottom-right-radius: 1.75rem; /* Add border radius to top right */
`;
const P = styled.p`
  color: #291507;
  font-family: Montserrat;
  font-size: 1.125rem;
  font-weight: 500;
`;


const StyledLink = styled(Link)`
  display: flex;
  width: 33.55825rem;
  flex-direction: column;
  flex-shrink: 0;
  color: #291507;
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  opacity: 1;
  margin: 2rem 0;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.5
  }
`;

const SectionDiv1 = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3.19rem;
`;
const Img = styled.img`
  border-radius: 1.5rem;
  width: 13.75rem;
  height: 13.75rem;
`;

const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const ImgLabel = styled.span`
  color: #291507;
  font-family: "Montserrat", sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
`;
