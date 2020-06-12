import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import LogItem from './LogItem'
import AddLogItem from './AddLogItem'

const App = () => {
	const [logs, setLogs] = useState([
		{
			_id: 1,
			priority: 'high',
			text: 'log1',
			user: 'Brad1',
			created: new Date().toString()
		},
		{
			_id: 2,
			priority: 'high',
			text: 'log2',
			user: 'Brad2',
			created: new Date().toString()
		},
		{
			_id: 3,
			priority: 'moderate',
			text: 'log3',
			user: 'Brad3',
			created: new Date().toString()
		},
		{
			_id: 4,
			priority: 'high',
			text: 'log4',
			user: 'Brad4',
			created: new Date().toString()
		}
	]);


	return (
		<Container>
			<AddLogItem />
			<Table>
				<thead>
					<tr>
						<th>Priority</th>
						<th>Log Text</th>
						<th>User</th>
						<th>Created</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{ logs.map((log) => {
						return <LogItem  key={log._id} log={log} />
					}) }
				</tbody>
			</Table>
		</Container>
	)
}

export default App
