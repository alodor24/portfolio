import * as SC from "./Card.styles";

type Props = {
  name: string;
  type: string;
  image: string;
  url: string;
  textButton: string;
};

const Card: React.FC<Props> = ({ name, type, image, url, textButton }) => {
  return (
    <SC.Wrapper>
      <SC.Header>
        <a href={url} target="_blank" rel="noreferrer">
          <SC.ContainerImage src={image} alt={name} width={500} height={500} />
        </a>
      </SC.Header>

      <SC.Body>
        <SC.Title>{name}</SC.Title>
        <p>{type}</p>
      </SC.Body>

      <SC.Footer>
        <a href={url} target="_blank" rel="noreferrer">
          <i className="fas fa-external-link-alt" /> {textButton}
        </a>
      </SC.Footer>
    </SC.Wrapper>
  );
};

export default Card;
