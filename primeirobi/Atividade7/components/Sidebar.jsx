export default function Sidebar({ related = [] }) {
return (
<aside className="self-start">
<section className="sticky top-[4.5rem] space-y-4">
<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
<h3 className="text-lg font-semibold">Posts relacionados</h3>
<ul className="mt-3 space-y-2">
{related.map((p) => (
<li key={p.id}>
<a href={p.href} className="text-emerald-700 hover:underline">
{p.title}
</a>
</li>
))}
</ul>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
<h4 className="font-semibold">Busca</h4>
<input
type="search"
placeholder="Procure um destino"
className="mt-2 w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
/>
</div>
</section>
</aside>
);
}
