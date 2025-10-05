import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Users, TrendingUp, Gift, Star, CreditCard, Share2, Zap, Target, Sparkles, ArrowRight, Trophy } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [hoveredPartner, setHoveredPartner] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const categories = ['Tous', 'Restauration', 'Beauté', 'Sport', 'Automobile', 'Bien-être', 'Mode'];

  const partners = [
    { name: "Restaurant Le Gourmet", category: "Restauration", discount: "-10%", rating: 4.8, customers: 250 },
    { name: "Coiffure Élégance", category: "Beauté", discount: "-10%", rating: 4.9, customers: 180 },
    { name: "Fitness Premium", category: "Sport", discount: "-10%", rating: 4.7, customers: 320 },
    { name: "Garage Excellence", category: "Automobile", discount: "-10%", rating: 4.6, customers: 150 },
    { name: "Spa Prestige", category: "Bien-être", discount: "-10%", rating: 4.9, customers: 200 },
    { name: "Mode & Style", category: "Mode", discount: "-10%", rating: 4.8, customers: 280 },
  ];

  const filteredPartners = selectedCategory === 'Tous' ? partners : partners.filter(p => p.category === selectedCategory);

  const stats = [
    { icon: Users, value: "100+", label: "Commerces Partenaires" },
    { icon: TrendingUp, value: "500€", label: "Économie Moyenne/An" },
    { icon: Trophy, value: "5 ans", label: "D'Excellence" },
    { icon: Sparkles, value: "10%", label: "De Réduction" }
  ];

  const steps = [
    { number: 1, title: "Crée ta carte digitale", description: "Inscription ultra-rapide en 2 minutes chrono", icon: CreditCard },
    { number: 2, title: "Active ton profil VIP", description: "Personnalise ton espace membre premium", icon: Target },
    { number: 3, title: "Économise immédiatement", description: "Flash ta carte et profite de -10% à l'instant", icon: Zap }
  ];

  const benefits = [
    { icon: Zap, title: "Activation instantanée", description: "Profite de tes avantages dès maintenant" },
    { icon: Gift, title: "Offres flash exclusives", description: "Réductions supplémentaires en avant-première" },
    { icon: Trophy, title: "Statut Elite", description: "Rejoins la communauté des membres privilégiés" },
    { icon: TrendingUp, title: "Économies maximales", description: "Jusqu'à 500€ d'économies par an garanties" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-2xl shadow-xl shadow-red-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-xl shadow-red-500/50">
                <span className="text-white font-black text-xl">AI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight">ALL IN Connect</span>
                <span className="text-xs text-red-500 tracking-widest font-bold">CLUB10 • ELITE</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="#accueil" className="text-gray-300 hover:text-red-500 transition-all duration-300 text-sm font-bold tracking-wide uppercase">Accueil</a>
              <a href="#club10" className="text-gray-300 hover:text-red-500 transition-all duration-300 text-sm font-bold tracking-wide uppercase">Club10</a>
              <a href="#partenaires" className="text-gray-300 hover:text-red-500 transition-all duration-300 text-sm font-bold tracking-wide uppercase">Partenaires</a>
              <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-7 py-3 rounded-xl hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 font-bold text-sm tracking-wide uppercase">
                Connexion
              </button>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm border-2 border-red-500/50 text-red-400 px-6 py-3 rounded-full text-sm font-bold shadow-xl shadow-red-500/20">
                <Sparkles size={20} />
                ÉCONOMISE JUSQUA 500€ PAR AN
              </div>

              <h1 className="text-6xl lg:text-8xl font-black leading-tight tracking-tight">
                <span className="text-white">LE RÉSEAU</span>
                <br />
                <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent">QUI DÉCHIRE</span>
              </h1>

              <p className="text-2xl text-gray-300 leading-relaxed font-medium">
                Rejoins le <span className="text-red-500 font-bold">CLUB10</span> et profite de <span className="text-red-500 font-bold">-10%</span> chez + de <span className="text-red-500 font-bold">100 commerces</span> partenaires !
              </p>

              <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-10 py-5 rounded-xl font-black text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all uppercase flex items-center gap-3">
                <Zap size={24} />
                Crée ta carte maintenant
                <ArrowRight size={24} />
              </button>

              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-xl p-4">
                  <div className="text-3xl font-black text-red-500">100+</div>
                  <div className="text-xs text-gray-400 font-semibold uppercase">Partenaires</div>
                </div>
                <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-xl p-4">
                  <div className="text-3xl font-black text-red-500">-10%</div>
                  <div className="text-xs text-gray-400 font-semibold uppercase">Garanti</div>
                </div>
                <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-xl p-4">
                  <div className="text-3xl font-black text-red-500">500€</div>
                  <div className="text-xs text-gray-400 font-semibold uppercase">Économies/an</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-8 border-2 border-red-500/50 shadow-2xl">
                <div className="absolute top-4 right-4">
                  <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">ACTIF</div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl"></div>
                  <div>
                    <div className="font-black text-xl text-white">Jean Dupont</div>
                    <div className="text-sm text-red-400 font-bold">Membre VIP Elite</div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-red-500/30">
                  <div className="flex justify-between items-center bg-red-500/10 rounded-xl p-4 border border-red-500/30">
                    <span className="text-gray-400 text-sm font-semibold">RÉDUCTION CLUB10</span>
                    <span className="text-4xl font-black text-red-500">-10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Commerces actifs</span>
                    <span className="text-2xl font-black text-white">100+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y-2 border-red-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-5xl font-black text-red-500">{stat.value}</div>
                <div className="text-gray-400 text-sm font-bold uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-4">POURQUOI LE CLUB10 ?</h2>
            <p className="text-2xl text-gray-400">Des bénéfices qui changent tout</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl p-8 border-2 border-red-500/30 hover:border-red-500 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-black mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-red-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-4">3 ÉTAPES CHRONO</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className={`relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border-2 ${activeStep === i ? 'border-red-500 shadow-2xl shadow-red-500/50' : 'border-red-500/30'}`}>
                <div className="absolute -top-6 left-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl ${activeStep === i ? 'bg-gradient-to-br from-red-600 to-red-500 text-white' : 'bg-gray-800 text-gray-500'}`}>
                    {step.number}
                  </div>
                </div>

                <div className="mt-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${activeStep === i ? 'bg-gradient-to-br from-red-600 to-red-500' : 'bg-red-500/10 border border-red-500/30'}`}>
                    <step.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 px-6" id="partenaires">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl lg:text-6xl font-black mb-4">NOS PARTENAIRES</h2>
            <p className="text-2xl text-gray-400 mb-8">+ de 100 commerces qui assurent</p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-6 py-3 rounded-xl text-sm font-black uppercase ${selectedCategory === cat ? 'bg-gradient-to-r from-red-600 to-red-500 text-white' : 'bg-red-500/10 text-gray-400 border-2 border-red-500/30'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map((partner, i) => (
              <div key={i} onMouseEnter={() => setHoveredPartner(i)} onMouseLeave={() => setHoveredPartner(null)} className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border-2 border-red-500/30 hover:border-red-500 transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-black">{partner.discount}</span>
                </div>

                <h3 className="font-black text-xl mb-2">{partner.name}</h3>
                <p className="text-gray-500 text-sm mb-3 uppercase">{partner.category}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-500 fill-yellow-500" size={18} />
                    <span className="text-gray-400 font-bold">{partner.rating}</span>
                  </div>
                  <div className="text-gray-500 text-xs">{partner.customers} clients</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral */}
      <section className="py-24 px-6 border-y-2 border-red-500/30">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl mb-8">
            <Share2 size={40} className="text-white" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-black mb-6">PARRAINE & GAGNE !</h2>
          <p className="text-2xl mb-12 text-gray-300">
            Empoche <span className="text-red-500 font-black text-4xl">50%</span> de chaque filleul !
          </p>

          <button className="bg-white text-black px-12 py-6 rounded-xl font-black text-xl hover:shadow-2xl transition-all uppercase">
            Obtenir mon lien de parrainage
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-2 border-red-500/30 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2025 ALL IN Connect • Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}
