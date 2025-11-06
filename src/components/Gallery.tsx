import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import logo from "@/assets/nr-media-logo.jpeg";

export interface VideoItem {
  id: string;
  title: string;
  youtubeUrl: string;
}

interface GalleryProps {
  videos?: VideoItem[];
}

// ✅ YouTube ID extractor (supports all formats)
const extractYouTubeId = (url: string): string | null => {
  const regExp =
    /^.*(?:youtu\.be\/|v\/|shorts\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[1].length === 11 ? match[1] : null;
};

const Gallery = ({
  videos = [
    {
      id: "1",
      title: "NR Media - Advertisment",
      youtubeUrl: "https://youtu.be/pUkv9qTYCoM?si=ac_vbVUtVfKewBye",
    },
    {
      id: "2",
      title: "Daily Updates",
      youtubeUrl: "hhttps://youtu.be/Y8P6dQfpY6A?si=n9fC5Y9J4sL8iL_t",
    },
    {
      id: "3",
      title: "Politics",
      youtubeUrl: "https://youtu.be/CRwNDs3kKq0?si=1tKzWr61P70Ws2l6",
    },
    {
      id: "4", 
        title: "Breaking News",   
        youtubeUrl: "https://youtu.be/EF366pKrDNY?si=yk2T0XX5X5uj6aOG",   
    },
  ],
}: GalleryProps) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <>
      <section id="gallery" className="relative w-full py-24 px-4 bg-gradient-to-br from-background via-background to-secondary/30 overflow-hidden -mt-20">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-14 animate-fade-in">
            {/* <div className="flex justify-center mb-6">
              <img
                src={logo}
                alt="NR Media Logo"
                className="h-20 md:h-24 object-contain animate-scale-in"
              />
            </div> */}
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                Video Gallery
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our portfolio of digital marketing excellence and success stories
            </p>
          </div>

          {/* Carousel */}
          <div className="relative group/carousel">
            {/* Prev Button */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-primary text-foreground hover:text-primary-foreground rounded-xl p-3 shadow-lg transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hover:scale-105 -translate-x-4 group-hover/carousel:translate-x-2 border border-border hover:border-primary"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>

            {/* Next Button */}
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-primary text-foreground hover:text-primary-foreground rounded-xl p-3 shadow-lg transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hover:scale-105 translate-x-4 group-hover/carousel:-translate-x-2 border border-border hover:border-primary"
              aria-label="Next video"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
            </button>

            {/* Embla Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-8">
                {videos.map((video, index) => {
                  const videoId = extractYouTubeId(video.youtubeUrl);
                  const thumbnailUrl = videoId
                    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                    : "/placeholder.svg";

                  return (
                    <div
                      key={video.id}
                      className="flex-[0_0_90%] sm:flex-[0_0_65%] lg:flex-[0_0_45%] xl:flex-[0_0_35%] min-w-0 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div
                        className="group/card relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border hover:border-primary/50"
                        onClick={() => setSelectedVideo(video)}
                        style={{
                          transform:
                            hoveredIndex === index ? "translateY(-4px)" : "none",
                        }}
                      >
                        {/* Thumbnail */}
                        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-muted to-secondary">
                          <img
                            src={thumbnailUrl}
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-75 transition-opacity duration-300" />

                          {/* Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform transition-all duration-300 group-hover/card:scale-110 shadow-xl">
                                <Play
                                  className="w-7 h-7 text-primary-foreground ml-0.5"
                                  fill="currentColor"
                                />
                              </div>
                              <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-primary opacity-0 group-hover/card:opacity-100 scale-100 group-hover/card:scale-125 transition-all duration-300" />
                            </div>
                          </div>
                        </div>

                        {/* Title */}
                        <div className="relative p-5 bg-card border-t border-border">
                          <div className="absolute top-0 left-0 w-0 group-hover/card:w-full h-0.5 bg-primary transition-all duration-300" />
                          <h3 className="font-semibold text-base text-card-foreground group-hover/card:text-primary transition-colors duration-300 line-clamp-2 leading-snug">
                            {video.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className="w-2 h-2 rounded-full bg-border hover:bg-primary transition-all duration-300 hover:scale-125"
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in p-4"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          </div>

          {/* Close Button */}
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/10 hover:bg-primary text-white hover:text-primary-foreground rounded-lg p-2.5 backdrop-blur-md transition-all duration-300 hover:scale-105 z-10 border border-white/20 hover:border-primary"
            aria-label="Close video"
          >
            <X className="w-6 h-6" strokeWidth={2} />
          </button>

          {/* Video */}
          <div
            className="relative w-full max-w-6xl aspect-video animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {extractYouTubeId(selectedVideo.youtubeUrl) && (
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeId(
                  selectedVideo.youtubeUrl
                )}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl shadow-2xl border-2 border-primary/30"
              />
            )}
          </div>

          {/* Title Card */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-2xl w-full px-4">
            <div className="bg-card/95 backdrop-blur-xl rounded-xl p-6 border border-primary/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                {selectedVideo.title}
              </h3>
              <div className="flex items-center gap-2 opacity-70">
                <img src={logo} alt="NR Media" className="h-6 object-contain" />
                <span className="text-xs text-muted-foreground font-medium">
                  YOUR SUCCESS IS OUR GOAL
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
