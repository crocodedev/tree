import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Demos from "./sections/Demos";
import Experience from "./sections/Experience";

export default function Home() {
  const homeDemos = [
    {
      name: "PITAYA",
      image: "/images/demo1.png",
    },
    {
      name: "ACACIA",
      image: "/images/demo2.png",
    },
    {
      name: "PLUM",
      image: "/images/demo3.png",
    },
    {
      name: "BONSAI",
      image: "/images/demo4.png",
    },
  ];

  const catalogPages = [
    {
      name: "PITAYA",
      image: "/images/catalog/demo1.png",
    },
    {
      name: "ACACIA",
      image: "/images/catalog/demo2.png",
    },
    {
      name: "PLUM",
      image: "/images/catalog/demo3.png",
    },
    {
      name: "BONSAI",
      image: "/images/catalog/demo4.png",
    },
  ];

  const productPages = [
    {
      name: "PITAYA",
      image: "/images/product/demo1.png",
    },
    {
      name: "ACACIA",
      image: "/images/product/demo2.png",
    },
    {
      name: "PLUM",
      image: "/images/product/demo3.png",
    },
    {
      name: "BONSAI",
      image: "/images/product/demo4.png",
    },
  ];

  return (
    <>
      <Header />
      <Hero />
      <Demos demoInfo={homeDemos} title={"Home Demos"} />
      <Experience />
      <Demos demoInfo={catalogPages} title={"Catalog Pages"} />
      <Demos demoInfo={productPages} title={"Product Pages"} />
    </>
  );
}
