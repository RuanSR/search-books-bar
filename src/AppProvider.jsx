import { ThemeProvider } from '@material-ui/core';
import { theme } from './assets/theme/index';
import { BookProvider } from './contexts/BookContext';
import { SearchRoleProvider } from './contexts/SearchRoleContext';
import { FavoritesBooksProvider } from './contexts/FavoritesBooksContext';

function AppProvider({ children }) {
	return (
    <ThemeProvider theme={theme}>
      <SearchRoleProvider>
        <BookProvider>
          <FavoritesBooksProvider>
            {children}
          </FavoritesBooksProvider>
        </BookProvider>
      </SearchRoleProvider>
    </ThemeProvider>
	);
}

export default AppProvider;
