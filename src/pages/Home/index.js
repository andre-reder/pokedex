// import { PageHeader } from './styles';
import { Link } from 'react-router-dom';
import {
  useEffect, useState, useMemo, useCallback,
} from 'react';
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
} from './styles';

import sad from '../../assets/images/icons/sad.svg';
import searchNotFound from '../../assets/images/icons/searchNotFound.svg';
import pokeball from '../../assets/images/pokeball.svg';

import Loader from '../../components/Loader';
import PokemonService from '../../services/PokemonService';
import Button from '../../components/Button';
import Transitions from '../../components/Transition';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [responseData, setResponseData] = useState({});

  const filteredPokemons = useMemo(() => pokemons?.filter((pokemon) => (
    pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    || pokemon.id === searchTerm
  )), [pokemons, searchTerm]);

  const loadPokemons = useCallback(async (queryParams) => {
    try {
      setIsLoading(true);

      const BodyPokemonsList = await PokemonService.listPokemons(
        { queryParams: queryParams || 'limit=50&offset=0' },
      );
      const buttonsLabelArray = [];
      for (let i = 0; i < Math.ceil(BodyPokemonsList.count / 50); i++) {
        buttonsLabelArray.push(i + 1);
      }
      setResponseData({
        buttonsLabelArray,
        nextPage: BodyPokemonsList.next,
        previousPage: BodyPokemonsList.previous,
      });
      const PokemonsList = BodyPokemonsList.results;
      setPokemons(PokemonsList.map((pokemon) => (
        {
          ...pokemon,
          id: pokemon.url.split('/')[6],
        }
      )));
    } catch {
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
          <Container>
            <PaginationContainer>
              <Row xs={1} md={1} lg={2}>
                {responseData.buttonsLabelArray.map((buttonLabel) => (
                  <SecondaryButton
                    key={buttonLabel}
                    selected={false}
                  >
                    {buttonLabel}
                  </SecondaryButton>
                ))}
              </Row>
            </PaginationContainer>
          </Container>
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
                <Card>
                  <div className="info">
                    <div className="pokemon-name">
                      <strong>{pokemon.name}</strong>
                    </div>
                  </div>

                  <div className="actions">
                    <Link to={`/${pokemon.id}`}>
                      <img src={pokeball} alt="edit" />
                    </Link>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
      )}
    </Transitions>
  );
}
