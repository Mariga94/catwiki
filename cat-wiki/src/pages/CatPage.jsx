import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchCatData from "../api/api";
import { Check } from "../components";
export default function CatPage() {
  const { id } = useParams();
  const [breed, setBreed] = useState({});

  useEffect(() => {
    async function fetchBreed() {
      try {
        const data = await fetchCatData(`breeds/${id}`);
        const image = await fetchCatData(`images/${data.reference_image_id}`);
        const newData = { ...data, image };
        setBreed(newData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBreed();
  }, [id]);
  console.log(breed);
  return (
    <CatDiv>
      {breed && (
        <FlexDiv>
          <ImageDiv src={breed.image.url} />
          <CatInfoDiv>
            <CatTitle>{breed.name}</CatTitle>
            <CatPara>{breed.description}</CatPara>
            <CatPara>
              <BoldText>Temperament: </BoldText>
              {breed.temperament}
            </CatPara>
            <CatPara>
              <BoldText>Origin: </BoldText>
              {breed.origin}
            </CatPara>
            <CatPara>
              <BoldText>Life Span: </BoldText>
              {breed.life_span} years
            </CatPara>
            <CatPara>
              <CheckDivCont>
                <BoldText>Adaptability: </BoldText>
                {Array(breed.adaptability).fill(<Check />)}
              </CheckDivCont>
            </CatPara>
            <CatPara>
              <CheckDivCont>
                <BoldText>Affection level: </BoldText>
                {Array(breed.affection_level).fill(<Check />)}
              </CheckDivCont>
            </CatPara>
            <CatPara>
              <CheckDivCont>
                <BoldText>Child Friendly: </BoldText>
                {Array(breed.child_friendly).fill(<Check />)}
              </CheckDivCont>
            </CatPara>
            <CatPara>
              <CheckDivCont>
                <BoldText>Grooming: </BoldText>
                {Array(breed.grooming).fill(<Check />)}
              </CheckDivCont>
            </CatPara>
            <CatPara>
              <CheckDivCont>
                <BoldText>Intelligence: </BoldText>
                {Array(breed.intelligence).fill(<Check />)}
              </CheckDivCont>
            </CatPara>
            <CatPara>
              <CheckDivCont>
                <BoldText>Health issues: </BoldText>
                {Array(breed.health_issues).fill(<Check />)}
              </CheckDivCont>
            </CatPara>
            <CatPara>
              <CheckDivCont>
                <BoldText>Social needs: </BoldText>
                {Array(breed.social_needs).fill(<Check />)}
              </CheckDivCont>
            </CatPara>
            <CatPara>
              <CheckDivCont>
                <BoldText>Stranger friendly: </BoldText>
                {Array(breed.stranger_friendly).fill(<Check />)}
              </CheckDivCont>
            </CatPara>
          </CatInfoDiv>
        </FlexDiv>
      )}
    </CatDiv>
  );
}

const CheckDivCont = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const CatDiv = styled.div`
  padding: 5rem 10rem;
`;
const FlexDiv = styled.div`
  display: flex;
  gap: 7rem;
`;
const ImageDiv = styled.img`
  width: 38.19031rem;
  height: 23.19031rem;
  flex-shrink: 0;
  border-radius: 1.5rem;
`;
const CatInfoDiv = styled.div``;
const CatTitle = styled.h2`
  color: #291507;
  font-family: Montserrat;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const CatPara = styled.p`
  color: #291507;
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const BoldText = styled.span`
  font-weight: 700;
`;
