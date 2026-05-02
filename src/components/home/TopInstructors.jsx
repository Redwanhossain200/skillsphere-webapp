"use client";

import { motion } from "motion/react";
import { FaAward } from "react-icons/fa";

export default function TopInstructors() {
  const instructors = [
    {
      name: "John Doe",
      role: "Sr. Developer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
      name: "Sarah Smith",
      role: "Design Lead",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
      name: "Emily Chen",
      role: "Marketing Pro",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <FaAward className="text-secondary inline-block mr-2 mb-2" size={28} />
        Meet Our Top Instructors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {instructors.map((inst, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -12 }}
            className="card bg-base-100 shadow-md items-center text-center p-8 border border-base-200 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 group cursor-default"
          >
            <div className="avatar mb-6 relative">
              <div className="w-28 rounded-full ring ring-primary/10 ring-offset-base-100 ring-offset-4 overflow-hidden group-hover:ring-primary transition-all duration-500">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={inst.img}
                  alt={inst.name}
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
              {inst.name}
            </h3>
            <p className="text-base-content/60 font-medium group-hover:text-base-content transition-colors">
              {inst.role}
            </p>

            <div className="mt-4 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500 rounded-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
