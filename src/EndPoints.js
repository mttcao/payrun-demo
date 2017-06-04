import './App.css';

const EndPoints = [
  { serviceProps: 'Billing', urlProps: 'https://billing-sit.gem.myob.com/public/health' },
  { serviceProps: 'Pay Agent', urlProps: 'https://sit.payagent.dev.myob.com/health-check' },
  { serviceProps: 'Pricing Service', urlProps: 'https://sit-pricing-service.core-services.myob.com/public/health' },
  { serviceProps: 'Workfront Adaptor', urlProps: 'https://sit-workfront-adapter.core-services.myob.com/public/health' }
];

export default EndPoints;
