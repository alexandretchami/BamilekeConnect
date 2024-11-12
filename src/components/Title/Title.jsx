import "./Title.css";

// eslint-disable-next-line react/prop-types
const Title = ({ title, subTitle }) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

export default Title;
