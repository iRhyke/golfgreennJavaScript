import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck, MapPin, Flag } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "ご予約",
    description: "お問い合わせフォームまたはお電話でご予約ください。",
  },
  {
    icon: MapPin,
    step: "02",
    title: "ご来店",
    description: "施設の説明とご利用方法をスタッフがご案内いたします。",
  },
  {
    icon: Flag,
    step: "03",
    title: "体験プレー",
    description: "80分間、最高級シミュレーターでゴルフをお楽しみください。",
  },
];

export default function FlowSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">Flow</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#111111]">体験利用の流れ</h2>
          <div className="w-12 h-0.5 bg-[#C8A96E] mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gray-200" />
              )}
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-lg shadow-gray-100 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#1B5E3B]" />
                </div>
                <span className="text-[#C8A96E] text-xs font-bold tracking-widest">STEP {item.step}</span>
                <h3 className="mt-2 text-xl font-bold text-[#111111]">{item.title}</h3>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
