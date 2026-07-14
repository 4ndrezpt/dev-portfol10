import { ButtonBase } from "../components/ButtonBase";
import "../styles/NotFound.css";

export const NotFound = () => {
  return (
    <main className="main-notfound">
      <div className="image-container">
        <h1>😶</h1>
      </div>
      <div className="error-container">
        <h1>404 - Not Found</h1>
      </div>
      <div className="options-container">
        <h3>Not found resource</h3>
        <p>It seems your navigating out of known space..</p>
        <ButtonBase
          label="Go back to safety"
          className="warning"
        >
          <a href="/">Back to Home</a>
        </ButtonBase>
      </div>
    </main>
  );
}
