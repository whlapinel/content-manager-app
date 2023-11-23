import Layout from "@/components/layout";
import Newsletter from "@/components/newsletter";
import ResourceHighlight from "@/components/resource-highlights";
import ResourceList from "@/components/resource-list";

export default function Home() {
  return (
    <Layout>
      <ResourceHighlight />
      <Newsletter />
      <ResourceList />
    </Layout>
  );
}
