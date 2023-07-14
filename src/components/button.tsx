import { ElementType, ReactNode } from "react"

type IntrinsicElementsUnion = keyof JSX.IntrinsicElements

type ButtonProps<T extends IntrinsicElementsUnion> = {
  as?: T
  icon?: ElementType
  children: ReactNode
} & JSX.IntrinsicElements[T]

export function Button<T extends IntrinsicElementsUnion = 'button'>({children, as: elementType = 'button' as T, icon: Icon, ...props} : ButtonProps<T>) {
  const DefaultTag = elementType as ElementType ||'button'
  
  return (
    <DefaultTag className="py-2 px-4 bg-slate-50 text-pink-500 rounded-full transition-colors hover:bg-pink-500 hover:text-slate-50 cursor-pointer group flex gap-2 items-center leading-none" {...props}>
      {Icon && (
        <div className="w-0 h-6 group-hover:w-6 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-200">
          <span className="block w-6 h-full">
            <Icon />
          </span>
        </div>
      )}
      {children}
    </DefaultTag>
  )
}