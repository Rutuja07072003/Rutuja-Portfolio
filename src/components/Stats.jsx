import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { number: "10+", label: "Projects" },
    { number: "8+", label: "Technologies" },
    { number: "100%", label: "Dedication" },
    { number: "24/7", label: "Learning" },
  ];

  return (
    <section className="section">
      <div className="grid md:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="glass p-8 rounded-2xl text-center"
          >
            <h2 className="text-4xl font-bold text-cyan-400">
              {item.number}
            </h2>

            <p className="mt-3 text-gray-400">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Stats;