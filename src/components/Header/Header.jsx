import React from 'react';

import BookIcon from '@material-ui/icons/LibraryBooksTwoTone';
import { useStyles } from './styles';

function Header() {
	const classes = useStyles();
	return (
		<header className={classes.header}>
			<h1 className={classes.customTitle}>Search Book</h1>
			<BookIcon className={classes.bookIcon} />
		</header>
	);
}

export default Header;
