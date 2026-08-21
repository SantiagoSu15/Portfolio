import type React from "react";
import { useState } from "react";
import { DetailedInfo } from "./detailedInfo";

export type Project = {
  id: number;
  title: string;
  description: string;
  backendTechnologies: string[];
  frontendTechnologies: string[];
  deploymentTechnologies: string[];
  fullDescription: string;
  videoImage: string;
  youtubeUrl: string;
  frontendUrl: string;
  backendUrl: string;
  liveUrl?: string;
};

export const ProjectContainer: React.FC = () => {
  const [detailedInfo, setDetailedInfo] = useState<boolean>(false);
  const [project] = useState<Project[]>([
    {
      id: 1,
      title: "Fight Club Online",
      description: "Juego de lucha multijugador en tiempo real, accesible desde cualquier navegador, con combate competitivo y sistema de moderación integrado..",
      backendTechnologies: ["Java", "Spring Boot", "WebSocket","MongoDB","Typescript","Docker","JWT","Oauth2","RabbitMQ","Redis"],
      frontendTechnologies: ["React", "Typescript"],
      deploymentTechnologies: ["Azure", "Nginx", "Kong","CI/CD"],
      fullDescription: "La idea de un juego multijugador concurrente donde nuestro primer objetivo es que fuera mantenible y escalable cumpliendo los atributis calidad, Hemos optado por una arquitectura de microservicios desplegados independientes en azure cada uno con clean arquitecture (Arquitectura Hexagonal)",
      videoImage: "https://placehold.co/100x100?text=Fight Club Online",
      youtubeUrl: "#",
      frontendUrl: "https://github.com/Fight-Club-Online/LAMENTACIONES_FRONTEND",
      backendUrl: "https://github.com/orgs/Fight-Club-Online/repositories",
    },
    {
      id: 2,
      title: "Rideci ~ MS1",
      description: "Rideci es una plataforma enfocada en medir y analizar el impacto ambiental y social de los viajes compartidos. Permite visualizar el ahorro de CO₂, las rutas compartidas y la participación de la comunidad mediante estadísticas, gráficos y reportes exportables.",
      backendTechnologies: ["Java", "Spring Boot", "RabbitMQ","MongoDB"],
      frontendTechnologies: ["React", "TypeScript"],
      deploymentTechnologies: ["Azure", "CI/CD"],   
      fullDescription: `The service's main objective is to measure and analyze the environmental and social impact of using RIDECI, providing key indicators that reflect CO₂ emission savings, the number of shared rides, and the level of community participation.
      The system will automatically calculate the estimated emission reduction per user and present comparative graphs showing the collective savings achieved over different time periods. It will also allow the generation of detailed reports by week, month, or semester, with the option to apply filters based on user type or most frequent destination.
      The results can be exported in PDF and Excel formats, facilitating analysis and institutional dissemination.
      The module will also include a public dashboard highlighting the most relevant sustainability metrics, promoting transparency and the institution's environmental commitment to the community.`,
      videoImage: "https://placehold.co/100x100?text=Rideci",
      youtubeUrl: "#",
      frontendUrl: "https://github.com/RIDECI/RIDECI_FRONTEND",
      backendUrl: "https://github.com/RIDECI/TROYA_STATISTICS_SUSTAINABILITY_BACKEND",
    },
    {
      id: 3,
      title: "Rideci ~ MS2",
      description: "Servicio de comunicación y gestión de eventos de RIDECI, diseñado para manejar reportes, alertas y chat en tiempo real entre usuarios y microservicios.",
      backendTechnologies: ["NestJs", "PostgreSQL", "WebSocket","SocketIO","Redis","RabbitMQ","Prisma"],
      frontendTechnologies: ["React", "TypeScript"],
      deploymentTechnologies: ["Node.js", "MongoDB", "WebSocket"],     
      fullDescription: `Servicio REST y WebSocket de RIDECI LEGACY encargado de gestionar reportes, alertas, 
      chat en tiempo real y eventos de comunicación entre microservicios. Utiliza NestJS y Prisma sobre PostgreSQL, Redis para datos temporales y RabbitMQ para mensajería asíncrona. Además, incorpora Socket.IO para comunicación en tiempo real y Swagger para facilitar la documentación y consulta de los endpoints.`,
      videoImage: "https://placehold.co/100x100?text=Rideci",
      youtubeUrl: "#",
      frontendUrl: "https://github.com/RIDECI/RIDECI_FRONTEND",
      backendUrl: "https://github.com/RidECI-Legacy/doom-communication-and-security-service",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "Detector de Fraude con Machine Learning",
      description: "Sistema de detección de fraude en tiempo real que utiliza Machine Learning para analizar y clasificar transacciones financieras.",
      backendTechnologies: ["Scala 3","Apache Spark","Apache Kafka","Delta Lake", "Spark MLlib"],
      frontendTechnologies: ["Grafana","PostgreSQL"],
      deploymentTechnologies: ["Docker Compose","AWS S3","Apache Kafka","Apache Spark", "AWS EC2"],
      fullDescription: `Sistema distribuido de detección de fraude en tiempo real construido con Scala 3, Apache Spark Structured Streaming, Apache Kafka y Delta Lake. El sistema procesa transacciones mediante un pipeline de streaming, las almacena siguiendo una arquitectura medallón (Bronze, Silver y Gold) y utiliza un modelo de Regresión Logística entrenado con Spark MLlib para identificar transacciones potencialmente fraudulentas. Las transacciones se clasifican y distribuyen en diferentes canales según su resultado, generando alertas en tiempo real y registros de auditoría. Además, cuenta con un proceso batch para el entrenamiento y actualización del modelo, Docker Compose para la orquestación de servicios y Grafana para el monitoreo de métricas.`,
      videoImage: "https://placehold.co/100x100?text=Fraud Detector",
      youtubeUrl: "#",
      frontendUrl: "#",
      backendUrl: "https://github.com/SantiagoSu15/Detector-De-Fraude",
      liveUrl: "#",
    },
    
    {
      id: 5,
      title: "Balatro Calculator",
      description: "Real-time chat with liquid bubble effects.",
      backendTechnologies: ["Java", "Spring Boot"],
      frontendTechnologies: ["React", "Vite", "TypeScript"],
      deploymentTechnologies: ["Azure", "Vercel", "CI/CD"],  
      fullDescription: "Juego de lucha multijugador en tiempo real, accesible desde cualquier navegador, con combate competitivo y sistema de moderación integrado..",
      videoImage: "https://placehold.co/100x100?text=Balatro Calculator",
      youtubeUrl: "#",
      frontendUrl: "https://github.com/SantiagoSu15/BalatroCalculatorFront",
      backendUrl: "https://github.com/SantiagoSu15/BalatroCalculator",
      liveUrl: "https://balatrocalculator.vercel.app",
    },
    {
      id: 6,
      title: "Mini Games",
      description: "Una serie de mini juegos.",
      backendTechnologies: ["TypeScript"],
      frontendTechnologies: ["React", "Vite"],
      deploymentTechnologies: ["GitHub Pages", "CI/CD"],      
      fullDescription: "Juego de lucha multijugador en tiempo real, accesible desde cualquier navegador, con combate competitivo y sistema de moderación integrado..",
      videoImage: "https://placehold.co/100x100?text=Mini Games",
      youtubeUrl: "#",
      frontendUrl: "#",
      backendUrl: "#",
      liveUrl: "#",
    },
  ]);

  return (
    <section
    className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    data-purpose="projects-list"
    id="projects-container"
  >
    {project.map((p) => (
      <div
        key={p.id}
        className="project-card glass-surface card-shine group flex h-full flex-col rounded-xl p-4"
        data-purpose="project-item"
      >
        <div className="project-card-media relative mb-3 h-28 w-full shrink-0 overflow-hidden rounded-lg shadow-inner project-card-well">
          <img
            src={p.videoImage}
            alt={p.title}
            className="project-card-thumb transition-transform duration-500 group-hover:scale-105"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        </div>

        <div className="project-card-body flex min-h-0 flex-1 flex-col">
          <h3 className="mb-1 font-bold text-lg text-[#004a60]">
            {p.title}
          </h3>

          <p className="mb-3 line-clamp-2 flex-1 text-sm text-[#0b4a5f]/80">
            {p.description}
          </p>

          <button
            onClick={() => setDetailedInfo(true)}
            className="mt-auto inline-flex items-center gap-1 text-xs font-bold text-[#3a9bd5] hover:underline"
          >
            View Case Study →
          </button>
        </div>
      </div>
    ))}

    {detailedInfo && (
      <DetailedInfo onClose={() => setDetailedInfo(false)} project={project[0]} />
    )}
  </section>
  );
};
