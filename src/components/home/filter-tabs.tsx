interface FilterTabsProps {
  filters: readonly string[];
  active: string;
  onChange: (value: string) => void;
}

export default function FilterTabs({
  filters,
  active,
  onChange,
}: FilterTabsProps) {
  return (
    <div
      className="
        inline-flex
        flex-wrap
        items-center
        justify-center
        gap-3
      "
    >
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`
            rounded-full
            px-5
            py-2.5
            text-sm
            font-medium
            transition-all
            duration-300

            ${
              active === filter
                ? "bg-emerald-500 text-white shadow-lg"
                : "border border-zinc-200 bg-white/70 text-zinc-600 hover:border-emerald-500 hover:text-emerald-500 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400"
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}