import products from "../data/products";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";

export default function Home() {
  return (
    <div className="home-container">
      <PageHeading title="Explore Eazy Stickers!">
        Add a touch of fun to your space!
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}
