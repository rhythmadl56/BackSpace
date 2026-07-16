import Layout from "../components/layout/Layout";

function Home() {
  return (
    <Layout>
      <div className="journal-box">
        <div className="journal-header">
          Dear Internet...
        </div>

        <div className="journal-body">
          <h2>What's been on your mind today?</h2>

          <input
            type="text"
            placeholder="Journal title..."
          />

          <textarea
            rows="10"
            placeholder="Write your thoughts..."
          ></textarea>

          <div className="journal-options">

            <input
              type="text"
              placeholder="Listening to..."
            />

            <button>
              Save Entry
            </button>

          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Home;