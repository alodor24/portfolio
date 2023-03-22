import * as SC from "./ProgressBar.styles";

type Props = {
  name: string;
  range: number;
};

const ProgressBar: React.FC<Props> = ({ name, range }) => {
  return (
    <SC.Wrapper>
      <p className="textFlow">{name}</p>

      <SC.Progress>
        <SC.ProgressBar width={range}>{range}%</SC.ProgressBar>
      </SC.Progress>
    </SC.Wrapper>
  );
};

export default ProgressBar;
