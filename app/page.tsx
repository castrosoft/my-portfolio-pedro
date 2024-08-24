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
  setLanguage: (lang: string) => {},
})

const messages = {
  es: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    contact: 'Contacto',
    downloadCV: 'Descargar CV',
    role: 'Desarrollador Web Frontend | Especialista en React',
    aboutMe: 'Soy un desarrollador web apasionado por crear experiencias de usuario excepcionales. Con experiencia en React y otras tecnologías modernas de frontend, me esfuerzo por construir aplicaciones web eficientes y escalables.',
    project1Title: 'Proyecto 1',
    project1Desc: 'Una breve descripción del proyecto',
    project2Title: 'Proyecto 2',
    project2Desc: 'Una breve descripción del proyecto',
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
    projects: 'Projects',
    contact: 'Contact',
    downloadCV: 'Download CV',
    role: 'Frontend Web Developer | React Specialist',
    aboutMe: 'I am a web developer passionate about creating exceptional user experiences. With experience in React and other modern frontend technologies, I strive to build efficient and scalable web applications.',
    project1Title: 'Project 1',
    project1Desc: 'A brief description of the project',
    project2Title: 'Project 2',
    project2Desc: 'A brief description of the project',
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
          <span className="font-bold">Tu Nombre</span>
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
                  Tu Nombre
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t.role}
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <GithubIcon className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
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
                  <CardDescription>{t.project1Desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Detalles sobre las tecnologías utilizadas y los desafíos superados.</p>
                </CardContent>
                <CardFooter>
                  <Button>{t.viewProject}</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t.project2Title}</CardTitle>
                  <CardDescription>{t.project2Desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Detalles sobre las tecnologías utilizadas y los desafíos superados.</p>
                </CardContent>
                <CardFooter>
                  <Button>{t.viewProject}</Button>
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
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Tu Nombre. {t.allRightsReserved}</p>
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