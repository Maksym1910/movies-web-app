import { SyntheticEvent, useCallback } from 'react';

export const useDefaultPoster = () => {
  const defaultPoster = 'https://www.thecivic.com.au/template_1/img/default-movie-portrait.jpg';

  return useCallback((event: SyntheticEvent) => {
    const target = event.target as HTMLImageElement;
    target.src = defaultPoster;
    target.onerror = null;
  }, []);
};
