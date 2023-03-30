import * as SC from "./Loader.styles";

const Loader = () => {
  return (
    <SC.Wrapper>
      <SC.Spin
        src="/assets/images/loader.png"
        alt="loader"
        width={95}
        height={100}
        priority
      />
    </SC.Wrapper>
  );
};

export default Loader;
