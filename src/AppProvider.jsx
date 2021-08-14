import { BookProvider } from './contexts/BookContext';
import { SearchRoleProvider } from './contexts/SearchRoleContext';
import { FavoritesBooksProvider } from './contexts/FavoritesBooksContext';

function AppProvider({ children }) {
	return (
		<SearchRoleProvider>
			<BookProvider>
				<FavoritesBooksProvider>
          {children}
				</FavoritesBooksProvider>
			</BookProvider>
		</SearchRoleProvider>
	);
}

export default AppProvider;
