"use client";
import { motion } from "framer-motion";

function Card({ children, width = "300px", height = "350px" }: { children: any; width?: string; height?: string }) {
  return (
    <motion.div
      className="flex-shrink-0 flex items-center justify-center bg-white shadow-xl rounded-3xl text-lg md:text-2xl font-bold text-gray-800"
      style={{ width, height }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

export default function WhyCCSMarquee() {
  const items = ["Workshops","Hackathons","Projects","Seminars","Competitions","Innovations"];

  // use items duplicated once for seamless loop
  const duplicated = items.concat(items);


  const cardWidth = 350; // px (match Card width)
  const totalWidth = duplicated.length * (cardWidth + 24); 

  return (
    <section className="relative w-full py-12 bg-black text-center overflow-hidden">

      <div className="w-full overflow-hidden">
        {/* moving row: use the CSS class we declared in globals.css */}
        <div
          className="flex gap-6 whitespace-nowrap animate-marquee"
          style={{
            minWidth: "200%",      
          }}
        >
          {duplicated.map((item, idx) => (
            <Card key={idx} width={`${cardWidth}px`} height="220px">{item}</Card>
          ))}
        </div>
      </div>
    </section>
  );
}
