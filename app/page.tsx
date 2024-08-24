"use client"

import { useState, useEffect, createContext, useContext } from "react"
import { ThemeProvider, useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GithubIcon, LinkedinIcon, MoonIcon, SunIcon, DownloadIcon, GlobeIcon } from "lucide-react"
import Link from "next/link"


const LanguageContext = createContext({
  language: 'es',
  setLanguage: (lang: string) => { },
})

const messages = {
  es: {
    about: 'Sobre mí',
    projects: 'Experiencia',
    contact: 'Contacto',
    downloadCV: 'Descargar CV',
    role: 'QA Engineer | Entusiasta',
    aboutMe: 'QA con más de 6 años de experiencia en el diseño, desarrollo y ejecución de scripts de prueba. Experiencia de 1 año en automatización utilizando Java y Cypress. Amplia comprensión de las metodologías de desarrollo de software y pruebas. Habilidades en la creación de informes de errores y seguimiento hasta su resolución.',
    project1Title: 'TOTALCOIN',
    project1Desc: '02.2024 - Presente',
    project1Description: 'TOTALCOIN es un facilitador de pagos digitales con un completo sistema de gestión online.',
    project2Title: 'PPRO',
    project2Desc: '02.2021 - 08.2023',
    project2Description: 'PPRO proporciona soluciones de pago digital a empresas y bancos para que puedan escalar sus servicios de pago, adquisición y gestión de riesgos a través de una sola conexión.',
    project3Title: 'KOLEKTOR',
    project3Desc: '03.2019 - 01.2021',
    project3Description: 'KOLEKTOR es una empresa que ofrece servicios de cobranza a organizaciones públicas y privadas a través de modelos de gestión sostenibles.',
    project4Title: 'DIRECCIÓN GENERAL DE RENTAS',
    project4Desc: '09.2017 - 02.2019',
    project4Description: 'La DIRECCIÓN GENERAL DE RENTAS es responsable de la recaudación de impuestos provinciales y la supervisión fiscal.',
    viewProject: 'Ver Proyecto',
    yourName: 'Tu nombre',
    yourEmail: 'Tu email',
    yourMessage: 'Tu mensaje',
    sendMessage: 'Enviar Mensaje',
    allRightsReserved: 'Todos los derechos reservados.',
    termsOfService: 'Términos de Servicio',
    privacyPolicy: 'Política de Privacidad',
  },
  en: {
    about: 'About',
    projects: 'Experience',
    contact: 'Contact',
    downloadCV: 'Download CV',
    role: 'QA Engineer | Entrepreneur',
    aboutMe: 'QA with 6+ years of expertise in designing, developing, and executing test scripts. Experience of 1 year in automation testing using Java and Cypress. Strong understanding of software development and testing methodologies. Skilled in creating bug reports and tracking them to resolution.',
    project1Title: 'TOTALCOIN',
    project1Desc: '02.2024 - Present',
    project1Description: 'TOTALCOIN is a digital payment facilitator with a comprehensive online management system.',
    project2Title: 'PPRO',
    project2Desc: '02.2021 - 08.2023',
    project2Description: 'PPRO provides digital payment solutions to businesses and banks so that they can scale their checkout, acquiring, and risk services through one connection.',
    project3Title: 'KOLEKTOR',
    project3Desc: '03.2019 - 01.2021',
    project3Description: 'KOLEKTOR is a company that provides collection services to public and private organizations through sustainable management models.',
    project4Title: 'DIRECCIÓN GENERAL DE RENTAS',
    project4Desc: '09.2017 - 02.2019',
    project4Description: 'The DIRECCIÓN GENERAL DE RENTAS is responsible for the collection of provincial taxes and tax oversight.',
    viewProject: 'View Project',
    yourName: 'Your name',
    yourEmail: 'Your email',
    yourMessage: 'Your message',
    sendMessage: 'Send Message',
    allRightsReserved: 'All rights reserved.',
    termsOfService: 'Terms of Service',
    privacyPolicy: 'Privacy Policy',
  },
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="mr-2"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

function LanguageToggle() {
  const { language, setLanguage } = useContext(LanguageContext)

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="mr-2"
    >
      <GlobeIcon className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle language</span>
    </Button>
  )
}

function PortfolioContent() {
  const { language } = useContext(LanguageContext)
  const t = messages[language as keyof typeof messages]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cvPath = language === 'es' ? '/CV-Castro-Pedro-SP.pdf' : '/CV-Castro-Pedro-EN.pdf';

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-14 flex items-center border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm">
        
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold">PEDRO CASTRO</span>
        </Link>

        <nav className="ml-auto flex gap-4 sm:gap-6">
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:underline underline-offset-4">
            {t.about}
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:underline underline-offset-4">
            {t.projects}
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:underline underline-offset-4">
            {t.contact}
          </button>
        </nav>

        <ThemeToggle />

        <LanguageToggle />

        <Link href={cvPath} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="ml-4">
            <DownloadIcon className="mr-2 h-4 w-4" />
            {t.downloadCV}
          </Button>
        </Link>

      </header>

      <main className="flex-1 mt-14">
        <section className="min-h-screen flex items-center justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Pedro Castro
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t.role}
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/castrosoft" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <GithubIcon className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/cp-castropedro" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <LinkedinIcon className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{t.about}</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {t.aboutMe}
            </p>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">{t.projects}</h2>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t.project1Title}</CardTitle>
                  <h3>QA Engineer</h3>
                  <CardDescription>{t.project1Desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{t.project1Description}</p>
                </CardContent>
                <CardFooter>
                  <Link href="https://ar.totalcoin.com/" target="_blank" rel="noopener noreferrer">
                  <Button>{t.viewProject}</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t.project2Title}</CardTitle>
                  <h3>QA Engineer</h3>
                  <CardDescription>{t.project2Desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{t.project2Description}</p>
                </CardContent>
                <CardFooter>
                  <Link href="https://www.ppro.com/" target="_blank" rel="noopener noreferrer">
                  <Button>{t.viewProject}</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t.project3Title}</CardTitle>
                  <h3>QA Analyst</h3>
                  <CardDescription>{t.project3Desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{t.project3Description}</p>
                </CardContent>
                <CardFooter>
                  <Link href="https://www.kolektor.com.ar/" target="_blank" rel="noopener noreferrer">
                  <Button>{t.viewProject}</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t.project4Title}</CardTitle>
                  <h3>QA Analyst</h3>
                  <CardDescription>{t.project4Desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{t.project4Description}</p>
                </CardContent>
                <CardFooter>
                  <Link href="https://www.rentascordoba.gob.ar/inicio/" target="_blank" rel="noopener noreferrer">
                  <Button>{t.viewProject}</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">{t.contact}</h2>
            <form className="max-w-md mx-auto">
              <div className="space-y-4">
                <Input
                  placeholder={t.yourName}
                  className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800"
                />
                <Input
                  type="email"
                  placeholder={t.yourEmail}
                  className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800"
                />
                <Textarea
                  placeholder={t.yourMessage}
                  className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800"
                />
                <Button type="submit" className="w-full">
                  {t.sendMessage}
                </Button>
              </div>
            </form>
          </div>
        </section>
        
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Pedro Castro. {t.allRightsReserved}</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            {t.termsOfService}
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            {t.privacyPolicy}
          </Link>
        </nav>
      </footer>

    </div>
  )
}

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useState('es')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <PortfolioContent />
      </LanguageContext.Provider>
    </ThemeProvider>
  )
}
