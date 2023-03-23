import { useTheme } from "@/app/providers/ThemeProvider";
import cx from "@/shared/lib/classNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { FC } from "react";
import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={cx(cls.navbar, {}, [className])}>
      <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
        React app
      </AppLink>
      <AppLink to="/cider" theme={AppLinkTheme.SECONDARY}>
        Apple cider
      </AppLink>
    </nav>
  );
};
