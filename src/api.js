export const dataFetch = async (lang) => {
  const result = await fetch(
    `https://api.github.com/search/repositories?q=stars:%3E1+language:${lang}&sort=stars&order=desc&type=Repositories`
  );
  const { items } = await result.json();
  return items;
};
