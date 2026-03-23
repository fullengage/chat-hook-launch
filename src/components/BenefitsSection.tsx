import { Clock, Users, MessageSquare, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BenefitsSection = () => {
  const navigate = useNavigate();
  const benefits = [
    // ... items remain same
  ];
  // ... rest of logic
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate("/teste-gratis")}
                className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold shadow-button hover:shadow-card-hover transform hover:scale-105 transition-all duration-300"
              >
                Começar teste grátis
              </button>
              <button 
                onClick={() => navigate("/teste-gratis")}
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Falar com especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;