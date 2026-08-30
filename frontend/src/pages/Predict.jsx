import { useState } from "react";
import {
  Activity,
  ArrowRight,
  Brain,
  RotateCcw,
  Moon,
  Smartphone,
  BookOpen,
  Dumbbell,
  Clock,
  User,
  Globe,
  GraduationCap,
  Target,
} from "lucide-react";
import toast from "react-hot-toast";

import { predictMentalHealth } from "../services/api";
import Loader from "../components/Loader";

const initialForm = {
  age: "",
  gender: "",
  country: "",
  academic_level: "",
  most_used_platform: "",
  purpose_of_use: "",
  avg_daily_usage_hours: "",
  daily_unlocks: "",
  study_hours: "",
  physical_activity_hours: "",
  sleep_hours_per_night: "",
  stress_level: "",
};

const countries = [
  "India",
  "USA",
  "Canada",
  "Australia",
  "UK",
  "Germany",
  "Mexico",
  "Turkey",
  "France",
  "Other",
];

const platforms = [
  "Facebook",
  "LinkedIn",
  "Instagram",
  "Snapchat",
  "Twitter",
  "YouTube",
  "TikTok",
  "LINE",
  "KakaoTalk",
  "VKontakte",
  "WhatsApp",
  "WeChat",
];

function Predict() {
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (result !== null) {
      setResult(null);
    }
  };

  const validateForm = () => {
    if (Number(form.age) < 10 || Number(form.age) > 100) {
      toast.error("Age must be between 10 and 100.");
      return false;
    }

    if (
      Number(form.avg_daily_usage_hours) < 0 ||
      Number(form.avg_daily_usage_hours) > 24
    ) {
      toast.error("Daily social media usage must be between 0 and 24 hours.");
      return false;
    }

    if (Number(form.study_hours) < 0 || Number(form.study_hours) > 24) {
      toast.error("Study hours must be between 0 and 24.");
      return false;
    }

    if (
      Number(form.physical_activity_hours) < 0 ||
      Number(form.physical_activity_hours) > 24
    ) {
      toast.error("Physical activity must be between 0 and 24 hours.");
      return false;
    }

    if (
      Number(form.sleep_hours_per_night) < 0 ||
      Number(form.sleep_hours_per_night) > 24
    ) {
      toast.error("Sleep hours must be between 0 and 24.");
      return false;
    }

    if (Number(form.daily_unlocks) < 0) {
      toast.error("Daily unlocks cannot be negative.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setResult(null);

    const payload = {
      age: Number(form.age),
      gender: form.gender,
      country: form.country,
      academic_level: form.academic_level,
      most_used_platform: form.most_used_platform,
      purpose_of_use: form.purpose_of_use,
      avg_daily_usage_hours: Number(form.avg_daily_usage_hours),
      daily_unlocks: Number(form.daily_unlocks),
      study_hours: Number(form.study_hours),
      physical_activity_hours: Number(form.physical_activity_hours),
      sleep_hours_per_night: Number(form.sleep_hours_per_night),
      stress_level: form.stress_level,
    };

    try {
      const data = await predictMentalHealth(payload);

      setResult(data.predicted_mental_helth_score);

      toast.success("Prediction generated successfully!");
    } catch (error) {
      console.error(error);

      toast.error(error.message || "Something went wrong.", {
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setResult(null);
    toast.success("Form reset.");
  };

  return (
    <main className="predict-page">
      <div className="predict-header">
        <div className="eyebrow">
          <Brain size={15} />
          AI Prediction
        </div>

        <h1>
          Student Mental Health
          <span> Prediction</span>
        </h1>

        <p>
          Enter the student information below. Your data will be sent to the
          FastAPI prediction endpoint.
        </p>
      </div>

      <div className="predict-layout">
        {/* FORM */}
        <section className="prediction-form-card">
          <div className="card-header">
            <div className="card-header-icon">
              <User size={22} />
            </div>

            <div>
              <h2>Student Profile</h2>
              <p>Complete all required information</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* BASIC */}
            <div className="form-section">
              <div className="form-section-title">
                <span>01</span>
                Basic Information
              </div>

              <div className="form-grid">
                <div className="input-group">
                  <label>
                    Age <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <User size={18} />

                    <input
                      type="number"
                      name="age"
                      min="10"
                      max="100"
                      value={form.age}
                      onChange={handleChange}
                      placeholder="e.g. 21"
                      required
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>
                    Gender <span>*</span>
                  </label>

                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>
                    Country <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <Globe size={18} />

                    <select
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select country</option>

                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="input-group">
                  <label>
                    Academic Level <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <GraduationCap size={18} />

                    <select
                      name="academic_level"
                      value={form.academic_level}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select level</option>
                      <option value="High School">High School</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="form-section">
              <div className="form-section-title">
                <span>02</span>
                Social Media Usage
              </div>

              <div className="form-grid">
                <div className="input-group">
                  <label>
                    Most Used Platform <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <Smartphone size={18} />

                    <select
                      name="most_used_platform"
                      value={form.most_used_platform}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select platform</option>

                      {platforms.map((platform) => (
                        <option key={platform} value={platform}>
                          {platform}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="input-group">
                  <label>
                    Purpose of Use <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <Target size={18} />

                    <select
                      name="purpose_of_use"
                      value={form.purpose_of_use}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select purpose</option>
                      <option value="Networking">Networking</option>
                      <option value="Education">Education</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="News">News</option>
                    </select>
                  </div>
                </div>

                <div className="input-group">
                  <label>
                    Daily Usage Hours <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <Clock size={18} />

                    <input
                      type="number"
                      name="avg_daily_usage_hours"
                      min="0"
                      max="24"
                      step="0.1"
                      value={form.avg_daily_usage_hours}
                      onChange={handleChange}
                      placeholder="e.g. 4.5"
                      required
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>
                    Daily Unlocks <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <Smartphone size={18} />

                    <input
                      type="number"
                      name="daily_unlocks"
                      min="0"
                      value={form.daily_unlocks}
                      onChange={handleChange}
                      placeholder="e.g. 50"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* LIFESTYLE */}
            <div className="form-section">
              <div className="form-section-title">
                <span>03</span>
                Lifestyle & Wellbeing
              </div>

              <div className="form-grid">
                <div className="input-group">
                  <label>
                    Study Hours <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <BookOpen size={18} />

                    <input
                      type="number"
                      name="study_hours"
                      min="0"
                      max="24"
                      step="0.1"
                      value={form.study_hours}
                      onChange={handleChange}
                      placeholder="e.g. 5"
                      required
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>
                    Physical Activity Hours <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <Dumbbell size={18} />

                    <input
                      type="number"
                      name="physical_activity_hours"
                      min="0"
                      max="24"
                      step="0.1"
                      value={form.physical_activity_hours}
                      onChange={handleChange}
                      placeholder="e.g. 1.5"
                      required
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>
                    Sleep Hours / Night <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <Moon size={18} />

                    <input
                      type="number"
                      name="sleep_hours_per_night"
                      min="0"
                      max="24"
                      step="0.1"
                      value={form.sleep_hours_per_night}
                      onChange={handleChange}
                      placeholder="e.g. 7"
                      required
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>
                    Stress Level <span>*</span>
                  </label>

                  <select
                    name="stress_level"
                    value={form.stress_level}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select stress level</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Very High">Very High</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="reset-btn"
                onClick={handleReset}
                disabled={loading}
              >
                <RotateCcw size={17} />
                Reset
              </button>

              <button
                type="submit"
                className="primary-btn submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <Loader text="Predicting..." />
                ) : (
                  <>
                    Generate Prediction
                    <ArrowRight size={19} />
                  </>
                )}
              </button>
            </div>
          </form>
        </section>

        {/* RESULT */}
        <aside className="result-card">
          <div className="result-top">
            <div className="result-icon">
              <Brain size={28} />
            </div>

            <span>MODEL RESULT</span>
          </div>

          {!loading && result === null && (
            <div className="empty-result">
              <div className="empty-icon">
                <Activity size={35} />
              </div>

              <h3>Waiting for prediction</h3>

              <p>
                Complete the student profile and click{" "}
                <strong>Generate Prediction</strong>.
              </p>
            </div>
          )}

          {loading && (
            <div className="empty-result">
              <div className="big-loader">
                <Loader text="Analyzing student data..." />
              </div>

              <h3>Running ML Pipeline</h3>

              <p>Your data is being sent to the FastAPI prediction endpoint.</p>
            </div>
          )}

          {!loading && result !== null && (
            <div className="prediction-result">
              <p className="result-label">Predicted Mental Health Score</p>

              <div className="score">{Number(result).toFixed(2)}</div>

              <div className="score-line"></div>

              <div className="result-message">
                <Brain size={20} />

                <p>
                  Prediction generated successfully by the machine learning
                  model.
                </p>
              </div>

              <button className="result-reset" onClick={handleReset}>
                Make Another Prediction
              </button>
            </div>
          )}

          <div className="result-disclaimer">
            <strong>Important:</strong> This prediction is a machine learning
            output and should not be treated as a medical diagnosis.
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Predict;
