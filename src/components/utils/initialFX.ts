import { customSplitText } from "./customSplit";
import gsap from "gsap";
import { lenis } from "../Navbar";

export function initialFX() {
  lenis.start();
  document.body.style.overflowY = "auto";
  document.documentElement.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const titleElements = [
    document.querySelector(".landing-info h3"),
    document.querySelector(".landing-intro h2"),
    document.querySelector(".landing-intro h1"),
  ].filter(Boolean) as HTMLElement[];

  const landingChars = titleElements.flatMap((el) => {
    return customSplitText(el).chars;
  });
  gsap.fromTo(
    landingChars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  // Unified animation for all role texts
  gsap.fromTo(
    [".landing-h2-1", ".landing-h2-2", ".landing-h2-info", ".landing-h2-info-1"],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.inOut", stagger: 0.025, delay: 0.3 }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );


