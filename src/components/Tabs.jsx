import { useState } from 'react';

const Tabs = ({ setIsActive }) => {
  const [activeTab, setActiveTab] = useState('fwd');

  const handleTab = (event) => {
    setIsActive(event.target.name);
    setActiveTab(event.target.name);
  };

  return (
    <div className='tabs pr-2 pb-0.5 font-bold text-lg'>
      <button
        name='fwd'
        className={`tab tab-lifted ${
          activeTab === 'fwd' ? 'tab-active' : null
        }`}
        onClick={handleTab}
      >
        FWD
      </button>
      <button
        name='rwd'
        className={`tab tab-lifted ${
          activeTab === 'rwd' ? 'tab-active' : null
        }`}
        onClick={handleTab}
      >
        RWD
      </button>
    </div>
  );
};

export default Tabs;
