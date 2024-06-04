import { githubModuleOutputs } from "../github.config";
import { GetRepositories } from "./github.output";

export function getRepositories(
  props: GetRepositories["props"]
): Promise<GetRepositories["response"]> {
  return githubModuleOutputs.csr.getRepositories(props);
}
