import Link from "next/link"
import Image from "next/image"
import { Zap, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import { MobileNav } from "@/components/mobile-nav"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold text-blue-600">ElectroDUO</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium text-blue-600 hover:text-blue-800">
              Inicio
            </Link>
            <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-blue-600">
              Servicio
            </Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-blue-600">
              Sobre Nosotros
            </Link>
            <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-blue-600">
              Projectos
            </Link>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-blue-600">
              Contacto
            </Link>
          </nav>
          <MobileNav />
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-5xl xl:text-6xl/none">
                    ElectroDUO
                  </h1>
                  <p className="text-xl text-yellow-600 font-semibold">Impulsando tu mundo, una conexión a la vez</p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Soluciones eléctricas profesionales para proyectos residenciales, industriales y de construcción. Con años de experiencia, ofrecemos instalaciones eléctricas confiables y seguras.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button className="bg-blue-600 hover:bg-blue-700">Contáctanos</Button>
                  </Link>
                  <Link href="#services">
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      Nuestros Servicios
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="ElectroDUO Electrical Services"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-4xl md:text-5xl">
                  Nuestros Servicios
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Ofrecemos soluciones eléctricas integrales adaptadas a sus necesidades específicas.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-3 rounded-full bg-blue-100">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-600">Instalaciones Electricas</h3>
                <p className="text-muted-foreground text-center">
                  Instalaciones completas de sistemas eléctricos con los más altos estándares de calidad y medidas de seguridad.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-3 rounded-full bg-blue-100">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-600">Instalaciones Domiciliarias</h3>
                <p className="text-muted-foreground text-center">
                  Soluciones eléctricas especializadas para el hogar, garantizando seguridad y eficiencia para tu familia.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-3 rounded-full bg-blue-100">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-600">Instalaciones Industriales</h3>
                <p className="text-muted-foreground text-center">
                  Sistemas eléctricos robustos para instalaciones industriales, diseñados para soportar cargas pesadas y garantizar la continuidad operativa.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="About ElectroDUO"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-4xl md:text-5xl">
                    Sobre Nosotros
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    ElectroDUO es una empresa eléctrica profesional con años de experiencia en el sector. Nos especializamos en instalaciones eléctricas residenciales, industriales y de construcción.
                  </p>
                  <p className="text-muted-foreground md:text-xl">
                    Nuestro equipo de electricistas certificados se compromete a brindar servicios de alta calidad, garantizando que todas las instalaciones cumplan con las normas y regulaciones de seguridad.
                  </p>
                  <p className="text-muted-foreground md:text-xl">
                    Nos enorgullecemos de nuestra atención al detalle, confiabilidad y satisfacción del cliente. Nuestro objetivo es superar sus expectativas y ofrecer soluciones eléctricas que perduren en el tiempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-4xl md:text-5xl">
                  Proyectos Completados
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Eche un vistazo a algunas de nuestras recientes instalaciones eléctricas exitosas.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
              <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Completed Project 1"
                  className="aspect-video object-cover w-full"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-600">Recableado residencial</h3>
                  <p className="text-sm text-muted-foreground">Actualización completa del sistema eléctrico de una casa familiar.</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Completed Project 2"
                  className="aspect-video object-cover w-full"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-600">Instalacion Comercial</h3>
                  <p className="text-sm text-muted-foreground">Instalación eléctrica para un nuevo edificio de oficinas.</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Completed Project 3"
                  className="aspect-video object-cover w-full"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-600">Sistema de energía industrial</h3>
                  <p className="text-sm text-muted-foreground">
                    Instalación eléctrica de alta capacidad para una planta de fabricación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-4xl md:text-5xl">
                  Otros Proyectos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explore más de nuestra diversa cartera de instalaciones eléctricas.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
              <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Other Project 1"
                  className="aspect-video object-cover w-full"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-600">Integración de casas inteligentes</h3>
                  <p className="text-sm text-muted-foreground">Sistema eléctrico moderno con capacidades de hogar inteligente.</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Other Project 2"
                  className="aspect-video object-cover w-full"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-600">Sistema de respaldo de emergencia</h3>
                  <p className="text-sm text-muted-foreground">
                    Instalación de energía de respaldo confiable para infraestructura crítica.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Other Project 3"
                  className="aspect-video object-cover w-full"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-600">Diseño de iluminación</h3>
                  <p className="text-sm text-muted-foreground">Soluciones de iluminación personalizadas para espacios comerciales.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-4xl md:text-5xl">
                    Contáctanos
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Póngase en contacto con nuestro equipo para obtener una consulta y cotización gratuitas.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>+54 9 11 6360-4558</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>info@electroduo.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>Ruta 5 km 107, Villa del Dique, Cordoba, Argentina</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-6 w-6 text-blue-600 hover:text-blue-800" />
                  </Link>
                  <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-6 w-6 text-blue-600 hover:text-blue-800" />
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6 text-blue-600 hover:text-blue-800" />
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Envie su mensaje</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-blue-600 text-white py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3 lg:gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-yellow-500" />
                <span className="text-xl font-bold">ElectroDUO</span>
              </div>
              <p className="text-sm">
                Soluciones eléctricas profesionales para proyectos residenciales, industriales y de construcción.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contacto</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+54 9 11 6360-4558</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@electroduo.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Ruta 5 km 107, Villa del Dique, Cordoba, Argentina</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Seguinos</h3>
              <div className="flex gap-4">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 hover:text-yellow-500" />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 hover:text-yellow-500" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 hover:text-yellow-500" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-6 border-t border-blue-500 pt-6 text-center text-sm">
            <p>© {new Date().getFullYear()} ElectroDUO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

