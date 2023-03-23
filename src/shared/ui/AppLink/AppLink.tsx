import { FC } from "react";

import cx from "@/shared/lib/classNames";

import cls from "./AppLink.module.scss";
import { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, theme = AppLinkTheme.PRIMARY, ...linkProps } = props;

  return (
    <Link
      {...linkProps}
      className={cx(cls.AppLink, {}, [className, cls[theme]])}
    ></Link>
  );
};
