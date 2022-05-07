import { useState } from "react";

const SendMassage = () => {
  const [modal, setModal] = useState("modal");
  const handleSubmit = (e) => {
    e.preventDefault();
    setModal("modal-active");
    e.target.reset();
  };

  return (
    <>
      <div onAnimationEnd={() => setModal("modal")} className={modal}>
        <div>Wiadomość wysłana!</div>
      </div>
      <div className="formBox">
        <h1>Wyślij wiadomość:</h1>
        <form onSubmit={handleSubmit}>
          <div className="formElement">
            <label>Tytuł:</label>
            <input required placeholder="Tytuł" type={"text"} />
          </div>
          <div className="formElement">
            <label>Email nadawcy:</label>
            <input required placeholder="example@gmail.com" type={"email"} />
          </div>
          <div className="formElement">
            <label>Wiadomość:</label>
            <textarea required></textarea>
          </div>
          <input value={"Wyślij"} className="submitButton" type={"submit"} />
        </form>
      </div>
    </>
  );
};

export default SendMassage;