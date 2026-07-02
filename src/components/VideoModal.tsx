import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  /**
   * Start playback at this offset (seconds) — used by search results that
   * deep-link to the moment a topic is discussed. Defaults to 0 (from the start).
   */
  startSeconds?: number;
}

const VideoModal = ({ isOpen, onClose, videoUrl, startSeconds = 0 }: VideoModalProps) => {
  const getEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)?.[1];
    if (!videoId) return url;
    const start = startSeconds > 0 ? `&start=${Math.floor(startSeconds)}` : "";
    return `https://www.youtube.com/embed/${videoId}?autoplay=1${start}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={getEmbedUrl(videoUrl)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;