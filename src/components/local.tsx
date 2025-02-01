import React from 'react';
import '../styles/Stats.css';

const Stats: React.FC = () => {
  return (
    <section className="stats-container">
      {/* <div className="location-text">
        <h2>THE PERFECT LOCATION DOES EXIST.</h2>
        <h3>HELD AT ANYWHERE/HOUSE OF DAYSPRING</h3>
        <h1>RIVERS <span className="highlight">STATE</span></h1>
        <div>
            <img src='https://th.bing.com/th/id/R.40eb8599489466229026ae28464ee901?rik=AKTnSr%2bEl1WM7A&riu=http%3a%2f%2fstatic.vecteezy.com%2fsystem%2fresources%2fpreviews%2f000%2f088%2f553%2foriginal%2fafrica-silhouette-vector.jpg&ehk=YJOd%2f2bM9fq%2fkcY9CdCNs2EcbJU%2bIRpW4ByfkAWq%2fJM%3d&risl=&pid=ImgRaw&r=0'/>
        </div>
      </div> */}


      <div className="eiffel-tower-overlay"></div>

      <div className="stats-grid">
        <div className="stat-item">
          <h2>0+</h2>
          <p>ATTENDEES</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h2>0</h2>
          <p>MEDIA</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h2>0</h2>
          <p>SPEAKERS</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h2>0</h2>
          <p>STATES</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;