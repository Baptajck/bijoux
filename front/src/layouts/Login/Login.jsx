import { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Login.module.scss";
import InputText from "../../components/InputText/InputText";

function Login({ setInput, email, login }) {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(password);
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Connectez vous</h1>
      <form onSubmit={handleSubmit}>
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
        <div className={s.containerButton}>
          <button className={s.button} type="submit">
            Se connecter
          </button>
          <NavLink to="/creer-un-compte" className={s.linkTo}>
            Créer un compte
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Login;
