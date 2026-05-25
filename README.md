# 🚀 Swaraj Puppalwar | UltronTheAI

## 👋 About Me

Hi, I'm **Swaraj Puppalwar**, a **Full-Stack Web Developer** and the **Founder & CTO of Lioran Group**. I started my journey in tech at the age of **11**, driven by curiosity and a deep interest in how software systems work under the hood. Over the years, that curiosity matured into a strong focus on **backend engineering, system architecture, and building production-grade platforms**.

Rather than chasing trends, I aim to be a **reliable, systems-oriented full-stack engineer**—someone who writes clean, maintainable code and designs systems that can evolve and scale without collapsing under complexity. Today, I actively build and operate real-world products while leading the technical vision at **Lioran Group**.

---

## 💼 Role & Focus

* 👨‍💻 **Professional Full-Stack Web Developer**
* 🧠 **Founder & CTO @ Lioran Group** — system design, architecture & infrastructure
* 🌐 Strong focus on **backend systems**, APIs, cloud-native platforms & scalability
* 🧪 Building, shipping, maintaining & iterating on real products
* 🤝 Open to collaboration, open-source contributions & engineering discussions

---

## 📊 Platform Metrics (Live & Real Usage)

* ✍️ **Post-Acle** — ~**100 monthly active readers**

  * 🌍 Users from **India, USA, China**, and other regions
  * 📈 Consistent returning readers

* 🌐 **Vortexly (Private)**

  * 👥 Used by **23 friends**
  * 🟢 **17 active users**
  * 📝 **98 posts** & 🎥 **16 reels** shared

* 📊 **Hushar Spreadsheet (MVP)**

  * 🏫 Used by **11 teachers** across **1 school**
  * 💰 Generating **₹1,000 – ₹5,000/month** in profit
  * 🚀 Actively evolving based on real teacher feedback

---

## 💻 Tech Stack

### Frontend

* React, Next.js
* React Native (mobile apps)
* Performance-focused UI architecture

### Backend

* Nest.js
* **TypeScript-first architecture (all major platforms)**
* RESTful API systems

### Databases

* MongoDB
* Redis
* PostgreSQL
* Custom document database (**LioranDB**)

### AI & Data

* LangGraph-based agent systems
* Groq.com hosted LLMs
* Python (support tooling & data pipelines)

### DevOps & Infrastructure

* Docker, Kubernetes
* Nginx, PM2
* CI/CD pipelines
* Git & GitHub

### Others

* Rust

---

## 🏗️ Lioran Group – Internal Infrastructure

All major products are powered by **in-house infrastructure**, designed and architected by me:

* 🗄️ **LioranDB** — Custom lightweight document database
* 🔐 **Lioran Auth** — Authentication & authorization system
* ☁️ **Lioran Bastion** — Secure storage & asset management layer
* 🚀 **Lioran Deployments** — Automated CI/CD pipelines
* ☁️ **Lioran Cloud Services** — Compute, storage & internal tooling

> This approach provides full control over **security, performance, cost, and long-term scalability**.

---

## 🧠 Engineering Philosophy

* ✨ Clean, readable code over unnecessary abstraction
* 🚢 Learn by **shipping, failing, and iterating**
* 🧩 Systems that are **simple today, scalable tomorrow**
* 🎯 Solve **real problems for real users**

---

## 🚀 Featured Projects

Each project below represents real-world learning, usage, and architectural decisions. System designs are shown using text-based diagrams.

---

### 🌐 Vortexly

**Tag:** Private
**Started:** March 2025
**Status:** Actively used (private network)

A private social media platform built for **meaningful and distraction-free interaction** among close connections.

* 👥 23 total users
* 🟢 17 active users
* 📝 98 posts
* 🎥 16 reels

🔗 **Preview Image:**
👉 [View Vortexly Preview](https://ultron-the-ai.vercel.app/vortexly/4.jpg)

#### 🧩 Vortexly – Backend System Design (TypeScript)

```txt
[ Clients (Mobile/Web) ]
          |
          v
     [ Load Balancer ]
          |
   -------------------
   |                 |
[ API Server 1 ]  [ API Server 2 ]   (Node.js + TypeScript)
          |
          v
     [ Kafka Producer ]
          |
     [ Kafka Broker ]
          |
     [ Kafka Consumer ]
          |
     [ Worker Service ]
     (Emails, Notifications)
          |
   ---------------------------
   |                         |
[ LioranDB ]          [ Lioran Bastion ]
(Document DB)        (Media Storage)
```

#### 🎨 Vortexly – Frontend System Design

```txt
[ React Native App ]
        |
        v
[ RESTful API Layer ]
        |
[ Vortexly Backend Services ]
```

---

### 📚 eBookAura

**Tag:** Private
**Started:** April 2025
**Status:** ❌ Closed

A digital e-book reading platform focused on clean UI and reading experience.

**Why it failed:**

* Lack of consistent new content
* Domain & sustainability issues

> This project provided important lessons in **content strategy, maintenance cost, and long-term product viability**.

🔗 **Preview Image:**
👉 [View eBookAura Preview](https://ultron-the-ai.vercel.app/ebookaura/3.jpeg)

---

### ✍️ Post-Acle

**Tag:** Public
**Started:** May 2025
**Status:** Live

A lightweight blogging platform where I document engineering thoughts, experiments, and long-term learnings.

* 👀 ~100 monthly active readers
* 🌍 Readers from India, USA, China & more
* 🔁 Strong retention among early users

🔗 **Preview Image:**
👉 [View Post-Acle Preview](https://ultron-the-ai.vercel.app/postacle/2.jpeg)

---

## 💰 SaaS Products

### 📊 Hushar Spreadsheet

**Tag:** Private (MVP)
**Started:** July 2025
**Status:** Early revenue

An **AI-powered spreadsheet & school data system** built for **Zilla Parishad teachers**, converting natural-language input into structured data using LLM agents.

* 🏫 Used by 1 school
* 👩‍🏫 11 active teachers
* 💰 ₹1k–₹5k monthly profit

🔗 **Preview Image:**
👉 [View Hushar Spreadsheet Preview](https://ultron-the-ai.vercel.app/husharspreadsheet/1.jpeg)

#### 🧩 Hushar Spreadsheet – Backend System Design (TypeScript)

```txt
[ Users ]
    |
    v
[ Load Balancer ]
    |
--------------------
|                  |
[ API Server 1 ]  [ API Server 2 ]
(Node.js + TypeScript)
    |
    v
[ Worker Service ]
(Emails, Payments, Logs)
    |
---------------------------
|            |            |
[ LioranDB ] [ Payments ] [ Logs ]

[ LangGraph Agent ]
      |
[ Groq LLM Models ]
```

#### 🎨 Hushar Spreadsheet – Frontend System Design

```txt
[ Users (Browser) ]
        |
        v
     [ CDN ]
        |
   [ Load Balancer ]
        |
   ------------------
   |                |
[ Next.js Server 1 ] [ Next.js Server 2 ]
        |
        v
[ REST API Backend ]
```

---

## 📌 Connect With Me

* 🌐 **Portfolio:** [https://ultron-the-ai.vercel.app/](https://ultron-the-ai.vercel.app/)
* 🌐 **Lioran Group:** [https://lioran.group/](https://lioran.group/)
* 🐙 **GitHub:** [https://github.com/UltronTheAI](https://github.com/UltronTheAI)
* 🐦 **Twitter:** [https://twitter.com/PuppalwarSwaraj](https://twitter.com/PuppalwarSwaraj)
* 📸 **Instagram:** [https://www.instagram.com/pro_epic_programmer/](https://www.instagram.com/pro_epic_programmer/)
* ▶️ **YouTube:** [https://www.youtube.com/@proepiccoder](https://www.youtube.com/@proepiccoder)

---

> I focus on becoming a better engineer and CTO every day by building real systems, owning infrastructure, learning from failures, and improving through execution.
