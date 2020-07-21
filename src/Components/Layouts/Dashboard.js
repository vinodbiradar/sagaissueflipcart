import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/Actions/auth.action";

export class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  getProducts = () => {
    this.props.fetchProducts();
  };

  render() {
    console.log("Props", this.props);
    return (
      <div>
        <button
          type="submit"
          className="btn btn-primary"
          // onClick={() => {
          //   () => this.getProducts();
          // }}
        >
          Get Products
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productError: state.productReducer.productError,
  fetchingProduct: state.productReducer.fetchingProduct,
  productFetchRequest: state.productReducer.productFetchRequest,
  productSuccess: state.productReducer.signUpSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
