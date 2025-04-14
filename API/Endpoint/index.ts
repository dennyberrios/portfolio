export const ENDPOINTS = {
  BASE_URL: "https://api.github.com",

  // Endpoints para usuários
  GET_USER_REPOS: () => `/users/dennyberrios/repos`, // Repositórios do usuário
  GET_USER_FOLLOWERS: () => `/users/dennyberrios/followers`, // Seguidores do usuário

  // Commits de um repositório específico
  GET_REPO_COMMITS: (repo: string): string =>
    `/repos/dennyberrios/${repo}/commits`,

  // Pull requests feitos por um usuário
  GET_USER_PULL_REQUESTS: (): string =>
    `/search/issues?q=author:dennyberrios+is:pr`,

  // Estrelas de um repositório específico
  GET_REPO_STARS: (repo: string): string => `/repos/dennyberrios/${repo}`,

  // Detalhes de um repositório específico
  GET_REPO_DETAILS: (repo: string): string => `/repos/dennyberrios/${repo}`,

  // Métricas gerais
  GET_USER_ACTIVITY: () => `/users/dennyberrios/events/public`, // Atividades públicas do usuário no GitHub (pode ser útil para calcular as contribuições)
};
