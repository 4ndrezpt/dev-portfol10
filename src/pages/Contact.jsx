import { ContactComponent } from "../components/ContactComponent";


export const Contact = () => {
  return (
    <main>
      <h2 style={{
        width: "100%",
        color: "var(--main-color)",
        textAlign: "center"
      }}>Contact </h2>
      <ContactComponent>
      </ContactComponent>
    </main>);
}
