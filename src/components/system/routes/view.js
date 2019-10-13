import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {LegoSet, LegoSets, Welcome, FiltersForm, AddUserSet} from '../../pages';

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="Welcome" component={Welcome} tabs hideNavBar initial />
      <Scene
        key="LegoSets"
        title="Sets de 2019 | LEGO Technic"
        component={LegoSets}
        backButtonTextStyle={{color: '#FFFFFF'}}
        backButtonTintColor="#FFFFFF"
      />
      <Scene key="LegoSet" component={LegoSet} title={'LEGO Set'} />
      <Scene key="FiltersForm" component={FiltersForm} title={'Filters'} />
      <Scene
        key="AddUserSet"
        component={AddUserSet}
        title={'Add Your Own Set'}
      />
    </Stack>
  </Router>
);

export default Routes;
