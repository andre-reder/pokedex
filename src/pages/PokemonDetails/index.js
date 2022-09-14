/* eslint-disable max-len */
import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';

import { useQuery } from '../../hooks/useQuery';

import Loader from '../../components/Loader';
import PokemonService from '../../services/PokemonService';
import Transitions from '../../components/Transition';
import PageHeader from '../../components/PageHeader';
import PokemonCard from '../../components/PokemonCard';

import { Navbar } from './styles';

import sad from '../../assets/images/icons/sad.svg';
import arrow from '../../assets/images/icons/arrow.svg';
import Button from '../../components/Button';
import { ErrorContainer } from '../Home/styles';

export default function PokemonDetails() {
  const [pokemonInfos, setPokemonInfos] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { id } = useParams();
  const query = useQuery();
  const count = query.get('count');

  const getPokemonInfos = useCallback(async () => {
    try {
      setIsLoading(true);
      const responseBody = await PokemonService.getPokemon({ id });
      const pokemonDetails = {
        name: responseBody.name,
        types: responseBody.types,
        frontImage: responseBody.sprites.front_default,
        backImage: responseBody.sprites.back_default,
        nextPokemonId: id > Number(count) ? null : Number(id) + 1,
        previousPokemonId: id <= 1 ? null : Number(id) - 1,
      };
      setPokemonInfos(pokemonDetails);
      setHasError(false);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [count, id]);

  useEffect(() => {
    getPokemonInfos();
  }, [getPokemonInfos]);

  function handleTryAgain() {
    getPokemonInfos();
  }

  return (
    <Transitions>
      <Loader isLoading={isLoading} />
      <PageHeader />
      {(!hasError && !isLoading) && (
        <>
          <Navbar>
            {!pokemonInfos.previousPokemonId && (
              <>
                <h1>{pokemonInfos.name}</h1>
                <Link to={`/pokemon/${pokemonInfos.nextPokemonId}?count=${count}`}>
                  <img src={arrow} alt="rightArrow" title="Ver próximo pokémon" className="rightArrow" />
                </Link>
              </>
            )}

            {!pokemonInfos.nextPokemonId && (
              <>
                <Link to={`/pokemon/${pokemonInfos.previousPokemonId}?count=${count}`}>
                  <img src={arrow} alt="leftArrow" className="leftArrow" title="Ver pokémon anterior" />
                </Link>
                <h1>{pokemonInfos.name}</h1>
              </>
            )}

            {(pokemonInfos.previousPokemonId && pokemonInfos.nextPokemonId) && (
              <>
                <Link to={`/pokemon/${pokemonInfos.previousPokemonId}?count=${count}`}>
                  <img src={arrow} alt="leftArrow" className="leftArrow" title="Ver pokémon anterior" />
                </Link>

                <h1>{pokemonInfos.name.toUpperCase()}</h1>

                <Link to={`/pokemon/${pokemonInfos.nextPokemonId}?count=${count}`}>
                  <img src={arrow} alt="rightArrow" title="Ver próximo pokémon" className="rightArrow" />
                </Link>
              </>
            )}
          </Navbar>
          <PokemonCard
            pokemonDetails={pokemonInfos}
          />
        </>
      )}

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="sad" />

          <div className="details">
            <strong>Ocorreu um erro ao obter este pokémon!</strong>

            <Button onClick={handleTryAgain}>Tentar Novamente</Button>
          </div>
        </ErrorContainer>
      )}
    </Transitions>
  );
}
