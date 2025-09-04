"use client";

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroGeometric({
  badge = "Gaman.dev",
  title1 = "Mundial de desayunos",
  title2 = "VENEZUELA",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const buttons = [
    {
      name: "YouTube",
      href: "https://youtube.com/shorts/7iYviaiLAAE?si=ZJqw2ELjoJo1O3s3",
      icon: <FaYoutube size={28} />,
      gradient: "bg-[radial-gradient(circle_at_top,_#FF0000,_#C60000)]",
      disabled: false,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@ibaillanos/video/7546278073600150806?is_from_webapp=1&sender_device=pc&web_id=7390855316623508997",
      icon: <FaTiktok size={28} />,
      gradient: "bg-[radial-gradient(circle_at_center,_#1c1c1c,_#EE1D52)]",
      disabled: false,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/reel/DOMBAn5jLMA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      icon: <FaInstagram size={28} />,
      gradient:
        "bg-[radial-gradient(circle_at_top,_#F58529,_#DD2A7B,_#8134AF)]",
      disabled: false,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/r/1BVgcALn9A/",
      icon: <FaFacebook size={28} />,
      gradient: "bg-[radial-gradient(circle_at_top,_#1877F2,_#0F52BA)]",
      disabled: false,
    },
  ];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={300}
          height={70}
          rotate={12}
          gradient="from-yellow-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={200}
          height={40}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={150}
          height={80}
          rotate={-8}
          gradient="from-yellow-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-red-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-blue-500/[0.15] "
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.a
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
            href={"https://gaman.dev/"}
            target="_blank"
          >
            <Image src="/logo.png" alt="gaman.dev" width={20} height={20} />
            <span className="text-sm text-white tracking-wide">{badge}</span>
          </motion.a>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-blue-500 to-red-600",
                  pacifico.className
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
          >
            <p className="text-[15px] sm:text-lg md:text-xl text-white mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              ¡Venezuela alza su bandera! Revisa el reel, encuentra el
              comentario VENEZUELA de Ibai y apóyalo con un like. ¡Mostremos
              nuestra riqueza y sabor al mundo!
            </p>
     
          </motion.div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            {buttons.map((btn) => (
              <motion.a
                key={btn.name}
                href={btn.disabled ? undefined : btn.href}
                target={btn.disabled ? undefined : "_blank"}
                whileHover={btn.disabled ? {} : { scale: 1.05 }}
                whileTap={btn.disabled ? {} : { scale: 0.95 }}
                className={`
        ${btn.gradient} 
        rounded-xl 
        p-4 
        flex items-center justify-center gap-3 
        text-white font-bold 
        shadow-lg 
        transition-transform duration-200
        text-[14px] xl:text-[16px]
        ${btn.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
      `}
              >
                {btn.icon}
                {btn.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 w-full flex justify-around gap-2 z-50">
        <a
          href="https://peru.gaman.dev/"
          className="text-[14px] text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-white to-red-600 hover:scale-105 transition-transform"
        >
          Votar por Perú
        </a>
        <a
          href="https://venezuela.gaman.dev/"
          className="text-[14px] text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-blue-500 to-red-600 hover:scale-105 transition-transform"
        >
          Votar por Venezuela
        </a>
        <a
          href="https://chile.gaman.dev/"
          className="text-[14px] text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-white to-blue-600 hover:scale-105 transition-transform"
        >
          Votar por Chile
        </a>
        <a
          href="https://bolivia.gaman.dev/"
          className="text-[14px] text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 hover:scale-105 transition-transform"
        >
          Votar por Bolivia
        </a>
      </div>
    </div>
  );
}
