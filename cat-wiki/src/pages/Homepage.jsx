import styled from "styled-components";
import { Header, Footer } from "../components";
import mosaic from "../assets/Mosaic.png";
export default function HomePage() {
  return (
    <HomeDiv>
      <Header />
      <SectionDiv2>
        <SectionDiv3>
          <H3Sec>Why should you have a cat?</H3Sec>
          <Ps>
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </Ps>
          <Span>READ MORE</Span>
        </SectionDiv3>
        <Img3 src={mosaic} />
      </SectionDiv2>
      <Footer />
    </HomeDiv>
  );
}

const Span = styled.span`
  color: rgba(41, 21, 7, 0.6);
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  width: 8.297rem;
  flex-direction: column;
  flex-shrink: 0;
`;
const HomeDiv = styled.div``;

const SectionDiv2 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5rem 10rem;
  justify-content: space-between;
`;

const H3Sec = styled.h3`
  color: #291507;
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
`;

const SectionDiv3 = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  gap: 2.75rem;
`;

const Ps = styled.p`
  color: #291507;
  font-family: Montserrat;
  font-size: 1.125rem;
  font-weight: 500;
`;
const Img3 = styled.img`
  width: 100%;
`;
