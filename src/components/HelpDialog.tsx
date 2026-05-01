import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Status = "empty" | "correct" | "present" | "absent";

interface ExampleProps {
  word: string;
  highlightIndex: number;
  status: Status;
  note: React.ReactNode;
  delay: number;
}

function ExampleRow({ word, highlightIndex, status, note, delay }: ExampleProps) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRevealed(false);
    const t = setTimeout(() => setRevealed(true), delay);
    return () => clearTimeout(t);
  }, [delay, word, highlightIndex, status]);

  const baseTile =
    "w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] flex items-center justify-center text-base font-bold uppercase border";

  const statusClass: Record<Status, string> = {
    correct: "bg-wordle-correct text-wordle-correct-foreground border-wordle-correct",
    present: "bg-wordle-present text-wordle-present-foreground border-wordle-present",
    absent: "bg-wordle-absent text-wordle-absent-foreground border-wordle-absent",
    empty: "border-wordle-filled-border text-foreground",
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-[4px]">
        {word.split("").map((letter, i) => {
          const isTarget = i === highlightIndex;
          const cls = isTarget && revealed ? statusClass[status] : statusClass.empty;
          const flip =
            isTarget
              ? `transition-transform duration-500 ${revealed ? "[transform:rotateX(0deg)]" : "[transform:rotateX(-90deg)]"}`
              : "";
          return (
            <div
              key={i}
              className={`${baseTile} ${cls} ${flip}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {letter}
            </div>
          );
        })}
      </div>
      <p className="text-sm leading-snug">{note}</p>
    </div>
  );
}

interface HelpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function HelpDialog({ open, onOpenChange }: HelpDialogProps) {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!open) return;
    setCycle(0);
    const interval = setInterval(() => setCycle((c) => c + 1), 4000);
    return () => clearInterval(interval);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            How To Play
          </DialogTitle>
          <p className="text-sm text-muted-foreground pt-1">
            Guess the Word in 6 tries.
          </p>
        </DialogHeader>

        <div className="space-y-3 text-sm">
          <ul className="list-disc pl-5 space-y-1">
            <li>Each guess must be a valid 5-letter word.</li>
            <li>
              The color of the tiles will change to show how close your guess was
              to the word.
            </li>
          </ul>

          <div className="border-t border-border pt-4">
            <p className="font-bold mb-3 uppercase text-xs tracking-wider">
              Examples
            </p>

            <div className="space-y-5" key={cycle}>
              <ExampleRow
                word="WORDY"
                highlightIndex={0}
                status="correct"
                delay={300}
                note={
                  <>
                    <span className="font-bold">W</span> is in the word and in the
                    correct spot.
                  </>
                }
              />
              <ExampleRow
                word="LIGHT"
                highlightIndex={1}
                status="present"
                delay={900}
                note={
                  <>
                    <span className="font-bold">I</span> is in the word but in the
                    wrong spot.
                  </>
                }
              />
              <ExampleRow
                word="ROGUE"
                highlightIndex={3}
                status="absent"
                delay={1500}
                note={
                  <>
                    <span className="font-bold">U</span> is not in the word in any
                    spot.
                  </>
                }
              />
            </div>
          </div>

          <p className="border-t border-border pt-3 text-xs text-muted-foreground">
            A new puzzle is available each game. Good luck!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}