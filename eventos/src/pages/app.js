import { EventosProvider } from '../context/eventcontext';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <EventosProvider>
      <Component {...pageProps} />
    </EventosProvider>
  );
}

export default MyApp;