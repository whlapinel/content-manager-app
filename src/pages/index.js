import Layout from "@/components/layout";
import Newsletter from "@/components/newsletter";
import ResourceHighlight from "@/components/resource-highlight";
import ResourceList from "@/components/resource-list";
import { useEffect } from "react";

export default function Home({resources}) {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0,2)} />
      <Newsletter />
      <ResourceList resources={resources.slice(2)} />
    </Layout>
  );
}


// called every time you visit the page
// executed on the server, always fresh

export async function getServerSideProps() {

  const resData = await fetch("http://localhost:3001/api/resources");
  const data = await resData.json();
  console.log('getServerSideProps called. fetched data from database');
  

  return {
    props: {
      resources: data
    }
  }

}

// is called at build time, only once
// export async function getStaticProps() {

//   const resData = await fetch("http://localhost:3000/api/resources");
//   const data = await resData.json();

//   return {
//     props: {
//       resources: data
//     }
//   }
// }
