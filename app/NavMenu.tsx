import Link from "next/link";
import styles from "./NavMenu.module.css";
import Image from "next/image";
import { SignInButton } from "@/components/buttons";

const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image
          src="/pear.png" // Route of the image file
          width={40}
          height={40}
          alt="Booking Logo"
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/secret"}>Secret</Link>
        </li>
        <li className="space-x-">
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/quote"}>Get Quote</Link>
        </li>
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
};
export default NavMenu;
