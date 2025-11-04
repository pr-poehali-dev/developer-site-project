import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedFinish, setSelectedFinish] = useState('white');
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const projects = [
    {
      id: 1,
      name: 'Проект «Брест»',
      image: 'https://cdn.poehali.dev/files/22cb7164-13fe-4af7-96c7-9823f5f384b4.png',
      description: 'Одноэтажный дом с просторной террасой. Классический архитектурный стиль. Подходит для большой дружной семьи и современной жизни.',
      price: '50.000'
    },
    {
      id: 2,
      name: 'Проект «Оазис»',
      image: 'https://cdn.poehali.dev/files/22cb7164-13fe-4af7-96c7-9823f5f384b4.png',
      description: 'Дом с современной архитектурой и панорамными окнами. Идеальное сочетание стиля. Продуманная планировка с удобным зонированием внутри.',
      price: '50.000'
    },
    {
      id: 3,
      name: 'Проект «Жасмин»',
      image: 'https://cdn.poehali.dev/files/22cb7164-13fe-4af7-96c7-9823f5f384b4.png',
      description: 'Двухэтажный дом с мансардой. Комфортная планировка для большой семьи — это воплощение гармонии и надежности вашей жизни.',
      price: '50.000'
    }
  ];

  const reviews = [
    {
      name: 'Андрей',
      date: '25.08.25',
      rating: 5,
      text: 'Обратились в компанию и нашей ее собственником решили дом строить мечты какая взяли с собой трёх детей и за покупку для спец а теперь Бали хозяева дач, которые были нужны в доставка! Без единое предъявлений получили все услуги быстро всё специалистов четко без погрешности, в оговоренные сроки специально был порадовал нас...'
    },
    {
      name: 'Дмитрий',
      date: '15.05.25',
      rating: 5,
      text: 'Хочу выразить мою полную благодарность бригаде мир быстрому работнику строителей проверенные специалисты к месяцу месяцу. полностью всё сходится согласованные дому мы частности были довольных своим дома. Действие качественно консультаций очень профессиональны ...'
    },
    {
      name: 'Дарья',
      date: '05.03.25',
      rating: 5,
      text: 'Спасибо за качественную работу! Мы наконец-то реализовали своему наконец мысль и боялась в классную были о строил. Только специалисты своим подробно которые внимание материалов которые всё всё ожидаем вполне ...'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Home" className="text-white" size={24} />
            </div>
            <div>
              <div className="font-bold text-lg">СПК</div>
              <div className="text-xs text-muted-foreground">СТРОИТЕЛЬНЫЙ</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Рассчитать цену</a>
          </nav>
          <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">Заказать звонок</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Обратная связь</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" type="tel" />
                <Textarea placeholder="Комментарий" />
                <Button className="w-full bg-primary hover:bg-primary/90">Отправить</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/22cb7164-13fe-4af7-96c7-9823f5f384b4.png')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/75"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Строим дома <span className="text-primary">Вашей</span> мечты
            </h1>
            <p className="text-xl text-white/90 mb-8">в Волгограде и Волгоградской области</p>
            <div className="inline-block bg-primary text-white px-8 py-4 rounded-full text-2xl font-bold">
              от 5 млн руб
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-secondary text-white hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg">Построенных домов</div>
              </CardContent>
            </Card>
            <Card className="bg-secondary text-white hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold mb-2">Работаем</div>
                <div className="text-base">Со всеми видами ипотек и Эскроу-счетами</div>
              </CardContent>
            </Card>
            <Card className="bg-white hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center flex items-center justify-center gap-4">
                <div className="text-8xl font-bold text-primary">5</div>
                <div className="text-left">
                  <div className="text-xl font-semibold">лет гарантии на</div>
                  <div className="text-xl font-semibold">наши дома</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Выбирая нас, <span className="text-primary">вы получаете</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Home" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Качественные материалы</h3>
                <p className="text-muted-foreground">
                  Используем только сертифицированные материалы от проверенных поставщиков для строительства надёжных домов
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Clock" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Сдачу в срок</h3>
                <p className="text-muted-foreground">
                  Гарантируем соблюдение сроков строительства. Даже на 3М, до нас если бы на вашем. Без и с-разницы оставить комфортную работе
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Поддержку</h3>
                <p className="text-muted-foreground">
                  Наши специалисты всегда готовы проконсультировать на каждом вопросе
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-primary">Наши проекты</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">{project.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">От {project.price} руб/м²</div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      Заказать
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-primary">Отзывы наших клиентов</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-6">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="ChevronLeft" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-primary">Рассчитайте стоимость вашего проекта</span>
          </h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="text-lg font-semibold mb-4 block">Какой тип отделки вы планируете?</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Черный ключ', 'Белый ключ', 'С ремонтом', 'С мебелью'].map((type) => (
                      <Button
                        key={type}
                        variant={selectedFinish === type.toLowerCase().replace(' ', '-') ? 'default' : 'outline'}
                        className={selectedFinish === type.toLowerCase().replace(' ', '-') ? 'bg-primary hover:bg-primary/90' : 'hover:border-primary hover:text-primary'}
                        onClick={() => setSelectedFinish(type.toLowerCase().replace(' ', '-'))}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Далее
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Все дома спроектированы <span className="text-primary">индивидуально с каждым клиентом БЕСПЛАТНО</span>
          </h2>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-primary">Контактная информация</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Icon name="MapPin" size={48} className="mx-auto mb-4" />
                <p>Карта офиса</p>
              </div>
            </div>
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (927) 529-70-56</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Часы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">г. Волгоград, ул. Коммунистич. д. 2 этаж.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© 2025 Строительная компания «Застройщик Волга». Все права защищены.</p>
          <p className="mt-2 text-white/70">Телефон: +7 (927) 529-70-56 Email: info@stroitelstvo.ru</p>
          <p className="mt-2 text-white/70">Адрес: г. Волгоград, ул. Коммунистич., д. 2 этаж.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
