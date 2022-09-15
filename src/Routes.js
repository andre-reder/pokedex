import {
  Switch, Route, useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';

export default function Routes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch
        location={location}
        key={location.pathname}
      >
        <Route path="/pokedex" exact component={Home} />
        <Route path="/pokemon/:id" exact component={PokemonDetails} />
      </Switch>
    </AnimatePresence>
  );
}
