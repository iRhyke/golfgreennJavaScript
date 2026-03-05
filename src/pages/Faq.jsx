import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import PageHeader from "../components/shared/PageHeader";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqData = [
  {
    category: "ご利用について",
    questions: [
      {
        q: "ゴルフ初心者ですが大丈夫ですか？",
        a: "もちろんです！初心者の方でも安心してご利用いただけます。スタッフがシミュレーターの使い方から丁寧にご案内いたします。クラブの握り方がわからない方でもお気軽にお越しください。",
      },
      {
        q: "利用時間はどのくらいですか？",
        a: "1枠80分でご利用いただけます。十分な練習時間を確保しておりますので、ウォーミングアップからしっかりと練習していただけます。",
      },
      {
        q: "予約なしでも利用できますか？",
        a: "会員の方は予約システムからご予約いただけます。空きがあれば当日のご予約も可能です。体験利用をご希望の場合は、事前にお問い合わせフォームまたはお電話でご予約ください。",
      },
      {
        q: "24時間いつでも利用できますか？",
        a: "はい、24時間365日営業しております。早朝でも深夜でも、お好きな時間にご利用いただけます（プランによって利用可能時間帯が異なります）。",
      },
    ],
  },
  {
    category: "設備・持ち物",
    questions: [
      {
        q: "クラブを持っていないのですが利用できますか？",
        a: "ゴルフクラブは無料でお貸し出ししておりますので、手ぶらでお越しいただけます。シューズもご用意がございます。グローブをお持ちの方はご持参いただくことをお勧めします。",
      },
      {
        q: "どのようなシミュレーターですか？",
        a: "GOLFZON社の最高級モデル「VISION Plus」を2台完備しています。高精度なセンサーによるリアルな弾道解析、世界中の有名コースでのラウンドプレー、スイング分析など、充実した機能を搭載しています。",
      },
      {
        q: "左打ち（レフティ）でも利用できますか？",
        a: "はい、左右打席に対応しておりますので、左打ちの方でも快適にご利用いただけます。",
      },
    ],
  },
  {
    category: "料金・入会",
    questions: [
      {
        q: "入会金はかかりますか？",
        a: "入会金・事務手数料については、体験時にスタッフが詳しくご説明いたします。まずはお気軽に体験にお越しください。",
      },
      {
        q: "プランの変更はできますか？",
        a: "はい、月単位でプランの変更が可能です。ライフスタイルの変化に合わせて、いつでもお好みのプランに切り替えていただけます。",
      },
      {
        q: "体験は無料ですか？",
        a: "体験利用の詳細についてはお問い合わせください。まずは施設の雰囲気やシミュレーターの使い心地を実際に体感していただければと思います。",
      },
    ],
  },
  {
    category: "アクセス",
    questions: [
      {
        q: "駐車場はありますか？",
        a: "はい、駐車場を完備しております。お車でのご来店が便利です。",
      },
      {
        q: "最寄りのインターチェンジはどこですか？",
        a: "高針インターすぐの立地です。お車でのアクセスに非常に便利な場所にございます。",
      },
    ],
  },
];

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[#111111] font-medium text-sm pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <div>
      <PageHeader
        subtitle="FAQ"
        title="よくある質問"
        description="お客様からよくいただくご質問をまとめました"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h2 className="text-lg font-bold text-[#1B5E3B] mb-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-[#C8A96E] rounded-full" />
                {section.category}
              </h2>
              <div className="bg-[#F9FAFB] rounded-2xl px-6">
                {section.questions.map((item, i) => (
                  <FaqItem key={i} question={item.q} answer={item.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#111111] mb-4">
            解決しない場合は
          </h2>
          <p className="text-gray-500 mb-8">
            上記で解決しなかった場合は、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={createPageUrl("ContactPage")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B5E3B] hover:bg-[#0F3D25] text-white font-semibold rounded-full transition-all text-sm"
            >
              お問い合わせ
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to={createPageUrl("Trial")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] hover:bg-[#b8995e] text-white font-semibold rounded-full transition-all text-sm"
            >
              体験予約
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
