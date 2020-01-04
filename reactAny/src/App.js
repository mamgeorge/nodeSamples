import React, { Component } from 'react';
import logo from './react.png';
import './App.css';

class App extends Component {

	constructor( props ) {
		super( props );	
		//
		this.PATH_BASE = 'https://hn.algolia.com/api/v1'; // https://jsonplaceholder.typicode.com/
		this.PATH_SEARCH = '/search';
		this.PARM_SEARCH = 'query=';
		this.PARM_PAGE = 'page=';
		this.PARM_HITS = 'hitsPerPage=';
		this.DEFAULT_QUERY = '' ;
		this.DEFAULT_PAGE = 0 ;
		this.DEFAULT_HITS = 5 ;

		this.state = {
			searchTerm: this.DEFAULT_QUERY ,
			newPage: this.DEFAULT_PAGE ,
			hitsPP: this.DEFAULT_HITS ,
			results: null ,
			list: null ,
		};
		this.setSearchStories = this.setSearchStories.bind( this );
		this.onSearchChange = this.onSearchChange.bind( this );
		this.onDismiss = this.onDismiss.bind( this );
	}

	setSearchStories( results ) { this.setState( { results } ) ; }
	onSearchChange( event ) { }
	onDismiss( id ) { 
		const isNotId = item => item.objectID !== id; 
		const updatedList = this.state.list.filter( isNotId ); 
		this.setState( { list: updatedList } ); 
	}

	getURL( ) {
		//
		const { searchTerm } = this.state; 
		const { newPage } = this.state; 
		const { hitsPP } = this.state; 
		/* const newURL = this.PATH_BASE + this.PATH_SEARCH 
			+ '?' + this.PARM_SEARCH + searchTerm 
			+ '&' + this.PARM_PAGE + newPage 
			+ '&' + this.PARM_HITS + hitsPP; */
		const newURL = `${this.PATH_BASE}${this.PATH_SEARCH}`
			+ `?${this.PARM_SEARCH}${searchTerm}`
			+ `&${this.PARM_PAGE}${newPage}`
			+ `&${this.PARM_HITS}${hitsPP}`;
		console.log( 'newURL: [' + newURL + ']' );
		return newURL;
	}

	componentDidMount( ) { 
		//
		fetch ( this.getURL( ) ).then( 
			response => response.json( ) ).then( 
				results => this.setSearchStories( results ) ).catch( error => error );
	}
	
	fetchStories( searchTerm , pageProg ) { 
		//
		let page = this.state.newPage;
		if ( pageProg === '-' ) { page = page - 1 ; }
		if ( pageProg === '+' ) { page = page + 1 ; }
		if ( page < 0 ) { page = 0; }	
		this.setState( { newPage: page } );
		//
		fetch ( this.getURL( ) ).then( 
			response => response.json( ) ).then( 
				results => this.setSearchStories( results ) ).catch( error => error );
	}

	render( ) {
		// { results.hits.map( item => item.title ) };
		const { searchTerm , results } = this.state;
		if ( !results ) { return "no results!"; }
		console.log( 'results: [' + results + ']' );
		return (
			<div className = "App">
				<table className = "tops" ><tbody><tr>
				<td className = "blnk"><img src = { logo } className = "App-logo" alt = "logo" /></td>
				<td className = "blnk"><a className="App-link" href="https://reactjs.org" target="_blank" 
					rel="noopener noreferrer" >learn react</a></td>
				</tr></tbody></table>

				<hr /><br />
				<search value = { searchTerm } onChange = { this.onSearchChange } >Search</search>
				<table className = "main" list = { results.hits } pattern = { searchTerm } ><tbody>
				<tr>
						<th>title</th>
						<th>created at</th>
						<th>author</th>
						<th>url</th>
						<th>points</th>
					{/*	<th>story id</th>
						<th>story title</th>
						<th>story text</th>
						<th>story url</th>
						<th>created at_i</th>
						<th>_tags</th>
						<th>_highlight Result</th> */}
						<th>parent id</th>
						<th>objectID</th>
						<th>comment text</th>
						<th>num comments</th>
						</tr>
				{ results.hits.map( (item) => 
					<tr key = { item.objectID } >
						<td>{item.title}</td>
						<td>{item.created_at}</td>
						<td>{item.author}</td>
						<td><a href ={item.url}>{item.author} link</a></td>
						<td>{item.points}</td>
					{/*	<td>{item.story_id}</td>
						<td>{item.story_title}</td>
						<td>{item.story_text}</td>
						<td>{item.story_url}</td>
						<td>{item.created_at_i}</td>
						<td>{item._tags}</td>
						<td>{item._highlightResult}</td> */}
						<td>{item.parent_id}</td>
						<td>{item.objectID}</td>
						<td>{item.comment_text}</td>
						<td>{item.num_comments}</td>
						</tr>
				 ) }
				</tbody></table>
			<div>
				<button onClick = { ( ) => this.fetchStories( searchTerm , '-' ) } >Less</button>
				<button onClick = { ( ) => this.fetchStories( searchTerm , '+' ) } >More</button>
				</div>
		
			</div>
		);
	}
}

export default App;
