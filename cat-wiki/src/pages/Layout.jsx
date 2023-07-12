import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import Epic from "../assets/Epic-icon.jpg";
const Layout = () => {
  return (
    <>
      {/* <Nav>
        
        <Ul>
          <Li>
            <Link to="/">Home</Link>
          </Li>
          <Li>
            <Link to="/breeds">Breeds</Link>
          </Li>
          <Li>
            <Link to="/random">Random Dog</Link>
          </Li>
        </Ul>
      </Nav> */}
      <Outlet />
    </>
  );
};

// Styled components

const LogoImg = styled.img`
  height: 2.9375rem;
  max-width: 6.5rem;
  margin-right: auto;
  margin-left: 2rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 6.25rem;
  background: #152935;
  color: #fff;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin-right: 20rem;
`;

const Li = styled.li`
color: #fff`;



export default Layout;
