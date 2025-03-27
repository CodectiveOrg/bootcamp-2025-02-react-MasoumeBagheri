import { Link, NavLink } from "react-router";

import clsx from "clsx";

import logo from "../../assets/logo.svg";

import styles from "./header.module.css";

type NavItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  { title: "خانه", href: "/" },
  { title: "درباره ما", href: "/about" },
  { title: "تماس با ما", href: "/contact" },
];

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="" />
      </Link>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={`nav-${item.title}`}>
              <NavLink
                to={item.href}
                className={({ isActive }) => clsx(isActive && styles.active)}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
