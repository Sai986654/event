export const prices = {
  makeup: { basic: 5000, premium: 10000, elite: 15000 },
  catering: { basic: 20000, premium: 40000, elite: 60000 },
  sangeet: { basic: 10000, premium: 20000, elite: 35000 },
  photography: { basic: 7000, premium: 15000, elite: 25000 },
  decoration: { basic: 8000, premium: 16000, elite: 30000 },
};

export const calculateTotal = selections => {
  return Object.entries(selections).reduce((total, [service, plan]) => {
    if (plan && prices[service]) {
      return total + prices[service][plan];
    }
    return total;
  }, 0);
};
