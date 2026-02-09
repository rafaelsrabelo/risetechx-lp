"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowRight, Clock, TrendingUp, Flame, Code2, Smartphone, Users, Store, Sparkles, MessageSquare, Send, X, Cookie, CheckCircle2, BarChart3, GitBranch, RefreshCw, MessageCircle, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Home() {
  const [showCookies, setShowCookies] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, "Informe seu nome completo."),
    email: z.string().email("Informe um e-mail válido."),
    phone: z.string().optional(),
    message: z.string().min(10, "Conte um pouco mais sobre o projeto."),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    const hasConsent = document.cookie
      .split("; ")
      .some((cookie) => cookie.startsWith("cookie_consent="));
    setShowCookies(!hasConsent);
  }, []);

  const handleCookieChoice = (value: "accepted" | "rejected") => {
    document.cookie = `cookie_consent=${value}; max-age=31536000; path=/; samesite=lax`;
    setShowCookies(false);
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        form.reset();
      }
    } finally {
      setIsSending(false);
    }
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Gradient Background */}
      <div className="absolute md:fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[320px] h-[320px] md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-3xl md:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-3xl md:blur-[120px]" />
      </div>
      
      {/* Header/Nav */}
      <header className="fixed top-0 z-50 w-full border-b-2 border-primary/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg shadow-primary/5">
        <div className="container flex h-24 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="RiseTechX" width={64} height={64} className="h-16 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              onClick={(event) => handleNavClick(event, "home")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#servicos"
              onClick={(event) => handleNavClick(event, "servicos")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              Serviços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#tecnologias"
              onClick={(event) => handleNavClick(event, "tecnologias")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              Tecnologias
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#processos"
              onClick={(event) => handleNavClick(event, "processos")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              Processos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#contato"
              onClick={(event) => handleNavClick(event, "contato")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 border border-primary/50">Entre em contato</Button>
          </nav>
          <Button size="sm" className="md:hidden bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 border border-primary/50">Entre em contato</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-40 pb-20 px-4 md:px-8 overflow-hidden scroll-mt-28">
        {/* Background colorido */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background md:bg-gradient-to-br md:from-primary/20 md:via-background md:to-background">
          <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-bl-[200px]" />
        </div>

        <div className="absolute right-8 top-40 hidden lg:flex flex-col gap-6 opacity-60 z-10">
          <div className="h-14 w-14 rounded-xl border-2 border-primary/60 bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all shadow-lg shadow-primary/20">
            <Store className="h-7 w-7 text-primary" />
          </div>
          <div className="h-14 w-14 rounded-xl border-2 border-primary/60 bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all shadow-lg shadow-primary/20">
            <MessageSquare className="h-7 w-7 text-primary" />
          </div>
          <div className="h-14 w-14 rounded-xl border-2 border-primary/60 bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all shadow-lg shadow-primary/20">
            <Sparkles className="h-7 w-7 text-primary" />
          </div>
        </div>

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6 gap-2 border-primary/50 text-primary">
              <Flame className="h-4 w-4 text-primary animate-pulse" />
              Fábrica de Software
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Sistema sob medida para o{" "}
              <span className="text-primary underline decoration-4 decoration-primary/60">seu jeito de trabalhar</span>
            </h1>
            
            <div className="flex flex-col gap-4 mb-8 text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-transparent border-2 border-primary/50 flex items-center justify-center shadow-lg shadow-primary/10">
                  <Clock className="h-5 w-5 text-primary stroke-[2.5]" />
                </div>
                <span className="text-base md:text-lg">Sistemas personalizados desenvolvidos com agilidade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-transparent border-2 border-primary/50 flex items-center justify-center shadow-lg shadow-primary/10">
                  <TrendingUp className="h-5 w-5 text-primary stroke-[2.5]" />
                </div>
                <span className="text-base md:text-lg">Aplicativos mobile e web de alta performance</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button size="lg" className="text-base group bg-primary hover:bg-primary/90 border-2 border-primary/50">
                Solicitar orçamento
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section id="servicos" className="py-16 px-4 md:px-8 border-b-2 border-primary/20 scroll-mt-28">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card className="bg-card/50 backdrop-blur border-2 border-primary/40 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all group">
              <CardHeader>
                <Badge className="w-fit mb-3 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 border border-primary/50">SISTEMAS</Badge>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">Desenvolvimento de sistemas sob medida para sua empresa</CardTitle>
              </CardHeader>
            </Card>

            {/* Card 2 */}
            <Card className="bg-card/50 backdrop-blur border-2 border-primary/40 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all group">
              <CardHeader>
                <Badge className="w-fit mb-3 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 border border-primary/50">APLICATIVOS</Badge>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">Apps mobile nativos para iOS e Android com experiência excepcional</CardTitle>
              </CardHeader>
            </Card>

            {/* Card 3 - Larger */}
            <Card className="bg-card/50 backdrop-blur border-2 border-primary/40 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all md:col-span-2 lg:col-span-1 group">
              <CardHeader>
                <Badge className="w-fit mb-3 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 border border-primary/50">OUTSOURCING</Badge>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">Equipe especializada para complementar seu time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-8">
                  <div className="h-24 w-24 rounded-full bg-primary border-4 border-primary/60 md:bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shadow-primary/30">
                    <Code2 className="h-12 w-12 text-primary-foreground md:text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Button variant="default" size="lg" className="group bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 border-2 border-primary/50">
              Falar com especialista
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <Separator className="bg-primary/30 h-0.5" />
      </div>

      {/* Technologies Section */}
      <section id="tecnologias" className="py-20 px-4 md:px-8 bg-muted/30 scroll-mt-28">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tecnologias
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Usamos as tecnologias mais modernas para criar soluções eficientes e escaláveis
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors group">
              <img src="/stacks/nodedotjs.svg" alt="Node.js" className="h-10 w-auto md:h-12 group-hover:scale-110 transition-transform brightness-0 invert" loading="lazy" />
              <span className="text-sm font-medium">Node.js</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors group">
              <img src="/stacks/react.svg" alt="React" className="h-10 w-auto md:h-12 group-hover:scale-110 transition-transform brightness-0 invert" loading="lazy" />
              <span className="text-sm font-medium">React</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors group">
              <img src="/stacks/postgresql.svg" alt="PostgreSQL" className="h-10 w-auto md:h-12 group-hover:scale-110 transition-transform brightness-0 invert" loading="lazy" />
              <span className="text-sm font-medium">PostgreSQL</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors group">
              <img src="/stacks/aws-svgrepo-com.svg" alt="AWS" className="h-10 w-auto md:h-12 group-hover:scale-110 transition-transform brightness-0 invert" loading="lazy" />
              <span className="text-sm font-medium">AWS</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors group">
              <img src="/stacks/docker.svg" alt="Docker" className="h-10 w-auto md:h-12 group-hover:scale-110 transition-transform brightness-0 invert" loading="lazy" />
              <span className="text-sm font-medium">Docker</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors group">
              <img src="/stacks/php.svg" alt="PHP" className="h-10 w-auto md:h-12 group-hover:scale-110 transition-transform brightness-0 invert" loading="lazy" />
              <span className="text-sm font-medium">PHP</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors group">
              <img src="/stacks/ruby.svg" alt="Ruby on Rails" className="h-10 w-auto md:h-12 group-hover:scale-110 transition-transform brightness-0 invert" loading="lazy" />
              <span className="text-sm font-medium">Ruby on Rails</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors group">
              <img src="/stacks/flutter.svg" alt="Flutter" className="h-10 w-auto md:h-12 group-hover:scale-110 transition-transform brightness-0 invert" loading="lazy" />
              <span className="text-sm font-medium">Flutter</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors group">
              <img src="/stacks/nextdotjs.svg" alt="Next.js" className="h-10 w-auto md:h-12 group-hover:scale-110 transition-transform brightness-0 invert" loading="lazy" />
              <span className="text-sm font-medium">Next.js</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors group">
              <img src="/stacks/typescript.svg" alt="TypeScript" className="h-10 w-auto md:h-12 group-hover:scale-110 transition-transform brightness-0 invert" loading="lazy" />
              <span className="text-sm font-medium">TypeScript</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <Separator className="bg-primary/30 h-0.5" />
      </div>

      {/* Process Section */}
      <section id="processos" className="py-20 px-4 md:px-8 scroll-mt-28">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Como funciona <span className="text-primary">um projeto?</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
            Nosso processo é claro e objetivo, do diagnóstico ao lançamento, garantindo qualidade, previsibilidade e evolução contínua.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Process 1 */}
            <Card className="bg-card md:bg-card/50 md:backdrop-blur border-2 border-primary/30 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary border-2 border-primary/50 flex items-center justify-center mb-4 md:bg-primary/15 group-hover:bg-primary/25 transition-colors">
                  <BarChart3 className="h-6 w-6 text-primary-foreground md:text-primary stroke-[2.5]" />
                </div>
                <CardTitle className="text-xl">Descoberta e escopo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Entendemos seu negócio, objetivos e requisitos para definir o escopo ideal.
                </p>
              </CardContent>
            </Card>

            {/* Process 2 */}
            <Card className="bg-card md:bg-card/50 md:backdrop-blur border-2 border-primary/30 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary border-2 border-primary/50 flex items-center justify-center mb-4 md:bg-primary/15 group-hover:bg-primary/25 transition-colors">
                  <RefreshCw className="h-6 w-6 text-primary-foreground md:text-primary stroke-[2.5]" />
                </div>
                <CardTitle className="text-xl">Design e prototipação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Criamos o fluxo e as telas para validar a experiência antes de desenvolver.
                </p>
              </CardContent>
            </Card>

            {/* Process 3 */}
            <Card className="bg-card md:bg-card/50 md:backdrop-blur border-2 border-primary/30 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary border-2 border-primary/50 flex items-center justify-center mb-4 md:bg-primary/15 group-hover:bg-primary/25 transition-colors">
                  <GitBranch className="h-6 w-6 text-primary-foreground md:text-primary stroke-[2.5]" />
                </div>
                <CardTitle className="text-xl">Desenvolvimento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Construímos com sprints, entregas frequentes e acompanhamento transparente.
                </p>
              </CardContent>
            </Card>

            {/* Process 4 */}
            <Card className="bg-card md:bg-card/50 md:backdrop-blur border-2 border-primary/30 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary border-2 border-primary/50 flex items-center justify-center mb-4 md:bg-primary/15 group-hover:bg-primary/25 transition-colors">
                  <Settings className="h-6 w-6 text-primary-foreground md:text-primary stroke-[2.5]" />
                </div>
                <CardTitle className="text-xl">Teste e lançamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Validamos qualidade, publicamos e seguimos com evolução e suporte.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <Separator className="bg-primary/30 h-0.5" />
      </div>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 relative border-b-2 border-primary/20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        </div>
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Soluções digitais completas,<br />
            <span className="text-primary border-b-4 border-primary/50 pb-1">do jeito que seu negócio precisa</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Benefit 1 */}
            <div className="text-center md:text-left group hover:scale-105 transition-transform p-6 rounded-xl border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
              <div className="inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-xl bg-transparent border-2 border-primary/50 mb-4 group-hover:bg-primary/10 group-hover:border-primary transition-all shadow-lg shadow-primary/10">
                <Code2 className="h-7 w-7 md:h-8 md:w-8 text-primary stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Tecnologias modernas</h3>
              <p className="text-muted-foreground">
                Utilizamos as melhores tecnologias do mercado para criar soluções escaláveis e de alta performance.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center md:text-left group hover:scale-105 transition-transform p-6 rounded-xl border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
              <div className="inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-xl bg-transparent border-2 border-primary/50 mb-4 group-hover:bg-primary/10 group-hover:border-primary transition-all shadow-lg shadow-primary/10">
                <Smartphone className="h-7 w-7 md:h-8 md:w-8 text-primary stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Experiência multiplataforma</h3>
              <p className="text-muted-foreground">
                Desenvolvemos aplicações que funcionam perfeitamente em web, mobile e desktop.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center md:text-left group hover:scale-105 transition-transform p-6 rounded-xl border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
              <div className="inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-xl bg-transparent border-2 border-primary/50 mb-4 group-hover:bg-primary/10 group-hover:border-primary transition-all shadow-lg shadow-primary/10">
                <Users className="h-7 w-7 md:h-8 md:w-8 text-primary stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Time experiente</h3>
              <p className="text-muted-foreground">
                Nossa equipe especializada está pronta para transformar suas ideias em realidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <Separator className="bg-primary/30 h-0.5" />
      </div>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 relative border-b-2 border-primary/20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-[260px] h-[260px] md:w-[400px] md:h-[400px] bg-primary/5 rounded-full blur-3xl md:blur-[100px]" />
        </div>
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-16 bg-primary rounded-full shadow-lg shadow-primary/30" />
            <Sparkles className="h-6 w-6 text-primary" />
            <div className="h-1 w-16 bg-primary rounded-full shadow-lg shadow-primary/30" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-primary border-b-4 border-primary/50 pb-1">Clientes satisfeitos</span> com nossas soluções
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-card md:bg-card/50 md:backdrop-blur border-2 border-primary/40 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-6">
                  "A RiseTechX desenvolveu nosso sistema completo de gestão. A plataforma é super intuitiva e conseguimos otimizar todos os nossos processos. A equipe foi extremamente profissional e atenciosa."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="text-sm font-semibold text-primary">AB</span>
                  </div>
                  <div>
                    <p className="font-semibold">Annette Benes</p>
                    <p className="text-sm text-muted-foreground">CEO da Acme Corp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-card md:bg-card/50 md:backdrop-blur border-2 border-primary/40 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-6">
                  "Transformar nossa ideia em um aplicativo funcional foi rápido e eficiente. A comunicação foi excelente durante todo o projeto. Já vemos resultados incríveis com o app em produção!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="text-sm font-semibold text-primary">JJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">Jacob Jones</p>
                    <p className="text-sm text-muted-foreground">CEO da J Corp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Colorful Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/40" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <div className="text-[400px] font-black text-white/10 select-none">X</div>
          </div>
        </div>
        
        <div className="container max-w-6xl mx-auto py-20 px-4 md:px-8 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para simplificar sua rotina com um software feito{" "}
              <span className="underline decoration-4 decoration-white/80">só para você?</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Cada negócio tem sua forma única de funcionar. O próximo passo é conversar com a gente para transformar sua necessidade em um sistema sob medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chamar no WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10" asChild>
                <a href="#contato">Falar com um Especialista</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 px-4 md:px-8 scroll-mt-28">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-primary/5 to-transparent">
            {/* Left side - CTA */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <div className="inline-flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-transparent border-2 border-primary/60 mb-6 shadow-xl shadow-primary/20 mx-auto lg:mx-0">
                <Flame className="h-8 w-8 md:h-10 md:w-10 text-primary animate-pulse" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary border-b-4 border-primary/50 pb-1">Acenda</span> o potencial do seu negócio<br />com tecnologia de ponta
              </h2>
              <p className="text-muted-foreground text-lg mt-4">
                Preencha o formulário e nossa equipe entrará em contato para transformar suas ideias em realidade.
              </p>
            </div>

            {/* Right side - Contact Form */}
            <Card className="bg-card/50 backdrop-blur border-0 md:border-2 border-primary/40 shadow-2xl shadow-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="h-6 w-6 text-primary" />
                  Entre em contato
                </CardTitle>
                <CardDescription>
                  Conte-nos sobre seu projeto e retornaremos em breve
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome completo *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Seu nome"
                              className="border-primary/30 focus:border-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="seu@email.com"
                              className="border-primary/30 focus:border-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="(00) 00000-0000"
                              className="border-primary/30 focus:border-primary"
                              value={field.value || ""}
                              onChange={(event) =>
                                field.onChange(formatPhone(event.target.value))
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Conte-nos sobre seu projeto..."
                              className="border-primary/30 focus:border-primary min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 border-2 border-primary/50 group"
                      size="lg"
                      disabled={isSending}
                    >
                      {isSending ? "Enviando..." : "Enviar mensagem"}
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-primary/30 py-8 px-4 md:px-8 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="RiseTechX" width={64} height={64} className="h-16 w-auto" />
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors flex items-center gap-1 group">
                Termos de Uso
                <span className="h-px w-0 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors flex items-center gap-1 group">
                Política de Privacidade
                <span className="h-px w-0 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors flex items-center gap-1 group">
                <Sparkles className="h-3 w-3 text-primary" />
                Enviar feedback
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
      >
        <MessageCircle className="h-7 w-7 text-white" />
        <span className="absolute right-16 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Fale conosco
        </span>
      </a>

      {/* Cookie Consent */}
      {showCookies && (
        <div className="fixed bottom-6 left-6 z-50 max-w-md bg-card border-2 border-primary/40 rounded-xl shadow-2xl p-6 animate-in slide-in-from-bottom-4">
          <div className="flex items-start gap-3 mb-4">
            <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Consentimento de cookies</h3>
              <p className="text-sm text-muted-foreground">
                Ao clicar em "Aceitar todos", você concorda com o armazenamento de cookies no seu dispositivo para melhorar a navegação no site, analisar o uso do site e melhorar a sua navegação.
              </p>
            </div>
            <button
              onClick={() => handleCookieChoice("rejected")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              onClick={() => handleCookieChoice("accepted")}
              className="bg-primary hover:bg-primary/90 flex-1"
            >
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Aceitar tudo
            </Button>
            <Button
              onClick={() => handleCookieChoice("rejected")}
              variant="outline"
              className="flex-1"
            >
              Rejeitar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
