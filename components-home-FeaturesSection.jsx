import React from "react";
import { motion } from "framer-motion";
import { Clock, Monitor, CloudOff, Sparkles } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24時間営業",
    description: "早朝でも深夜でも、お好きな時間に練習できます。年中無休で対応。",
  },
  {
    icon: Monitor,
    title: "最高級シミュレーター",
    description: "GOLFZON社「VISION Plus」を2台完備。プロも認める精度の弾道解析。",
  },
  {
    icon: CloudOff,
    title: "天候に左右されない",
    description: "雨の日も猛暑の日も、快適な室内環境で集中して練習が可能です。",
  },
  {
    icon: Sparkles,
    title: "快適な練習環境",
    description: "左右打席対応の完全プライベート空間。初心者から上級者まで安心。",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">Features</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#111111]">
            Golf Greenの特徴
          </h2>
          <div className="w-12 h-0.5 bg-[#C8A96E] mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-[#FAFAFA] hover:bg-white hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-500 border border-transparent hover:border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-[#1B5E3B]/5 group-hover:bg-[#1B5E3B]/10 flex items-center justify-center transition-colors mb-6">
                <feature.icon className="w-6 h-6 text-[#1B5E3B]" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
