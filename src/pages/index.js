import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Newsletter from "@/components/newsletter";
import ResourceHighlight from "@/components/resource-highlights";
import ResourceList from "@/components/resource-list";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  return (
    <Layout>
      <ResourceHighlight />
      <Newsletter />
      <ResourceList />
    </Layout>
  );
}
