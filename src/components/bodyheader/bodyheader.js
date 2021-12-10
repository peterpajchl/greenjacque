import './bodyheader.css';

function BodyHeader({title, detail}) {

  return (
    <div className="body-header">
      <h3 className="body-header__title">{title}</h3>
      <div className="body-header__counter">{detail}</div>
    </div>
  );
}

export default BodyHeader;