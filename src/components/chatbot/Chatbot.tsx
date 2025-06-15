
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X } from "lucide-react";
import { ChatMessage, Message } from "./ChatMessage";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hello! I am Bharat, your AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = getBotResponse(input);
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setInput("");
  };

  const getBotResponse = (userInput: string): Message => {
    const lowerCaseInput = userInput.toLowerCase();
    if (lowerCaseInput.includes("hello") || lowerCaseInput.includes("hi")) {
        return { sender: "bot", text: "Hello there! How can I assist you with government services?" };
    }
    if (lowerCaseInput.includes("aadhaar")) {
        return { sender: "bot", text: "You can find information about Aadhaar card services under 'Popular Services'." };
    }
    if (lowerCaseInput.includes("passport")) {
        return { sender: "bot", text: "Looking for passport services? Check the 'Popular Services' section for a direct link." };
    }
    if (lowerCaseInput.includes("thank")) {
        return { sender: "bot", text: "You're welcome! Is there anything else I can help with?" };
    }
    return { sender: "bot", text: "I'm still learning, but you can try asking about popular services like Aadhaar or Passports. For specific queries, please use the search bar on the main page." };
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[100]">
        <Button onClick={() => setIsOpen(!isOpen)} size="icon" className="rounded-full h-16 w-16 shadow-lg">
          {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
          <span className="sr-only">Toggle Chat</span>
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-4 z-[100] animate-in slide-in-from-bottom-10 fade-in-50 duration-300">
          <Card className="w-80 h-[500px] flex flex-col shadow-xl sm:w-96">
            <CardHeader>
              <CardTitle>Chat with Bharat</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-0">
                <ScrollArea className="h-full px-4" ref={scrollAreaRef}>
                    <div className="py-4">
                      {messages.map((msg, index) => (
                      <ChatMessage key={index} message={msg} />
                      ))}
                    </div>
                </ScrollArea>
            </CardContent>
            <CardFooter>
              <form
                className="flex w-full items-center space-x-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                />
                <Button type="submit" size="icon">
                  <Send />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;
