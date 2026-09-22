import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TechList from './components/TechList';

export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  rating: number;
  difficulty: string;
  badge: string;
  icon: string;
}

const technologies: Technology[] = [
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    description: 'A component-driven UI library for building modern interactive interfaces.',
    rating: 4.9,
    difficulty: 'Beginner',
    badge: 'Popular',
    icon: '⚛️',
  },
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'Frontend',
    description: 'An approachable framework focused on declarative rendering and ergonomics.',
    rating: 4.7,
    difficulty: 'Beginner',
    badge: 'Stable',
    icon: '💚',
  },
  {
    id: 'svelte',
    name: 'Svelte',
    category: 'Frontend',
    description: 'A compiler-first framework that writes less boilerplate and ships efficient code.',
    rating: 4.6,
    difficulty: 'Intermediate',
    badge: 'Fast',
    icon: '🧠',
  },
  {
    id: 'next',
    name: 'Next.js',
    category: 'Full Stack',
    description: 'A production framework for rendering, routing, APIs, and SEO-focused apps.',
    rating: 4.9,
    difficulty: 'Intermediate',
    badge: 'Full Stack',
    icon: '▲',
  },
  {
    id: 'node',
    name: 'Node.js',
    category: 'Backend',
    description: 'A runtime for building scalable server-side applications with JavaScript.',
    rating: 4.8,
    difficulty: 'Intermediate',
    badge: 'Runtime',
    icon: '🟢',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Database',
    description: 'A powerful relational database with a rich feature set for robust apps.',
    rating: 4.8,
    difficulty: 'Intermediate',
    badge: 'SQL',
    icon: '🐘',
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'Caching',
    description: 'An in-memory data store used for cache, queues, and performance enhancement.',
    rating: 4.6,
    difficulty: 'Intermediate',
    badge: 'Cache',
    icon: '🔴',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Language',
    description: 'The universal language of the web for client and server logic.',
    rating: 4.9,
    difficulty: 'Beginner',
    badge: 'Core',
    icon: 'JS',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Language',
    description: 'A typed superset of JavaScript that improves maintainability and safety.',
    rating: 4.9,
    difficulty: 'Beginner',
    badge: 'Typed',
    icon: 'TS',
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Backend',
    description: 'A mature enterprise language known for reliability, performance, and scale.',
    rating: 4.4,
    difficulty: 'Intermediate',
    badge: 'Enterprise',
    icon: '☕',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Styling',
    description: 'A utility-first CSS framework for fast, consistent, and expressive design.',
    rating: 4.7,
    difficulty: 'Beginner',
    badge: 'Utility',
    icon: '🌀',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'DevOps',
    description: 'A container platform that standardizes development, testing, and deployment.',
    rating: 4.7,
    difficulty: 'Intermediate',
    badge: 'Containers',
    icon: '🐳',
  },
];

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (tech: Technology) => {
    const exists = stack.some((item) => item.id === tech.id);

    if (exists) {
      toast.warning(`${tech.name} is already in your stack`);
      return;
    }

    setStack((currentStack) => [...currentStack, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);

    setStack((currentStack) => currentStack.filter((item) => item.id !== id));

    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.info('Your stack is already empty');
      return;
    }

    setStack([]);
    toast.info('All technologies removed');
  };

  return (
    <>
      <div className="page-shell">
        <Navbar />
        <Hero />

        <main className="main-layout container">
          <TechList technologies={technologies} stack={stack} onAdd={handleAddToStack} />
          <Sidebar stack={stack} onRemove={handleRemoveFromStack} onRemoveAll={handleRemoveAll} />
        </main>

        <Footer />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;
