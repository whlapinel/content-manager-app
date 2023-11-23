import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Newsletter from "@/components/newsletter";
import ResourceHighlight from "@/components/resource-highlights";
import ResourceList from "@/components/resource-list";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <ResourceHighlight />
      <Newsletter />
      <ResourceList/>
      <Footer/>
    </>
  );
}
