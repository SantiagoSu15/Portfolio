import {
  CloseIcon,
  PlayIcon,
  ExternalLinkIcon,
  GitHubIcon,
  YouTubeIcon,
} from './Icons/Icons';

import type { Project } from './projectContainer';

type DetailedInfoProps = {
  onClose: () => void;
  project: Project;
};

export const DetailedInfo = ({ onClose, project }: DetailedInfoProps) => {
  const {
    title,
    description,
    fullDescription,
    videoImage,
    youtubeUrl,
    frontendUrl,
    backendUrl,
    liveUrl,
    frontendTechnologies,
    backendTechnologies,
    deploymentTechnologies,
  } = project;

  return (
    <div
      id="project-modal"
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-[#b3f0ff]/30 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="modal-content glass-surface w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative flex flex-col text-[#0b4a5f] shadow-[0_20px_70px_rgba(0,140,190,0.25)]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 flex justify-between items-start sticky top-0 z-10 rounded-t-3xl bg-white/35 backdrop-blur-xl border-b border-white/50 shadow-[0_2px_15px_rgba(0,150,200,0.08)]">
          <div className="pr-4">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#3a9bd5] mb-1">
              Project
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b4a5f] hero-text leading-tight">
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="glossy-pill shrink-0 w-10 h-10 flex items-center justify-center text-[#0b4a5f] hover:text-[#007d9c] hover:bg-white/70 transition-all"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col gap-7">
          {/* Video */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden relative border border-white/60 bg-white/20 shadow-[0_8px_30px_rgba(0,130,180,0.16)] group">
            {videoImage && (
              <img
                src={videoImage}
                alt={`${title} video preview`}
                className="w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-[1.03]"
              />
            )}

            {/* Aqua glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-[#00d4ff]/10 to-[#3a9bd5]/25 flex items-center justify-center">
              {youtubeUrl && (
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Reproducir video"
                  className="glossy-pill w-20 h-20 flex items-center justify-center text-[#007d9c] bg-white/70 border-white/80 shadow-[0_0_35px_rgba(0,212,255,0.45)] group-hover:scale-110 transition-transform cursor-pointer"
                >
                  <PlayIcon />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="max-w-none">
            <h3 className="text-xl font-bold text-[#0b4a5f] mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-[#00d4ff] to-[#3a9bd5] rounded-full shadow-[0_0_10px_rgba(0,212,255,0.55)]" />
              Project Overview
            </h3>

            <p className="leading-relaxed text-lg text-[#176078] mb-5">
              {description}
            </p>

            {/* Full Description */}
            {fullDescription && (
              <p className="leading-relaxed text-[#39788c] opacity-90">
                {fullDescription}
              </p>
            )}
          </div>

          {/* Technologies */}
          <div className="max-w-none">
            <h3 className="text-xl font-bold text-[#0b4a5f] mb-5 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-[#00d4ff] to-[#3a9bd5] rounded-full shadow-[0_0_10px_rgba(0,212,255,0.55)]" />
              Technologies
            </h3>

            <div className="flex flex-col gap-5">
              {/* Frontend */}
              {frontendTechnologies?.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#3a9bd5] mb-3">
                    Frontend
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {frontendTechnologies.map((technology) => (
                      <span
                        key={technology}
                        className="glossy-pill px-4 py-2 text-sm font-semibold text-[#0b647b] bg-white/55 border-white/60"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Backend */}
              {backendTechnologies?.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#3a9bd5] mb-3">
                    Backend
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {backendTechnologies.map((technology) => (
                      <span
                        key={technology}
                        className="glossy-pill px-4 py-2 text-sm font-semibold text-[#0b647b] bg-white/55 border-white/60"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Deployment */}
              {deploymentTechnologies?.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#3a9bd5] mb-3">
                    Deployment
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {deploymentTechnologies.map((technology) => (
                      <span
                        key={technology}
                        className="glossy-pill px-4 py-2 text-sm font-semibold text-[#0b647b] bg-white/55 border-white/60"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-auto pt-2">
            {/* YouTube */}
            {youtubeUrl && (
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glossy-pill px-5 py-3 flex items-center justify-center gap-2 font-bold text-[#0b647b] text-sm whitespace-nowrap bg-white/65 hover:bg-white/85 hover:text-[#007d9c] hover:shadow-[0_0_18px_rgba(0,212,255,0.45)]"
              >
                <YouTubeIcon />
                YouTube Explication
              </a>
            )}

            {/* Frontend */}
            {frontendUrl && (
              <a
                href={frontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glossy-pill px-5 py-3 flex items-center justify-center gap-2 font-bold text-[#0b647b] text-sm whitespace-nowrap bg-white/55 hover:bg-white/80 hover:text-[#007d9c] hover:shadow-[0_0_18px_rgba(0,212,255,0.35)]"
              >
                <GitHubIcon />
                GitHub Frontend
              </a>
            )}

            {/* Backend */}
            {backendUrl && (
              <a
                href={backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glossy-pill px-5 py-3 flex items-center justify-center gap-2 font-bold text-[#0b647b] text-sm whitespace-nowrap bg-white/55 hover:bg-white/80 hover:text-[#007d9c] hover:shadow-[0_0_18px_rgba(0,212,255,0.35)]"
              >
                <GitHubIcon />
                GitHub Backend
              </a>
            )}

            {/* Live Project */}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glossy-pill px-5 py-3 flex items-center justify-center gap-2 font-bold text-white text-sm whitespace-nowrap bg-gradient-to-br from-[#00d4ff]/90 to-[#3a9bd5]/90 border-white/70 shadow-[0_4px_18px_rgba(0,170,220,0.3)] hover:from-[#00d4ff] hover:to-[#3a9bd5] hover:shadow-[0_0_22px_rgba(0,212,255,0.55)]"
              >
                <ExternalLinkIcon />
                Live Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};