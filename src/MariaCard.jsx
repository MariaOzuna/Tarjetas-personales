const MariaCard = ({ name, description, estudios }) => {
  return (
    <div
        className="card rounded-5 text-center shadow border border-dark-subtle bg-light bg-gradient uniform-card">
        <div className="bg-image-maria p-5 rounded-top-5">
            <img
                src="/img/maria.png"
                className="card-img-center border-4 w-50 h-50"
                alt="Foto de perfil"
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: "50%",
                    objectFit: "cover",
                }}
            />
        </div>
        <div className="card-body">
            <h5 className="card-title style-script-regular">{name}</h5>
            <p className="card-text my-4 px-5 inter-regular text-muted">
                {description}
            </p> 
            <p className="card-text my-4 px-5 inter-regular text-muted"> {estudios} </p>

            <div className="btn-group gap-2 d-flex justify-content-center flex-wrap">
                <button
                    onClick={() =>
                        window.open("https://github.com/MariaOzuna", "_blank")
                    }
                    className="btn btn-outline-secondary rounded-4 inter-regular"
                >
                    Github
                    <img
                        className="img-fluid mb-1 ms-1"
                        style={{ width: "20px" }}
                        src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
                        alt="Github"
                    />
                </button>
                <button
                    onClick={() =>
                        window.open(
                            "https://www.linkedin.com/in/maria-ozuna/",
                            "_blank",
                        )
                    }
                    className="btn btn-outline-primary rounded-4 inter-regular"
                >
                    Linkedin
                    <img
                        className="img-fluid mb-1 ms-1"
                        style={{ width: "20px" }}
                        src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                        alt="Linkedin"
                    />
                </button>
                <button
                    onClick={() =>
                        window.open("https://wa.me/543454347792?text=Estoy%20interesado/a%20en%20trabajar%20contigo", "_blank")
                    }
                    className="btn btn-outline-success rounded-4 inter-regular"
                >
                    Whatsapp
                    <img
                        className="img-fluid mb-1 ms-1"
                        style={{ width: "20px" }}
                        src="https://img.icons8.com/?size=100&id=30448&format=png&color=000000"
                        alt="Whatsapp"
                    />
                </button>
            </div>
        </div>
    </div>
);
};

export default MariaCard;