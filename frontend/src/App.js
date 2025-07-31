import React, { useState } from 'react';
import { Search, ChefHat, Loader, Sparkles, Globe, ArrowRight } from 'lucide-react';

function App() {
  const [ingredients, setIngredients] = useState('');
  const [language, setLanguage] = useState('hi');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const languages = [
    { code: 'hi', name: 'हिंदी (Hindi)', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు (Telugu)', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ் (Tamil)', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা (Bengali)', flag: '🇧🇩' },
    { code: 'gu', name: 'ગુજરાતી (Gujarati)', flag: '🇮🇳' },
  ];

  const handleSubmit = () => {
    if (!ingredients.trim()) return;

    setLoading(true);
    setError('');
    setRecipes([]);

    setTimeout(() => {
      setRecipes([
        {
          name: 'मसाला चावल (Masala Rice)',
          description:
            'A fragrant rice dish cooked with aromatic spices and vegetables. Perfect for a comforting meal.',
        },
        {
          name: 'तड़का दाल (Tadka Dal)',
          description:
            'Traditional lentil curry tempered with cumin, mustard seeds, and fresh herbs.',
        },
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen relative text-white overflow-hidden font-sans">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('pexels-eberhardgross-1287075.jpg')` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="absolute inset-0 mix-blend-overlay opacity-40"
        style={{
          backgroundImage: `url('pexels-danielabsi-952670.jpg')`,
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-lime-300/8 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black/60 via-gray-900/40 to-transparent" />
      <div className="absolute bottom-0 right-1/3 w-32 h-48 bg-gradient-to-t from-black via-gray-900/80 to-transparent opacity-60" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-gray-700/20 backdrop-blur-sm bg-black/10">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-lime-400 rounded-full" />
                <div className="w-2 h-2 bg-lime-400 rounded-full opacity-80" />
                <div className="w-2 h-2 bg-lime-400 rounded-full opacity-60" />
              </div>
              <h1 className="text-xl font-semibold text-white">Recipe AI</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition">For Home</a>
              <a href="#" className="hover:text-white transition">Recipes</a>
              <a href="#" className="hover:text-white transition">About</a>
              <a href="#" className="hover:text-white transition">Contact Us</a>
            </nav>
            <button className="bg-lime-400 text-black px-6 py-2 rounded-lg text-sm font-semibold hover:bg-lime-300 transition">
              Explore Recipes
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Stay ahead in the <br />
                  <span className="text-gray-300">AI-Recipe World</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Build hands-on capabilities that translate directly into culinary advantage & delicious outcomes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    document.getElementById('recipe-form')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="bg-lime-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-lime-300 transition"
                >
                  Explore Recipes
                </button>
                <button className="bg-gray-700/50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-600/50 border border-gray-600/30 transition">
                  For Business
                </button>
              </div>
            </div>

            {/* Recipe Form */}
            <div id="recipe-form" className="relative">
              <div className="absolute -inset-4 bg-lime-400/5 rounded-3xl blur-xl" />
              <div className="relative bg-black/40 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <ChefHat className="w-6 h-6 text-lime-400" />
                    <h2 className="text-xl font-semibold text-white">Recipe Generator</h2>
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-200 mb-3">
                      <Globe className="w-4 h-4 mr-2 text-lime-400" />
                      Select Your Language
                    </label>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {`${lang.flag} ${lang.name}`}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-200 mb-3">
                      <Sparkles className="w-4 h-4 mr-2 text-lime-400" />
                      Enter Your Ingredients
                    </label>
                    <textarea
                      value={ingredients}
                      onChange={(e) => setIngredients(e.target.value)}
                      placeholder="e.g., टमाटर, प्याज, धनिया, हल्दी, नमक..."
                      className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-400 h-32 resize-none"
                    />
                    <p className="text-xs text-gray-400 mt-2">
                      List your available ingredients separated by commas
                    </p>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading || !ingredients.trim()}
                    className="w-full bg-lime-400 text-black py-4 px-6 rounded-xl font-semibold hover:bg-lime-300 focus:ring-2 focus:ring-lime-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <Loader className="animate-spin w-5 h-5 mr-2" />
                        Discovering Recipes...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5 mr-2" />
                        Get Recipe Recommendations
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-8 max-w-2xl mx-auto bg-red-900/30 border border-red-700/50 text-red-300 px-6 py-4 rounded-xl backdrop-blur-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-3" />
                {error}
              </div>
            </div>
          )}

          {/* Recipe Results */}
          {recipes.length > 0 && (
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-black/40 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-400/5 via-transparent to-lime-400/5 rounded-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <Sparkles className="w-6 h-6 text-lime-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">Recommended Recipes</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {recipes.map((recipe, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 hover:bg-gray-700/40 hover:border-lime-400/20 transition group cursor-pointer"
                      >
                        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-lime-400 transition">
                          {recipe.name}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{recipe.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Globe className="w-8 h-8 text-lime-400" />,
                title: 'Multi-Language',
                desc: 'Support for Hindi, Telugu, Tamil, Bengali, and Gujarati languages for authentic recipe discovery.',
              },
              {
                icon: <Sparkles className="w-8 h-8 text-lime-400" />,
                title: 'AI-Powered',
                desc: 'Advanced AI algorithms trained on traditional Indian recipes for authentic recommendations.',
              },
              {
                icon: <ChefHat className="w-8 h-8 text-lime-400" />,
                title: 'Authentic Recipes',
                desc: 'Traditional recipes from across the Indian subcontinent, preserving cultural heritage.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="text-center p-8 bg-black/20 rounded-2xl border border-gray-700/20 backdrop-blur-sm hover:bg-black/30 transition"
              >
                <div className="w-16 h-16 bg-lime-400/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-lime-400/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
