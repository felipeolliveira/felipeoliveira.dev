import { Button } from "@/components/button"
import { Icons } from "@/components/icons"
import { getUserData } from "@/modules/user/get-user-data"
import Image from "next/image"
import { ReactNode } from "react"

export default async function Home() {
  const user = await getUserData()
  
  
  return (
    <main className="h-full flex justify-center items-center bg-blue-500/30">
      <Image src="/assets/main.jpg" alt='' fill objectFit="cover" objectPosition="center" className="absolute z-[-1]"/>

      
      {user && (
        <article className="bg-white/10 rounded-3xl text-slate-800 px-10 py-16 flex flex-col justify-center items-center max-w-xl backdrop-blur-md shadow-xl shadow-inner shadow-white/50">
          <Image src={user.avatar_url} alt={user.name} width={180} height={180} objectFit="cover" className="rounded-full"/>
          <h1 className="whitespace-nowrap font-bold text-4xl mt-12 text-slate-100">{user?.name}</h1>
          <span className="text-sm text-slate-100/50 text-xl">Software Developer</span>

          <p className="text-center max-w-sm text-slate-100 leading-tight mt-12">{user.bio}</p>

          <div className="flex gap-4 mt-10">
            <Button as="a" target="_blank" href="https://github.com/felipeolliveira" icon={Icons.Github}>Github</Button>
            <Button as="a" target="_blank" href="https://linkedin.com/in/felipeolliveira" icon={Icons.Linkedin}>Linkedin</Button>
          </div>
        </article>
      )}

      {!user && ('carregando...')}
    </main>
  )
}
