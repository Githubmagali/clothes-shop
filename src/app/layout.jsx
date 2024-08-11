import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { CartProvider } from "../context/page";


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CartProvider>
        <Navbar />
        {children}
        <Footer />
        </CartProvider>

        </body>
    </html>
  );
}
