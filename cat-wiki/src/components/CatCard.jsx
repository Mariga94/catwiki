import styled from "styled-components";
import PropTypes from "prop-types";
export default function CatCard(props) {
  const { id, name, image, click } = props;
  return (
    <CardCat id={id} onClick={() => click(id)}>
      <ImgCard src={image} />
      <SpanText>{name}</SpanText>
    </CardCat>
  );
}

CatCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  click: function () {
    undefined;
  },
};
// styles
const CardCat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  &:hover {
    color: #e7a61a;
  }
`;
const ImgCard = styled.img`
  width: 22.375rem;
  height: 18.375rem;
  flex-shrink: 0;
  border-radius: 1.5rem;
  transition: box-shadow 0.3s ease;
  &:hover {
    -webkit-box-shadow: -8px 1px 5px 0px rgba(231, 166, 26, 1);
    -moz-box-shadow: -8px 1px 5px 0px rgba(231, 166, 26, 1);
    box-shadow: -8px 1px 5px 0px rgba(231, 166, 26, 1);
  }
`;
const SpanText = styled.span`
  color: #291507;
  font-family: Montserrat;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 600;
`;
