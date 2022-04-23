function AddStudent() {

    return (
        <div className="formBox">
            <h1>Nowe ogłoszenie</h1>
            <form>
                <div className="formElement">  
                    <label>Nazwa:</label>
                    <input placeholder="Nazwa" type={"text"}/>
                </div>
                <div className="formElement">
                    <label>E-mail:</label>
                    <input placeholder="E-mail" type={"email"}/></div>
                <div className="formElement">
                    <label>Opis:</label>
                    <textarea placeholder="Opis"/></div>
                <div className="formElement">
                    <label>Tag:</label>
                    <div className="inputBox">
                        <input placeholder="Tag" type={"text"}/><button className="formButton">Dodaj</button>
                    </div>
                </div>
                <div className="formElement">
                    <label>Przedmiot:</label>
                    <div className="inputBox">
                        <input placeholder="Przedmiot" type={"text"}/><button className="formButton">Dodaj</button>
                    </div>
                </div>
                <input className="submitButton" value={"Dodaj ogłoszenie"} type={"submit"}/>
            </form>
        </div>
    );
}

export default AddStudent;