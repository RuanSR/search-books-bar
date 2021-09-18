import React from 'react';

import BookIcon from '@material-ui/icons/LibraryBooksTwoTone';
import { HeaderContent } from './styles';

function Header() {
	return (
		<HeaderContent>
			<h1>Search Book</h1>
      <BookIcon />
		</HeaderContent>
	);
}

export default Header;
