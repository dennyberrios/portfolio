import axios from "axios";
import { ENDPOINTS } from "../Endpoint";

// Obter repositórios do usuário
axios
  .get(`${ENDPOINTS.BASE_URL}${ENDPOINTS.GET_USER_REPOS()}`)
  .then((res) => {
    console.log("Repositórios:", res.data);
  })
  .catch((err) => {
    console.error("Erro ao obter repositórios:", err);
  });

// Obter seguidores do usuário
axios
  .get(`${ENDPOINTS.BASE_URL}${ENDPOINTS.GET_USER_FOLLOWERS()}`)
  .then((res) => {
    console.log("Seguidores:", res.data);
  })
  .catch((err) => {
    console.error("Erro ao obter seguidores:", err);
  });

// Obter commits de um repositório específico
const repo = "nome-do-repo";
axios
  .get(`${ENDPOINTS.BASE_URL}${ENDPOINTS.GET_REPO_COMMITS(repo)}`)
  .then((res) => {
    console.log(`Commits do repositório ${repo}:`, res.data);
  })
  .catch((err) => {
    console.error(`Erro ao obter commits do repositório ${repo}:`, err);
  });
