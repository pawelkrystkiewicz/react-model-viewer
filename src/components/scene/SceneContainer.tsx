import clsx from 'clsx'

const className = clsx(
  //
  'w-full',
  'h-screen',
  'bg-gray-700',
)

export const SceneContainer = ({ children }: any) => {
  return <div className={className}>{children}</div>
}
