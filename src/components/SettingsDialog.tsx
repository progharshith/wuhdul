import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  colorblind: boolean;
  onColorblindChange: (value: boolean) => void;
}

export default function SettingsDialog({
  open,
  onOpenChange,
  colorblind,
  onColorblindChange,
}: SettingsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            Settings
          </DialogTitle>
        </DialogHeader>

        <div className="divide-y divide-border">
          <div className="flex items-center justify-between py-4">
            <div className="pr-4">
              <p className="font-semibold text-sm">Color Blind Mode</p>
              <p className="text-xs text-muted-foreground">
                High contrast colors
              </p>
            </div>
            <Switch
              checked={colorblind}
              onCheckedChange={onColorblindChange}
              aria-label="Toggle color blind mode"
            />
          </div>

          {colorblind && (
            <div className="py-4 space-y-2">
              <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground">
                Preview
              </p>
              <div className="flex gap-[4px]">
                <div className="w-10 h-10 flex items-center justify-center text-sm font-bold uppercase bg-wordle-correct text-wordle-correct-foreground">
                  A
                </div>
                <div className="w-10 h-10 flex items-center justify-center text-sm font-bold uppercase bg-wordle-present text-wordle-present-foreground">
                  B
                </div>
                <div className="w-10 h-10 flex items-center justify-center text-sm font-bold uppercase bg-wordle-absent text-wordle-absent-foreground">
                  C
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}