
import { cn } from "@/lib/utils";

export type Message = {
  text: string;
  sender: "user" | "bot";
};

export const ChatMessage = ({ message }: { message: Message }) => {
  const isBot = message.sender === "bot";
  return (
    <div
      className={cn(
        "flex items-end mb-4",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "px-4 py-2 rounded-lg max-w-xs lg:max-w-md shadow",
          isBot
            ? "bg-muted text-muted-foreground rounded-bl-none"
            : "bg-primary text-primary-foreground rounded-br-none"
        )}
      >
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );
};
