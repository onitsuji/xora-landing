import React from "react";
import { Link } from "react-scroll";
import NavLink from "./nav-link";
import clsx from "clsx";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen((o) => !o);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex h-16 items-center">
        <a
          href="/"
          className="lg:hidden flex-1 cursor-pointer z-2 items-center"
        >
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="w-full max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:my-auto max-lg:z-2">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>
                <li className="nav-logo">
                  <Link
                    to="hero"
                    offset={-100}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer"
                    )}
                  >
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
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290x] -translate-y-1/2">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="background of outlines"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="background of outlines"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4 rounded-full flex justify-center items-center"
          onClick={handleClick}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="menu button"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
}
