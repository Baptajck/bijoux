import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./InputText.module.scss";
import { ReactComponent as Eye } from "../../assets/eye.svg";
import { ReactComponent as EyeClose } from "../../assets/eye_close.svg";

function InputText({
  inputName,
  inputLabel,
  inputPlaceholder,
  showIcon,
  changeInput,
  inputType = "text",
  inputId,
  className,
  hasPattern,
  text,
}) {
  const [pattern, setPattern] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const refInput = useRef(null);
  const containerClasses = cx(s.inputContainer, className);
  useEffect(() => {
    if (inputType === "email")
      return setPattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$");
    if (inputType === "password" && hasPattern)
      return setPattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$");
  }, [inputName]);

  const handleChange = (e) => {
    const { value } = e.target;
    changeInput(value);
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPassword(!showPassword);
    refInput.current.focus();
  };

  return (
    <div className={containerClasses}>
      <input
        className={s.inputItem}
        type={showPassword ? "text" : inputType}
        name={inputName}
        id={inputId}
        onChange={handleChange}
        value={text}
        placeholder={inputPlaceholder}
        pattern={pattern}
        ref={refInput}
        autoComplete="off"
        required
      />
      <label className={s.inputLabel} htmlFor={inputName}>
        {inputLabel}
      </label>
      {inputType === "password" && showIcon && (
        <>
          {showPassword ? (
            <EyeClose className={s.inputSvg} onClick={handleShowPassword} />
          ) : (
            <Eye className={s.inputSvg} onClick={handleShowPassword} />
          )}
        </>
      )}
    </div>
  );
}

InputText.defaultProps = {
  showIcon: false,
};

InputText.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
};

export default InputText;
