"use client";

import { motion } from "framer-motion";

export default function AdditionalSections() {
  return (
    <>
      {/* O Grande Diferencial */}
      <section className="bg-black px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-600 uppercase text-sm font-semibold tracking-[0.3em]">
            O Grande Diferencial
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Conectando o virtual ao mundo real
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-4xl">
            O GOTWO elimina a distância entre o virtual e o real.
          </p>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-4xl">
            Quando ocorre uma conexão, os dois usuários já estão frente a
            frente, no mesmo local. Não há longas conversas online, nem
            expectativas irreais — apenas interações reais, espontâneas e
            imediatas.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Conexões reais, não virtuais",
              "Pessoas próximas de verdade",
              "Interação no momento certo",
              "Mais segurança, contexto e autenticidade",
              "Menos conversa online, mais presença física",
            ].map((item, index) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/80 p-6 backdrop-blur-sm transition-all duration-500 animate-fade-up hover:-translate-y-3 hover:scale-[1.03] hover:border-red-600 hover:shadow-[0_0_40px_rgba(220,38,38,0.25)]"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/5 to-red-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-red-600 transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_18px_rgba(220,38,38,0.9)]" />

                  <p className="text-zinc-300 transition-colors duration-500 group-hover:text-white">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacidade */}
      <section id="privacidade" className="bg-zinc-950 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-red-600 uppercase text-sm font-semibold tracking-[0.3em]"
          >
            Privacidade
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-4 text-4xl md:text-5xl font-bold text-white"
          >
            Privacidade em primeiro lugar
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 0 50px rgba(220,38,38,0.25)",
            }}
            className="mt-10 rounded-[40px] border border-red-600/40 bg-black p-8 md:p-12 transition-all duration-300"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg leading-relaxed text-zinc-400"
            >
              Dados exclusivos do usuário, como telefone e e-mail, não são
              compartilhados com seus contatos.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 text-lg leading-relaxed text-zinc-400"
            >
              Você pode trocar mensagens e realizar chamadas, sempre mantendo a
              sua discrição.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Geolocalização */}
      <section className="bg-black px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-600 uppercase text-sm font-semibold tracking-[0.3em]">
            Geolocalização Inteligente
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Funcionamento inteligente por geolocalização
          </h2>

          <div className="mt-12 space-y-8 text-lg leading-relaxed text-zinc-400">
            <p>
              O GOTWO utiliza georreferenciamento em tempo real, com um raio
              configurável entre{" "}
              <strong className="text-white">100 e 2.500 metros</strong>,
              garantindo que todos os usuários visíveis no aplicativo estejam
              realmente próximos, no mesmo ambiente ou evento.
            </p>

            <p>
              A visualização dos participantes ocorre por meio de um mapa
              interativo, onde apenas usuários que optaram por se relacionar
              naquele momento aparecem disponíveis.
            </p>

            <p>
              Isso elimina perfis inativos e conversas irrelevantes, tornando as
              conexões mais rápidas, naturais e eficazes.
            </p>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="bg-zinc-950 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-600 uppercase text-sm font-semibold tracking-[0.3em]">
            Quem Somos
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Conheça a GOTWO
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 0 50px rgba(220,38,38,0.25)",
            }}
            className="mt-12 rounded-[40px] border border-red-600/40 bg-black p-8 md:p-12 transition-all duration-300"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg leading-relaxed text-zinc-400"
            >
              A Vieira & Cia. Ltda. - ME, ora denominada “GOTWO”, é uma empresa
              de tecnologia voltada para o desenvolvimento de softwares, sites e
              aplicativos.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg leading-relaxed text-zinc-400"
            >
              Fundada em junho de 2013, nasceu com o propósito de trazer ao
              mercado soluções inovadoras e alinhadas às tendências mais atuais
              da tecnologia.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 text-lg leading-relaxed text-zinc-400"
            >
              Entre nossos principais clientes estão os apaixonados por
              tecnologia e inovação.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 text-lg leading-relaxed text-zinc-400"
            >
              Agradecemos a preferência!
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}