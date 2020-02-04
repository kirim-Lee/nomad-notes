import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notes from '../../Routes/Notes';
import Add from '../../Routes/Add';
import Note from '../../Routes/Note';
import Edit from '../../Routes/Edit';
// import { Query } from 'react-apollo';

const App = () => {
  return (
    /*<Query query={GET_NOTES}>{() => null}</Query>*/
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={'/'} component={Notes} />
        <Route path={'/note/add'} component={Add} />
        <Route exact={true} path={'/note/:id'} component={Note} />
        <Route path={'/note/:id/edit'} component={Edit} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
