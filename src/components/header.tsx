import NavLink from "./nav-link";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex h-16 items-center">
        <div>
          <a
            href="/"
            className="lg:hidden flex-1 cursor-pointer z-2 items-center"
          >
            <img src="/images/xora.svg" width={115} height={55} alt="logo" />
          </a>
        </div>
        <div>
          <div className="w-full max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:my-auto max-lg:z-2">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>
                <li className="nav-logo">
                  <Link to="">
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </Link>
                </li>
                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
