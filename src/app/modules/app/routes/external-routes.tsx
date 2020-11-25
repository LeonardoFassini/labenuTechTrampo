import { BasePage } from '@app/modules/base/base.page';
import * as React from 'react';
import { Route, Switch } from 'react-router';

import { AppPath } from './routes-list';

export const ExternalRoutes: React.FC = () => {
  return (
    <Switch>
      <Route component={BasePage} path={AppPath.Base} exact />
    </Switch>
  );
};
