import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
	const { searchValue, setSearchValue } = props;

	const onChange = (e) => {
		e.persist();
		return setSearchValue(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form name="search-form" onSubmit={onSubmit} className="search-form">
			<input
				name="search-input"
				type="text"
				placeholder="Enter your location..."
				className="search-input"
				onChange={onChange}
				value={searchValue}
			/>
			<span className="search-icon">
				<FaSearch />
			</span>
		</form>
	);
};

export default SearchBar;
