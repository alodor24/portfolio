import * as SC from "./Card.styles";

type Props = {
  name: string;
  type: string;
  image: string;
  tags?: string[];
  pathToProject?: string;
  pathToRepository?: string;
  textButtonProject?: string;
  textButtonRepository?: string;
};

const Card: React.FC<Props> = ({
  name,
  type,
  image,
  tags,
  pathToProject,
  pathToRepository,
  textButtonProject,
  textButtonRepository,
}) => {
  return (
    <SC.Wrapper>
      <SC.Header>
        <SC.ContainerImage src={image} alt={name} width={500} height={500} />
      </SC.Header>

      <SC.Body>
        <SC.Title>{name}</SC.Title>
        <p>{type}</p>
        <SC.Tags>
          <b>Tags:</b> <span>{tags?.join(", ")}</span>
        </SC.Tags>
      </SC.Body>

      <SC.Footer>
        {pathToProject !== "" && (
          <a href={pathToProject} target="_blank" rel="noreferrer">
            <i className="fas fa-external-link-alt" /> {textButtonProject}
          </a>
        )}
        {pathToProject !== "" && pathToRepository !== "" && "|"}
        {pathToRepository !== "" && (
          <a href={pathToRepository} target="_blank" rel="noreferrer">
            <i className="fas fa-code" /> {textButtonRepository}
          </a>
        )}
      </SC.Footer>
    </SC.Wrapper>
  );
};

export default Card;
