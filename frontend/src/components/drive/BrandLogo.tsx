import { cn } from '@/lib/utils'

export function BrandLogo({ className }: { className?: string }) {
  return (
    <div className={cn('flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200', className)}>
      <svg viewBox="30 30 132 132" className="h-7 w-7" role="img" aria-label="ZDrive logo">
        <path fill="currentColor" d="M50 37L142 37L142 59L82 115L142 115L142 137L50 137L50 115L110 59L50 59Z" />
        <path fill="#bfdbfe" d="M50 147L142 147L142 155L50 155Z" />
      </svg>
    </div>
  )
}
