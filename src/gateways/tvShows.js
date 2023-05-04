const baseUrl = 'https://api.tvmaze.com/search/shows?q=';

export const fetchTvShows = text =>
  fetch(`${baseUrl}${text}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('server error');
      }
      return res.json();
    })
    .catch(err => alert(err));
