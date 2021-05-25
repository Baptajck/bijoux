import { connect } from "react-redux";

import ProtectedRoute from "./ProtectedRoute";

const mapStateToProps = (state) => ({
  isLogged: state.userReducer.isLogged,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
