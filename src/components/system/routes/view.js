import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {Sets, SetDetails, ThemeForm, YearsForm} from '../../pages';

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="Sets" component={Sets} hideNavBar initial />
      <Scene
        key="SetDetails"
        component={SetDetails}
        title={'Detalle del Set'}
      />
      <Scene key="ThemeForm" component={ThemeForm} />
      <Scene key="YearsForm" component={YearsForm} />
    </Stack>
  </Router>
);

export default Routes;
