import { Plus, Minus, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const GarniGeghard = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Что такое храм Гарни?",
      answer:
        "Гарни — единственный сохранившийся в Армении языческий античный храм I века н.э., построенный в греко-римском стиле. Расположен на краю живописного базальтового ущелья. После принятия христианства был переделан в летний дворец армянских царей, но сохранил оригинальные колонны.",
    },
    {
      question: "Что такое монастырь Гегард?",
      answer:
        "Гегард (буквально «копьё») — уникальный монастырский комплекс IV–XIII веков, частично высеченный прямо в скальных стенах ущелья. Включён в список Всемирного наследия ЮНЕСКО. Внутри — мистические залы, высеченные в камне, с удивительной акустикой.",
    },
    {
      question: "Можно ли посетить оба места за один день?",
      answer:
        "Да! Гарни и Гегард расположены рядом и идеально сочетаются в одном маршруте. Между ними около 10 минут езды. Обычно начинают с Гарни, а затем едут в Гегард. На каждое место уходит около 1,5–2 часов.",
    },
    {
      question: "Что ещё можно сделать в этом районе?",
      answer:
        "По пути к Гарни и Гегарду часто останавливаются у пекарей тонира — можно попробовать свежий армянский лаваш прямо из земляной печи. Также рядом красивое ущелье реки Азат с базальтовыми колоннами «Симфония камней».",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/9e095471-aeb3-4da6-9822-948a31d93712/files/b5734633-03a9-4b21-b8d5-07704db77727.jpg)",
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
          <div className="flex items-center gap-3">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Забронировать</Button>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Языческий храм и монастырь в скалах</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 text-balance">Гарни и Гегард</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Две эпохи в один день: стройные колонны античного Гарни и мистические залы Гегарда, высеченные прямо в скале. Настоящее путешествие во времени.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Забронировать экскурсию
            </Button>
            <Button size="lg" variant="outline" className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg">
              Смотреть маршрут
            </Button>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Star" size={16} />
            <span className="text-sm font-medium">Объект Всемирного наследия ЮНЕСКО</span>
          </div>
        </div>
      </div>

      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Sparkles" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">I век н.э.</h3>
              <p className="text-white/80 leading-relaxed">Гарни — единственный языческий храм Армении в античном стиле.</p>
            </div>
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="ShieldCheck" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Монастырь в скале</h3>
              <p className="text-white/80 leading-relaxed">Гегард — залы, вырубленные прямо в горном массиве. Чудо архитектуры.</p>
            </div>
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Wallet" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Все включено</h3>
              <p className="text-white/80 leading-relaxed">Трансфер, гид, дегустация лаваша из тонира — всё в одном туре.</p>
            </div>
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Music" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Акустика пещер</h3>
              <p className="text-white/80 leading-relaxed">Залы Гегарда известны уникальным акустическим эффектом.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Ваш день в Гарни и Гегарде</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">Путешествие сквозь эпохи от античности до средневековья.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Лаваш из тонира</h3>
                  <p className="text-white/80 leading-relaxed text-sm">Остановка у деревенских пекарей — свежий горячий лаваш прямо из земляной печи.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Храм Гарни</h3>
                  <p className="text-white/80 leading-relaxed text-sm">Осмотр античного языческого храма с колоннадой на краю живописного ущелья.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Монастырь Гегард</h3>
                  <p className="text-white/80 leading-relaxed text-sm">Мистические скальные залы монастыря, включённого в список Всемирного наследия ЮНЕСКО.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Симфония камней</h3>
                  <p className="text-white/80 leading-relaxed text-sm">Базальтовые колонны ущелья реки Азат — природное чудо по пути обратно.</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold">
                Забронировать экскурсию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Частые вопросы</h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">Всё, что нужно знать о посещении Гарни и Гегарда.</p>
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
                    <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" placeholder="Ваши вопросы о туре в Гарни и Гегард..." />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">Отправить сообщение</Button>
                </form>
              </div>
              <div className="space-y-8">
                <p className="text-xl text-white/90 leading-relaxed text-pretty">По вопросам экскурсий в Гарни и Гегард, групповых туров или индивидуальных программ — свяжитесь с нами.</p>
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

export default GarniGeghard
