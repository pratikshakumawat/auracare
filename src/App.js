import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [loading, setLoading] = useState(true);
  const [screen, setScreen] = useState("login");
const [dashboardVisible] = useState(true);
  const [activeTab, setActiveTab] = useState("");

  const [chatOpen, setChatOpen] = useState(false);

  const [showAuthPopup, setShowAuthPopup] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    skinType: "",
    sleep: "",
    goal: "",
  });

  useEffect(() => {

    const splashTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const authTimer = setTimeout(() => {
      setShowAuthPopup(true);
    }, 10000);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(authTimer);
    };

  }, []);
    

  const currentHour = new Date().getHours();

  let greeting = "Good evening";

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  }

  
  return (
    <div className="App">

      {/* SPLASH */}

      <div className={`splash-screen ${!loading ? "fade-out" : ""}`}>
        <h1 className="brand-logo">auracare</h1>
      </div>
{/* AUTH POPUP */}

{showAuthPopup && (

  <div className="auth-popup-overlay">

    <div className="modern-auth-box">

      <button
        className="close-popup"
        onClick={() => setShowAuthPopup(false)}
      >
        ✕
      </button>

      {screen === "login" && (
        <>

          <h1>welcome back</h1>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
          />

          <button
            className="login-btn"
            onClick={() => setShowAuthPopup(false)}
          >
            Login
          </button>

          <p className="switch-text">
            New to AuraCare?
          </p>

          <button
            className="switch-btn"
            onClick={() => setScreen("register")}
          >
            Register Now
          </button>

        </>
      )}

      {screen === "register" && (
        <>

          <h1>create account</h1>

          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            onChange={(e) =>
              setUserData({
                ...userData,
                username: e.target.value,
              })
            }
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter email"
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create password"
          />

          <button
            className="login-btn"
            onClick={() => {
              setScreen("survey");
            }}
          >
            Begin Analysis
          </button>

          <p className="switch-text">
            Already have an account?
          </p>

          <button
            className="switch-btn"
            onClick={() => setScreen("login")}
          >
            Login
          </button>

        </>
      )}
      {/* SURVEY */}
{screen === "survey" && (
  <>

    <h1>Wellness Analysis</h1>

    {/* SKIN TYPE */}
    <select
      onChange={(e) =>
        setUserData({
          ...userData,
          skinType: e.target.value,
        })
      }
    >
      <option>Skin Type</option>
      <option>Dry</option>
      <option>Oily</option>
      <option>Combination</option>
      <option>Sensitive</option>
    </select>

    {/* SKIN CONCERNS */}
    <div className="checkbox-group">

  <p>Skin Concerns</p>

  <div className="checkbox-options">

    <label>
      <input type="checkbox" />
      Acne
    </label>

    <label>
      <input type="checkbox" />
      Pigmentation
    </label>

    <label>
      <input type="checkbox" />
      Dryness
    </label>

    <label>
      <input type="checkbox" />
      Dark Circles
    </label>

  </div>

</div>

    {/* HAIR TYPE */}
    <select>
      <option>Hair Type</option>
      <option>Straight</option>
      <option>Wavy</option>
      <option>Curly</option>
      <option>Coily</option>
    </select>

    <div className="checkbox-group">

  <p>Hair Concerns</p>

  <div className="checkbox-options">

    <label>
      <input type="checkbox" />
      Hair Fall
    </label>

    <label>
      <input type="checkbox" />
      Dandruff
    </label>

    <label>
      <input type="checkbox" />
      Frizz
    </label>

    <label>
      <input type="checkbox" />
      Dry Scalp
    </label>

  </div>

</div>

    {/* LIFESTYLE */}
    <select>
      <option>Water Intake</option>
      <option>Less than 1L</option>
      <option>1-2L</option>
      <option>3L+</option>
    </select>

    <select>
      <option>Sleep Hours</option>
      <option>4-5 Hours</option>
      <option>6-7 Hours</option>
      <option>8+ Hours</option>
    </select>

    {/* GOALS */}
    <div className="checkbox-group">

  <p>Goals</p>

  <div className="checkbox-options">

    <label>
      <input type="checkbox" />
      Glowing Skin
    </label>

    <label>
      <input type="checkbox" />
      Healthy Hair
    </label>

    <label>
      <input type="checkbox" />
      Reduce Acne
    </label>

    <label>
      <input type="checkbox" />
      Stress Relief
    </label>

  </div>

</div>

<button
  className="finish-btn"
  onClick={() => {
    setShowAuthPopup(false);
    setScreen("dashboard");
  }}
>
  Finish Analysis
</button>

</>
)}

    </div>

  </div>

)}
      

      {/* DASHBOARD */}
      {dashboardVisible && (
        <div className="app-container">

          <div className="top-bar">

            <div className="brand-name">
              AuraCare AI
            </div>

            
            <div className="profile-circle">
              {userData.username.charAt(0).toUpperCase()}
            </div>

          </div>

          <header className="dash-header">
              <h1>
            {greeting}, {userData.username || "there"}.
              </h1>
            

            <p>
              Your wellness ecosystem is synchronized.
            </p>

          </header>

          <div className="stats-grid">

            <div className="card">
              <h4>Atmospheric</h4>
              <h3>UV Index: 4</h3>
            </div>

            <div className="card">
              <h4>Consistency</h4>
              <h3>12 Days</h3>
            </div>

            <div className="card">
  <h4>Insight</h4>

  <h3>
    "{userData.goal || "True wellness is harmony."}"
  </h3>
</div>

</div>

{/* RECOMMENDATIONS */}

<div className="recommend-section">

  <h2> Recommendations</h2>

  <div className="discipline-grid">

  {/* SKINCARE */}

  <div
    className="discipline-card"
    onClick={() => setActiveTab("skincare")}
  >

    <img
      src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
      alt=""
    />

    <div className="overlay">
      <h3>Skincare</h3>
      <p>Personalized glow rituals.</p>
    </div>

  </div>

  {/* HAIRCARE */}

  <div
    className="discipline-card"
    onClick={() => setActiveTab("haircare")}
  >

    <img
      src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
      alt=""
    />

    <div className="overlay">
      <h3>Haircare</h3>
      <p>Scalp & strand recovery.</p>
    </div>

  </div>

  {/* WELLNESS */}

  <div
    className="discipline-card"
    onClick={() => setActiveTab("wellness")}
  >

    <img
      src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
      alt=""
    />

    <div className="overlay">
      <h3>Wellness</h3>
      <p>Mind & body restoration.</p>
    </div>

  </div>

</div>

{/* POPUP */}

{activeTab && (

  <div
    className="popup-overlay"
    onClick={() => setActiveTab("")}
  >

    <div
      className="popup-content"
      onClick={(e) => e.stopPropagation()}
    >

      <h2>
        {activeTab === "skincare" && "Skincare Recommendations"}
        {activeTab === "haircare" && "Haircare Recommendations"}
        {activeTab === "wellness" && "Wellness Recommendations"}
      </h2>

      <div className="popup-products">

        {activeTab === "skincare" && (
          <>
            <div className="popup-card">
              Hydrating Cleanser
            </div>

            <div className="popup-card">
              Niacinamide Serum
            </div>

            <div className="popup-card">
              SPF 50 Cream
            </div>
          </>
        )}

        {activeTab === "haircare" && (
          <>
            <div className="popup-card">
              Scalp Therapy Serum
            </div>

            <div className="popup-card">
              Hair Repair Mask
            </div>

            <div className="popup-card">
              Anti-Frizz Oil
            </div>
          </>
        )}

        {activeTab === "wellness" && (
          <>
            <div className="popup-card">
              Hydration Reminder
            </div>

            <div className="popup-card">
              Guided Meditation
            </div>

            <div className="popup-card">
              Sleep Recovery Ritual
            </div>
          </>
        )}

      </div>

    </div>

  </div>
)}

{/* AI BUTTON */}

<button
  className="ai-button"
  onClick={() => setChatOpen(!chatOpen)}
>
  ✨
</button>

{/* AI CHAT */}

{chatOpen && (
  <div className="chat-popup">

    <div className="chat-header">
      AuraCare Assistant
    </div>

    <div className="chat-body">

      <div className="bot-message">
        Hi {userData.username || "there"} ✨
      </div>

      <div className="bot-message">
        Ask me about skincare, haircare, stress or wellness.
      </div>

    </div>

    <div className="chat-input">

            <input
        type="text"
        placeholder="Ask AuraCare..."
      />

      <button>➤</button>

    </div>

  </div>
)}

</div>

{/* FOOTER */}

{/* FOOTER */}

<footer className="footer">

  <div className="footer-left">
    <h3>AuraCare AI</h3>

    <p>
      Personalized wellness ecosystem designed for mindful living.
    </p>
  </div>

  <div className="footer-links">

    <div>
      <h4>Explore</h4>
      <p>Skincare</p>
      <p>Haircare</p>
      <p>Wellness</p>
    </div>

    <div>
      <h4>Company</h4>
      <p>About</p>
      <p>Contact</p>
      <p>Privacy</p>
    </div>

  </div>

</footer>

        </div>
      )}
      
    </div>
  );
}

export default App;