import React from 'react';
import './MonitoringPage.css';

const MonitoringPage = () => {
  return (
    <div>
      <div className="header">
        <h1>Страница Мониторинга</h1>
      </div>
      <div className="title-container">
        <h1 className="title">Server 1</h1>
        <img
          src="https://thumbs.dreamstime.com/b/server-room-monitoring-system-showing-cpu-load-temperature-line-icon-current-status-325386003.jpg"
          alt="Monitoring"
          className="icon"
        />
      </div>
      <div className="resources_widgets">
        <div className="resources">Resource 1</div>
        <div className="resources">Resource 2</div>
        <div className="resources">Resource 3</div>
        <div className="resources">Resource 4</div>
        <div className="resources">Resource 5</div>
        <div className="resources">Resource 6</div>
      </div>
    </div>
  );
};

export default MonitoringPage;
