import React from 'react'

import ReactDOM from 'react-dom'

import { Route, Switch } from 'react-router-dom'



import AdminNavHeader from '../navigation/admin-nav-header'

import AdminNavSidebar from '../navigation/admin-nav-sidebar'



const AdminPage = ({ match }) => (

	<div>

		<AdminNavHeader />

		<AdminNavSidebar />



		<div className="admin-route-wrapper">

			<Switch>


			</Switch>

		</div>



		<h1>Testing bottom page</h1>

	</div>

)



export default AdminPage