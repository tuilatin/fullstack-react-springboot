import products from "../data/products";
import EazyButton from "./EazyButton";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import BootstrapButton from "./BootstrapButton";
import developerImage from "../assets/stickers/developer.png";
import breakImage from "../assets/stickers/break.png";
// import "./footer/footer.css"; // Import the CSS file for Footer component

export default function Home() {
  const isActive = Math.random() > 0.5; // Randomly set isActive to true or false

  const h1Styling = {
    textAlign: "center",
    color: isActive ? "black" : "red",
  };

  return (
    <>
      {/* <h1
        className={`my-heading ${
          isActive ? "primary-color" : "secondary-color"
        }`}
      >
        Demo of Global css scope from Home
      </h1>
      <EazyButton>Home</EazyButton> */}
      {/* <h1 style={h1Styling}>Demo of Global css scope from Home</h1> */}
      <div className="home-container">
        <div className="container col-6">
          <BootstrapButton text="Submit" type="primary" />
          <BootstrapButton text="Save" type="secondary" />
          <BootstrapButton text="Okay" type="success" />
          <BootstrapButton text="Cancel" type="danger" />
          <BootstrapButton text="Delete" type="warning" />
          <BootstrapButton text="Link" type="link" />
        </div>
        <div className="d-grid gap-2 col-8 mx-auto">
          <div className="alert alert-primary text-center" role="alert">
            A simple primary alert—check it out!
          </div>
          <div className="alert alert-secondary text-center" role="alert">
            A simple secondary alert—check it out!
          </div>
          <div className="alert alert-success text-center" role="alert">
            A simple success alert—check it out!
          </div>
          <div className="alert alert-danger text-center" role="alert">
            A simple danger alert—check it out!
          </div>
          <div className="alert alert-warning text-center" role="alert">
            A simple warning alert—check it out!
          </div>
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Warning!</strong> This is a warning alert!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="container d-flex">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <PageHeading title="Explore Eazy Stickers!">
          Add a touch of fun to your space!
        </PageHeading>
        <ProductListings products={products} />
      </div>
    </>
  );
}
