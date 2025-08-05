import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const webhookUrl = "https://autowebhook.chathook.com.br/webhook/chat01";

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, digite uma mensagem",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          message: message,
          timestamp: new Date().toISOString(),
          source: "website_contact",
          page: window.location.pathname,
          userAgent: navigator.userAgent,
        }),
      });

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve via WhatsApp.",
      });

      setMessage("");
      setIsOpen(false);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve via WhatsApp.",
      });
      setMessage("");
      setIsOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border-4 border-white"
          size="icon"
        >
          {isOpen ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <MessageCircle className="w-8 h-8 text-white animate-pulse" />
          )}
        </Button>

        {/* Pulsing Ring */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full border-4 border-green-500 animate-ping opacity-20"></div>
        )}
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 sm:w-96 z-50 shadow-2xl border-2 border-border bg-gradient-card">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Fale conosco</h3>
                <p className="text-white/80 text-sm">Resposta em até 5 minutos</p>
              </div>
              <div className="ml-auto">
                <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-4">
              <div className="bg-muted/50 p-3 rounded-lg mb-4">
                <p className="text-sm text-muted-foreground">
                  👋 Olá! Como podemos ajudar você com o Chathook?
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="w-full p-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  rows={3}
                  disabled={isLoading}
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  disabled={isLoading}
                  className="flex-1"
                >
                  Fechar
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading || !message.trim()}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Info */}
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                Powered by <span className="font-semibold text-primary">Chathook</span>
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WhatsAppButton;