import "../styles/GridText.css";

export const GridText = ({children}) => {
  return (<section className="GridText-container">
    <div className="GridText-layout">
      { children }
    </div>
  </section>)
}
