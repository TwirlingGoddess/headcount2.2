import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SearchForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			searchWord: ''
		}
	}

	handleChange = (event) => {
		this.setState({
			searchWord: event.target.value
		})
		return this.props.filterDistricts(event.target.value)
	}

	render() {
		return(
			<form >
				<input 	type='text' 
								value={this.state.value}
								className="Search"
								placeholder="Type in district to Search"
								onChange={this.handleChange}

				/>
			</form>
		)
	}
}

SearchForm.propTypes = {
  filterDistricts: PropTypes.func.isRequired
};

export default SearchForm