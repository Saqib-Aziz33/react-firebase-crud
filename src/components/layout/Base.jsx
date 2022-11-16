import Header from "./Header";
import Footer from "./Footer";

function Base({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export default Base;
