import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919042551631"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-200"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} className="fill-primary-foreground stroke-primary-foreground" />
  </a>
);

export default WhatsAppButton;
