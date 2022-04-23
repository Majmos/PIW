function AddStudent() {

    return (
        <div className="formBox">
            <h1 className="formLabel">Nowe ogłoszenie</h1>
            <form>
                <div>  
                    <label>
                        Nazwa:
                        <input placeholder="Nazwa" type={"text"}/>
                    </label>
                </div>
                <div><input placeholder="E-mail" type={"email"}/></div>
                <div><textarea placeholder="Opis"/></div>
                <div>
                    <input placeholder="Tag" type={"text"}/><button className="formButton">Dodaj</button>
                </div>
                <div>
                    <input placeholder="Przedmiot" type={"text"}/><button className="formButton">Dodaj</button>
                </div>
                <input className="submitButton" value={"Dodaj ogłoszenie"} type={"submit"}/>
            </form>
        </div>
    );
}

export default AddStudent;