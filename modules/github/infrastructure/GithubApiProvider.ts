import { GetRepositories, IGithubOutput } from "../domain/github.output";

export class GithubApiProvider implements IGithubOutput {
  async getRepositories(
    props: GetRepositories["props"]
  ): Promise<GetRepositories["response"]> {
    const response = await fetch(
      "https://api.github.com/users/" + props.username + "/repos"
    ).then((res) => res.json());

    return {
      repositories: response,
    };
  }
}
