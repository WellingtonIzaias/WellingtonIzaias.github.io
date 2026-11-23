import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Code2, Database,
  Github, Linkedin, Mail, Menu, Moon, Phone, Sun, X, Terminal, Layers3
} from 'lucide-react'

type SkillGroup = 'Front-end' | 'Back-end' | 'Inteligência Artificial'

const skills: Record<SkillGroup, { name: string; note: string }[]> = {
  'Front-end': [
    { name: 'JavaScript', note: 'Estudos e prática' },
    { name: 'TypeScript', note: 'Estudos e prática' },
    { name: 'React', note: 'Em desenvolvimento' },
    { name: 'Angular', note: 'Estudos e prática' },
    { name: 'HTML5', note: 'Fundamentos' },
    { name: 'CSS3', note: 'Fundamentos' },
  ],
  'Back-end': [
    { name: 'Java', note: 'Estudos e prática' },
    { name: 'Spring Boot', note: 'Em aprendizado' },
    { name: 'Node.js', note: 'Em aprendizado' },
    { name: 'Python', note: 'Estudos e prática' },
    { name: 'MySQL', note: 'Banco de dados' },
    { name: 'MongoDB', note: 'Banco de dados' },
  ],
  'Inteligência Artificial': [
    { name: 'Agentes de IA', note: 'Em aprendizado' },
    { name: 'Arquitetura de agentes', note: 'Em aprendizado' },
    { name: 'Chatbots', note: 'Estudos e experimentação' },
    { name: 'Integração com APIs', note: 'Estudos e prática' },
    { name: 'Python', note: 'Estudos e prática' },
  ],
}

const groups = Object.keys(skills) as SkillGroup[]

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved === 'light' ? 'light' : 'dark'
  })
  const [activeSkill, setActiveSkill] = useState<SkillGroup>('Front-end')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Wellington Izaias — início">
          <span>Wellington<span className="brand-muted">.dev</span></span>
        </a>

        <nav id="main-navigation" className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#habilidades" onClick={closeMenu}>Tecnologias</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
          title={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          <span>{theme === 'dark' ? 'Modo claro' : 'Modo escuro'}</span>
        </button>

        <button
          className="mobile-menu icon-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> DISPONÍVEL PARA OPORTUNIDADES</div>
            <p className="hero-kicker">Olá, eu sou</p>
            <h1>Wellington<br /><span>Izaias Teixeira.</span></h1>
            <h2>Estudante de ADS <i>·</i> Desenvolvedor em formação</h2>
            <p className="hero-description">
              Explorando o desenvolvimento de software, do Front-end ao Back-end,
              com interesse especial em arquitetura e desenvolvimento de agentes de IA.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">Conheça meu trabalho <ArrowDown size={17} /></a>
              <a className="button button-ghost" href="#contato">Vamos conversar <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/WellingtonIzaias" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/wellington-izaias-teixeira-2286523b4" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="mailto:wellingtonizaiasteixeira@gmail.com" aria-label="E-mail"><Mail size={18} /></a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="photo-frame">
              <img src="/wellington-profile.jpeg" alt="Foto de Wellington Izaias Teixeira" />
              <div className="photo-tag"><span className="status-dot" /> Construindo o próximo passo</div>
            </div>
            <div className="float-card float-code"><Code2 size={17} /><span>Desenvolvimento</span></div>
            <div className="float-card float-ai"><BrainCircuit size={18} /><span>Inteligência Artificial</span></div>
            <div className="hero-glow" />
          </div>
          <a className="scroll-cue" href="#sobre"><span /> Role para explorar</a>
        </section>

        <section className="section section-about" id="sobre">
          <div className="section-heading reveal">
            <span className="section-index">01 / SOBRE</span>
            <h2>Conheça um pouco<br /><span>da minha trajetória.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-text reveal">
              <p className="lead">Sou estudante de Análise e Desenvolvimento de Sistemas no Senac e estou construindo minha trajetória na área de tecnologia.</p>
              <p>Além da graduação, complemento meus estudos com cursos e conteúdos da Alura, buscando ampliar meus conhecimentos e transformar teoria em prática.</p>
              <p>Atualmente, desenvolvo habilidades em Front-end e Back-end e estudo arquitetura e desenvolvimento de agentes de Inteligência Artificial — uma área que considero cada vez mais relevante para o futuro do desenvolvimento de software.</p>
              <p>Meu objetivo é continuar evoluindo tecnicamente, aprender com desafios reais e contribuir para a construção de soluções úteis e bem estruturadas.</p>
            </div>
            <div className="about-aside reveal">
              <div className="info-card">
                <span className="info-icon"><Terminal size={20} /></span>
                <div><strong>Formação</strong><p>Análise e Desenvolvimento de Sistemas</p><small>Senac</small></div>
              </div>
              <div className="info-card">
                <span className="info-icon"><Layers3 size={20} /></span>
                <div><strong>Aprendizado contínuo</strong><p>Graduação e cursos complementares</p><small>Senac · Alura</small></div>
              </div>
              <div className="info-card">
                <span className="info-icon"><BrainCircuit size={20} /></span>
                <div><strong>Interesses</strong><p>Software, Back-end e agentes de IA</p><small>Explorando novas possibilidades</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="habilidades">
          <div className="section-heading reveal">
            <span className="section-index">02 / TECNOLOGIAS</span>
            <h2>Ferramentas que fazem<br /><span>parte da minha jornada.</span></h2>
            <p className="section-intro">Tecnologias e áreas que venho estudando e utilizando para ampliar minha capacidade de desenvolvimento.</p>
          </div>
          <div className="skills-panel reveal">
            <div className="skill-tabs" role="tablist" aria-label="Categorias de tecnologias">
              {groups.map(group => (
                <button key={group} role="tab" aria-selected={activeSkill === group}
                  className={activeSkill === group ? 'skill-tab active' : 'skill-tab'}
                  onClick={() => setActiveSkill(group)}>
                  {group === 'Front-end' ? <Code2 size={17} /> : group === 'Back-end' ? <Database size={17} /> : <BrainCircuit size={17} />}
                  {group}
                </button>
              ))}
            </div>
            <div className="skill-grid">
              {skills[activeSkill].map((skill, index) => (
                <div className="skill-card" key={skill.name} style={{ animationDelay: `${index * 55}ms` }}>
                  <div className="skill-card-top"><span className="skill-symbol">{skill.name.slice(0, 2).toUpperCase()}</span><ArrowUpRight size={15} /></div>
                  <strong>{skill.name}</strong>
                  <small>{skill.note}</small>
                </div>
              ))}
            </div>
            <p className="skills-footnote">As habilidades representam minha jornada de aprendizado atual; os níveis serão atualizados conforme eu ganhar experiência.</p>
          </div>
        </section>

        <section className="section projects-section" id="projetos">
          <div className="section-heading reveal">
            <span className="section-index">03 / PROJETOS</span>
            <h2>Prática que transforma<br /><span>conhecimento em experiência.</span></h2>
            <p className="section-intro">Este espaço será atualizado com aplicações, experimentos e projetos desenvolvidos ao longo da minha evolução.</p>
          </div>
          <div className="empty-projects reveal">
            <div className="empty-art">
              <div className="empty-window">
                <div className="window-dots"><i /><i /><i /></div>
                <div className="window-line line-long" /><div className="window-line line-short" />
                <div className="window-code"><span>{'<'}</span> código em construção <span>{'/>'}</span></div>
                <div className="window-line line-medium" />
              </div>
              <div className="empty-orb"><Code2 size={25} /></div>
            </div>
            <div className="empty-copy">
              <span className="coming-label"><span className="status-dot" /> EM CONSTRUÇÃO</span>
              <h3>Novos projetos<br />estão a caminho.</h3>
              <p>Estou trabalhando para transformar meus estudos em aplicações práticas. Em breve, você encontrará aqui demonstrações, detalhes técnicos e os repositórios de cada projeto.</p>
              <a className="text-link" href="https://github.com/WellingtonIzaias" target="_blank" rel="noreferrer">Enquanto isso, visite meu GitHub <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-inner reveal">
            <span className="section-index">04 / CONTATO</span>
            <h2>Vamos construir<br /><span>algo juntos?</span></h2>
            <p>Estou aberto a conversas, conexões e oportunidades para aprender e contribuir com a área de tecnologia.</p>
            <a className="button button-primary contact-cta" href="mailto:wellingtonizaiasteixeira@gmail.com?subject=Contato%20pelo%20portf%C3%B3lio">Enviar um e-mail <ArrowUpRight size={17} /></a>
            <div className="contact-grid">
              <a className="contact-item" href="mailto:wellingtonizaiasteixeira@gmail.com"><Mail size={19} /><span><small>E-MAIL</small><strong>wellingtonizaiasteixeira@gmail.com</strong></span><ArrowUpRight size={15} /></a>
              <a className="contact-item" href="tel:+5511917715172"><Phone size={19} /><span><small>TELEFONE</small><strong>+55 (11) 91771-5172</strong></span><ArrowUpRight size={15} /></a>
              <a className="contact-item" href="https://www.linkedin.com/in/wellington-izaias-teixeira-2286523b4" target="_blank" rel="noreferrer"><Linkedin size={19} /><span><small>LINKEDIN</small><strong>Conecte-se comigo</strong></span><ArrowUpRight size={15} /></a>
              <a className="contact-item" href="https://github.com/WellingtonIzaias" target="_blank" rel="noreferrer"><Github size={19} /><span><small>GITHUB</small><strong>WellingtonIzaias</strong></span><ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#inicio"><span>Wellington<span className="brand-muted">.dev</span></span></a>
        <p>Desenvolvido por Wellington Izaias Teixeira</p>
        <a href="#inicio" className="back-top">Voltar ao topo ↑</a>
      </footer>
    </div>
  )
}

export default App
