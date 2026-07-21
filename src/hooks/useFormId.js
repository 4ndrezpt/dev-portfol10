import { useState } from 'react';
import { v4 as uuid } from "uuid";

export const useFormId = (initialForm = {}, onSubmit) => {
  const [formState, setFormState] = useState(initialForm);

  //show data in the inputs
  const handleChange = ({ target }) => {
    const { name, value } = target;
    let validation = validateField(formState[name], target.name)
    setFormState({
      ...formState,
      [name]: {
        value: value,
        isValid : validation
      }
    })
  }
  //Some Validation patterns
  const patterns = {
    name: /^[a-zA-ZÄ-ÿ\s]{3,60}$/,
    title: /\w{3,}/,
    subject: /\w{3,}/,
    description: /^[\s\S]{4,100}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    pasword:  /^(?=.[A-Z])(?=.[a-z])(?=.[0-9])(?=.[#?!@$%^&*-]).{8,}$/,
    //email: /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+.(com|net|org)/,
    code: /^\d{3,14}/,
    document: /^\d{7,14}$/,
    phone: /^\d{7,14}$/,
    date: /^\d{4}(:|-)\d{2}/,
    hour: /^\d{2}:\d{2}\s?/
  }
  const validateField = (arg, type) => {
    arg = arg.value ? arg.value.trim() : "";
    //console.log(patterns[type], type)
    let regex = patterns[type];
    if (arg === "") {
      return `${arg} is empty`
    } else {
      return regex.test(arg);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    //cambar el id cuando se enviar la info
    setFormState({
      ...formState,
      //assign and id to the form (object)
      id: { value: uuid(), isValid: true }
    })
    // validate the fields to send store the data

    // send data to another component if theres no DDBB(optional)
    onSubmit({ ...formState });

    if (verifyInputs(formState)){
      sendEmail(formState);
    } else {
      console.error("Can't send email, something went wrong!")
    }
    // Clear the inputs after send the information

    const clearInput = () => {
      setFormState(
        {
          id: { value: uuid(), isValid: true },
          name: { value: "", isValid: null },
          email: { value: "", isValid: null },
          title: { value: "", isValid: null },
          subject: { value: "", isValid: null },
        }
      );
    }
    //clearInput();
  }
  const verifyInputs = (form) => {
    let valid = false;
    for (let i in form) {
      if (form[i].isValid) {
        valid = true;
      }
    }
    return valid;
  }
  const sendEmail = async (form) => {

    const simplified = {
      id: form["id"].value,
      name: form["name"].value,
      email: form["email"].value,
      title: form["title"].value,
      subject: form["subject"].value,
    }
    const response = await fetch("/.netlify/functions/formContact",
      {
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin': "*",
          'Access-Control-Allow-Headers': "Content-Type, Authorization",
          'Access-Control-Allow-Methods': "POST",
          "Content-Type":"application/json"
        },
        body: JSON.stringify(simplified)
      })
    .then(()=> console.log("Message correctly sended"))
    .catch(error => console.error("Error sending message", error))
    console.log("We expecting to send an email from here", simplified)
  }

  return {
    ...formState,
    formState,
    handleChange,
    handleSubmit
  }
}
