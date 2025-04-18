import Image from "next/image";
import Styles from "./page.module.css";
import Header from "@/Components/Header/Header";
import Categories from "@/Components/Categories/Categories";
import Courses from "@/Components/Courses/Courses";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <div className={Styles.page}>
        <Header />
        <Categories />
        <Courses />
        <section className={Styles.aboutus}>
          <div className={Styles.aboutus_inner}>
            <div>
              <h1>Welcome to EduSphere: your digital gateway to modern, accessible, and impactful education.</h1>
              <p>At EduSphere, we believe that learning should be a lifelong adventure, open to everyone, everywhere. Our mission is to make high-quality education easily accessible through engaging online courses, expert instructors, and a platform designed with learners at the heart of everything we do.</p>
              <br />
              <p>Whether you're looking to pick up a new skill, advance your career, or simply explore something you're passionate about, EduSphere is here to guide your journey. From coding and design to business, marketing, and beyond — we bring the world of knowledge to your screen.</p>
            </div>
            <div>
              <img src="images/h2.svg" />
            </div>
          </div>
        </section>
        <Footer />
    </div>
  );
}
