import { Heart } from "lucide-react";

export const Navbar = () => (
  <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-3">
    <div className="flex items-center gap-2 glass-rose rounded-full px-4 py-2">
      <Heart className="h-5 w-5 fill-rosy text-rosy heart-beat" />
      <span className="font-script text-2xl text-rosy-deep">P &amp; M</span>
    </div>
    <div className="hidden md:flex items-center gap-1 glass-rose rounded-full px-2 py-1.5">
      {["Home", "Her Eyes", "Memories", "Letter", "Promise"].map((l) => (
        <a
          key={l}
          href={`#${l.toLowerCase().replace(" ", "-")}`}
          className="px-3 py-1.5 text-sm font-medium text-rosy-deep/80 hover:text-rosy-deep transition rounded-full hover:bg-white/40"
        >
          {l}
        </a>
      ))}
    </div>
    <a
      href="#letter"
      className="glass-rose-strong rounded-full px-4 py-2 text-sm font-semibold text-rosy-deep flex items-center gap-1.5"
    >
      <Heart className="h-4 w-4 fill-rosy text-rosy" />
      For Mumu
    </a>
  </nav>
);
