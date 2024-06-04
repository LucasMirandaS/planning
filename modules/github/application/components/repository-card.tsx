import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Repository } from "../../domain/github.types";

export function RepositoryCard({ repo }: { repo: Repository }) {
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>{repo.name}</CardTitle>
        {repo.description && (
          <CardDescription>
            {repo.description}
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  )
}
