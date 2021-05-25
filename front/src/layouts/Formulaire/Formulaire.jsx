import { useState } from "react";

import s from "./Formulaire.module.scss";
import InputText from "../../components/InputText/InputText";

function Formulaire({
  firstName,
  lastName,
  email,
  address,
  city,
  role,
  phone,
  setInput,
  createUser,
}) {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser();
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Créer un compte</h1>
      <form onSubmit={handleSubmit}>
        <InputText
          inputName="firstName"
          inputLabel="Votre prénom"
          inputPlaceholder="John"
          changeInput={(v) => setInput("firstName", v)}
          text={firstName}
        />
        <InputText
          inputName="lastName"
          inputLabel="Votre nom"
          inputPlaceholder="Smith"
          changeInput={(v) => setInput("lastName", v)}
          text={lastName}
        />
        <InputText
          inputName="email"
          inputLabel="Votre email"
          inputPlaceholder="example@example.com"
          inputType="email"
          changeInput={(v) => setInput("email", v)}
          text={email}
        />
        <InputText
          inputName="password"
          inputLabel="Votre mot de passe"
          inputPlaceholder="**************"
          inputType="password"
          changeInput={setPassword}
          text={password}
          showIcon
        />
        <InputText
          inputName="address"
          inputLabel="Votre adresse"
          inputPlaceholder="2 rue de quelque part"
          inputType="text"
          changeInput={(v) => setInput("address", v)}
          text={address}
        />
        <InputText
          inputName="city"
          inputLabel="Votre ville"
          inputPlaceholder="Miami"
          inputType="text"
          changeInput={(v) => setInput("city", v)}
          text={city}
        />
        <InputText
          inputName="phone"
          inputLabel="Votre téléphone"
          inputPlaceholder="06 05 04 03 02"
          inputType="tel"
          changeInput={(v) => setInput("phone", v)}
          text={phone}
        />
        <div className={s.containerButton}>
          <button className={s.button} type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulaire;
