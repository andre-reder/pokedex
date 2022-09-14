import PropTypes from 'prop-types';
import { CardContainer, PokemonImagesContainer, PokemonTypeImagesContainer } from './styles';

import normal from '../../assets/images/icons/normal.svg';
import fighting from '../../assets/images/icons/fighting.svg';
import flying from '../../assets/images/icons/flying.svg';
import poison from '../../assets/images/icons/poison.svg';
import ground from '../../assets/images/icons/ground.svg';
import rock from '../../assets/images/icons/rock.svg';
import ghost from '../../assets/images/icons/ghost.svg';
import steel from '../../assets/images/icons/steel.svg';
import fire from '../../assets/images/icons/fire.svg';
import water from '../../assets/images/icons/water.svg';
import grass from '../../assets/images/icons/grass.svg';
import electric from '../../assets/images/icons/electric.svg';
import psychic from '../../assets/images/icons/psychic.svg';
import ice from '../../assets/images/icons/ice.svg';
import dragon from '../../assets/images/icons/dragon.svg';
import bug from '../../assets/images/icons/bug.svg';
import dark from '../../assets/images/icons/dark.svg';
import fairy from '../../assets/images/icons/fairy.svg';
import interrogation from '../../assets/images/icons/interrogation.svg';

export default function PokemonCard({ pokemonDetails }) {
  const typeImagesRoles = {
    normal: <img src={normal} alt="normal" title="normal" key={Math.random()} />,
    fighting: <img src={fighting} alt="fighting" title="fighting" key={Math.random()} />,
    flying: <img src={flying} alt="flying" title="flying" key={Math.random()} />,
    poison: <img src={poison} alt="poison" title="poison" key={Math.random()} />,
    ground: <img src={ground} alt="ground" title="ground" key={Math.random()} />,
    rock: <img src={rock} alt="rock" title="rock" key={Math.random()} />,
    bug: <img src={bug} alt="bug" title="bug" key={Math.random()} />,
    ghost: <img src={ghost} alt="ghost" title="ghost" key={Math.random()} />,
    steel: <img src={steel} alt="steel" title="steel" key={Math.random()} />,
    fire: <img src={fire} alt="fire" title="fire" key={Math.random()} />,
    water: <img src={water} alt="water" title="water" key={Math.random()} />,
    grass: <img src={grass} alt="grass" title="grass" key={Math.random()} />,
    electric: <img src={electric} alt="electric" title="electric" key={Math.random()} />,
    psychic: <img src={psychic} alt="psychic" title="psychic" key={Math.random()} />,
    ice: <img src={ice} alt="ice" title="ice" key={Math.random()} />,
    dragon: <img src={dragon} alt="dragon" title="dragon" key={Math.random()} />,
    dark: <img src={dark} alt="dark" title="dark" key={Math.random()} />,
    fairy: <img src={fairy} alt="fairy" title="fairy" key={Math.random()} />,
    unknown: '?',
    shadow: <img src={dark} alt="shadow" title="shadow" key={Math.random()} />,
  };
  return (
    <CardContainer>
      <PokemonTypeImagesContainer>
        {pokemonDetails.types.map((type) => (
          typeImagesRoles[type.type.name]
        ))}
      </PokemonTypeImagesContainer>
      <PokemonImagesContainer>
        {(pokemonDetails.frontImage && pokemonDetails.backImage) && (
          <>
            <img src={pokemonDetails.frontImage} alt="" />
            <img src={pokemonDetails.backImage} alt="" />
          </>
        )}

        {(!pokemonDetails.frontImage && !pokemonDetails.backImage) && (
          <img src={interrogation} alt="" />
        )}

        {(pokemonDetails.backImage && !pokemonDetails.frontImage) && (
          <img src={pokemonDetails.backImage} alt="" />
        )}

        {pokemonDetails.frontImage && !pokemonDetails.backImage && (
          <img src={pokemonDetails.frontImage} alt="" />
        )}

      </PokemonImagesContainer>
    </CardContainer>
  );
}

PokemonCard.propTypes = {
  pokemonDetails: PropTypes.shape.isRequired,
};
