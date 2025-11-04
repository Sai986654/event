import React, { useContext } from 'react';
import { SelectionContext } from '../context/SelectionContext';

const plans = ['basic', 'premium', 'elite'];

const ServiceSelector = ({ serviceName, displayName }) => {
  const { selections, updateSelection } = useContext(SelectionContext);

  const serviceSelected = selections[serviceName] !== null;

  const toggleService = () => {
    if (serviceSelected) {
      updateSelection(serviceName, null);
    } else {
      updateSelection(serviceName, 'basic'); // Default to basic when selecting
    }
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <label>
        <input type="checkbox" checked={serviceSelected} onChange={toggleService} />
        {' '}
        {displayName}
      </label>
      {serviceSelected && (
        <div style={{ marginLeft: 20, marginTop: 8 }}>
          {plans.map(plan => (
            <label key={plan} style={{ marginRight: 15 }}>
              <input
                type="radio"
                name={serviceName}
                value={plan}
                checked={selections[serviceName] === plan}
                onChange={() => updateSelection(serviceName, plan)}
              />
              {' '}
              {plan.charAt(0).toUpperCase() + plan.slice(1)}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceSelector;
