export default function ResourceHighlight({ resources }) {
    
  function renderResources() {
    return resources.map((resource) => {
      return (
        <section key={resource.id} className="section">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="content is-medium">
                <h2 className="subtitle is-4">{resource.createdAt}</h2>
                <h1 className="title">{resource.title}</h1>
                <p>{resource.description}</p>
              </div>
            </div>
          </div>
        </section>
      );
    });
  }

  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">{renderResources()}</div>
      </div>
    </section>
  );
}
