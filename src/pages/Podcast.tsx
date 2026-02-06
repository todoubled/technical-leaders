import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Extract video ID from YouTube URL
const getYouTubeId = (url: string): string => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return match ? match[1] : "";
};

// Video data with guest information
const videoData = [
  {
    url: "https://youtu.be/RtoWLOzaplU",
    name: "Brian Childress",
    title: "Fractional CTO",
    linkedin: "https://linkedin.com/in/brian-childress",
  },
  {
    url: "https://youtu.be/TLUN-0PwtuY",
    name: "Mariusz Wyrozębski",
    title: "Fractional CTO",
    linkedin: "https://linkedin.com/in/mariuszwyrozebski",
  },
  {
    url: "https://youtu.be/nftpECkmcKE",
    name: "Kurt Dusek",
    title: "Fractional CTO"
  },
  {
    url: "https://youtu.be/Rw_F4R7Nx5o",
    name: "Adarash Mishra",
    title: "Fractional CTO",
    linkedin: "https://linkedin.com/in/adarashmishra",
  },
  {
    url: "https://youtu.be/zU3JlIf_-xs",
    name: "Stephen Martin",
    title: "Fractional CTO",
    linkedin: "https://linkedin.com/in/gothamgeek",
  },
  {
    url: "https://youtu.be/DUUK3mqCzYI",
    name: "Eduard Drusa",
    title: "RTOS/Embedded Systems Consultant",
    linkedin: "https://www.linkedin.com/in/eduard-drusa/",
  },
  {
    url: "https://youtu.be/0Nl8xLzzw10",
    name: "Anna Morris",
    title: "Senior Engineering Manager, Peloton Interactive",
    linkedin: "https://www.linkedin.com/in/anna-morris-04765296/",
  },
  {
    url: "https://youtu.be/JXJyPX19AjA",
    name: "Bill Boulden",
    title: "Fractional CTO",
    linkedin: "https://www.linkedin.com/in/billboulden/",
  },
  {
    url: "https://youtu.be/1mEEdSkMRrw",
    name: "Clive Foley",
    title: "Fractional CTO",
    linkedin: "https://www.linkedin.com/in/clivefoley/",
  },
  {
    url: "https://youtu.be/-VWDkdxGtcc",
    name: "Alain Leroy",
    title: "Entrepreneur, Investor, and Consultant",
    linkedin: "https://www.linkedin.com/in/aleroy/",
  },
];

const videos = videoData.map((video) => ({
  id: getYouTubeId(video.url),
  url: video.url,
  name: video.name,
  title: video.title,
  linkedin: video.linkedin,
  thumbnail: `https://img.youtube.com/vi/${getYouTubeId(video.url)}/maxresdefault.jpg`,
}));

const Podcast = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Podcast - Tech Leaders"
        description="Watch conversations with technical leaders about AI, leadership, and building consulting businesses. Get insights from CTOs, VPs of Engineering, and tech entrepreneurs."
        keywords={[
          "technical leadership podcast",
          "tech leaders",
          "CTO interviews",
          "AI conversations",
          "engineering leadership",
          "tech entrepreneurship",
        ]}
        image="https://technical-leaders.com/ai-in-ar.png"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Tech Leaders
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mt-2">
              Podcast
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conversations with leaders in tech about AI, leadership, and building
            successful consulting businesses.
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="flex flex-col">
                <button
                  onClick={() => setSelectedVideo(video.id)}
                  className="group relative aspect-video rounded-xl overflow-hidden bg-slate-800 hover:ring-2 hover:ring-primary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <img
                    src={video.thumbnail}
                    alt={`${video.name} - ${video.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to hqdefault if maxresdefault doesn't exist
                      const target = e.target as HTMLImageElement;
                      if (target.src.includes("maxresdefault")) {
                        target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xl">
                      <Play className="w-7 h-7 text-slate-900 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </button>
                <div className="mt-4">
                  <a
                    href={video.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {video.name}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black border-none overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>Video Player</DialogTitle>
          </VisuallyHidden>
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
            aria-label="Close video"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          {selectedVideo && (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Podcast;
