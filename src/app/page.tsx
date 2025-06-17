import { Button } from "@/components/ui/button";
import { DynamicIcon, iconNames } from "lucide-react/dynamic";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-1">
      {Array(10)
        .fill("0")
        .map((item, i) => (
          <Button key={i}>Home</Button>
        ))}
    </div>
  );
}
