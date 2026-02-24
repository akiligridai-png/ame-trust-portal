import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoSectionProps {
  productName: string;
}

const VideoSection = ({ productName }: VideoSectionProps) => {
  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-black text-primary mb-3">
            Learn More About <span className="text-gold">{productName}</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            This video can be shared across AMETrust's website and all social media channels.
          </p>

          {/* Video Placeholder */}
          <div className="relative aspect-video rounded-xl bg-primary/5 border-2 border-dashed border-border flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-gold ml-1" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Video Coming Soon
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                {productName} overview video
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
