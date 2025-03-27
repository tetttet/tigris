import { useNavigate } from 'react-router-dom';  // Импортируем useNavigate

import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";

import img1 from "../assets/services/Анестезия и реанимация.jpg";
import img2 from "../assets/services/Интервенционная радиология.jpg";
import img3 from "../assets/services/Болезни грудной клетки.jpg";
import img4 from "../assets/services/Психическое здоровье.jpg";
import img5 from "../assets/services/Важность регулярных физических упражнений.jpg";
import img6 from "../assets/services/Основы ухода за кожей.jpg";
import img7 from "../assets/services/Польза регулярных физических нагрузок.jpg";
import img8 from "../assets/services/Как поддерживать здоровье кожи.jpg";
import { HTTP_ROUTE_MED_DETAIL } from '../data';

const blogPosts = [
  { id: 1, img: img1, headlines: "Анестезия и реанимация", desc: "Методы обезболивания и экстренной медицинской помощи при критических состояниях." },
  { id: 2, img: img2, headlines: "Интервенционная радиология", desc: "Современные минимально инвазивные методы диагностики и лечения с использованием рентгеновского оборудования." },
  { id: 3, img: img3, headlines: "Болезни грудной клетки (болезни легких)", desc: "Основные заболевания легких, их симптомы, методы диагностики и лечения." },
  { id: 4, img: img4, headlines: "Психическое здоровье", desc: "Как сохранить психологическое благополучие, управлять стрессом и справляться с эмоциональными трудностями." },
  { id: 5, img: img5, headlines: "Важность регулярных физических упражнений", desc: "Как спорт помогает поддерживать здоровье сердца, укреплять мышцы и улучшать общее самочувствие." },
  { id: 6, img: img6, headlines: "Основы ухода за кожей", desc: "Правильный уход за кожей, защита от внешних факторов и профилактика возрастных изменений." },
  { id: 7, img: img7, headlines: "Польза регулярных физических нагрузок", desc: "Как регулярные тренировки влияют на метаболизм, иммунитет и психическое здоровье." },
  { id: 8, img: img8, headlines: "Как поддерживать здоровье кожи", desc: "Эффективные косметические процедуры, питание и полезные привычки для здоровой кожи." }
];


const Blogs = () => {
  const navigate = useNavigate();  // Инициализируем navigate

  const handleBlogClick = (id, img, desc, headlines) => {
    navigate(`${HTTP_ROUTE_MED_DETAIL}/${id}`, { state: { img, headlines, desc } });  // Передаем данные через состояние навигации
  };  

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <h1 className="lg:ml-20 text-4xl font-semibold text-center lg:text-start">
          Our services
        </h1>
        <div className="mt-4 lg:mt-0 lg:mr-20">
          <Button title="All Our Services Page" />
        </div>
      </div>
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-5">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              img={post.img}
              headlines={post.headlines}
              desc={post.desc}
              onClick={() => handleBlogClick(post.id, post.img, post.headlines ,post.desc)}  // Вызываем функцию при клике на карточку
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
