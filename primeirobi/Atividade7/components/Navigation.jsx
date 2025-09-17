export default function Navigation({ links }) {
return (
<nav className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
<div className="mx-auto flex w-full max-w-6xl flex-wrap gap-3 p-3 md:gap-6 md:p-4">
{links?.map((l, i) => (
<a key={i} href={l.href} className="font-medium text-emerald-700 hover:underline">
{l.label}
</a>
))}
</div>
</nav>
);
}
