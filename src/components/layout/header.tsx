/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import HamburgerAnimatedIcon from "./hamburger-animated/hamburger-animated";
import useViewportWidth from "hooks/use-viewport-width";
import React, { useState } from "react";
import Button from "components/core-ui/button/button";
import twc from "tw-classnames";
import { navLinks } from "app/core/_data";
import handleCalendly from "hooks/use-button-click";
// import LanguageSwitcher from "components/language-switcher";

const Header = () => {
  const handleClick = handleCalendly();
  const [open, setOpen] = useState(false);

  const showMenu = () => setOpen(!open);

  const { isTablet } = useViewportWidth();

  return (
    <header className="container-max">
      Header
      {/* <LanguageSwitcher /> */}
    </header>
  );
};

export default Header;
