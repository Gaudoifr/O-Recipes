import React from 'react';
import PropTypes from 'prop-types';

import './steps.scss';

// map en version non raccourcie
/*
{steps.map((step) => {
  return (
    <li className="step">
      {step}
    </li>
  );
})}
*/

/*
key : prop spéciale qui permet à l'algorithme de réconciliation de React de repérer
chaque élément (faire le diff entre le DOM réel et le DOM virtuel), nécessaire
quand on a plusieurs éléments du même type qui sont frères (ici les li)
=> la valeur de key doit être unique et stable dans le temps (idéalement id de
l'élément, si on n'en a pas la valeur peut convenir, mais on n'utilise surtout pas
l'index dans le tableau)
*/

const Steps = ({ steps }) => (
  // on voudrait afficher un li pour chaque élément de steps

  <ul className="steps">
    {steps.map((step) => (
      <li key={step} className="step">
        {step}
      </li>
    ))}
  </ul>
);

Steps.propTypes = {
  // ici on pourrait utiliser juste "array", mais "arrayOf" permet d'être plus précis
  // et de préciser le format attendu pour les éléments du tableau
  // tableau de chaînes de caractères
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Steps;
