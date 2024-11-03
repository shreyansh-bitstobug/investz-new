import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import ContactSection from "@/Components/Home/ContactSection/Contact";
import Section1 from "@/Components/Home/Section1/Section1";
import Section2 from "@/Components/Home/Section2/Section2";
import Section3 from "@/Components/Home/Section3/Section3";
import Section4 from "@/Components/Home/Section4/Section4";
import Section5 from "@/Components/Home/Section5/Section5";
import Section6 from "@/Components/Home/Section6/Section6";
import Section7 from "@/Components/Home/Section7/Section7";

export default function Home() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <ContactSection />
      <Section7 />
      <Footer />
    </>
  );
}
