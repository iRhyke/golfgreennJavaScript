import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@------t";
import PageHeader from "../components/shared/PageHeader";
import { CalendarCheck, MapPin, Flag, UserPlus, Check, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "ご予約",
    description: "下記フォームまたはお電話にて、ご希望の日時をお知らせください。",
  },
  {
    icon: MapPin,
    step: "02",
    title: "ご来店",
    description: "施設の説明とご利用方法をスタッフが丁寧にご案内いたします。",
  },
  {
    icon: Flag,
    step: "03",
    title: "体験プレー",
    description: "80分間、VISION Plusでシミュレーションゴルフを体験していただきます。",
  },
  {
    icon: UserPlus,
    step: "04",
    title: "入会手続き",
    description: "ご納得いただけましたら、お好みのプランで入会手続きを行います。",
  },
];

const benefits = [
  "手ぶらでOK（クラブ貸出あり）",
  "スタッフが丁寧にサポート",
  "VISION Plusを実際に体験",
  "無理な勧誘は一切なし",
];

export default function Trial() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await ------.entities.Contact.create({
      ...form,
      inquiry_type: "体験予約",
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("体験予約を受け付けました！");
  };

  return (
    <div>
      <PageHeader
        subtitle="Trial & Join"
        title="初回体験・入会案内"
        description="まずは気軽に体験してみてください"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">Flow</span>
            <h2 className="mt-3 text-3xl font-bold text-[#111111]">体験から入会までの流れ</h2>
            <div className="w-12 h-0.5 bg-[#C8A96E] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F9FAFB] shadow-sm flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-[#1B5E3B]" />
                </div>
                <span className="text-[#C8A96E] text-xs font-bold tracking-widest">STEP {item.step}</span>
                <h3 className="mt-2 text-lg font-bold text-[#111111]">{item.title}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">Benefits</span>
              <h2 className="mt-3 text-3xl font-bold text-[#111111] mb-6">
                体験利用のポイント
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                初めてインドアゴルフを体験される方でもご安心ください。
                経験豊富なスタッフが、シミュレーターの使い方から丁寧にご案内いたします。
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1B5E3B]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#1B5E3B]" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 rounded-2xl bg-white border border-gray-100">
                <h3 className="font-semibold text-[#111111] mb-2">体験時の持ち物</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  動きやすい服装でお越しください。ゴルフクラブ・シューズは無料でお貸し出ししております。
                  グローブをお持ちの方はご持参ください。
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                <h3 className="text-xl font-bold text-[#111111] mb-2">体験予約フォーム</h3>
                <p className="text-gray-500 text-sm mb-8">以下のフォームからお気軽にご予約ください</p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#1B5E3B]/10 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-[#1B5E3B]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111111] mb-2">ご予約ありがとうございます</h3>
                    <p className="text-gray-500 text-sm">担当者より折り返しご連絡いたします。</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">お名前 <span className="text-red-500">*</span></label>
                      <Input
                        required
                        placeholder="山田 太郎"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">メールアドレス <span className="text-red-500">*</span></label>
                      <Input
                        required
                        type="email"
                        placeholder="email@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">電話番号</label>
                      <Input
                        type="tel"
                        placeholder="090-1234-5678"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">ご希望の日時・メッセージ</label>
                      <Textarea
                        placeholder="ご希望の体験日時やご質問があればご記入ください"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={4}
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-[#C8A96E] hover:bg-[#b8995e] text-white font-semibold rounded-full text-base"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          体験を予約する
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
