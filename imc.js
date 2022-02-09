const calculateImc = (weight, height) => {
  return (weight / Math.pow(height, 2)).toFixed(2);
};

const imcClassification = (imcResult) => {

    if (imcResult < 18.5) {
      return "Magreza";
    }

    if (imcResult >= 18.5 && imcResult <= 24.9) {
      return "Normal";
    }

    if (imcResult >= 25 && imcResult <= 29.9) {
      return "Sobrepeso";
    }

    if (imcResult >= 25 && imcResult <= 29.9) {
      return "Sobrepeso";
    }

    if (imcResult >= 30 && imcResult <= 39.9) {
      return "Obesidade";
    }

    if (imcResult >= 40) {
      return "Obesidade Grave";
    }
};

module.exports = {
  calculateImc,
  imcClassification,
};
