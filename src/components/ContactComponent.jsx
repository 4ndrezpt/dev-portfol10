export const ContactComponent = () => {
  return (<main>
    <h2 style={{
      width: "100%",
      color: "var(--main-color)",
      textAlign: "center"
    }}>Contact Page</h2>
    <div className="Contact-container">
      <form action="" method="">
        <div className="Contact__header">
          <h4>medstrings6@gmail.com</h4>
        </div>
        <fieldset>
          <legend>User Information</legend>
          <label htmlFor="">Email</label>
          <input type="email" />
          <label htmlFor="">Topic</label>
          <input type="text" />
        </fieldset>
        <fieldset>
          <legend></legend>
        </fieldset>
      </form>
    </div>
  </main>)
}
