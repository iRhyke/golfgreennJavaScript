import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import PageHeader from "../components/shared/PageHeader";
import { Monitor, Users, Clock, Shield, ChevronRight } from "lucide-react";

const facilities = [
  {
    icon: Monitor,
    title: "GOLFZON VISION Plus × 2台",
    description: "GOLFZON社の最高級モデルを2台完備。業界最高レベルの精度で、リアルなゴルフ体験を提供します。",
  },
  {
    icon: Users,
    title: "左右打席対応",
    description: "右打ち・左打ちどちらにも対応した打席をご用意。すべてのゴルファーに快適な練習環境を。",
  },
  {
    icon: Clock,
    title: "24時間営業・年中無休",
    description: "仕事前の早朝練習も、仕事後の深夜練習も。お客様のライフスタイルに合わせてご利用いただけます。",
  },
  {
    icon: Shield,
    title: "完全プライベート空間",
    description: "周囲を気にせず、自分のペースでじっくり練習に集中できる環境です。",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80",
    alt: "ゴルフ練習",
  },
  {
    src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600&q=80",
    alt: "シミュレーター",
  },
  {
    src: "https://images.unsplash.com/photo-1592919505780-303950717480?w=600&q=80",
    alt: "ゴルフクラブ",
  },
];

export default function Facility() {
  return (
    <div>
      <PageHeader
        subtitle="Facility"
        title="施設紹介"
        description="最高級の設備と快適な空間で、ゴルフの上達をサポートします"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#111111] mb-6">
                最高の環境で、
                <br />
                <span className="text-[#1B5E3B]">最高の練習を。</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Golf Green 高針インター店は、GOLFZON社の最高級シミュレーター
                「VISION Plus」を2台完備したインドアゴルフ施設です。
                24時間営業で、天候や時間を気にせず、いつでも本格的な
                ゴルフ練習が可能です。
              </p>
              <p className="text-gray-500 leading-relaxed">
                初心者の方からスコアアップを目指す上級者まで、
                すべてのゴルファーに最適な練習環境を提供します。
                1枠80分でじっくりと練習に取り組めます。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800&q=80"
                alt="施設内観"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[#F9FAFB] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1B5E3B]/5 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#1B5E3B]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">Gallery</span>
            <h2 className="mt-3 text-3xl font-bold text-[#111111]">フォトギャラリー</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 green-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">体験してみませんか？</h2>
          <p className="text-white/60 mb-8">初めての方でも安心。お気軽にお問い合わせください。</p>
          <Link
            to={createPageUrl("Trial")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] hover:bg-[#b8995e] text-white font-semibold rounded-full transition-all"
          >
            体験予約はこちら
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
