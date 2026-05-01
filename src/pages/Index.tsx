import { useEffect, useState } from "react";
import { Lightbulb, Sun, Moon, Settings } from "lucide-react";
import Wordle from "@/components/Wordle";
import HelpDialog from "@/components/HelpDialog";
import SettingsDialog from "@/components/SettingsDialog";

const COLORBLIND_KEY = "wuhdul:colorblind";

function TopControls() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });
  const [helpOpen, setHelpOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [colorblind, setColorblind] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(COLORBLIND_KEY) === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    document.documentElement.classList.toggle("colorblind", colorblind);
    if (typeof window !== "undefined") {
      localStorage.setItem(COLORBLIND_KEY, String(colorblind));
    }
  }, [colorblind]);

  return (
    <>
      <div className="fixed top-3 right-4 z-50 flex items-center gap-3">
        <button
          onClick={() => setHelpOpen(true)}
          aria-label="How to play"
          title="How to play"
          className="text-muted-foreground hover:text-foreground transition-colors p-1"
        >
          <Lightbulb className="h-5 w-5" />
        </button>
        <button
          onClick={() => setSettingsOpen(true)}
          aria-label="Settings"
          title="Settings"
          className="text-muted-foreground hover:text-foreground transition-colors p-1"
        >
          <Settings className="h-5 w-5" />
        </button>
        <button
          onClick={() => setDark((d) => !d)}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          title={dark ? "Light mode" : "Dark mode"}
          className="text-muted-foreground hover:text-foreground transition-colors p-1"
        >
          {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
      <HelpDialog open={helpOpen} onOpenChange={setHelpOpen} />
      <SettingsDialog
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        colorblind={colorblind}
        onColorblindChange={setColorblind}
      />
    </>
  );
}

const Index = () => {
  return (
    <>
      <TopControls />
      <Wordle />
    </>
  );
};

export default Index;