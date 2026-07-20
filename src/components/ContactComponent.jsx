import { PrimaryButton } from "./ButtonBase"
import "../styles/Contact.css";

export const ContactComponent = () => {
  return (<main>
    <div className="Contact-container">
      <form action="" method="">
        <div className="header">
          <h4>medstrings6@gmail.com</h4>
        </div>
        <fieldset>
          <legend>User Information</legend>
          <label htmlFor="">Name: </label>
          <input type="text" />
          <label htmlFor="">Email: </label>
          <input type="email" />
        </fieldset>
        <fieldset>
          <legend>Subject: </legend>
          <label htmlFor="">Subject:</label>
          <input type="text" />
          <label htmlFor="">Message: </label>
          <textarea cols="40" rows="10"></textarea>
        </fieldset>
        <PrimaryButton
          className="warning"
          label="Submit"
          type="submit"
        ></PrimaryButton>
      </form>
    </div>
  </main>)
}
