import 'bootstrap/dist/css/bootstrap.min.css';
import {ProductProvider} from "../context/ProductContext";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({Component, pageProps}) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
      <ToastContainer/>
    </ProductProvider>
  );
}

export default MyApp;
