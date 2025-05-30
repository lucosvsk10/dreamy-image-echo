
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-navy-dark border-t border-gold/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/4b269729-8d34-4824-8425-cc8c319161a8.png" 
                alt="WS Gestão Contábil Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-white/70 max-w-xs">
              Soluções contábeis completas para o sucesso do seu negócio. 
              Conte com nossa expertise para cuidar da saúde financeira da sua empresa.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gold">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/70">Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-white/70">(11) 3000-0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-white/70">contato@wsgestaocontabil.com.br</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gold">Horário de Atendimento</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Segunda a Sexta</p>
                  <p className="text-white/70">08:00 às 18:00</p>
                </div>
              </li>
            </ul>
            <div className="pt-4">
              <a 
                href="#contato" 
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gold hover:bg-gold-light text-navy-dark font-medium transition-colors duration-300"
              >
                Solicite um Orçamento
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-12 pt-6 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} WS Gestão Contábil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
