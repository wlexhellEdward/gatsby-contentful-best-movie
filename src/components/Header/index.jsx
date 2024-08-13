import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import { ROUTES } from "@/constants/routes";

import "./styles.scss";
import { Link } from "gatsby";

export const Header = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const isActiveLink = (path) => {
    if (currentPath === path) {
      return true;
    }
    if (path.startsWith("/movie") && currentPath.startsWith("/movie")) {
      return true;
    }
    return false;
  };

  const handleClickMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className={'header'}>
        <Link href="/">
          <div className={'titleHeader'}>
            <h2 className={'childOneTitle'}>BEST</h2>
            <h2>Movies</h2>
          </div>
        </Link>
        <nav className={'navigation'}>
          {ROUTES.map((route) => (
            <Link
              key={route.link}
              href={route.link}
              className={isActiveLink(route.link) ? 'activeLink' : ""}
            >
              {route.name}
            </Link>
          ))}
        </nav>
      </header>
      <header className={'headerMobile'}>
        <Link href="/">
          <div className={'titleHeader'}>
            <h2 className={'childOneTitle'}>BEST</h2>
            <h2>Movies</h2>
          </div>
        </Link>
        <div
          className={`${'btnMobileHeader'} ${isOpen ? 'burgerActive' : ""
            }`}
          onClick={handleClickMenu}
        >
          <span></span>
        </div>
      </header>
      {isOpen && (
        <nav className={`${'navMobileOpen'}`}>
          <div className={'wrapperNavMobile'}>
            {ROUTES.map((route) => (
              <Link
                key={route.link}
                href={route.link}
                className={isActiveLink(route.link) ? 'activeLink' : ""}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};
