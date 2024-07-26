import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Demos from "./sections/Demos";
import Experience from "./sections/Experience";
import OtherPages from "./sections/OtherPages";
import Footer from "./sections/Footer";
import Benefits from "./sections/Benefits";

export default function Home() {
  const homeDemos = [
    {
      name: "PITAYA",
      image: "/images/demo1.png",
      url: "https://theme-cro-tree-pitaya.myshopify.com/?_ab=0&_fd=0&_sc=1",
    },
    {
      name: "ACACIA",
      image: "/images/demo2.png",
      url: "https://theme-cro-tree-acacia.myshopify.com/",
    },
    {
      name: "PLUM",
      image: "/images/demo3.png",
      url: "https://theme-cro-tree-plum.myshopify.com/",
    },
    {
      name: "BONSAI",
      image: "/images/demo4.png",
      url: "https://theme-cro-tree-bonsai.myshopify.com/",
    },
  ];

  const catalogPages = [
    {
      name: "PITAYA",
      image: "/images/catalog/demo1.png",
      url: "https://theme-cro-tree-pitaya.myshopify.com/collections/face",
    },
    {
      name: "ACACIA",
      image: "/images/catalog/demo2.png",
      url: "https://theme-cro-tree-acacia.myshopify.com/collections/for-her",
    },
    {
      name: "PLUM",
      image: "/images/catalog/demo3.png",
      url: "https://theme-cro-tree-plum.myshopify.com/collections/female-bags",
    },
    {
      name: "BONSAI",
      image: "/images/catalog/demo4.png",
      url: "https://theme-cro-tree-bonsai.myshopify.com/collections/womens",
    },
  ];

  const productPages = [
    {
      name: "PITAYA",
      image: "/images/product/demo1.png",
      url: "https://theme-cro-tree-pitaya.myshopify.com/products/amazing-aluminum-shoes-collection6?variant=44186420805905",
    },
    {
      name: "ACACIA",
      image: "/images/product/demo2.png",
      url: "https://theme-cro-tree-acacia.myshopify.com/products/amazing-aluminum-snowman-collection7?variant=44169403334959",
    },
    {
      name: "PLUM",
      image: "/images/product/demo3.png",
      url: "https://theme-cro-tree-plum.myshopify.com/products/amazing-aluminum-spoon-collection15?variant=44143972876607",
    },
    {
      name: "BONSAI",
      image: "/images/product/demo4.png",
      url: "https://theme-cro-tree-bonsai.myshopify.com/products/amazing-aluminum-shirt-collection13?variant=44193272627496",
    },
  ];

  return (
    <>
      <Header />
      <Hero />
      <Demos demoInfo={homeDemos} title={"Home Demos"} id={"demos"} />
      <Experience title={"Best User Experience On All Devices"} />
      <Demos demoInfo={catalogPages} title={"Catalog Pages"} id={"catalog"} />
      <Demos demoInfo={productPages} title={"Product Pages"} id={"products"} />
      <Experience title={"Flexibility for customize"} variation="v2" />
      <OtherPages />
      <Experience title={"Mobile Version"} variation="v3" />
      <Benefits />
      <Footer />
    </>
  );
}
