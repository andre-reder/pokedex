import PropTypes from 'prop-types';
import { StyledButton } from './styles';

export default function Button({
  type,
  disabled,
  isLoading,
  children,
  danger,
  onClick,
  selected,
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading || selected}
      danger={danger}
      onClick={onClick}
      selected={selected}
    >
      {!isLoading && children}
      {isLoading}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  danger: PropTypes.bool,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
  danger: false,
  onClick: undefined,
  selected: false,
};
