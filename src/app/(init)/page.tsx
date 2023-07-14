import { Button } from "@/components/button"
import { Icons } from "@/components/icons"
import { getUserData } from "@/modules/user/get-user-data"
import Image from "next/image"
import { ReactNode } from "react"

export default async function Home() {
  const user = await getUserData()
  
  
  return (
    <main className="h-full bg-blue-500/30 overflow-hidden">
      <Image src="/assets/main.jpg" alt='' fill className="absolute z-[-1] object-cover object-center" placeholder="blur" blurDataURL="/assets/main.jpg"/>

      
      {user && (
        
        <div className="h-full flex justify-center items-center overflow-auto p-2">
          <span className="shadow-md rounded-3xl z-10">
            <article className="bg-white/5 rounded-3xl text-slate-800 px-10 py-16 flex flex-col justify-center items-center max-w-xl backdrop-blur-md shadow-inner shadow-white/50">
              <Image src={user.avatar_url} alt={user.name} width={180} height={180} objectFit="cover" className="rounded-full"/>
              <h1 className="whitespace-nowrap font-bold text-4xl mt-12 text-slate-100">{user?.name}</h1>
              <span className="text-sm text-slate-100/50 text-xl">Software Developer</span>

              <p className="text-center max-w-sm text-slate-100 leading-tight mt-12">{user.bio}</p>

              <div className="flex gap-4 mt-10">
                <Button as="a" target="_blank" rel="noopener noreferrer" href="https://github.com/felipeolliveira" icon={Icons.Github}>Github</Button>
                <Button as="a" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/felipeolliveira" icon={Icons.Linkedin}>Linkedin</Button>
              </div>
            </article>
          </span>
        </div>
      )}

      {!user && ('Carregando...')}

      <span className="text-xs absolute z-0 bottom-2 left-1/2 -translate-x-1/2">
        inspired by <a href="https://www.figma.com/community/file/1130839780230933874" target="_blank" className="text-slate-200 underline" rel="noopener noreferrer" >Ajinkya</a> ❤️
      </span>
    </main>
  )
}
