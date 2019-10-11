import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {LegoSet, LegoSets, Welcome, FiltersForm} from '../../pages';

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="Welcome" component={Welcome} hideNavBar initial />
      <Scene key="LegoSets" component={LegoSets} hideNavBar />
      <Scene key="LegoSet" component={LegoSet} title={'LEGO Set'} />
      <Scene key="FiltersForm" component={FiltersForm} title={'Filters'} />
    </Stack>
  </Router>
);

export default Routes;
