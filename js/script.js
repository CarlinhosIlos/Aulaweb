// ===================================================================
// 1. DADOS E TEMPLATES JAVASCRIPT
// Definição dos dados e templates HTML para cada rota do SPA.
// ===================================================================

const dataRoutes = {
    // Dados para a página HOME
    home: {
        title: "Home",
        quemSomos: {
            titulo: "Quem Somos",
            texto: "Somos a ONG Abraço AuMigo, uma organização não governamental de cunho estritamente sem fins lucrativos, dedicada integralmente à causa do bem-estar canino."
        },
        visaoValores: {
            titulo: "Visão e Valores",
            paragrafos: [
                "Fundada no ano de 2010 no tradicional bairro de Perdizes, na zona Oeste de São Paulo, nossa missão principal é o resgate, a reabilitação e a colocação responsável em lares amorosos de cães, abrangendo tanto os adultos que necessitam de uma segunda chance quanto os filhotes que buscam seu primeiro lar.",
                "Ao longo de 15 anos de história e ininterrupta dedicação, consolidamos nossa atuação como um pilar de apoio à comunidade canina. Nosso trabalho é pautado por pilares inegociáveis: o amor incondicional, o carinho, a ética profissional e a dedicação total à saúde física e emocional de cada animal sob nossos cuidados.",
                "Em nosso santuário, cada cão é tratado com a dignidade e o respeito que merece.",
                "Investimos continuamente em cuidados veterinários de excelência, incluindo vacinação, vermifugação, castração e tratamentos especializados para feridas ou doenças.",
                "Além disso, proporcionamos um ambiente enriquecido, com adestramento positivo e socialização, garantindo que nossos pets estejam preparados para a transição para suas novas famílias.",
                "Acreditamos profundamente no poder transformador do ciclo de dar e receber amor.",
                "Nossa dedicação visa garantir que cada um de nossos cães possa não apenas receber o cuidado e o afeto de que precisam para se recuperar e prosperar, mas também que estejam prontos para doar esse amor, preenchendo a vida das famílias que os acolhem.",
                "Em suma, a Abraço amigo é mais do que um abrigo; somos um projeto de vida que trabalha diariamente para reescrever histórias de abandono e sofrimento em narrativas de felicidade e recomeço.",
                "Contamos com o apoio da comunidade para manter e expandir este trabalho vital."
            ]
        }
    },
    // Dados para a página PROJETOS
    projetos: {
        title: "Nossos Projetos",
        content: `
            <p>Conheça as principais iniciativas que a ONG Abraço AuMigo realiza para mudar a vida de cães abandonados:</p>
            <article class="project-card">
                <h3>Resgate e Reabilitação</h3>
                <p>Programa focado em cães em situação de risco, provendo tratamento médico intensivo, alimentação e abrigo seguro até que estejam prontos para adoção.</p>
                <span class="badge badge--success">Em Andamento</span>
            </article>
            <article class="project-card">
                <h3>Lar Temporário Solidário</h3>
                <p>Rede de voluntários que oferece um lar acolhedor para cães em recuperação ou filhotes, maximizando a socialização antes da adoção definitiva.</p>
                <a href="#cadastro" class="button button--secondary">Seja um Voluntário</a>
            </article>
        `
    },
    // Dados para a página CADASTRO
    cadastro: {
        title: "Cadastre-se para Ajudar",
        content: `
            <p>Seja um voluntário, doador ou adote um amigo! Seu cadastro é o primeiro passo para fazer a diferença.</p>
            <form class="form-cadastro" onsubmit="alert('Cadastro realizado com sucesso! Em breve entraremos em contato.'); return false;">
                <div class="form-group">
                    <label for="nome">Nome Completo</label>
                    <input type="text" id="nome" required>
                </div>
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="interesse">Principal Interesse</label>
                    <select id="interesse" required>
                        <option value="">Selecione...</option>
                        <option value="voluntario">Voluntariado</option>
                        <option value="doador">Doação Financeira</option>
                        <option value="adocao">Interesse em Adoção</option>
                    </select>
                </div>
                <button type="submit" class="button button--primary">Enviar Cadastro</button>
            </form>
        `
    },
    // Dados para a página ADOÇÃO
    adocao: {
        title: "Adote um AuMigo",
        content: `
            <div class="container">
    <section>
        <p>Adotar um cão é um compromisso sério e gratificante. Na ONG Abraço amigo, temos um processo de adoção estruturado para garantir que cada animal encontre um lar amoroso e responsável. Aqui estão os passos para adotar um cão conosco:</p>
        <ol>
            <li><strong>Visita ao Abrigo:</strong> Venha nos visitar para conhecer os cães disponíveis para adoção. Nossa equipe estará disponível para apresentar os animais e fornecer informações sobre suas personalidades e necessidades.</li>
            <li><strong>Formulário de Adoção:</strong> Preencha nosso formulário de adoção, onde coletamos informações sobre seu estilo de vida, experiência com animais e expectativas em relação ao novo membro da família.</li>
            <li><strong>Entrevista:</strong> Participar de uma entrevista com nossa equipe para discutir suas respostas no formulário e garantir que você esteja preparado para a responsabilidade da adoção.</li>
            <li><strong>Visita Domiciliar:</strong> Realizamos uma visita ao seu lar para garantir que o ambiente seja seguro e adequado para o cão que você deseja adotar.</li>
            <li><strong>Taxa de Adoção:</strong> Uma taxa simbólica de adoção é cobrada para ajudar a cobrir os custos veterinários e de cuidados do animal.</li>
            <li><strong>Acompanhamento Pós-Adoção:</strong> Após a adoção, nossa equipe fará acompanhamento para garantir que a transição esteja ocorrendo bem e oferecer suporte se necessário.</li>
        </ol>
        <p>Adotar um cão é uma experiência transformadora que traz alegria e amor tanto para o adotante quanto para o animal. Estamos aqui para ajudar você em cada passo do caminho!</p>
    </section>
</div>

<div class="container">
    <div class="dog-list">
        
        <div class="dog-card">
            <img src="./imagens/Labrador.png" alt="Rex">
            <ul><li><a href="cadastro.html"><h2>Rex</h2></a></li></ul>
            <p>Idade: 3 anos</p>
            <p>Raça: Labrador Retriever</p>
            <p>Descrição: Rex é um cão amigável e energético que adora brincar e fazer caminhadas.</p>
            <p>Ele é ótimo com crianças.</p>
        </div>

        <div class="dog-card">
            <img src="./imagens/Poodle.png" alt="Luna">
            <ul><li><a href="cadastro.html"><h2>Luna</h2></a></li></ul>
            <p>Idade: 2 anos</p>
            <p>Raça: Poodle</p>
            <p>Descrição: Luna é uma cadela doce e carinhosa que adora estar perto das pessoas. Ela se dá bem com outros animais e é perfeita para famílias.</p>
        </div>

        <div class="dog-card">
            <img src="imagens/Pastor alemão.png" alt="Max">
            <ul><li><a href="cadastro.html"><h2>Max</h2></a></li></ul>
            <p>Idade: 4 anos</p>
            <p>Raça: Pastor Alemão</p>
            <p>Descrição: Max é um cão leal e protetor. Ele é inteligente e responde bem ao treinamento. Ideal para quem busca um companheiro fiel.</p>
        </div>

        <div class="dog-card">
            <img src="./imagens/Beagle.png" alt="Bella">
            <ul><li><a href="cadastro.html"><h2>Bella</h2></a></li></ul>
            <p>Idade: 1 ano</p>
            <p>Raça: Beagle</p>
            <p>Descrição: Bella é uma cadela curiosa e brincalhona. Ela adora explorar e é perfeita para famílias ativas que gostam de aventuras ao ar livre.</p> 
        </div>

        <div class="dog-card">
            <img src="./imagens/Vira-lata.png" alt="Toby">
            <ul><li><a href="cadastro.html"><h2>Toby</h2></a></li></ul>
            <p>Idade: 7 meses</p>
            <p>Raça: Vira-Lata (SRD)</p>
            <p>Descrição: Toby é um filhote muito esperto, resgatado das ruas. Tem energia de sobra e precisa de um lar que o ensine e o ame incondicionalmente.</p> 
        </div>

        <div class="dog-card">
            <img src="./imagens/Pinscher.png" alt="Princesa">
            <ul><li><a href="cadastro.html"><h2>Princesa</h2></a></li></ul>
            <p>Idade: 5 anos</p>
            <p>Raça: Pinscher</p>
            <p>Descrição: Princesa é calma e adora colo. Ideal para apartamentos e idosos que buscam uma companhia tranquila e de pequeno porte.</p> 
        </div>
    </div> 
</div>
        `
    }
};

// Funções de template para construir o HTML
const templates = {
    home: (data) => `
        <section id="quem-somos" class="grid-col-content">
            <h2>${data.quemSomos.titulo}</h2> 
            <p>${data.quemSomos.texto}</p>      
        </section>
        
        <article id="visao-e-valores" class="grid-col-content"> 
            <h2>${data.visaoValores.titulo}</h2> 
            ${data.visaoValores.paragrafos.map(p => `<p>${p}</p>`).join('')}
        </article>
    `,
    default: (data) => `
        <section class="grid-col-content">
            <h2>${data.title}</h2> 
            ${data.content}
        </section>
    `,
    notFound: () => `
        <section class="grid-col-content" style="text-align: center;">
            <h2 style="color: var(--color-danger);">404 - Página Não Encontrada</h2>
            <p style="color: var(--color-neutral-100);">A rota que você procurou não existe. Verifique o endereço.</p>
            <a href="#home" class="button button--secondary" style="margin-top: var(--space-2x);">Voltar para o Início</a>
        </section>
    `
};

// ===================================================================
// 2. LÓGICA DO SPA E MANIPULAÇÃO DO DOM
// ===================================================================

const appContainer = document.getElementById('app-container');

/**
 * Renderiza o conteúdo no appContainer baseado no hash da URL.
 */
function renderContent() {
    let route = window.location.hash.substring(1).toLowerCase() || 'home';
    const routeData = dataRoutes[route];
    let contentHTML = '';

    if (routeData) {
        if (route === 'home') {
            contentHTML = templates.home(routeData);
        } else {
            contentHTML = templates.default(routeData);
        }
    } else {
        contentHTML = templates.notFound();
    }

    // Injeta o novo HTML no DOM
    appContainer.innerHTML = contentHTML;

    // Fecha o menu mobile ao navegar (se estiver aberto)
    const mainNav = document.getElementById('main-navigation');
    const menuToggle = document.querySelector('.menu-toggle');
    if (mainNav && menuToggle && mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', false);
    }
    
    window.scrollTo(0, 0); 
}

// ===================================================================
// 3. LÓGICA DE INTERAÇÃO DA INTERFACE (Menu Hambúrguer e Dropdown)
// Novo código integrado
// ===================================================================

function setupInterfaceLogic() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-navigation');
    const dropdownItems = document.querySelectorAll('.has-dropdown');

    // 3.1. Lógica do Menu Hambúrguer (Mobile)
    if (menuToggle && mainNav) {
        const toggleMenu = () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('is-open');

            // Fechar todos os submenus quando o menu principal for fechado
            if (!mainNav.classList.contains('is-open')) {
                dropdownItems.forEach(item => {
                    if (item.classList.contains('dropdown-open')) {
                        item.classList.remove('dropdown-open');
                        item.querySelector('.nav-link').setAttribute('aria-expanded', false);
                    }
                });
            }
        };
        menuToggle.addEventListener('click', toggleMenu);
    }

    // 3.2. Lógica do Submenu Dropdown (Mobile)
    dropdownItems.forEach(item => {
        const dropdownLink = item.querySelector('.nav-link');
        const dropdownMenu = item.querySelector('.dropdown-menu');

        if (dropdownLink && dropdownMenu) {
            dropdownLink.addEventListener('click', (e) => {
                // Checa se estamos em modo mobile (baseado no breakpoint 768px no CSS)
                if (window.innerWidth < 768) {
                    e.preventDefault(); 
                    
                    // Fecha outros dropdowns abertos
                    dropdownItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('dropdown-open')) {
                            otherItem.classList.remove('dropdown-open');
                            otherItem.querySelector('.nav-link').setAttribute('aria-expanded', false);
                        }
                    });

                    // Alterna o dropdown atual
                    item.classList.toggle('dropdown-open');
                    
                    // Atualiza o atributo ARIA-expanded
                    const isExpanded = item.classList.contains('dropdown-open');
                    dropdownLink.setAttribute('aria-expanded', isExpanded);
                }
            });
        }
    });

    // 3.3. Fechar o menu mobile ao redimensionar
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && mainNav && mainNav.classList.contains('is-open')) {
            mainNav.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', false);

            // Fecha submenus abertos
            dropdownItems.forEach(item => {
                item.classList.remove('dropdown-open');
                if (item.querySelector('.nav-link')) {
                    item.querySelector('.nav-link').setAttribute('aria-expanded', false);
                }
            });
        }
    });
}


// ===================================================================
// 4. EVENT LISTENERS (Início da Aplicação)
// ===================================================================

// Escuta a mudança no hash (o evento principal do SPA)
window.addEventListener('hashchange', renderContent);

// Inicialização da Aplicação
document.addEventListener('DOMContentLoaded', () => {
    // 1. Configura a lógica de interação (Menu e Dropdown)
    setupInterfaceLogic();
    
    // 2. Define a rota inicial se não houver hash, ou carrega a rota atual (SPA)
    if (!window.location.hash || window.location.hash === '#') {
        window.location.hash = '#home';
    } else {
        renderContent();
    }
});