import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {LegoSet, LegoSets, ThemeForm, YearsForm} from '../../pages';

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="Sets" component={LegoSets} hideNavBar initial />
      <Scene key="SetDetails" component={LegoSet} />
      <Scene key="ThemeForm" component={ThemeForm} />
      <Scene key="YearsForm" component={YearsForm} />
    </Stack>
  </Router>
);

export default Routes;
