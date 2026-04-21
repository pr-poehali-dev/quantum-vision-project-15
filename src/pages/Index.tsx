import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const destinations = [
  {
    id: "etchmiadzin",
    path: "/etchmiadzin",
    title: "Эчмиадзин",
    subtitle: "Духовное сердце и армянский Ватикан",
    description: "Посетите один из древнейших христианских соборов мира. Место, где хранятся священные реликвии и замирает время среди вековых хачкаров.",
    tag: "ЮНЕСКО",
    image: "https://cdn.poehali.dev/projects/9e095471-aeb3-4da6-9822-948a31d93712/files/15235fc4-7c2b-4ae5-86ed-c7cb83500c88.jpg",
  },
  {
    id: "khor-virap",
    path: "/khor-virap",
    title: "Хор Вирап",
    subtitle: "У подножия библейской горы",
    description: "Самая близкая точка к Арарату. Здесь вы увидите легендарную темницу Григория Просветителя и тот самый открыточный вид, ради которого едут в Армению.",
    tag: "Лучший вид",
    image: "https://cdn.poehali.dev/projects/9e095471-aeb3-4da6-9822-948a31d93712/files/9c81564f-be19-4792-b13a-638fd9156b0c.jpg",
  },
  {
    id: "noravank",
    path: "/noravank",
    title: "Нораванк",
    subtitle: "Шедевр среди красных скал",
    description: "Один из самых красивых монастырей Армении, спрятанный в узком ущелье. Его уникальная архитектура и «пылающие» скалы вокруг никого не оставляют равнодушным.",
    tag: "Природа",
    image: "https://cdn.poehali.dev/projects/9e095471-aeb3-4da6-9822-948a31d93712/files/79264680-c44c-40a9-a228-1997127ca5d2.jpg",
  },
  {
    id: "sevan",
    path: "/sevan",
    title: "Севан",
    subtitle: "Высокогорное море Армении",
    description: "Поднимитесь к монастырю Севанаванк, чтобы увидеть бескрайнюю лазурь озера. Идеальное место, чтобы попробовать знаменитого севанского сига и подышать горным воздухом.",
    tag: "1900 м",
    image: "https://cdn.poehali.dev/projects/9e095471-aeb3-4da6-9822-948a31d93712/files/50061a3c-55f5-4cd7-9c62-6bb2bcda66a7.jpg",
  },
  {
    id: "garni-geghard",
    path: "/garni-geghard",
    title: "Гарни и Гегард",
    subtitle: "Языческий храм и монастырь в скалах",
    description: "Две эпохи в один день: стройные колонны античного Гарни и мистические залы Гегарда, высеченные прямо в скале. Настоящее путешествие во времени.",
    tag: "ЮНЕСКО",
    image: "https://cdn.poehali.dev/projects/9e095471-aeb3-4da6-9822-948a31d93712/files/b5734633-03a9-4b21-b8d5-07704db77727.jpg",
  },
]

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/9e095471-aeb3-4da6-9822-948a31d93712/files/9c81564f-be19-4792-b13a-638fd9156b0c.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Compass" size={20} />
            <span className="font-medium text-balance">Армения Тур</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {["Направления", "О нас", "Галерея", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Забронировать</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Туры по Армении — священные места и живая история</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Откройте душу Армении.</h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Древние монастыри, библейские горы и высокогорные озёра. Пять незабываемых направлений, каждое из которых — отдельная история длиной в тысячелетия.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Выбрать направление
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Узнать о турах
            </Button>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Star" size={16} />
            <span className="text-sm font-medium">2 объекта ЮНЕСКО · Библейский Арарат · Высокогорное море</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Sparkles" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Местные гиды</h3>
              <p className="text-white/80 leading-relaxed">Историки и знатоки армянской культуры раскрывают смысл каждого места.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="ShieldCheck" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Проверенный маршрут</h3>
              <p className="text-white/80 leading-relaxed">Все логистические детали продуманы — вы просто наслаждаетесь путешествием.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Wallet" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Всё включено</h3>
              <p className="text-white/80 leading-relaxed">Трансфер, гид и входные билеты — никаких скрытых платежей.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Leaf" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Малые группы</h3>
              <p className="text-white/80 leading-relaxed">Не более 10 человек в группе для комфортного и глубокого знакомства с местами.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Наши направления</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Пять уникальных мест — пять страниц армянской истории. Выберите маршрут или откройте их все.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((dest) => (
                <div
                  key={dest.id}
                  className="group rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 backdrop-blur hover:ring-white/30 transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 ring-1 ring-white/20 backdrop-blur rounded-full text-xs font-medium">
                      {dest.tag}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{dest.title}</h3>
                    <p className="text-white/60 text-sm font-medium mb-4">{dest.subtitle}</p>
                    <p className="text-white/80 leading-relaxed text-sm mb-6">{dest.description}</p>
                    <Link to={dest.path}>
                      <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full font-medium flex items-center justify-center gap-2">
                        Подробнее
                        <Icon name="ArrowRight" size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}

              {/* Final CTA Card */}
              <div className="rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur p-8 flex flex-col items-center justify-center text-center min-h-[420px]">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <Icon name="Map" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Полный тур по Армении</h3>
                <p className="text-white/80 leading-relaxed mb-8">Хотите посетить все пять мест? Составим индивидуальный маршрут под ваш график.</p>
                <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                  Написать нам
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="Compass" size={24} />
                  <span className="text-xl font-semibold">Армения Тур</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Туры по древним монастырям, священным местам и природным чудесам Армении. Каждое путешествие — погружение в историю.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">НАПРАВЛЕНИЯ</h3>
                <ul className="space-y-3">
                  {destinations.map((dest) => (
                    <li key={dest.id}>
                      <Link to={dest.path} className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {dest.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О НАС</h3>
                <ul className="space-y-3">
                  {["Наша миссия", "Команда", "Отзывы", "Партнёры"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Контакты", "Вопросы и ответы", "Условия", "Политика возврата"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости туров</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2025 Армения Тур</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
