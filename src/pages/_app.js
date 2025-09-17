import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import { CommonProvider } from "../context/commonContexr";
export default function App({ Component, pageProps }) {
  return (
      <CommonProvider>
      <Component {...pageProps} />
    </CommonProvider>
    );
}
