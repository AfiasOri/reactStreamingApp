import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from 'Components/UI/Header/Header';
import StreamCreate from 'Components/streams/StreamCreate/StreamCreate';
import StreamDelete from 'Components/streams/StreamDelete/StreamDelete';
import StreamEdit from 'Components/streams/StreamEdit/StreamEdit';
import StreamShow from 'Components/streams/StreamShow/StreamShow';
import StreamList from 'Components/streams/StreamList/StreamList';
import history from '../../history';

const app = props => (
	<div className="ui container">
		<Router history={history}>
			<div>
				<Header />
				<Switch>
					<Route path="/" exact component={StreamList}></Route>
					<Route path="/streams/new" exact component={StreamCreate}></Route>
					<Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
					<Route path="/streams/delete/:id" exact component={StreamDelete}></Route>
					<Route path="/streams/:id" exact component={StreamShow}></Route>
				</Switch>
			</div>
		</Router>
	</div>
);

export default app;
