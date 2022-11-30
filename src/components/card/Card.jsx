import './card.scss';

export const Card = (props) => {
  const { img, title } = props;
  return (
    <div className="container-card">
      <div className="container-img">
        <img src={img.imageUrl} alt={title} />
      </div>
      <h3>{title}</h3>
    </div>
  );
};
