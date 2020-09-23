import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ContactForm from "../components/contactForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/currentProjects">
        <a>projects</a>
      </Link>
      <ContactForm />
    </div>
  );
}
