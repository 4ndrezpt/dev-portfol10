import "../styles/GridYCards.css";
import "../styles/Cards.css";

export const CardY = ({item}) => {

  return (
    <div className="CardY-container">
      <div className="CardY__header">
        <img src={item.images[0]} alt=""/>
      </div>
      <div className="CardY__body">
        <h5>{item.title}</h5>
        <h6>{item.brand}</h6>
        <p>{item.category}</p>
        <p>{item.description}</p>
      </div>
      <div className="CardY__footer">
        <span>{item.availabilityStatus}</span>
      </div>
    </div>
  );
}

export const CardFull = ({ transparent = false , children}) => {
  return (<div className="CardFull-container"
    style={{
      backgroundColor: transparent ? "transparent" : "#1b1c36"
    }}
  >
    { children ? children : null }

  </div>)
}
