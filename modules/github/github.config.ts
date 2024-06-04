import { IGithubOutput } from "./domain/github.output";
import { GithubApiProvider } from "./infrastructure/GithubApiProvider";

type Output = {
  csr: IGithubOutput;
};

export const githubModuleOutputs: Output = {
  csr: new GithubApiProvider(),
};

export const githubModuleConfig = {
  output: githubModuleOutputs,
};
