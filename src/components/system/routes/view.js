import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {LegoSet, LegoSets, ThemeForm, YearsForm} from '../../pages';

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="LegoSets" component={LegoSets} hideNavBar initial />
      <Scene key="LegoSet" component={LegoSet} title={'LEGO Set'}/>
      <Scene key="ThemeForm" component={ThemeForm} />
      <Scene key="YearsForm" component={YearsForm} />
    </Stack>
  </Router>
);

export default Routes;
