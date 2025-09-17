export default function Article({ post }) {
if (!post) return null;
return (
<article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
{post.cover && (
<img src={post.cover} alt={post.title} className="h-auto w-full object-cover" />
)}
<div className="space-y-4 p-5 md:p-6">
<header className="space-y-1">
<h2 className="text-xl font-semibold md:text-2xl">{post.title}</h2>
<p className="text-sm text-neutral-500">
Por <span className="font-medium text-neutral-700">{post.author}</span> • {post.date}
</p>
</header>
<div className="prose max-w-none prose-p:leading-relaxed">
{post.content?.map((paragraph, idx) => (
<p key={idx}>{paragraph}</p>
))}
</div>
</div>
</article>
);
}