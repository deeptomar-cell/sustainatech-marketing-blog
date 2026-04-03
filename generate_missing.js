const fs = require('fs');

let template = fs.readFileSync('C:/Users/aadit/Website/index.html', 'utf8');

const navEndIdx = template.indexOf('</nav>') + 6;
const scriptEndIdx = template.indexOf('</script>', navEndIdx) + 9;
const footerIdx = template.indexOf('<footer');

const headNav = template.substring(0, scriptEndIdx);
const footer = template.substring(footerIdx);

const podcastBody = `
    <!-- Podcast Hero -->
    <div class="relative pt-32 pb-20 overflow-hidden">
        <div class="absolute inset-0 bg-darker z-0"></div>
        <div class="absolute inset-0 bg-[url('assets/hero_bg.png')] bg-cover bg-center opacity-10 mix-blend-luminosity z-0"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-primary mb-6 font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"></path><path d="M19 10v2a7 7 0 01-14 0v-2H3v2a9 9 0 008 8.94V23h2v-2.06A9 9 0 0021 12v-2h-2z"></path></svg>
                Now Streaming Everywhere
            </div>
            <h1 class="text-5xl sm:text-7xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
                Sustaina<span class="text-gradient">Talk.</span>
            </h1>
            <p class="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                The #1 Climate Tech Podcast of 2026. Join our editorial team as we interview the founders building the sustainable future.
            </p>
        </div>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 class="text-2xl font-display font-bold text-white mb-8 border-b border-slate-800 pb-4">Latest Episodes</h2>
        <div class="space-y-6">
            <div class="glass flex flex-col sm:flex-row items-center p-6 rounded-2xl border border-slate-800 card-hover transition-all gap-6 relative overflow-hidden">
                <div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                <div class="w-24 h-24 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 relative group cursor-pointer" onclick="alert('Demo: Playing Episode 42...')">
                    <img src="assets/green_ai.png" class="w-full h-full object-cover rounded-xl opacity-60 group-hover:opacity-40 transition-opacity">
                    <svg class="w-10 h-10 text-white absolute inset-0 m-auto opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <div class="flex-grow">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-primary text-xs font-bold uppercase tracking-wider">Ep. 42</span>
                        <span class="text-slate-500 text-xs">|</span>
                        <span class="text-slate-400 text-xs text-medium">45 min</span>
                    </div>
                    <h3 class="text-xl font-display font-bold text-white mb-2">The 100% Renewable Data Center</h3>
                    <p class="text-slate-400 text-sm">We sit down with leading engineers to discuss how liquid cooling and AI grid routing are bringing data centers to net-zero.</p>
                </div>
            </div>

            <div class="glass flex flex-col sm:flex-row items-center p-6 rounded-2xl border border-slate-800 card-hover transition-all gap-6">
                <div class="w-24 h-24 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 relative group cursor-pointer" onclick="alert('Demo: Playing Episode 41...')">
                    <img src="assets/smart_grid.png" class="w-full h-full object-cover rounded-xl opacity-60 group-hover:opacity-40 transition-opacity">
                    <svg class="w-10 h-10 text-white absolute inset-0 m-auto opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <div class="flex-grow">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-primary text-xs font-bold uppercase tracking-wider">Ep. 41</span>
                        <span class="text-slate-500 text-xs">|</span>
                        <span class="text-slate-400 text-xs text-medium">38 min</span>
                    </div>
                    <h3 class="text-xl font-display font-bold text-white mb-2">Decentralizing the Smart Grid</h3>
                    <p class="text-slate-400 text-sm">How residential solar clusters and AI algorithms are preventing mass blackouts globally.</p>
                </div>
            </div>
            
            <div class="glass flex flex-col sm:flex-row items-center p-6 rounded-2xl border border-slate-800 card-hover transition-all gap-6">
                <div class="w-24 h-24 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 relative group cursor-pointer" onclick="alert('Demo: Playing Episode 40...')">
                    <img src="assets/solid_state.png" class="w-full h-full object-cover rounded-xl opacity-60 group-hover:opacity-40 transition-opacity">
                    <svg class="w-10 h-10 text-white absolute inset-0 m-auto opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <div class="flex-grow">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-primary text-xs font-bold uppercase tracking-wider">Ep. 40</span>
                        <span class="text-slate-500 text-xs">|</span>
                        <span class="text-slate-400 text-xs text-medium">52 min</span>
                    </div>
                    <h3 class="text-xl font-display font-bold text-white mb-2">The Solid-State Battery Myth</h3>
                    <p class="text-slate-400 text-sm">Separating hype from reality: when will solid-state batteries actually achieve price parity with lithium-ion?</p>
                </div>
            </div>
        </div>
    </div>
`;

let pHtml = headNav + podcastBody + footer;
pHtml = pHtml.replace('<title>SustainaTech 2026 | Next-Gen Marketing For A Sustainable Future</title>', '<title>Podcast | SustainaTech 2026</title>');
fs.writeFileSync('C:/Users/aadit/Website/podcast.html', pHtml);

const roadmapBody = `
    <!-- Roadmap Hero -->
    <div class="relative pt-32 pb-20 overflow-hidden">
        <div class="absolute inset-0 bg-darker z-0"></div>
        <div class="absolute inset-0 bg-[url('assets/blockchain_carbon.png')] bg-cover bg-center opacity-10 mix-blend-luminosity z-0"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in z-10">
            <h1 class="text-5xl sm:text-7xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
                Technology <span class="text-gradient">Roadmap.</span>
            </h1>
            <p class="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                Our editorial predictions for the most critical climate tech milestones between 2026 and 2030.
            </p>
        </div>
    </div>

    <!-- Timeline CSS Component -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:border-l-0">
            <div class="absolute md:left-1/2 w-1 h-full bg-slate-800 hidden md:block transform -translate-x-1/2"></div>

            <div class="relative mb-16 md:flex items-center justify-between w-full">
                <div class="md:w-5/12 mb-8 md:mb-0 text-left md:text-right pr-0 md:pr-8 pl-8 md:pl-0">
                    <h3 class="text-3xl font-display font-bold text-white">2026</h3>
                    <h4 class="text-xl font-medium text-emerald-400 mb-2">Grid-Scale AI Optimization</h4>
                    <p class="text-slate-400 text-sm">Major utility companies fully transition entirely to AI-routed energy grids to manage chaotic renewable influxes.</p>
                </div>
                <div class="absolute -left-[9px] md:left-1/2 w-5 h-5 rounded-full bg-emerald-400 border-4 border-darker md:-translate-x-1/2 z-10 shadow-[0_0_15px_#34d399]"></div>
                <div class="md:w-5/12 pl-8 md:pl-8 hidden md:block text-left opacity-80 card-hover">
                    <img src="assets/smart_grid.png" class="rounded-xl border border-slate-800 inline-block w-full">
                </div>
            </div>

            <div class="relative mb-16 md:flex items-center justify-between w-full flex-row-reverse">
                <div class="md:w-5/12 mb-8 md:mb-0 text-left pl-8 md:pl-8">
                    <h3 class="text-3xl font-display font-bold text-white">2027</h3>
                    <h4 class="text-xl font-medium text-primary mb-2">Solid-State EV Parity</h4>
                    <p class="text-slate-400 text-sm">Solid-state battery production reaches critical mass, finally matching the per-kWh cost of traditional lithium-ion.</p>
                </div>
                <div class="absolute -left-[9px] md:left-1/2 w-5 h-5 rounded-full bg-primary border-4 border-darker md:-translate-x-1/2 z-10 shadow-[0_0_15px_#10b981]"></div>
                <div class="md:w-5/12 pr-0 md:pr-8 pl-8 md:pl-0 hidden md:block text-right opacity-80 card-hover">
                    <img src="assets/solid_state.png" class="rounded-xl border border-slate-800 inline-block w-full">
                </div>
            </div>

            <div class="relative mb-16 md:flex items-center justify-between w-full">
                <div class="md:w-5/12 mb-8 md:mb-0 text-left md:text-right pr-0 md:pr-8 pl-8 md:pl-0">
                    <h3 class="text-3xl font-display font-bold text-white">2028</h3>
                    <h4 class="text-xl font-medium text-teal-400 mb-2">Carbon Tariffs Live</h4>
                    <p class="text-slate-400 text-sm">Global supply chains complete onboarding to blockchain tracking as stringent international carbon tracking tariffs are fully enforced.</p>
                </div>
                <div class="absolute -left-[9px] md:left-1/2 w-5 h-5 rounded-full bg-teal-400 border-4 border-darker md:-translate-x-1/2 z-10 shadow-[0_0_15px_#2dd4bf]"></div>
                <div class="md:w-5/12 pl-8 md:pl-8 hidden md:block text-left opacity-80 card-hover">
                    <img src="assets/blockchain_carbon.png" class="rounded-xl border border-slate-800 inline-block w-full">
                </div>
            </div>

            <div class="relative md:flex items-center justify-between w-full flex-row-reverse">
                <div class="md:w-5/12 mb-8 md:mb-0 text-left pl-8 md:pl-8">
                    <h3 class="text-3xl font-display font-bold text-white">2030</h3>
                    <h4 class="text-xl font-medium text-blue-400 mb-2">Net-Zero Data Centers</h4>
                    <p class="text-slate-400 text-sm">The majority of tier-1 global data centers achieve true net-zero emissions through on-site liquid cooling integration and direct DAC offsets.</p>
                </div>
                <div class="absolute -left-[9px] md:left-1/2 w-5 h-5 rounded-full bg-blue-400 border-4 border-darker md:-translate-x-1/2 z-10 shadow-[0_0_15px_#60a5fa]"></div>
                <div class="md:w-5/12 pr-0 md:pr-8 pl-8 md:pl-0 hidden md:block text-right opacity-80 card-hover">
                    <img src="assets/green_ai.png" class="rounded-xl border border-slate-800 inline-block w-full">
                </div>
            </div>

        </div>
    </div>
`;
let rHtml = headNav + roadmapBody + footer;
rHtml = rHtml.replace('<title>SustainaTech 2026 | Next-Gen Marketing For A Sustainable Future</title>', '<title>Roadmap | SustainaTech 2026</title>');
fs.writeFileSync('C:/Users/aadit/Website/roadmap.html', rHtml);
