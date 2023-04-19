import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-shrink-0">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
}
