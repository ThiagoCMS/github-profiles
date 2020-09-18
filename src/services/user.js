const URL = 'https://api.github.com/users';

export async function getUser(user) {
  const userUrl = `${URL}/${user}`;
  try {
    const response = await fetch(userUrl);
    if (response.status !== 200) throw new Error(response);
    const data = await response.json();
    return {
      login: data.login,
      avatar_url: data.avatar_url,
      name: data.name,
      public_repos: data.public_repos,
      followers: data.followers,
      url: data.html_url,
    };
  } catch (error) {
    return { error: 'user not found' };
  }
}

export async function getRepos(user) {
  const reposUrl = `${URL}/${user}/repos?sort=t&per_page=4`;
  try {
    const response = await fetch(reposUrl);
    const data = await response.json();
    const repos = await data.map(async (repo) => {
      if (repo.language) {
        return {
          id: repo.id, name: repo.name, language: repo.language, url: repo.html_url,
        };
      }
      const languageData = await fetch(repo.languages_url);
      const languages = await languageData.json();
      const language = Object.keys(languages).length > 0 ? Object.keys(languages).reduce((a, b) => (languages[a] > languages[b] ? a : b)) : '';
      return {
        id: repo.id, name: repo.name, language, url: repo.html_url,
      };
    });
    const result = await Promise.all(repos);
    return result;
  } catch (error) {
    return { error: 'error while getting repositories' };
  }
}

export default {
  getUser,
  getRepos,
};
