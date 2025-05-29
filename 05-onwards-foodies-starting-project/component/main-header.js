"use client";

import Link from "next/link";
import classes from "./main-header.module.css";
import logoImage from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const path = usePathname();
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>
        <Image src={logoImage} alt='Logo Image' priority />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link
              href='/meals'
              className={path.startsWith("/meals") ? classes.active : undefined}
              Browse
              Meals
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              href='/community'
              className={
                path.startsWith("/community") ? classes.active : undefined
              }
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
