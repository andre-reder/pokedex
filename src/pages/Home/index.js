/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-bind */
import { Link } from 'react-router-dom';
import {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  InputSearchContainer,
  Header,
  Card,
  ErrorContainer,
  SearchNotFoundContainer,
  PaginationContainer,
  SecondaryButton,
  ContainerGroup,
} from './styles';

import sad from '../../assets/images/icons/sad.svg';
import searchNotFound from '../../assets/images/icons/searchNotFound.svg';

import Loader from '../../components/Loader';
import PokemonService from '../../services/PokemonService';
import Button from '../../components/Button';
import Transitions from '../../components/Transition';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [paginationInformation, setPaginationInformation] = useState({});

  const filteredPokemons = useMemo(() => pokemons?.filter((pokemon) => (
    pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    || pokemon.id === searchTerm
  )), [pokemons, searchTerm]);

  const loadPokemons = useCallback(async (queryParams = 'limit=50&offset=0', currentPage = 1) => {
    try {
      setIsLoading(true);

      const BodyPokemonsList = await PokemonService.listPokemons(
        { queryParams },
      );
      const buttonsLabelArray = [];
      for (let i = 0; i < Math.ceil(BodyPokemonsList.count / 50); i++) {
        buttonsLabelArray.push(i + 1);
      }
      setPaginationInformation({
        buttonsLabelArray,
        currentPage,
      });
      const PokemonsList = BodyPokemonsList.results;
      setPokemons(PokemonsList.map((pokemon) => (
        {
          ...pokemon,
          id: pokemon.url.split('/')[6],
        }
      )));
      setHasError(false);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  function handleTryAgain() {
    loadPokemons();
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Transitions>
      <Loader isLoading={isLoading} />

      {pokemons.length > 0 && (
      <InputSearchContainer>
        <input
          value={searchTerm}
          type="text"
          placeholder="Pesquisar pokemon pelo nome ou ID"
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>
      )}

      <Header
        // eslint-disable-next-line no-nested-ternary
        justifyContent={(hasError
          ? 'flex-end'
          : (
            pokemons.length > 0
              ? 'space-between'
              : 'center'
          )
          )}
      >
        {!hasError && pokemons.length > 0 && (
        <>
          <strong>
            {filteredPokemons.length}
            {' '}
            {filteredPokemons.length === 1 ? 'pokémon' : 'pokémons'}
          </strong>
          <ContainerGroup>
            <Button
              selected={paginationInformation.currentPage == 'Ver todos'}
              onClick={() => { loadPokemons('limit=9999&offset=0', 'Ver todos'); }}
            >
              Ver todos
            </Button>
            <Container>
              <PaginationContainer>
                <Row xs={1} md={1} lg={2}>
                  {paginationInformation.buttonsLabelArray.map((buttonLabel) => (
                    <SecondaryButton
                      key={buttonLabel}
                      selected={paginationInformation.currentPage == buttonLabel}
                      disabled={paginationInformation.currentPage == buttonLabel}
                      onClick={() => { loadPokemons(`limit=50&offset=${(buttonLabel - 1) * 50}`, buttonLabel); }}
                    >
                      {buttonLabel}
                    </SecondaryButton>
                  ))}
                </Row>
              </PaginationContainer>
            </Container>
          </ContainerGroup>
        </>
        )}
      </Header>

      {hasError && (
      <ErrorContainer>
        <img src={sad} alt="sad" />

        <div className="details">
          <strong>Ocorreu um erro ao obter os Pokemóns!</strong>

          <Button onClick={handleTryAgain}>Tentar Novamente</Button>
        </div>
      </ErrorContainer>
      )}

      {!hasError && (
      <>
        {pokemons.length > 0 && filteredPokemons.length < 1 && (
        <SearchNotFoundContainer>
          <img src={searchNotFound} alt="" />

          <span>
            Nenhum resultado foi encontrado para
            {' '}
            <strong>{`"${searchTerm}"`}</strong>
          </span>
        </SearchNotFoundContainer>
        )}
        <Container>
          <Row xs={2} md={2} lg={3}>
            {filteredPokemons.map((pokemon) => (
              <Col key={pokemon.id}>
                <Link to={`/pokemon/${pokemon.id}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1, type: 'tween', stiffness: 10000 }}
                  >
                    <Card>
                      <div className="info">
                        <div className="pokemon-name">
                          <strong>{pokemon.name.toUpperCase()}</strong>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </>
      )}
    </Transitions>
  );
}
