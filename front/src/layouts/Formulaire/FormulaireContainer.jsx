import { connect } from "react-redux";
import { setInput, createUser } from "../../store/user/userActions";

import Formulaire from "./Formulaire";

const mapStateToProps = (state) => ({
  firstName: state.userReducer.firstName,
  lastName: state.userReducer.lastName,
  email: state.userReducer.email,
  address: state.userReducer.address,
  city: state.userReducer.city,
  role: state.userReducer.role,
  phone: state.userReducer.phone,
});

const mapDispatchToProps = (dispatch) => ({
  setInput: (name, value) => dispatch(setInput(name, value)),
  createUser: (firstName, lastName, email, address, role, city, phone) =>
    dispatch(
      createUser(firstName, lastName, email, address, role, city, phone)
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Formulaire);
