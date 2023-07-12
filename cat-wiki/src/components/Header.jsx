import SearchBar from "./SearchBar";
import bg from "../assets/dog-image.jpg";
import Epic from "../assets/Epic-icon.jpg";
import styled from "styled-components";
function Header() {
  return <HeaderDiv>
    <H1>Catwiki</H1>
    <p>Get to know more about your cat breed</p>
  </HeaderDiv>;
}
export default Header;

// styled components
const HeaderDiv = styled.header``;
const H1 = styled.h1``
// background: url(<path-to-image>), lightgray 0px -170px / 100% 153.125% no-repeat, #ECEBF1;
