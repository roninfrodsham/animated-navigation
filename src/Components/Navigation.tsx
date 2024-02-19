import { motion } from "framer-motion";
import "./Navigation.css";

type NavigationItems = {
  id: string;
  title: string;
  path: string;
}[];

function Navigation() {
  const navigationItems: NavigationItems = [
    {
      id: "nav-item-1",
      title: "Consectetur",
      path: "/",
    },
    {
      id: "nav-item-2",
      title: "Aliquam",
      path: "/",
    },
    {
      id: "nav-item-3",
      title: "Elementum",
      path: "/",
    },
    {
      id: "nav-item-4",
      title: "Pellentesque",
      path: "/",
    },
    {
      id: "nav-item-5",
      title: "Bibendum",
      path: "/",
    },
  ];

  const nav = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
        type: "spring",
        stiffness: 130,
        damping: 15,
      },
    },
    hidden: { opacity: 0 },
  };

  const navItem = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <nav>
      <motion.ul initial='hidden' animate='visible' variants={nav} className='text-2xl pt-8'>
        {navigationItems.map((item) => (
          <motion.li key={item.id} variants={navItem} className='mt-3'>
            <motion.a
              href={item.path}
              className='nav-item py-2 inline-block'
              layout
              initial={{
                width: "auto",
              }}
              whileHover={{
                delay: 2,
                width: "100%",
                transition: {
                  duration: 0.01,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <span className='px-4'>{item.title}</span>
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}

export { Navigation };
