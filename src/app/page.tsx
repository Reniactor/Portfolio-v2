import NavBar from "./components/header/navBar";
import AboutMe from "./components/sections/aboutMe";
import ContactMe from "./components/footer/contactMe";

export default function HomePage() {
  return (
    <main className="">
      <NavBar />
      <AboutMe />
      <ContactMe />
    </main>
  );
}
