import s from "./Formulaire.module.scss";
import InputText from "../../components/InputText/InputText";

function Formulaire() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Créer un compte</h1>
      <form>
        <InputText
          inputName="firstname"
          inputLabel="Votre prénom"
          inputPlaceholder="John"
        />
        <InputText
          inputName="lastname"
          inputLabel="Votre nom"
          inputPlaceholder="Smith"
        />
        <InputText
          inputName="email"
          inputLabel="Votre email"
          inputPlaceholder="example@example.com"
          inputType="email"
        />
        <InputText
          inputName="password"
          inputLabel="Votre mot de passe"
          inputPlaceholder="**************"
          inputType="password"
          showIcon
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
