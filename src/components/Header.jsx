import React from 'react';
import SearchBar from './SearchBar';

const Header = (props) => {
	const { searchTerm, setSearchTerm, getLocation } = props;
	return (
		<header className="header">
			<div className="header-row row">
				<div className="app-brand">
					<h1 className="app-brand-title">Weather</h1>
				</div>
				<SearchBar
					searchValue={searchTerm}
					setSearchValue={setSearchTerm}
					getLocation={getLocation}
				/>
			</div>
		</header>
	);
};

export default Header;
