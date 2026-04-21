import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const Vagharshapat = () => {
  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 border-b border-white/10">
        <Link to="/etchmiadzin" className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors">
          <Icon name="ArrowLeft" size={16} />
          <span className="font-medium">Назад к Эчмиадзину</span>
        </Link>
        <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors">
          <Icon name="Compass" size={20} />
          <span className="font-medium">Армения Тур</span>
        </Link>
      </nav>

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-white/5 ring-1 ring-white/15 rounded-full text-sm text-white/70">
          <Icon name="MapPin" size={14} />
          Вагаршапат (Эчмиадзин)
        </div>
        <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">Где остановиться<br />и поесть</h1>
        <p className="text-xl text-white/70 leading-relaxed">
          Здесь скоро появится подробная информация о лучших вариантах жилья и ресторанах Вагаршапата — от уютных гостевых домов до мест с домашней армянской кухней.
        </p>
      </div>

      {/* Placeholder Sections */}
      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-12">

        {/* Жильё */}
        <section className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Icon name="BedDouble" size={20} />
            </div>
            <h2 className="text-3xl font-semibold">Жильё</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 space-y-3">
                <div className="h-5 bg-white/10 rounded-full w-3/4 animate-pulse" />
                <div className="h-4 bg-white/10 rounded-full w-full animate-pulse" />
                <div className="h-4 bg-white/10 rounded-full w-2/3 animate-pulse" />
                <div className="h-4 bg-white/10 rounded-full w-1/2 animate-pulse" />
              </div>
            ))}
          </div>
          <p className="mt-8 text-white/40 text-sm text-center">Контент скоро появится</p>
        </section>

        {/* Рестораны */}
        <section className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Icon name="UtensilsCrossed" size={20} />
            </div>
            <h2 className="text-3xl font-semibold">Рестораны</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 space-y-3">
                <div className="h-5 bg-white/10 rounded-full w-3/4 animate-pulse" />
                <div className="h-4 bg-white/10 rounded-full w-full animate-pulse" />
                <div className="h-4 bg-white/10 rounded-full w-2/3 animate-pulse" />
                <div className="h-4 bg-white/10 rounded-full w-1/2 animate-pulse" />
              </div>
            ))}
          </div>
          <p className="mt-8 text-white/40 text-sm text-center">Контент скоро появится</p>
        </section>

      </div>
    </div>
  )
}

export default Vagharshapat
