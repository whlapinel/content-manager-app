import Layout from "@/components/layout";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ResourceDetail({resource}) {
  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{resource.dateCreated}</h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <Link className="button is-warning" href={`/resources/${resource.id}/edit`}>
                        Update
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({params}) {

    try {
        const dataRes = await fetch(`http://localhost:3001/api/resources/${params.id}`);
        const data = await dataRes.json();
        console.log(data);
        return {
            props: {
                resource: data,
            }
        }
    } catch (err) {return console.log(err.message);}
}
