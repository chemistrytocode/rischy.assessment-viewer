import React from 'react';
import propTypes from 'prop-types';

import './SvgImage.css';

import { ReactComponent as Corrosive } from '../../assets/hazardIcons/Corrosive.svg';
import { ReactComponent as Environmental } from '../../assets/hazardIcons/Environmental.svg';
import { ReactComponent as Explosive } from '../../assets/hazardIcons/Explosive.svg';
import { ReactComponent as Flammable } from '../../assets/hazardIcons/Flammable.svg';
import { ReactComponent as Health } from '../../assets/hazardIcons/Health.svg';
import { ReactComponent as Moderate } from '../../assets/hazardIcons/Moderate.svg';
import { ReactComponent as Oxidising } from '../../assets/hazardIcons/Oxidising.svg';
import { ReactComponent as Toxic } from '../../assets/hazardIcons/Toxic.svg';

const icons = {
  Corrosive: Corrosive,
  Environmental: Environmental,
  Explosive: Explosive,
  Flammable: Flammable,
  Health: Health,
  Moderate: Moderate,
  Oxidising: Oxidising,
  Toxic: Toxic,
};

const SvgImage = ({ svgName, ...props }) => React.createElement(
  icons[svgName],
  props,
);

SvgImage.propTypes = {
  svgName: propTypes.string.isRequired,
};

export default SvgImage;
