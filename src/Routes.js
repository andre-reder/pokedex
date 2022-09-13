import {
  Switch, Route, useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// pages
import Home from './pages/Home';

export default function Routes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch
        location={location}
        key={location.pathname}
      >
        <Route path="/" exact component={Home} />
      </Switch>
    </AnimatePresence>
  );
}
