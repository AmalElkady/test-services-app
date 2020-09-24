import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ContactForm from "../components/contactForm";
import RequestSupportForm from "../components/requestSupportForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <ContactForm />
      <RequestSupportForm />
    </div>
  );
}
