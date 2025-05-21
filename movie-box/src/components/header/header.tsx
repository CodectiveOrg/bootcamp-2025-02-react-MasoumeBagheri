import { Link, NavLink } from "react-router";

import clsx from "clsx";

import styles from "./header.module.css";

type NavItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
];

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        Movie Box
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
