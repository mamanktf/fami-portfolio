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
        gap-2
        sm:gap-3
      "
    >
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          className={`
            rounded-full
            px-4
            py-2
            text-xs
            font-medium
            transition-all
            duration-300

            sm:px-5
            sm:py-2.5
            sm:text-sm

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