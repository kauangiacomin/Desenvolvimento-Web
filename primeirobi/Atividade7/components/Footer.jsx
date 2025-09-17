export default function Footer({ owner, year }) {
return (
<footer className="border-t bg-white">
<div className="mx-auto w-full max-w-6xl p-4 text-center text-sm text-neutral-500 md:p-6">
© {year} {owner}. Feito com React.
</div>
</footer>
);
}
