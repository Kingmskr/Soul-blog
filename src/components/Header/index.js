"use client";
import Link from "next/link";
import Logo from "./Logo";
import { LinkedinIcon, SunIcon, TwitterIcon, YoutubeIcon } from "../Icons";
import siteMetadata from "../../utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <nav
        className="w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mr-2">
          About
        </Link>
        <Link href="/contact" className="mr-2">
          Contact
        </Link>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          <SunIcon />
        </button>
      </nav>
      <div className=" hidden sm:flex items-center">
        <a
          href={siteMetadata.linkedin}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.twitter}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.youtube}
          className="inline-block w-10 h-10 mr-4 p-1 rounded-full  hover:bg-gray-200 transition-all ease duration-200"
          aria-label="Check my profile on YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon className="fill-light dark:fill-dark hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;
