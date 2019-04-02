import React, { Component } from "react";
import * as productService from "../services/productSevice";
import * as commentService from "../services/commentService";
import { url } from "../config.json";

class ProductDetails extends Component {
  state = {
    product: { title: "", short: "", long: "", image: "", price: "" },
    comment: { value: "" },
    comments: []
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const { data: product } = await productService.getProduct(id);
    const { data: comments } = await commentService.getProductComments(id);
    const latestComments = comments.reverse();

    this.setState({
      product,
      comment: { value: "" },
      comments: latestComments
    });
  }

  handleComment = async e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const comment = this.state.comment.value;

    const { data } = await commentService.addComment({
      productId: id,
      comment
    });

    const comments = [data, ...this.state.comments];
    this.setState({ comment: { value: "" }, comments });
  };

  handleCommentChange = e => {
    this.setState({ comment: { value: e.currentTarget.value } });
  };

  render() {
    const { title, long, image, price } = this.state.product;
    const { user } = this.props;

    return (
      <div id="productDetail" className=" py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={`${url}/${image}`} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2
                className="text-black mb-3"
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                {title}
              </h2>

              <div className="text-muted mb-1">Description: </div>
              <div className="text-muted mb-4">{long}</div>

              <p>
                <strong className="text-primary h4">Price: {price}$</strong>
              </p>

              <p>
                <button
                  onClick={() => this.props.onClick(this.state.product)}
                  className="add-to-card"
                >
                  Add To Card
                </button>
              </p>
            </div>
          </div>

          <ul className="nav nav-tabs mt-4">
            <li className="nav-item">
              <a
                className={user ? "nav-link" : "nav-link active"}
                href="#comments"
                data-toggle="tab"
              >
                Comments
              </a>
            </li>

            {user && (
              <React.Fragment>
                <li className="nav-item">
                  <a className="nav-link active" href="#add" data-toggle="tab">
                    Add Comments
                  </a>
                </li>
              </React.Fragment>
            )}
          </ul>

          <div className="tab-content">
            <div
              id="comments"
              className={
                user ? "tab-pane fade show" : "tab-pane fade show active"
              }
            >
              <ul className="media-list col-md-12">
                {!this.state.comments.length && (
                  <h4>There are no reviews...</h4>
                )}
                {this.state.comments.map(comment => (
                  <li key={comment._id} className="media media-replied mb-2">
                    <div className="media-body">
                      <div className="card card-body bg-light">
                        <h5 className="card-title media-heading text-uppercase reviews">
                          {comment.name}
                        </h5>

                        <p className="media-comment">{comment.comment}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {user && (
              <React.Fragment>
                <div id="add" className="tab-pane fade show active">
                  <form onSubmit={this.handleComment}>
                    <div className="form-group">
                      <label htmlFor="comment" className="col-sm-2">
                        Comment
                      </label>
                      <div className="col-sm-10">
                        <textarea
                          value={this.state.comment.value}
                          onChange={this.handleCommentChange}
                          name="addComment"
                          id="comment"
                          className="form-control"
                          rows="5"
                          placeholder="Enter your comment here..."
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-sm-10">
                        <button
                          type="submit"
                          onClick={this.handleComment}
                          className="btn btn-success btn-circle text-uppercase"
                        >
                          Submit Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
