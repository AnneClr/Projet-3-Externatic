import React, { useState } from "react";
import "../css/pages/MyProfile.css";
import identificationBlack from "../assets/icons/identification_black.svg";
import mailBlack from "../assets/icons/mail_black.svg";
import mobileBlack from "../assets/icons/mobile_black.svg";
import cityBlack from "../assets/icons/black_city.svg";
import whiteTrash from "../assets/icons/white_trash.svg";
import lockBlack from "../assets/icons/lock_black.svg";

function MyProfile() {
  const [errors, setErrors] = useState({});
  const [telephoneError, setTelephoneError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérification des champs
    const { nom, prenom, email, password, localisation } =
      event.target.elements;
    const newErrors = {};

    if (!nom.value.trim()) {
      newErrors.nom = "Veuillez saisir votre nom.";
    }
    if (!prenom.value.trim()) {
      newErrors.prenom = "Veuillez saisir votre prenom.";
    }

    if (!email.value.trim()) {
      newErrors.email = "Veuillez saisir votre adresse e-mail.";
    }

    if (!password.value.trim()) {
      newErrors.password = "Veuillez saisir votre mot de passe.";
    }
    if (!localisation.value.trim()) {
      newErrors.localisation = "Veuillez saisir votre ville.";
    }

    setErrors(newErrors);

    // Soumettre le formulaire si aucune erreur
    if (Object.keys(newErrors).length === 0) {
      // Effectuer l'action de soumission du formulaire ici
    }
  };
  const validateTelephone = (value) => {
    const regex = /^\d{10}$/; // Expression régulière pour vérifier si la valeur contient exactement 10 chiffres
    if (!regex.test(value)) {
      setTelephoneError(
        "Veuillez saisir un numéro de téléphone valide (10 chiffres)."
      );
    } else {
      setTelephoneError("");
    }
  };

  return (
<<<<<<< HEAD
    <div>
      <div className="containerForm">
        {/* My_Profile Candidat */}
        <h4 className="myProfil">Modifier mon profil</h4>
        <div className="containerForm_2">
          <form onSubmit={handleSubmit} className="allForm">
            <div className="button-ratio">
              <div className="groupRadio">
                <label htmlFor="genreInput">Genre:</label>
                <label htmlFor="femmeInput">Femme</label>
                <input
                  id="femmeInput"
                  type="radio"
                  value="option1"
                  name="genre"
                  defaultChecked
                />
                <label htmlFor="hommeInput">Homme</label>
                <input
                  id="hommeInput"
                  type="radio"
                  value="option2"
                  name="genre"
                />
                <label htmlFor="autreInput">Autre</label>
                <input
                  id="autreInput"
                  type="radio"
                  value="option3"
                  name="genre"
                />
              </div>
            </div>

            <div className="input">
              <img
                className="iconForm"
                src={identificationBlack}
                alt="person"
              />
              <input
                type="text"
                placeholder="Nom"
                name="nom"
                className="inputForm"
              />
              {errors.nom && <small className="error">{errors.nom}</small>}
            </div>

            <div className="input">
              <img
                className="iconForm"
                src={identificationBlack}
                alt="person"
              />
              <input
                type="text"
                placeholder="Prenom"
                name="prenom"
                className="inputForm"
              />
              {errors.prenom && (
                <small className="error">{errors.prenom}</small>
              )}
            </div>
            <div className="input">
              <img className="iconForm" src={mailBlack} alt="person" />
              <input
                type="email"
                placeholder=" Email"
                name="email"
                className="inputForm"
              />
              {errors.email && <small className="error">{errors.email}</small>}
            </div>
            <div className="input">
              <img className="iconForm" src={lockBlack} alt=" lock" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="inputForm"
              />
              {errors.password && (
                <small className="error">{errors.password}</small>
              )}
            </div>

            <div className="input">
              <img className="iconForm" src={mobileBlack} alt="mobile" />
              <input
                type="tel"
                placeholder="Téléphone"
                name="telephone"
                className="inputForm"
                onChange={(e) => validateTelephone(e.target.value)}
              />
              {telephoneError && <div className="error">{telephoneError}</div>}
            </div>

            <div className="input">
              <img className="iconForm" src={cityBlack} alt="city" />
              <input
                type="text"
                placeholder="ville de residence"
                name="localisation"
                className="inputForm"
              />
              {errors.localisation && (
                <small className="error">{errors.localisation}</small>
              )}
            </div>

            <button className="registerButton" type="submit">
              J'enregistre
            </button>
          </form>
        </div>
      </div>
      <form>
        <div className="containerModif">
          <h4 className="myProfil2">Modifier mon mot de passe</h4>

          <div className="allForm">
            <div className="input">
              <img className="iconForm" src={lockBlack} alt="lock" />
              <input
                type="text"
                placeholder="Ancien mot de passe"
                name="ancienMdp"
                className="inputForm"
              />
              <small className="error">{errors.password}</small>
            </div>
            <div className="input">
              <img className="iconForm" src={lockBlack} alt="lock" />
              <input
                type="text"
                placeholder="Nouveau mot de passe"
                name="nouveauMdp"
                className="inputForm"
              />
              <small className="error">{errors.password}</small>
            </div>
            <div className="input">
              <img className="iconForm" src={lockBlack} alt="lock" />
              <input
                type="email"
                placeholder="Confirmer mot de passe"
                name="newMdp"
                className="inputForm"
              />
              <small className="error">{errors.password}</small>
            </div>
            <button type="submit" className="registerButton">
              J'enregistre
            </button>

            <div className="input2">
              <button type="submit" className="deleteButton">
                <img className="iconForm2" src={whiteTrash} alt="clean" />
                Je supprime mon compte
              </button>
            </div>
=======
    <div className="myProfileSection">
      {/* My_Profile Candidat */}
      <form onSubmit={handleSubmit} className="form">
        <h2>Modifier mon profil</h2>
        <div className="groupRadio">
          <div className="containerRadioInput">
            <label htmlFor="femmeInput" className="labelRadioInput">
              Femme
            </label>
            <input
              id="femmeInput"
              className="radioInput"
              type="radio"
              value="option1"
              name="genre"
              defaultChecked
            />
          </div>
          <div className="containerRadioInput">
            <label htmlFor="hommeInput" className="labelRadioInput">
              Homme
            </label>
            <input
              id="hommeInput"
              className="radioInput"
              type="radio"
              value="option2"
              name="genre"
            />
          </div>
          <div className="containerRadioInput">
            <label htmlFor="autreInput" className="labelRadioInput">
              Autre
            </label>
            <input
              id="autreInput"
              className="radioInput"
              type="radio"
              value="option3"
              name="genre"
            />
>>>>>>> b59e0bd6729563b18d770059ce42f087332ff103
          </div>
        </div>

        <div className="containerTextInput">
          <img className="iconForm" src={identificationBlack} alt="person" />
          <input
            type="text"
            placeholder="Nom"
            name="nom"
            className="textInput"
          />
          {errors.nom && <small className="error">{errors.nom}</small>}
        </div>

        <div className="containerTextInput">
          <img className="iconForm" src={identificationBlack} alt="person" />
          <input
            type="text"
            placeholder="Prénom"
            name="prenom"
            className="textInput"
          />
          {errors.prenom && <small className="error">{errors.prenom}</small>}
        </div>
        <div className="containerTextInput">
          <img className="iconForm" src={mailBlack} alt="person" />
          <input
            type="email"
            placeholder=" Email"
            name="email"
            className="textInput"
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>
        <div className="containerTextInput">
          <img className="iconForm" src={mobileBlack} alt="mobile" />
          <input
            type="tel"
            placeholder="Téléphone"
            name="telephone"
            className="textInput"
            onChange={(e) => validateTelephone(e.target.value)}
          />
          {telephoneError && <div className="error">{telephoneError}</div>}
        </div>
        <div className="containerTextInput">
          <img className="iconForm" src={cityBlack} alt="city" />
          <input
            type="text"
            placeholder="Ville"
            name="localisation"
            className="textInput"
          />
          {errors.localisation && (
            <small className="error">{errors.localisation}</small>
          )}
        </div>

        <button className="button" type="submit">
          J'enregistre
        </button>
      </form>
      <form className="form">
        <h2>Modifier mon mot de passe</h2>
        <div className="containerTextInput">
          <img className="iconForm" src={lockBlack} alt="lock" />
          <input
            type="text"
            placeholder="Ancien mot de passe"
            name="ancienMdp"
            className="textInput"
          />
          <small className="error">{errors.password}</small>
        </div>
        <div className="containerTextInput">
          <img className="iconForm" src={lockBlack} alt="lock" />
          <input
            type="text"
            placeholder="Nouveau mot de passe"
            name="nouveauMdp"
            className="textInput"
          />
          <small className="error">{errors.password}</small>
        </div>
        <div className="containerTextInput">
          <img className="iconForm" src={lockBlack} alt="lock" />
          <input
            type="email"
            placeholder="Confirmer mot de passe"
            name="newMdp"
            className="textInput"
          />
          <small className="error">{errors.password}</small>
        </div>
        <div>
          <button type="submit" className="button">
            J'enregistre
          </button>
        </div>
      </form>
      <button type="button" className="button">
        <img
          className="iconForm2"
          src={whiteTrash}
          alt="Poubelle du bouton permettant de supprimer son compte"
        />
        Je supprime mon compte
      </button>
    </div>
  );
}

export default MyProfile;
