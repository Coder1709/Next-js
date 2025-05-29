import Link from "next/link";
import classes from "./main-header.module.css";
import logoImage from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>
        <Image src={logoImage} alt='Logo Image' priority />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href='/meals'> Browse Meals </NavLink>
          </li>
          <li>
            <NavLink href='/community'> Foodies Community </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
