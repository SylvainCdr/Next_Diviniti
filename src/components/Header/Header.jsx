import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const linkedin = "https://www.linkedin.com/company/divinititech";

  return (
  
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Link href="/">
            <Image
              src="assets/diviniti-logo-white.svg"
              alt="Diviniti logo"
              width={200}
              height={100}
            />
          </Link>
        </div>
        <ul className={styles.headerLinks}>
          {/* <li>
            <Link href="/v1">V1</Link>
          </li>
          <li>
            <Link href="/v2">V2</Link>
          </li>
          <li>
            <Link href="/v3">V3</Link>
          </li>
          <li>
            <Link href="/v4">V4</Link>
          </li>
          <li>
            <Link href="/v5">V5</Link>
          </li>
          <li>
            <Link href="/about">À propos</Link>
          </li>
          <li>
            <Link href="/team">L'équipe</Link>
          </li> */}
<li>
          <Link
            href={linkedin}
            className={styles.linkedinIcon}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img src="assets/linkedin.png" alt="logo linkedin" />
          </Link>
          </li>
        </ul>
      </div>
   
  );
}
