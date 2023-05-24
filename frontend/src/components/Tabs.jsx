import { useState } from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ setIsActive }) => {
  const [activeTab, setActiveTab] = useState('fwd');

  const handleTab = (event) => {
    setIsActive(event.target.name);
    setActiveTab(event.target.name);
  };

  return (
    <div className='tabs pb-0.5 pr-2 text-lg font-bold'>
      <button
        name='fwd'
        className={`tab-lifted tab ${
          activeTab === 'fwd' ? 'tab-active' : null
        }`}
        onClick={handleTab}
      >
        FWD
      </button>
      <button
        name='rwd'
        className={`tab-lifted tab ${
          activeTab === 'rwd' ? 'tab-active' : null
        }`}
        onClick={handleTab}
      >
        RWD
      </button>
    </div>
  );
};

Tabs.propTypes = {
  setIsActive: PropTypes.func.isRequired,
};

export default Tabs;
