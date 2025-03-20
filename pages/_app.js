import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductProvider } from "../context/ProductContext";

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  );
}

export default MyApp;
