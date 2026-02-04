import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Clock, TrendingUp, Flame, Code2, Smartphone, Users, Store, Sparkles, MessageSquare, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>
      
      {/* Header/Nav */}
      <header className="fixed top-0 z-50 w-full border-b-2 border-primary/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg shadow-primary/5">
        <div className="container flex h-24 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="RiseTechX" width={64} height={64} className="h-16 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group">
              Serviços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 border border-primary/50">Começar</Button>
          </nav>
          <Button size="sm" className="md:hidden bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 border border-primary/50">Começar</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 md:px-8 border-b-2 border-primary/20">
        <div className="absolute right-8 top-40 hidden lg:flex flex-col gap-6 opacity-60">
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

        <div className="container max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border-2 border-primary/50 mb-6 shadow-lg shadow-primary/20">
              <Flame className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Fábrica de Software</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transforme suas ideias em{" "}
              <span className="text-primary">soluções digitais</span> inovadoras
            </h1>
            
            <div className="flex flex-col gap-4 mb-8 text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center shadow-lg shadow-primary/20">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <span className="text-lg">Sistemas personalizados desenvolvidos com agilidade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center shadow-lg shadow-primary/20">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <span className="text-lg">Aplicativos mobile e web de alta performance</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button size="lg" className="text-base group bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 border-2 border-primary/50">
                Solicitar orçamento
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/30 w-fit">
              <Sparkles className="h-4 w-4 text-primary" />
              Consultoria gratuita para seu projeto
            </p>
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-16 px-4 md:px-8 border-b-2 border-primary/20">
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
                  <div className="h-24 w-24 rounded-full bg-primary/20 border-4 border-primary/60 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shadow-primary/30">
                    <Code2 className="h-12 w-12 text-primary" />
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
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-xl bg-primary/20 border-2 border-primary/50 mb-4 group-hover:bg-primary/30 group-hover:border-primary transition-all shadow-xl shadow-primary/20">
                <Code2 className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Tecnologias modernas</h3>
              <p className="text-muted-foreground">
                Utilizamos as melhores tecnologias do mercado para criar soluções escaláveis e de alta performance.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center md:text-left group hover:scale-105 transition-transform p-6 rounded-xl border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-xl bg-primary/20 border-2 border-primary/50 mb-4 group-hover:bg-primary/30 group-hover:border-primary transition-all shadow-xl shadow-primary/20">
                <Smartphone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Experiência multiplataforma</h3>
              <p className="text-muted-foreground">
                Desenvolvemos aplicações que funcionam perfeitamente em web, mobile e desktop.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center md:text-left group hover:scale-105 transition-transform p-6 rounded-xl border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-xl bg-primary/20 border-2 border-primary/50 mb-4 group-hover:bg-primary/30 group-hover:border-primary transition-all shadow-xl shadow-primary/20">
                <Users className="h-10 w-10 text-primary" />
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
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
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
            <Card className="bg-card/50 backdrop-blur border-2 border-primary/40 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all">
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
            <Card className="bg-card/50 backdrop-blur border-2 border-primary/40 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all">
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

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 rounded-2xl border-0 border-primary/40 bg-gradient-to-br from-primary/5 to-transparent">
            {/* Left side - CTA */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/20 border- border-primary/60 mb-6 animate-pulse shadow-2xl shadow-primary/30 mx-auto lg:mx-0">
                <Flame className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary border-b-4 border-primary/50 pb-1">Acenda</span> o potencial do seu negócio<br />com tecnologia de ponta
              </h2>
              <p className="text-muted-foreground text-lg mt-4">
                Preencha o formulário e nossa equipe entrará em contato para transformar suas ideias em realidade.
              </p>
            </div>

            {/* Right side - Contact Form */}
            <Card className="bg-card/50 backdrop-blur border-0 border-primary/40 shadow-2xl shadow-primary/10">
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
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo *</Label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome" 
                      className="border-primary/30 focus:border-primary" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="seu@email.com" 
                      className="border-primary/30 focus:border-primary" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="(00) 00000-0000" 
                      className="border-primary/30 focus:border-primary" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Conte-nos sobre seu projeto..." 
                      className="border-primary/30 focus:border-primary min-h-[120px]" 
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 border-2 border-primary/50 group"
                    size="lg"
                  >
                    Enviar mensagem
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
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
    </div>
  );
}
