import PropTypes from 'prop-types';
import { Container } from './styles';

export default function PokemonCard({ pokemonDetails }) {
  return (
    <Container>
      <img src={pokemonDetails.frontImage} alt="" />
      <img src={pokemonDetails.backImage} alt="" />
    </Container>
  );
}

PokemonCard.propTypes = {
  pokemonDetails: PropTypes.shape.isRequired,
};
