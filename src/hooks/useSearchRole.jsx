import { useContext } from 'react';

import { SearchRoleContext } from '../contexts/SearchRoleContext';

export function useSearchRole() {
	const context = useContext(SearchRoleContext);

	if (!context) {
		throw new Error('error on searchRoleContext!');
	}

  return context;
}
