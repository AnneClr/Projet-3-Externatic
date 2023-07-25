// Imports des packages
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

// Import des components
import OfferCardCarousel from "../components/OfferCardCarousel";
import Error404 from "../components/Error404";
import Error401Unauthorized from "../components/Error401Unauthorized";
import ErrorNoData from "../components/ErrorNoData";

// Import du context
import TokenContext from "../contexts/TokenContext";
import MessagesErrorContext from "../contexts/MessagesErrorContext";

// Import des assets
import externaticHello from "../assets/icons/externatic-hello.svg";
import externaticSablier from "../assets/icons/externatic-sablier.svg";
import rocketPink from "../assets/icons/rocket_pink.svg";
import imageHeader from "../assets/images/header_image.svg";

function Home() {
  const [offersList, setOffersList] = useState([]);
  const [dataUser, setDataUser] = useState();
  const { userToken, userId, userRole } = useContext(TokenContext);
  const { messages } = useContext(MessagesErrorContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers`)
      .then((results) => setOffersList(results.data));
  }, []);
  useEffect(() => {
    if (userId && userToken) {
      axios
        .get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/users/${userId}?role=${userRole}`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        )
        .then((results) => {
          setDataUser(results.data[0]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userId, userToken]);

  return (
    <>
      <div className="containerHome">
        <img
          className="imageContainer"
          src={imageHeader}
          alt="illustration recruteur candidat"
        />
      </div>
      {userToken ? (
        <h1 className="userConnected">
          Bienvenue{" "}
          {userRole === "company" ? dataUser?.name : dataUser?.firstname} !{" "}
        </h1>
      ) : (
        <h1 className="userNotConnected">
          Bienvenue sur Externatic <br />
          Votre cabinet de recrutement informatique{" "}
        </h1>
      )}
      <div className="offersListCardLargeContainer">
        {offersList.length ? (
          <OfferCardCarousel offersList={offersList} />
        ) : null}
      </div>
      <section className="descriptionHomePage">
        <h1 className="titleDescription">
          La réussite de notre cabinet de recrutement informatique ?
        </h1>
        <div className="containerDescription">
          <div className="aboutExternatic">
            <div className="textAndIcon">
              <img
                className="icon hand"
                src={externaticHello}
                alt="icone main"
              />
              <h2>Notre proximité</h2>
            </div>
            <p className="textDescription">
              L'expérience professionnelle est une chose. L'expérience de vie en
              est une autre. Alors nos consultants prennent le temps de faire
              connaissance avec chaque personne, pour comprendre le contexte, le
              parcours, les envies et les projets.
            </p>
          </div>
          <div className="aboutExternatic">
            <div className="textAndIcon">
              <img className="icon rocket" src={rocketPink} alt="icone fusée" />
              <h2>Notre performance</h2>
            </div>
            <p className="textDescription">
              Notre réseau est une force et nous y travaillons sans relâche.
              Notre expérience nous permet d'identifier les vrais besoins d'une
              entreprise et de ceux qui la rejoignent.
            </p>
          </div>
          <div className="aboutExternatic">
            <div className="textAndIcon">
              <img
                className="icon hourglass"
                src={externaticSablier}
                alt="icone sablier"
              />
              <h2>Notre durabilité</h2>
            </div>
            <p className="textDescription">
              Notre challenge est de trouver l'équipe qui fonctionnera ensemble
              de manière professionnelle et personnelle, pour aller jusqu'au
              bout d'un projet commun. Notre responsabilité vis-à-vis des
              impacts de nos décisions et nos actions sur le long terme
              correspond également à notre politique RSE.
            </p>
          </div>
        </div>
      </section>
      <Error404 message={messages.notFound} />
      <Error401Unauthorized message={messages.unauthorized} />
      <ErrorNoData message={messages.result} />
    </>
  );
}

export default Home;
