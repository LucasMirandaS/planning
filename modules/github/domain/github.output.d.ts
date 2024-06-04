import { Repository } from "./github.types";

export type GetRepositories = {
  props: {
    username: string;
  };
  response: {
    repositories: Repository[];
  };
};

export interface IGithubOutput {
  getRepositories(
    props: GetRepositories["props"]
  ): Promise<GetRepositories["response"]>;
}
