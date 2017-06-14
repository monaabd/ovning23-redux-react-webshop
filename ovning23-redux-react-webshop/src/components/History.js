import React from 'react';

function History(props) {
	console.log('history:', props.history);
	const list = props.history.map( (x, index) => <li key={index}>{x.type}</li> );
	return <div><h1>History page</h1>: <ul>{list}</ul>          </div>;
}

export default History;