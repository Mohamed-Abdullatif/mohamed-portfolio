import Image from "next/image";
import { asset } from "@/lib/asset";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Effects from "@/components/Effects";
import Typewriter from "@/components/Typewriter";
import Marquee from "@/components/Marquee";
import CopyEmail from "@/components/CopyEmail";
import { profile, stats, facts, skills, experience, education } from "@/lib/data";

const roles = ["React Native Developer", "Cross-platform App Builder", "Team Lead & Mentor", "iOS & Android Shipper"];
const skillIcons = ["⌨", "📱", "🗄", "🧩", "💬"];
const marqueeItems = ["React Native", "TypeScript", "JavaScript", "React", "Next.js", "Node.js", "GraphQL", "Redux Toolkit", "Ionic", "Angular", "Swift / SwiftUI", "MongoDB", "Express.js", "Git"];

const heading = (n: string, t: string) => (
  <div className="sec-head">
    <p className="mono">{n}</p>
    <h2>{t}</h2>
  </div>
);

export default function Home() {
  return (
    <>
      <div className="aurora" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>
      <Effects />
      <Navbar />
      <main>
        <div className="hero-wrap">
          <div className="hero-shape" aria-hidden="true">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M100 0 H32 C40 17 33 29 17 45 C2 60 10 73 34 75 C54 77 63 87 70 100 H100 Z" />
            </svg>
          </div>
          <section className="hero">
            <div className="hero-text">
              <div className="sparkles" aria-hidden="true">
                <span className="spark s1"><svg viewBox="0 0 24 24"><path d="M12 0C12.9 7.2 16.8 11.1 24 12 16.8 12.9 12.9 16.8 12 24 11.1 16.8 7.2 12.9 0 12 7.2 11.1 11.1 7.2 12 0Z" /></svg></span><span className="spark s2"><svg viewBox="0 0 24 24"><path d="M12 0C12.9 7.2 16.8 11.1 24 12 16.8 12.9 12.9 16.8 12 24 11.1 16.8 7.2 12.9 0 12 7.2 11.1 11.1 7.2 12 0Z" /></svg></span><span className="spark s3"><svg viewBox="0 0 24 24"><path d="M12 0C12.9 7.2 16.8 11.1 24 12 16.8 12.9 12.9 16.8 12 24 11.1 16.8 7.2 12.9 0 12 7.2 11.1 11.1 7.2 12 0Z" /></svg></span><span className="spark s4"><svg viewBox="0 0 24 24"><path d="M12 0C12.9 7.2 16.8 11.1 24 12 16.8 12.9 12.9 16.8 12 24 11.1 16.8 7.2 12.9 0 12 7.2 11.1 11.1 7.2 12 0Z" /></svg></span><span className="spark s5"><svg viewBox="0 0 24 24"><path d="M12 0C12.9 7.2 16.8 11.1 24 12 16.8 12.9 12.9 16.8 12 24 11.1 16.8 7.2 12.9 0 12 7.2 11.1 11.1 7.2 12 0Z" /></svg></span><span className="spark s6"><svg viewBox="0 0 24 24"><path d="M12 0C12.9 7.2 16.8 11.1 24 12 16.8 12.9 12.9 16.8 12 24 11.1 16.8 7.2 12.9 0 12 7.2 11.1 11.1 7.2 12 0Z" /></svg></span>
              </div>
              <p className="eyebrow mono">
                <span className="dot" /> Available for new opportunities
              </p>
              <h1>
                Hello, my name is <span className="grad">{profile.name}</span>
              </h1>
              <p className="typed mono">
                &gt; <Typewriter words={roles} />
              </p>
              <p className="lead">
                Mobile Application Developer with <strong>10+ years</strong> of experience shipping Android &amp; iOS apps — from
                first idea to App Store and Google Play launch — using React Native, TypeScript and Node.js.
              </p>
              <div className="cta">
                <a className="btn primary" href="#experience">
                  Experience
                </a>
                <a className="btn" href="#contact">
                  Book a call
                </a>
                <a className="btn" href={asset("/Mohamed-Latif.pdf")} download>
                  Download CV
                </a>
              </div>
              <p className="loc mono">📍 {profile.location}</p>
            </div>
            <div className="hero-photo">
              <div className="frame">
                <Image src={asset("/img/portrait.jpg")} alt="Portrait of Mohamed Latif" width={832} height={1248} priority sizes="(max-width: 860px) 78vw, 470px" />
              </div>
              <span className="spark s7"><svg viewBox="0 0 24 24"><path d="M12 0C12.9 7.2 16.8 11.1 24 12 16.8 12.9 12.9 16.8 12 24 11.1 16.8 7.2 12.9 0 12 7.2 11.1 11.1 7.2 12 0Z" /></svg></span>
            </div>
          </section>
          <div className="featured">
            <p>Technologies I work with</p>
            <Marquee items={marqueeItems} />
          </div>
        </div>

        <section className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <Counter value={s.value} suffix={s.suffix} />
              <span>{s.label}</span>
            </div>
          ))}
        </section>

        <Reveal id="about">
          {heading("01 — About", "A bit about me")}
          <div className="about">
            <div className="about-text">
              <p>
                I&apos;m a mobile application developer who loves turning ideas into polished, production-ready apps. I&apos;ve
                worked across fintech, e-commerce and consumer products in Egypt, Saudi Arabia, Kuwait and for remote teams in the
                USA.
              </p>
              <p>
                I&apos;m adept at problem-solving, leading teams and mentoring junior developers, and I&apos;m comfortable owning
                the whole release process — builds, store submissions and continuous delivery on both Google Play and the App
                Store.
              </p>
              <p>
                Away from the keyboard you&apos;ll find me on the road or out on the water. Staying curious and self-learning is
                how I keep my craft sharp.
              </p>
              <ul className="facts mono st">
                {facts.map(([k, v]) => (
                  <li key={k}>
                    <span>{k}</span> {v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-photos st">
              <figure>
                <Image src={asset("/img/desk.jpg")} alt="Mohamed coding at his desk" width={832} height={1248} sizes="(max-width: 860px) 45vw, 220px" />
              </figure>
              <figure>
                <Image src={asset("/img/jetski.jpg")} alt="Mohamed riding a jet ski at sunset" width={832} height={1248} sizes="(max-width: 860px) 45vw, 220px" />
              </figure>
              <figure>
                <Image src={asset("/img/boat.jpg")} alt="Mohamed relaxing on a boat" width={832} height={1248} sizes="(max-width: 860px) 45vw, 220px" />
              </figure>
              <figure>
                <Image src={asset("/img/driving.jpg")} alt="Mohamed sitting in a car" width={832} height={1248} sizes="(max-width: 860px) 45vw, 220px" />
              </figure>
            </div>
          </div>
        </Reveal>

        <Reveal id="skills">
          {heading("02 — Skills", "Tools I build with")}
          <div className="cards st">
            {skills.map((s, i) => (
              <article className="card" key={s.title}>
                <h3>
                  <em>{skillIcons[i]}</em>
                  {s.title}
                </h3>
                <div className="tags">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal id="experience">
          {heading("03 — Career", "Where I've worked")}
          <ol className="timeline st">
            {experience.map((e) => (
              <li key={`${e.company}-${e.when}`}>
                <div className="when mono">
                  {e.when}
                  <br />
                  <em>{e.place}</em>
                </div>
                <div className="what">
                  <h3>
                    {e.title} <span>· {e.company}</span>
                  </h3>
                  <ul>
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal id="education">
          {heading("04 — Education", "Learning path")}
          <div className="cards two st">
            {education.map((e) => (
              <article className="card" key={e.title}>
                <p className="mono muted">{e.when}</p>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal id="contact">
          {heading("05 — Contact", "Let's build something")}
          <div className="contact">
            <h3>
              Have an app idea?
              <br />
              <span className="grad">Let&apos;s ship it.</span>
            </h3>
            <p>Open to new roles, freelance projects and team collaborations. I usually reply within a day.</p>
            <div className="links">
              <a className="btn primary" href={`mailto:${profile.email}`}>
                ✉ {profile.email}
              </a>
              <a className="btn" href={`tel:${profile.phone}`}>
                ☎ {profile.phoneDisplay}
              </a>
              <CopyEmail email={profile.email} />
            </div>
          </div>
        </Reveal>
      </main>

      <footer>
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
