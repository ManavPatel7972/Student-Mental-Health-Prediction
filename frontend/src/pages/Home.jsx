import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  ShieldCheck,
  Zap,
  BarChart3,
  Sparkles,
  Activity,
} from "lucide-react";

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="eyebrow">
              <Sparkles size={15} />
              Machine Learning Powered
            </div>

            <h1>
              Understand Your
              <span> Digital Wellness</span>
            </h1>

            <p>
              Explore how social media habits, study patterns, sleep, physical
              activity and stress levels relate to a predicted student mental
              health score.
            </p>

            <div className="hero-buttons">
              <Link to="/predict" className="primary-btn">
                Start Prediction
                <ArrowRight size={19} />
              </Link>

              <Link to="/info" className="secondary-btn">
                Learn More
              </Link>
            </div>

            <div className="hero-trust">
              <div>
                <ShieldCheck size={18} />
                <span>Data processed by your API</span>
              </div>

              <div>
                <Zap size={18} />
                <span>Fast prediction</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="prediction-orb">
              <div className="orb-ring ring-one"></div>
              <div className="orb-ring ring-two"></div>

              <div className="orb-center">
                <Brain size={62} />
                <span>MindPulse</span>
                <small>ML Prediction</small>
              </div>
            </div>

            <div className="floating-card card-one">
              <Activity size={20} />
              <div>
                <strong>12 Inputs</strong>
                <span>Student profile</span>
              </div>
            </div>

            <div className="floating-card card-two">
              <BarChart3 size={20} />
              <div>
                <strong>ML Pipeline</strong>
                <span>Prediction engine</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="section-heading">
          <span className="section-label">HOW IT WORKS</span>

          <h2>
            From student data to
            <span> prediction</span>
          </h2>

          <p>
            A simple interface connected directly to your FastAPI machine
            learning backend.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Activity />
            </div>

            <span className="feature-number">01</span>

            <h3>Enter Information</h3>

            <p>
              Provide information about academic life, social media usage,
              sleep, physical activity and stress.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Brain />
            </div>

            <span className="feature-number">02</span>

            <h3>ML Pipeline</h3>

            <p>
              Your FastAPI backend sends the submitted data through your trained
              machine learning pipeline.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <BarChart3 />
            </div>

            <span className="feature-number">03</span>

            <h3>Get Prediction</h3>

            <p>
              The frontend displays the predicted mental health score in a clean
              and easy-to-understand result card.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div>
          <span className="section-label">READY?</span>

          <h2>Explore your prediction</h2>

          <p>
            Fill out the student profile and let your machine learning model
            generate a prediction.
          </p>
        </div>

        <Link to="/predict" className="primary-btn">
          Make Prediction
          <ArrowRight size={19} />
        </Link>
      </section>
    </main>
  );
}

export default Home;
