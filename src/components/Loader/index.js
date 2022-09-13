import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay } from './styles';
import pokeball from '../../assets/images/pokeball.svg';

export default function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
      <img src={pokeball} alt="" />
    </Overlay>,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
