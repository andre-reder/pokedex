/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
import {
  useEffect, useState, useCallback,
} from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  const [nextAndPreviousPokemon, setNextAndPreviousPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { id } = useParams();

  const getPokemonInfos = useCallback(async () => {
    try {
      setIsLoading(true);
      const responseBody = await PokemonService.getPokemon({ id });
      const pokemonDetails = {
        name: responseBody.name.toUpperCase(),
        types: responseBody.types,
        frontImage: responseBody.sprites.front_default,
        backImage: responseBody.sprites.back_default,
      };
      setPokemonInfos(pokemonDetails);
      setHasError(false);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  const getNextAndPreviousPokemon = useCallback(async () => {
    try {
      setIsLoading(true);
      const responseBody = await PokemonService.listPokemons({ queryParams: 'limit=100000&offset=0' });
      const pokemonList = responseBody.results;
      const currentPokemon = pokemonList.filter((pokemon) => pokemon.url.split('/')[6] == id)[0];
      const currentPokemonIndex = pokemonList.findIndex((pokemon) => (
        pokemon.url == currentPokemon.url
      ));
      const previousPokemonId = pokemonList[currentPokemonIndex - 1]?.url.split('/')[6];
      const nextPokemonId = pokemonList[currentPokemonIndex + 1]?.url.split('/')[6];
      setNextAndPreviousPokemon({ previous: previousPokemonId, next: nextPokemonId });

      setHasError(false);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  const loadPokemonPage = useCallback(async () => {
    setIsLoading(true);
    await getPokemonInfos();
    await getNextAndPreviousPokemon();
    setIsLoading(false);
  }, [getPokemonInfos, getNextAndPreviousPokemon]);

  useEffect(() => {
    loadPokemonPage();
  }, [loadPokemonPage]);

  function handleTryAgain() {
    loadPokemonPage();
  }

  return (
    <Transitions>
      <Loader isLoading={isLoading} />
      <PageHeader />
      {(!hasError && !isLoading) && (
        <>
          <Navbar>
            {!nextAndPreviousPokemon.previous && (
              <>
                <Link
                  to={`/pokemon/${nextAndPreviousPokemon.previous}`}
                  onClick={(event) => event.preventDefault()}
                  className="disabledLink"
                >
                  <img src={arrow} alt="leftArrow" className="leftArrow" title="Ver pokémon anterior" />
                </Link>

                <h1>{pokemonInfos.name}</h1>

                <Link to={`/pokemon/${nextAndPreviousPokemon.next}`}>
                  <img src={arrow} alt="rightArrow" title="Ver próximo pokémon" className="rightArrow" />
                </Link>
              </>
            )}

            {!nextAndPreviousPokemon.next && (
              <>
                <Link to={`/pokemon/${nextAndPreviousPokemon.previous}`}>
                  <img src={arrow} alt="leftArrow" className="leftArrow" title="Ver pokémon anterior" />
                </Link>

                <h1>{pokemonInfos.name}</h1>

                <Link
                  to={`/pokemon/${nextAndPreviousPokemon.next}`}
                  onClick={(event) => event.preventDefault()}
                  className="disabledLink"
                >
                  <img src={arrow} alt="rightArrow" className="rightArrow" title="Ver pokémon anterior" />
                </Link>
              </>
            )}

            {(nextAndPreviousPokemon.previous && nextAndPreviousPokemon.next) && (
              <>
                <Link to={`/pokemon/${nextAndPreviousPokemon.previous}`}>
                  <img src={arrow} alt="leftArrow" className="leftArrow" title="Ver pokémon anterior" />
                </Link>

                <h1>{pokemonInfos.name}</h1>

                <Link to={`/pokemon/${nextAndPreviousPokemon.next}`}>
                  <img src={arrow} alt="rightArrow" title="Ver próximo pokémon" className="rightArrow" />
                </Link>
              </>
            )}
          </Navbar>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, type: 'tween', stiffness: 10000 }}
          >
            <PokemonCard
              pokemonDetails={pokemonInfos}
            />
          </motion.div>
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
