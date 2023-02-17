import React from "react";
import { useParams } from "react-router-dom";
import CategoryContainer from "../Components/CategoryContainer/CategoryContainer";
import Footer from "../Components/Footer/Footer";
import NavbarStatic from "../Components/NavbarStatic/NavbarStatic";

const Category = () => {
  const { catId } = useParams();

  return (
    <>
        <NavbarStatic />
        <CategoryContainer catId={catId} />
        <Footer />
    </>
  );
};

export default Category;
