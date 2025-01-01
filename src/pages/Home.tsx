const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/biswarupchatt/" },
  { name: "GitHub", url: "https://github.com/BiswarupChatt" },
  { name: "Instagram", url: "https://www.instagram.com/son_of_bruce_banner/" },
];

const works = [
  { title: "My Fitness Hub", url: "https://my-fitness-hub-fe.vercel.app/" },
  { title: "Rangmashal", url: "https://rangmashal.org.in/" },
];

export default function Home() {
  return (
    <div>
      <header>
        <h1>Biswarup Chatterjee</h1>
      </header>

      <section>
        <h2>Connect with Me</h2>
        <ul>
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ))}
          <li>chatterjeebiswarup61@gmail.com</li>
        </ul>
      </section>

      <section>
        <h2>My Works</h2>
        <ul>
          {works.map((work, index) => (
            <li key={index}>
              <a href={work.url} target="_blank" rel="noopener noreferrer">
                {work.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <p>
          Inspired by{" "}
          <a
            href="https://danabra.mov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dan Abramov
          </a>
          , who keeps it simple with HTML. So, I guess I&apos;m just following
          his lead... while being a little too lazy to add anything more!
        </p>
      </footer>
    </div>
  );
}
