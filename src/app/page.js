import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import CardSection from "@/components/card/cardSection";

export default function MainPage() {
  return (
    <>
      <Header />
      <div>
        <CardSection />
      </div>
    </>
  );
}
