import PropTypes from 'prop-types';
import { StyledButton } from './styles';

export default function Button({
  type,
  disabled,
  children,
  onClick,
  selected,
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled || selected}
      onClick={onClick}
      selected={selected}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  onClick: undefined,
  selected: false,
};
