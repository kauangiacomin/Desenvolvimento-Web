export default function Header({ title }) {
return (
<header className="border-b bg-white">
<div className="mx-auto flex w-full max-w-6xl flex-col gap-3 p-4 md:flex-row md:items-end md:justify-between md:p-6">
<h1 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h1>
<p className="text-sm text-neutral-500">Dicas práticas, roteiros curtos e orçamento real.</p>
</div>
</header>
);
}
