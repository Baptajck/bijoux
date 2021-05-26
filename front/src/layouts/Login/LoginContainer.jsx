import { connect } from "react-redux";
import { setInput, login } from "../../store/user/userActions";
import Login from "./Login";

const mapStateToProps = (state) => ({
  email: state.userReducer.email,
});

const mapDispatchToProps = (dispatch) => ({
  setInput: (name, value) => dispatch(setInput(name, value)),
  login: (password) => dispatch(login(password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
