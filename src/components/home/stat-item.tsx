interface StatItemProps {
  value: string;
  label: string;
}

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
        {value}
      </span>

      <span className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        {label}
      </span>
    </div>
  );
}