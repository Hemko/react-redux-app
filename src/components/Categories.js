import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { blue500 } from 'material-ui/styles/colors';

const iconStyle = {
  height: 42,
  width: 50,
  marginTop: 29,
};
const nearbyIcon = <IconLocationOn style={iconStyle} color={blue500} />;

const paperStyle = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const Categories = () => (
  <div>
    <h1>Categories</h1>
    <MuiThemeProvider>
      <div>
        <Paper style={paperStyle} zDepth={1} circle={true} children={nearbyIcon} />
        <Paper style={paperStyle} zDepth={1} circle={true} children={nearbyIcon} />
        <Paper style={paperStyle} zDepth={1} circle={true} children={nearbyIcon} />
      </div>
    </MuiThemeProvider>
  </div>
);

export default Categories;
