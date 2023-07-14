import styled from "styled-components";
import { useState } from "react";
import { CatCard } from "../components";
import fetchCatData from "../api/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function BreedPage() {
  const [breeds, setBreeds] = useState([]);
  const navigate = useNavigate()
  function handleClick(id) {
    navigate(`/breeds/${id}`)
  }
  useEffect(() => {
    async function fetchBreeds() {
      try {
        const data = await fetchCatData("breeds");
        let newData = await Promise.all(
          data.map(async (item) => {
            const imageId = item.reference_image_id;
            const image = imageId
              ? await fetchCatData(`images/${imageId}`)
              : "";
            return { ...item, image };
          })
        );
        setBreeds(newData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBreeds();
  });
  return (
    <Div>
      <H2>Breed List</H2>
      <CatList>
        {breeds.map((breed) => (
          <CatCard
            key={breed.id}
            id={breed.id}
            name={breed.name}
            image={breed.image.url}
            click={handleClick}
          />
        ))}
      </CatList>
    </Div>
  );
}

export default BreedPage;

const Div = styled.div`
  padding: 5rem 10rem;
`;
const H2 = styled.h2``;
const CatList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
`;
