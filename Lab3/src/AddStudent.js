function AddStudent() {

    return (
        <form>
            <div className="formBox">
                <label className="formLabel">Nowe ogłoszenie</label>
                <label>
                    Nazwa:
                    <input placeholder="Nazwa" type={"text"}/>
                </label>
                <input placeholder="E-mail" type={"email"}/>
                <textarea placeholder="Opis"/>
                <div>
                    <input placeholder="Tag" type={"text"}/><button className="formButton">Dodaj</button>
                </div>
                <div>
                    <input placeholder="Przedmiot" type={"text"}/><button className="formButton">Dodaj</button>
                </div>
            </div>
            <input className="submitButton" value={"Dodaj ogłoszenie"} type={"submit"}/>
        </form>
    );
}

export default AddStudent;