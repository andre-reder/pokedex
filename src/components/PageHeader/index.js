import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';
import { Container } from './styles';

export default function PageHeader() {
  return (
    <Container>
      <Link to="/pokedex">
        <img src={arrow} alt="back" />
        <span>Voltar</span>
      </Link>
    </Container>
  );
}
