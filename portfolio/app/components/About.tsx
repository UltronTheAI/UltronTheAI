import Image from "next/image";

export default function About() {
  const badges = {
    frontend: [
      "https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=white",
      "https://img.shields.io/badge/-React%20Native-61DAFB?style=flat&logo=react&logoColor=white",
      "https://img.shields.io/badge/-Next.js-000?style=flat&logo=next.js&logoColor=white",
    ],
    backend: [
      "https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white",
      "https://img.shields.io/badge/-Express.js-000?style=flat&logo=express&logoColor=white",
      "https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white",
    ],
    database: [
      "https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white",
      "https://img.shields.io/badge/-PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white",
    ],
    datascience: [
      "https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white",
      "https://img.shields.io/badge/-NumPy-013243?style=flat&logo=numpy&logoColor=white",
      "https://img.shields.io/badge/-Pandas-150458?style=flat&logo=pandas&logoColor=white",
      "https://img.shields.io/badge/-scikit--learn-F7931E?style=flat&logo=scikit-learn&logoColor=white",
      "https://img.shields.io/badge/-Seaborn-30A2DA?style=flat&logo=seaborn&logoColor=white",
      "https://img.shields.io/badge/-TensorFlow-FF6F00?style=flat&logo=tensorflow&logoColor=white",
    ],
    ai: [
      "https://img.shields.io/badge/-LangChain-222222?style=flat&logo=langchain&logoColor=white",
      "https://img.shields.io/badge/-LangGraph-222222?style=flat&logo=langgraph&logoColor=white",
    ],
    tools: [
      "https://img.shields.io/badge/-Git-F05032?style=flat&logo=git&logoColor=white",
      "https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white",
      "https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=black",
      "https://img.shields.io/badge/-REST%20API-000?style=flat&logo=rest&logoColor=white",
      "https://img.shields.io/badge/-GraphQL-E10098?style=flat&logo=graphql&logoColor=white",
      "https://img.shields.io/badge/-Nginx-009639?style=flat&logo=nginx&logoColor=white",
      "https://img.shields.io/badge/-PM2-2B037A?style=flat&logo=pm2&logoColor=white",
      "https://img.shields.io/badge/-Docker-2496ED?style=flat&logo=docker&logoColor=white",
    ],
  };

  return (
    <section className="w-full px-4 py-8 flex justify-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <Image
              src="/user.png"
              alt="Swaraj Puppalwar"
              width={140}
              height={140}
              className="rounded-full object-cover"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold">Swaraj Puppalwar</h2>
              <p className="text-zinc-400">17-year-old Full-Stack Developer</p>
              <p className="mt-1 text-zinc-300">2 years of development experience</p>
              <p className="text-zinc-300">Founder & CTO at Lioran Groups</p>

              <a
                href="https://github.com/UltronTheAI"
                className="mt-3 inline-block text-sm text-sky-400 hover:text-sky-300"
              >
                Github Profile
              </a>

              {/* Social Buttons */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">
                <a href="https://twitter.com/PuppalwarSwaraj" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://img.shields.io/badge/-Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"
                    alt="Twitter"
                    width={140}
                    height={36}
                    unoptimized
                  />
                </a>
                <a href="https://www.instagram.com/pro_epic_programmer/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://img.shields.io/badge/-Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
                    alt="Instagram"
                    width={140}
                    height={36}
                    unoptimized
                  />
                </a>
                <a href="https://www.youtube.com/@proepiccoder" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://img.shields.io/badge/-YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"
                    alt="YouTube"
                    width={140}
                    height={36}
                    unoptimized
                  />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100069476384181" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://img.shields.io/badge/-Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
                    alt="Facebook"
                    width={140}
                    height={36}
                    unoptimized
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              I build scalable and efficient applications across web and mobile using modern tools and clean
              architecture. I love collaborating on open-source and exploring AR/VR and AI.
            </p>

            <div>
              <h3 className="text-lg font-medium mb-4">Tech Stack</h3>
              <div className="space-y-4">
                {Object.entries(badges).map(([key, list]) => (
                  <div key={key}>
                    <div className="text-sm text-zinc-400 capitalize mb-1">
                      {key.replace('datascience', 'Data Science').replace('ai', 'AI').replace('tools', 'DevOps & Tools')}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {list.map((src) => (
                        <Image
                          key={src}
                          src={src}
                          alt="badge"
                          width={110}
                          height={30}
                          unoptimized
                          className="max-w-full h-auto"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}