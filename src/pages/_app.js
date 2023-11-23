import '@/styles/globals.css'
import "bulma/css/bulma.min.css";

export default function MainApp({ Component, pageProps }) {
  console.log(Component);
  return <Component {...pageProps} />
}
