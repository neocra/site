import React from 'react';
import Layout from './layout';
import { addLocaleData } from 'react-intl';

import fr from 'react-intl/locale-data/fr';
import 'intl/locale-data/jsonp/fr';

addLocaleData(fr);

export default (props) => (
  <Layout
    {...props}
  />
);