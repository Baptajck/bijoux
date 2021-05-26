import { connect } from "react-redux";
import { fetchProducts } from "../../store/product/productActions";
import Home from "./Home";

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  products: state.productReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
