import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";


export default function App() {
const post = {
title: "Trilha nos Andes: roteiro de 4 dias",
author: "Kauan Maroski Giacomin",
date: "17 set 2025",
cover: "https://picsum.photos/seed/andes/1200/500",
content: [
"Este guia resume os principais pontos para encarar uma travessia curta nos Andes: preparo físico básico, planejamento de pernoites e custos por dia.",
"Abordamos equipamentos essenciais, hidratação em altitude e alternativas de rotas com trilhas sinalizadas para iniciantes.",
"Incluí também um checklist final para você revisar antes de sair de casa e evitar perrengues comuns."
]
};


const navLinks = [
{ label: "Início", href: "#" },
{ label: "Destinos", href: "#" },
{ label: "Dicas", href: "#" },
{ label: "Contato", href: "#" }
];


const relatedPosts = [
{ id: 1, title: "48h em Kyoto: templos e comida de rua", href: "#" },
{ id: 2, title: "Atacama low‑cost: o que priorizar", href: "#" },
{ id: 3, title: "Checklist de mochila para 4 dias", href: "#" }
];


return (
<div className="min-h-screen bg-neutral-50 text-neutral-900">
<Header title="Viajante em Rotas" />
<Navigation links={navLinks} />


<main className="mx-auto grid w-full max-w-6xl gap-6 p-4 md:grid-cols-[1fr_320px] md:p-6">
<Article post={post} />
<Sidebar related={relatedPosts} />
</main>


<Footer owner="Viajante em Rotas" year={new Date().getFullYear()} />
</div>
);
}
