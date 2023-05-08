import { useEffect, useState } from 'react';

export default function Repo() {
  const [repos, setRepos] = useState([]);
  const GITHUB_URL_BASE = 'https://api.github.com';
  const GITHUB_USER = 'KausVlad';

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(
        `${GITHUB_URL_BASE}/users/${GITHUB_USER}/repos`
      );
      const data = await response.json();

      const formattedRepos = data.map((repo) => ({
        id: repo.id,
        full_name: repo.full_name,
        html_url: repo.html_url,
      }));
      setRepos(formattedRepos);
    };
    fetchRepos();
  }, []);

  return (
    <>
      <h2>My repositories on GitHub</h2>
      <div id="loader">
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.full_name}
            </a>
          </li>
        ))}
      </div>
    </>
  );
}
