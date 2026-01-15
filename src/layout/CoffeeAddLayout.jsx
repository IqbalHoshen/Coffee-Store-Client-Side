import Navbar from "../component/Navbar";
import CoffeeInputField from "../component/CoffeeInputField";
import Footer from "../component/Footer";

const CoffeeAddLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <CoffeeInputField></CoffeeInputField>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default CoffeeAddLayout;
