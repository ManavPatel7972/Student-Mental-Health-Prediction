import {
  Brain,
  Database,
  Server,
  Cpu,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

function Info() {
  return (
    <main className="info-page">
      <section className="page-hero">
        <div className="eyebrow">
          <Brain size={15} />
          About the Project
        </div>

        <h1>
          Behind the
          <span> Prediction</span>
        </h1>

        <p>
          MindPulse is a student-focused machine learning application that
          connects a React interface with a FastAPI prediction service.
        </p>
      </section>

      <section className="architecture-section">
        <div className="section-heading">
          <span className="section-label">ARCHITECTURE</span>

          <h2>
            How the system
            <span> works</span>
          </h2>
        </div>

        <div className="architecture-grid">
          <div className="architecture-card">
            <div className="architecture-icon">
              <Database />
            </div>

            <span>01</span>

            <h3>Student Data</h3>

            <p>
              Student information is collected through the React frontend form.
            </p>
          </div>

          <div className="architecture-arrow">
            <ArrowRight />
          </div>

          <div className="architecture-card">
            <div className="architecture-icon">
              <Server />
            </div>

            <span>02</span>

            <h3>FastAPI</h3>

            <p>
              React sends the data to the Python FastAPI <code>/predict</code>
              endpoint.
            </p>
          </div>

          <div className="architecture-arrow">
            <ArrowRight />
          </div>

          <div className="architecture-card">
            <div className="architecture-icon">
              <Cpu />
            </div>

            <span>03</span>

            <h3>ML Pipeline</h3>

            <p>
              The saved machine learning pipeline processes the input and
              generates a prediction.
            </p>
          </div>
        </div>
      </section>

      <section className="info-content">
        <div className="info-box">
          <ShieldCheck size={28} />

          <div>
            <h3>What data is used?</h3>

            <p>
              The prediction API accepts demographic, academic, social media
              usage and lifestyle-related inputs such as sleep, study, physical
              activity and stress.
            </p>
          </div>
        </div>

        <div className="info-box">
          <Brain size={28} />

          <div>
            <h3>What does the model return?</h3>

            <p>
              The API returns a numeric predicted mental health score from your
              trained machine learning model.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div>
          <span className="section-label">TRY IT</span>

          <h2>Run the prediction</h2>

          <p>
            Enter student information and connect directly with your ML API.
          </p>
        </div>

        <Link to="/predict" className="primary-btn">
          Start Now
          <ArrowRight size={19} />
        </Link>
      </section>
    </main>
  );
}

export default Info;
