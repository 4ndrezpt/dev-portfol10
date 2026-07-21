import { PrimaryButton } from "./ButtonBase";
import { useState } from "react";
import { useFormId } from "../hooks/useFormId";
import "../styles/Contact.css";

export const ContactComponent = () => {
  const [completeForm, setCompleteForm] = useState({});
  const initialForm = {
    id: { value: "", isValid: true},
    name : { value: "", isValid: null},
    email : { value: "", isValid: null},
    title : { value: "", isValid: null},
    subject : { value: "", isValid: null},
  }
  const onHandleSubmit = () => {
    setCompleteForm(initialForm);
  }
  const { name, email, title, subject, handleChange, handleSubmit } = useFormId(initialForm, onHandleSubmit)

  return (<main>
    <div className="Contact-container">
      <form action="" method="POST" onSubmit={handleSubmit} >
        <div className="header">
          <h4>Send me an email: </h4>
          <h4>medstrings6@gmail.com</h4>
        </div>
        <fieldset>
          <legend>User Information</legend>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name"
          value={name.value}
          onChange={handleChange}
          />
          {name.value === "" ? null : name.isValid == true ? null :
             <label style={{ backgroundColor: "darkred", width: "90%"}}
          >Please. Check this element it may contain errors</label>
          }
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email"
          value={email.value}
          onChange={handleChange}
          />
          {email.value === "" ? null : email.isValid == true ? null :
             <label style={{ backgroundColor: "darkred", width: "90%"}}
          >Please. Check this element it may contain errors</label>
          }
        </fieldset>
        <fieldset>
          <legend>Subject: </legend>
          <label htmlFor="title">Subject:</label>
          <input type="text" id="title" name="title"
            value={title.value}
            onChange={handleChange}
          />
          {title.value === "" ? null : title.isValid == true ? null :
             <label style={{ backgroundColor: "darkred", width: "90%"}}
          >Please. Check this element it may contain errors</label>
          }
          <label htmlFor="subject">Message: </label>
          <textarea cols="40" rows="10"
            id="subject" name="subject"
            value={subject.value}
            onChange={handleChange}
          ></textarea>
          {subject.value === "" ? null : subject.isValid == true ? null :
             <label style={{ backgroundColor: "darkred", width: "90%"}}
          >Please. Check this element it may contain errors</label>
          }
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
