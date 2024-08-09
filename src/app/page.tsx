import Link from "next/link";
import Home from "../../components/Estructure/Home";
import Footer from "../../components/Estructure/Footer";
import About from "../../components/Estructure/About";
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Home */}
      <Home />
      {/* About the page */}
      <div className="flex-grow">
        <About />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
