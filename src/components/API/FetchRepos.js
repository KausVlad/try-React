const GITHUB_URL_BASE = 'https://api.github.com';
const GITHUB_USER = 'KausVlad';

const fetchRepos = async (onFetched) => {
  const response = await fetch(`${GITHUB_URL_BASE}/users/${GITHUB_USER}/repos`);
  const data = await response.json();

  const formattedRepos = data.map((repo) => ({
    id: repo.id,
    full_name: repo.full_name,
    html_url: repo.html_url,
  }));
  onFetched(formattedRepos);
};

export default fetchRepos;
