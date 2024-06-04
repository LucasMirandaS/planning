'use client'
import { Input } from "@/components/ui/input"
import { RepositoryCard } from "@/modules/github/application/components/repository-card"
import { getRepositories } from "@/modules/github/domain/github.actions"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

export function HomePage() {

  const { data, isPending, error } = useQuery({
    queryKey: ['repos', 'themiranha'],
    queryFn: () => getRepositories({ username: 'themiranha' })
  })

  const [search, setSearch] = useState<string>('')


  if (isPending) {
    return <div>Carregando...</div>
  }

  if (error || !data) {
    return <div>Ocorreu um erro!</div>
  }

  const filteredRepos = data.repositories.filter(repo => repo.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='w-screen h-screen items-center flex flex-col gap-2'>
      <Input
        placeholder="Pesquisar repositórios"
        className='w-[400px] mt-2'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {
        filteredRepos.map(repo => (
          <RepositoryCard repo={repo} key={repo.id} />
        ))
      }
    </div>
  )
}
