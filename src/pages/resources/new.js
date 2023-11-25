import Layout from "@/components/layout";
import { useState } from "react";

const DEFAULT_DATA = {
  title: "test",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 60
};

export default function ResourceCreate() {
  const [form, setForm] = useState(DEFAULT_DATA);

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(form));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({...form, [name]: value});
  }

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add New Resource</h1>
              <form>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      name="title"
                      value={form.title}
                      onChange={handleChange}
                      className="input"
                      type="text"
                      placeholder="Learn Next JS and Sanity IO"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      className="textarea"
                      placeholder="Learn these technologies because they are very popular and enable better SEO"
                    ></textarea>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input
                      name="link"
                      value={form.link}
                      onChange={handleChange}
                      className="input"
                      type="text"
                      placeholder="https://academy.eincode.com"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select name="priority" value={form.priority}>
                        onChange={handleChange}
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Time to finish</label>
                  <div className="control">
                    <input
                      name="timeToFinish"
                      value={form.timeToFinish}
                      onChange={handleChange}
                      className="input"
                      type="number"
                      placeholder="60 (time is in minutes)"
                    />
                    <p className="help">Time is in minutes</p>
                  </div>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button onClick={handleSubmit} className="button is-link">
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
