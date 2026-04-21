import { Plus, Minus, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const KhorVirap = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Почему Хор Вирап так известен?",
      answer:
        "Хор Вирап — монастырь на вершине холма у границы с Турцией. Отсюда открывается самый знаменитый вид Армении: монастырь на переднем плане и величественный Арарат за ним. Именно здесь в темнице провёл 13 лет Григорий Просветитель, обративший Армению в христианство.",
    },
    {
      question: "Можно ли спуститься в темницу Григория?",
      answer:
        "Да! В Хор Вирапе сохранилась подлинная темница-яма, где содержался Григорий Просветитель. Через узкий люк можно спуститься в подземную камеру и ощутить историческую атмосферу этого места.",
    },
    {
      question: "В какое время лучше посещать?",
      answer:
        "Лучшее время для посещения — ранее утро, когда Арарат ещё не скрыт дымкой и свет идеален для фотографии. Также рекомендуем закат — горы становятся золотыми, а атмосфера особенно волшебной.",
    },
    {
      question: "Что ещё посмотреть рядом?",
      answer:
        "Рядом с Хор Вирапом находится виноградник Ararat Wine, где можно продегустировать армянские вина с видом на гору. Мы можем включить это в маршрут тура.",
    },
  ]

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        <nav className="relative z-10 flex items-center justify-between p-6">
          <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors">
            <Icon name="ArrowLeft" size={16} />
            <span className="font-medium">Все направления</span>
          </Link>
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Compass" size={20} />
            <span className="font-medium">Армения Тур</span>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">У подножия библейской горы</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Хор Вирап</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Самая близкая точка к Арарату. Здесь вы увидите легендарную темницу Григория Просветителя и тот самый открыточный вид, ради которого едут в Армению.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Читать гид
            </Button>
            <Button size="lg" variant="outline" className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg">
              Как добраться
            </Button>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Mountain" size={16} />
            <span className="text-sm font-medium">Легендарный вид на Арарат</span>
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
              <h3 className="text-xl font-semibold mb-4">Гора Арарат</h3>
              <p className="text-white/80 leading-relaxed">Лучший вид на библейскую гору — символ армянского народа.</p>
            </div>
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="ShieldCheck" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Темница Григория</h3>
              <p className="text-white/80 leading-relaxed">Подземная камера, где 13 лет провёл Просветитель Армении.</p>
            </div>
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Wallet" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Вход свободный</h3>
              <p className="text-white/80 leading-relaxed">Монастырь открыт для посещения бесплатно. Взнос по желанию при входе.</p>
            </div>
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Camera" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Открыточный кадр</h3>
              <p className="text-white/80 leading-relaxed">Самое фотографируемое место Армении — обязателен к посещению.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Ваш день в Хор Вирапе</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                История, духовность и легендарный вид — всё в один день.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Выезд из Еревана</h3>
                  <p className="text-white/80 leading-relaxed text-sm">Ранний выезд для лучшего света. Гид рассказывает историю монастыря и Григория Просветителя.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Монастырский комплекс</h3>
                  <p className="text-white/80 leading-relaxed text-sm">Осмотр церквей монастыря, знакомство с архитектурой и историей армянского христианства.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Спуск в темницу</h3>
                  <p className="text-white/80 leading-relaxed text-sm">Спуск в легендарную яму-тюрьму Григория Просветителя — незабываемый исторический опыт.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Панорама Арарата</h3>
                  <p className="text-white/80 leading-relaxed text-sm">Время для фотографий и созерцания величественного Арарата с лучшей точки Армении.</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold">
                Открыть на карте
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Частые вопросы</h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">Всё, что нужно знать о посещении Хор Вирапа и горы Арарат.</p>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
                    <button onClick={() => toggleFaq(index)} className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors">
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? <Minus className="w-5 h-5 flex-shrink-0" /> : <Plus className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Отправить запрос</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ваше полное имя" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
                    <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" placeholder="Ваши вопросы о посещении Хор Вирапа или ваш опыт..." />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">Отправить сообщение</Button>
                </form>
              </div>
              <div className="space-y-8">
                <p className="text-xl text-white/90 leading-relaxed text-pretty">Есть вопрос о месте или хотите поделиться своим опытом посещения? Напишите нам — ответим.</p>
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-2xl">🏔️</div>
                    <div>
                      <h4 className="text-lg font-semibold">Армения Тур</h4>
                      <p className="text-gray-600">Ваш гид по Армении</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Housing Link */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/housing/erevan" className="group block rounded-3xl bg-white/5 ring-1 ring-white/10 hover:ring-white/30 transition-all duration-300 p-10 md:p-14">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="BedDouble" size={28} />
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Ереван</p>
                  <h3 className="text-2xl md:text-3xl font-semibold">Где остановиться и поесть</h3>
                  <p className="text-white/60 mt-2">Жильё и рестораны — лучшая база для поездки к Хор Вирапу</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors flex-shrink-0">
                <span className="text-sm font-medium">Смотреть</span>
                <Icon name="ArrowRight" size={18} />
              </div>
            </div>
          </Link>
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
                <p className="text-white/80 leading-relaxed text-pretty">Туры по древним монастырям, священным местам и природным чудесам Армении.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">НАПРАВЛЕНИЯ</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Эчмиадзин", path: "/etchmiadzin" },
                    { label: "Хор Вирап", path: "/khor-virap" },
                    { label: "Нораванк", path: "/noravank" },
                    { label: "Севан", path: "/sevan" },
                    { label: "Гарни и Гегард", path: "/garni-geghard" },
                  ].map((item) => (
                    <li key={item.path}>
                      <Link to={item.path} className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О НАС</h3>
                <ul className="space-y-3">
                  {["Наша миссия", "Команда", "Отзывы", "Партнёры"].map((item) => (
                    <li key={item}><a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Контакты", "Вопросы и ответы", "Условия", "Политика возврата"].map((item) => (
                    <li key={item}><a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости туров</h3>
                <div className="flex gap-3">
                  <input type="email" placeholder="Введите ваш email" className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none" />
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

export default KhorVirap