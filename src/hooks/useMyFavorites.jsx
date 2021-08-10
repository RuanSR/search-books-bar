import { useContext } from "react";

import { FavoritesBooksContext } from "../contexts/FavoritesBooksContext";

export function useMyFavorites(){
  const context = useContext(FavoritesBooksContext);

  if (!context) {
		throw new Error('error on FavoritesBooksContext!');
	}

  return context;
}