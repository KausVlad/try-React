import { useEffect, useState } from 'react';
import fetchRepos from './FetchRepos';
export default function Repo() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchRepos(setRepos);
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
