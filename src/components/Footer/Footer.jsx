import logo from "../../assets/img/logo.png";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="bg-[#9DC08B] text-white py-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-screen-lg mx-auto">
        <div className="flex justify-center sm:justify-start">
          <img className="w-64" src={logo} alt="van-rakshan" />
        </div>

        <div>
          <h1 className="text-4xl mb-4 italic">
            Every Species Matters. Every Action Counts.
          </h1>
          <hr className="border-white mb-4" />
          <div className="grid grid-cols-3 gap-6 text-xl">
            <div>
              <h2 className="font-semibold">About Us</h2>
              <ul className="text-sm">
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <Link to={"/privacy"}>Privacy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold">Support</h2>
              <ul className="text-sm">
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/donate"}>Donate</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold">Social</h2>
              <ul className="text-sm">
                <li>
                  <Link to={"https://www.instagram.com/tushar_28.7/"}>
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to={"https://x.com/ts28_7"}>Twitter</Link>
                </li>
                <li>
                  <Link
                    to={"https://www.linkedin.com/in/tushar-soni-b0426022b/"}
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
