import Footer from "./footer";
import Navbar from "./navbar";
import ResourceList from "./resource-list";
import ResourceHighlight from "./resource-highlights";
import Newsletter from "./newsletter";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
