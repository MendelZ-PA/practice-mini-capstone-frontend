function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#products-index">All Products</a> | <a href="#products-new">New Product</a>
    </header>
  );
}

function ProductsNew() {
  return (
    <div id="products-new">
      <h1>Potato Chips</h1>
      <h2>Crunchy Potato Chips</h2>
      <h3>$3.00</h3>
      <img src="image.png" alt="Bag of Potato Chips" />
    </div>
  );
}

function ProductsIndex() {}

function Footer() {}

function Content() {
  return (
    <div>
      <ProductsNew />
      <ProductsIndex />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
