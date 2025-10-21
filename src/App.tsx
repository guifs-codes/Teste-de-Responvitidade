import svgPaths from "./imports/svg-ax6p80bbpl";
import imgSourceAvatar from "figma:asset/8cd329fd4ee547323aee534a3596cf60970c3c39.png";
import imgContentImage from "figma:asset/1bfc7e0fb242f2c258cb31f6cd645ef4c99ca8b9.png";
import imgPalverLogo from "figma:asset/2ac586f3e3f546292a8aa736a0c072191da5eac3.png";
import imgNavigationBar from "figma:asset/1b20eb6c29593cfdcc89d1afd9eb3c559a0d60dd.png";

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground relative">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <BackgroundGraphics />
      </div>

      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <main className="relative pt-[72px] pb-[72px] px-4 sm:px-8 md:px-16 lg:px-[64px] max-w-[1920px] mx-auto">
        <div className="flex flex-col gap-6 py-6 md:py-12 lg:py-24">
          {/* Collected Data Card */}
          <CollectedDataCard />

          {/* Article Content - Light Mode */}
          <div className="contents [&>*]:![--background:rgba(255,255,255,1)] [&>*]:![--foreground:rgba(36,35,39,1)] [&>*]:![--card:rgba(255,255,255,1)] [&>*]:![--card-foreground:rgba(0,0,0,1)]">
            <ArticleContent />
          </div>
        </div>
      </main>

      {/* Bottom Actions */}
      <BottomActions />
    </div>
  );
}

function BackgroundGraphics() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <svg
        className="block h-[967px] w-auto"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 2264 967"
      >
        <path d={svgPaths.p22759480} fill="#A77AFF" />
        <path d={svgPaths.p14d55400} fill="#A77AFF" />
        <path d={svgPaths.p44bc280} fill="#A77AFF" />
        <path d={svgPaths.p2e7e3980} fill="#A77AFF" />
        <path d={svgPaths.p3c32e360} fill="#A77AFF" />
        <path d={svgPaths.p1d886680} fill="#A77AFF" />
        <path d={svgPaths.p5134a00} fill="#A77AFF" />
        <path d={svgPaths.p543ff00} fill="#A77AFF" />
        <path d={svgPaths.pa137f00} fill="#A77AFF" />
        <path d={svgPaths.p514c200} fill="#A77AFF" />
        <path d={svgPaths.p8fcb600} fill="#A77AFF" />
        <path d={svgPaths.p9d41600} fill="#A77AFF" />
        <path d={svgPaths.p1f7ba00} fill="#A77AFF" />
        <path d={svgPaths.p62e4900} fill="#A77AFF" />
        <path d={svgPaths.p134dd300} fill="#A77AFF" />
        <path d={svgPaths.p5c3b600} fill="#A77AFF" />
        <path d={svgPaths.p158c9c80} fill="#A77AFF" />
        <path d={svgPaths.p22a99b00} fill="#A77AFF" />
        <path d={svgPaths.p10f69840} fill="#A77AFF" />
        <path d={svgPaths.p3534c852} fill="#A77AFF" />
        <path d={svgPaths.p25d3fb00} fill="#A77AFF" />
        <path d={svgPaths.p36295180} fill="#A77AFF" />
        <path d={svgPaths.p1c167800} fill="#A77AFF" />
        <path d={svgPaths.p32dc8200} fill="#A77AFF" />
        <path d={svgPaths.p214d7d00} fill="#A77AFF" />
        <path d={svgPaths.p8519e00} fill="#A77AFF" />
        <path d={svgPaths.p39878c00} fill="#A77AFF" />
        <path d={svgPaths.p17472d00} fill="#A77AFF" />
        <path d={svgPaths.p86e0d00} fill="#A77AFF" />
        <path d={svgPaths.p26ebc600} fill="#A77AFF" />
        <path d={svgPaths.p3187b580} fill="#A77AFF" />
        <path d={svgPaths.p258da3c0} fill="#A77AFF" />
      </svg>
    </div>
  );
}

function NavigationBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[72px] z-50 backdrop-blur-sm">
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={imgNavigationBar}
      />
      <div className="relative h-full px-4 sm:px-8 md:px-16 flex items-center justify-between">
        {/* Logo */}
        <div className="h-6 w-auto">
          <img
            alt="Palver"
            className="h-full w-auto object-contain"
            src={imgPalverLogo}
          />
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-0">
          <NavLink icon={<HomeIcon />} label="Home" />
          <NavLink icon={<LayoutGridIcon />} label="Painéis" />
          <NavLink
            icon={<AdjustmentsIcon />}
            label="Configurações"
          />
          <NavLink
            icon={<DeviceDesktopIcon />}
            label="Cortes na Mídia"
          />
        </div>

        {/* Share Button */}
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-[32px] flex items-center gap-2 transition-colors">
          <ShareIcon />
          <span className="hidden sm:inline">
            Compartilhar link público
          </span>
          <span className="sm:hidden">Compartilhar</span>
        </button>
      </div>
    </nav>
  );
}

function NavLink({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex items-center gap-2 px-5 py-2 text-muted-foreground hover:bg-white/5 rounded transition-colors">
      {icon}
      <span>{label}</span>
    </button>
  );
}

function CollectedDataCard() {
  return (
    <div className="bg-card rounded-card overflow-hidden">
      {/* Media Data Header */}
      <div className="bg-card px-4 sm:px-8 py-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white overflow-hidden flex-shrink-0">
            <img
              alt=""
              className="w-full h-full object-cover"
              src={imgSourceAvatar}
            />
          </div>

          <div className="flex-1 min-w-0 space-y-4">
            <h2 className="text-muted-foreground truncate">
              Portal G1
            </h2>

            {/* Descriptives - Wrap on mobile */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              {/* Icons */}
              <div className="flex items-center gap-2">
                <MediaIcon />
                <BrazilFlag />
                <StateFlag />
              </div>

              {/* Badges - Hidden on small screens */}
              <div className="hidden md:flex items-center gap-3 flex-wrap flex-1 min-w-0">
                <Badge text="Badge" />
                <Badge text="Badge" />
                <Badge text="Badge" />
                <Badge text="+2" />
              </div>

              {/* Tier and Reach - Stack on mobile */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 ml-auto">
                <div className="flex items-center gap-2">
                  <CrownIcon />
                  <span className="text-foreground">
                    Tier 1
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <RadarIcon />
                  <span className="text-foreground text-sm">
                    292M de usuários alcançados
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curated Data */}
      <div className="bg-card border-t border-border px-4 sm:px-8 py-4 space-y-4">
        {/* Origin Info - Stack on mobile */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs">
              Postado em: 13/10/2025 | 08:30
            </p>
            <p className="text-muted-foreground text-xs">
              Capturado em: 13/10/2025 | 08:41
            </p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <PaidIcon />
              <span className="text-foreground text-sm">
                R$ 361,05
              </span>
            </div>
            <div className="flex items-center gap-2">
              <VisibilityIcon />
              <span className="text-foreground text-sm">
                27 mil
              </span>
            </div>
          </div>
        </div>

        {/* Feelings & Tags - Wrap on mobile */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="bg-[rgba(130,201,30,0.15)] px-3 py-1 rounded-badge flex items-center gap-1">
            <ThumbUpIcon />
            <span className="text-[#a9e34b] uppercase text-xxs">
              Positivo
            </span>
          </div>
          <InfoCircleIcon />
          <div className="bg-[#3b5bdb] px-3 py-1 rounded-badge flex items-center gap-1">
            <ServerIcon />
            <span className="text-foreground uppercase text-xxs">
              curado por ia
            </span>
          </div>
          <div className="hidden sm:flex flex-wrap items-center gap-1">
            <KeywordBadge text="Defesa Civil" />
            <KeywordBadge text="Grupo Ultra" />
            <KeywordBadge text="Incêndio" />
            <KeywordBadge text="Prefeitura de Maceió" />
          </div>
        </div>

        {/* Abstract */}
        <div className="relative flex items-start gap-3">
          <div className="absolute left-[-10px] top-[-11px] flex flex-col items-center gap-1.5">
            <div className="bg-background border-[6px] border-background rounded-full p-1">
              <InfoCircleSmallIcon />
            </div>
            <div className="w-1 flex-1 bg-[#3b5bdb] min-h-[100px]" />
          </div>

          <div className="flex-1 bg-[rgba(76,110,245,0.15)] px-4 sm:px-6 py-4 rounded space-y-3">
            <p className="text-foreground">
              A Prefeitura de Maceió, através da Defesa Civil
              Municipal, acompanhará a perícia técnica para
              avaliar os danos e riscos após incêndio em uma
              distribuidora do grupo Ultra.
            </p>
            <p className="text-muted-foreground text-sm">
              Resumo do Artigo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleContent() {
  return (
    <article className="bg-card rounded-card overflow-hidden">
      {/* Article Image */}
      <div className="h-[200px] sm:h-[280px] relative rounded-t-card overflow-hidden">
        <img
          alt="Fábrica de descartáveis após incêndio em Maceió"
          className="absolute inset-0 w-full h-full object-cover"
          src={imgContentImage}
        />
      </div>

      {/* Article Text */}
      <div className="px-4 sm:px-8 lg:px-16 py-6 sm:py-8 space-y-6">
        {/* Source */}
        <header className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-white overflow-hidden">
            <img
              alt="Portal G1"
              className="w-full h-full object-cover"
              src={imgSourceAvatar}
            />
          </div>
          <p className="text-foreground text-sm">Portal G1</p>
        </header>

        {/* Title */}
        <h1 className="text-foreground text-xl font-bold">
          Corpo de Bombeiros faz nova vistoria na fábrica de
          descartáveis que incendiou em Maceió
        </h1>

        {/* Subtitle */}
        <p className="text-foreground text-lg font-light">
          Objetivo, segundo o órgão, é definir se existem
          possíveis pontos de risco. Defesa Civil Municipal
          também acompanha a perícia.
        </p>

        {/* Author */}
        <address className="not-italic">
          <p className="text-foreground text-sm">
            Escrito por Ana Pompeu
          </p>
        </address>

        {/* Article Body */}
        <div className="space-y-4 text-foreground">
          <p>
            O objetivo, segundo o órgão, é definir o que deve
            ser feito com os escombros e se existem possíveis
            pontos de risco.
          </p>
          <p>
            Bem como, se a empresa já contratou um profissional
            habilitado para fazer o plano de demolição.
          </p>
          <p>
            A Defesa Civil Municipal também acompanhará a
            perícia.
          </p>
          <p>
            Em nota oficial, o grupo Ultra expressou gratidão
            pelo apoio imediato e fundamental das equipes do
            Corpo de Bombeiros, que descreveu sua atuação como
            de "agilidade e profissionalismo".
          </p>
          <p>
            O grupo também estendeu agradecimentos ao Governo do
            Estado, à{" "}
            <span className="underline decoration-[#f59f00]">
              Prefeitura
            </span>{" "}
            de{" "}
            <span className="underline decoration-[#f59f00]">
              Maceió
            </span>
            , a empresas parceiras, colaboradores e toda a
            comunidade.
          </p>
          <h3 className="pt-2 text-lg font-semibold">
            Combate ao fogo e solidariedade
          </h3>
          <p>
            O fogo, que segundo informações teria se concentrado
            em uma área de armazenamento de bobinas de
            polietileno, na distribuidora do grupo, exigiu a
            mobilização de um grande efetivo do Corpo de
            Bombeiros, que atuou por mais de 12 horas
            ininterruptas.
          </p>
          <p>
            A Federação das Indústrias (FIEA) chegou a
            recomendar a liberação de trabalhadores em um raio
            de 1 km da área, devido ao risco de inalação de
            fumaça e possíveis explosões.
          </p>
          <p>
            Para o grupo, a solidariedade da comunidade e de
            parceiros foi crucial, com empresas vizinhas
            auxiliando no combate às chamas, inclusive com o
            envio de carros-pipa, conforme relatos.
          </p>
          <p>
            As causas exatas do incêndio estão sendo apuradas
            por perícia técnica.
          </p>
          <p>
            O local permanece isolado para os trabalhos de
            rescaldo e avaliação estrutural.
          </p>
        </div>
      </div>
    </article>
  );
}

function BottomActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[72px] backdrop-blur-sm z-40">
      <div className="h-full px-4 sm:px-8 md:px-16 flex items-center justify-end gap-4 sm:gap-6">
        <ActionButton icon={<OpenInNewIcon />} />
        <ActionButton icon={<FileJsonIcon />} />
        <ActionButton icon={<DataUsageIcon />} />
      </div>
    </div>
  );
}

function ActionButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="bg-primary hover:bg-primary/90 p-2 rounded transition-colors">
      {icon}
    </button>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <div className="border border-muted-foreground px-3 py-0.5 rounded-badge">
      <span className="text-muted-foreground uppercase text-xxs">
        {text}
      </span>
    </div>
  );
}

function KeywordBadge({ text }: { text: string }) {
  return (
    <div className="px-3 py-0.5 rounded-badge">
      <span className="text-[#91a7ff] uppercase text-sm">
        {text}
      </span>
    </div>
  );
}

// Icons
function HomeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path
        clipRule="evenodd"
        d={svgPaths.p360ba400}
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

function LayoutGridIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path
        clipRule="evenodd"
        d={svgPaths.p9797d00}
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

function AdjustmentsIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path
        clipRule="evenodd"
        d={svgPaths.p25914800}
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

function DeviceDesktopIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path
        clipRule="evenodd"
        d={svgPaths.p28f00900}
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path
        clipRule="evenodd"
        d={svgPaths.p21eb5400}
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
}

function MediaIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <g clipPath="url(#clip0_1_5760)">
        <circle cx="10" cy="10" fill="#A56300" r="10" />
        <g>
          <mask
            height="20"
            id="mask0_1_5760"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="2"
            y="2"
          >
            <rect
              fill="#D9D9D9"
              height="20"
              width="20"
              x="2"
              y="2"
            />
          </mask>
          <g mask="url(#mask0_1_5760)">
            <path d={svgPaths.p4283b00} fill="white" />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_5760">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
}

function BrazilFlag() {
  return (
    <div className="w-6 h-[18px] bg-[#009933] rounded-sm overflow-hidden relative">
      <svg
        className="block w-full h-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 15"
      >
        <g>
          <path
            clipRule="evenodd"
            d="M0 0V15H20V0H0Z"
            fill="#009933"
            fillRule="evenodd"
          />
          <mask
            height="15"
            id="mask0_1_5716"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
            width="20"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d="M0 0V15H20V0H0Z"
              fill="white"
              fillRule="evenodd"
            />
          </mask>
          <g mask="url(#mask0_1_5716)">
            <g>
              <g filter="url(#filter0_d_1_5716)">
                <path
                  clipRule="evenodd"
                  d={svgPaths.p2ae77900}
                  fill="#FFD221"
                  fillRule="evenodd"
                />
              </g>
              <path
                clipRule="evenodd"
                d={svgPaths.pce96c00}
                fill="#2E42A5"
                fillRule="evenodd"
              />
              <mask
                height="7"
                id="mask1_1_5716"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "luminance" }}
                width="8"
                x="6"
                y="4"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.pce96c00}
                  fill="white"
                  fillRule="evenodd"
                />
              </mask>
              <g mask="url(#mask1_1_5716)">
                <path
                  clipRule="evenodd"
                  d={svgPaths.p3161c180}
                  fill="#F7FCFF"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d={svgPaths.p25260400}
                  fill="#F7FCFF"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d={svgPaths.p2316e800}
                  fill="#F7FCFF"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d={svgPaths.p17e83600}
                  fill="#F7FCFF"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d={svgPaths.p2952a470}
                  fill="#F7FCFF"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d={svgPaths.p2f2de1f0}
                  fill="#F7FCFF"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d={svgPaths.pebd2b00}
                  fill="#F7FCFF"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d={svgPaths.p213be880}
                  fill="#F7FCFF"
                  fillRule="evenodd"
                />
                <path d={svgPaths.pe2f5d00} fill="#F7FCFF" />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="10.292"
            id="filter0_d_1_5716"
            width="15.1998"
            x="2.38058"
            y="2.31503"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0313726 0 0 0 0 0.368627 0 0 0 0 0 0 0 0 0.28 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              mode="normal"
              result="effect1_dropShadow_1_5716"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_1_5716"
              mode="normal"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function StateFlag() {
  return (
    <svg
      className="w-6 h-[18px]"
      fill="none"
      viewBox="0 0 24 18"
    >
      <g>
        <g clipPath="url(#clip0_1_5692)">
          <g>
            <path d="M24 0H0V1.25493H24V0Z" fill="#212125" />
            <path d={svgPaths.p37e08b00} fill="#212125" />
            <path d={svgPaths.p30491400} fill="#212125" />
            <path d={svgPaths.p10f6ce80} fill="#212125" />
            <path d={svgPaths.p175df980} fill="#212125" />
            <path d={svgPaths.p281f3e80} fill="#212125" />
            <path d={svgPaths.p3e940f20} fill="#212125" />
            <path d={svgPaths.p2bc49380} fill="white" />
            <path d={svgPaths.p22c6ac80} fill="white" />
            <path d={svgPaths.p25256700} fill="white" />
            <path d={svgPaths.p16f07380} fill="white" />
            <path d={svgPaths.p17b90000} fill="white" />
            <path d={svgPaths.p2f6c4c00} fill="white" />
            <path d={svgPaths.p305b0400} fill="white" />
          </g>
          <path d="M9.12 0H0V6.48H9.12V0Z" fill="#C40008" />
          <path d={svgPaths.p2da6c500} fill="white" />
          <path d={svgPaths.pe69b900} fill="#294292" />
          <path d={svgPaths.p96e2940} fill="#FFF200" />
          <path d={svgPaths.p12e42b80} fill="#FFF200" />
          <path d={svgPaths.p2bc27700} fill="#FFF200" />
          <path d={svgPaths.p10489d00} fill="#FFF200" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_5692">
          <rect fill="white" height="18" rx="2" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <mask
        height="20"
        id="mask0_1_5806"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="20"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="20" width="20" />
      </mask>
      <g mask="url(#mask0_1_5806)">
        <path d={svgPaths.p191d2400} fill="white" />
      </g>
    </svg>
  );
}

function RadarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <mask
        height="20"
        id="mask0_1_5776"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="20"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="20" width="20" />
      </mask>
      <g mask="url(#mask0_1_5776)">
        <path d={svgPaths.p22e18e70} fill="white" />
      </g>
    </svg>
  );
}

function PaidIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <mask
        height="20"
        id="mask0_1_5686"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="20"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="20" width="20" />
      </mask>
      <g mask="url(#mask0_1_5686)">
        <path d={svgPaths.p1c92a600} fill="white" />
      </g>
    </svg>
  );
}

function VisibilityIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <mask
        height="20"
        id="mask0_1_5735"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="20"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="20" width="20" />
      </mask>
      <g mask="url(#mask0_1_5735)">
        <path d={svgPaths.p3d94f9f0} fill="white" />
      </g>
    </svg>
  );
}

function ThumbUpIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path
        clipRule="evenodd"
        d={svgPaths.p7613400}
        fill="#A9E34B"
        fillRule="evenodd"
      />
    </svg>
  );
}

function InfoCircleIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path
        clipRule="evenodd"
        d={svgPaths.p14a4f00}
        fill="#91A7FF"
        fillRule="evenodd"
      />
    </svg>
  );
}

function InfoCircleSmallIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path
        clipRule="evenodd"
        d={svgPaths.p38448080}
        fill="#3B5BDB"
        fillRule="evenodd"
      />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path
        clipRule="evenodd"
        d={svgPaths.p1fcd6c00}
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
}

function OpenInNewIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <mask
        height="24"
        id="mask0_1_5663"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="24"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="24" width="24" />
      </mask>
      <g mask="url(#mask0_1_5663)">
        <path d={svgPaths.p45452c0} fill="currentColor" />
      </g>
    </svg>
  );
}

function FileJsonIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <mask
        height="24"
        id="mask0_1_5659"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="24"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="24" width="24" />
      </mask>
      <g mask="url(#mask0_1_5659)">
        <path d={svgPaths.p1e678900} fill="currentColor" />
      </g>
    </svg>
  );
}

function DataUsageIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <mask
        height="24"
        id="mask0_1_5653"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="24"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="24" width="24" />
      </mask>
      <g mask="url(#mask0_1_5653)">
        <path d={svgPaths.p2e601680} fill="currentColor" />
      </g>
    </svg>
  );
}