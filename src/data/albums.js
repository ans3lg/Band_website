export const albums = [
  {
    id: 'electric-nights',
    title: 'Electric Nights',
    year: 2025,
    cover:
      'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=600&q=80',
    description:
      'Третий полноформатный альбом — самый зрелый и энергичный. Записан вживую в студии, с минимальной обработкой, чтобы сохранить драйв концерта.',
    youtubeVideoId: 'dQw4w9WgXcQ',
    tracks: [
      {
        id: 1,
        title: 'Neon Lights',
        duration: '3:42',
        lyrics: `[Куплет 1]
Город не спит, неон горит
Мы на крыше — весь мир внизу
Ты сказала «беги» — я бегу
К сердцу, что бьётся в такт биту

[Припев]
Neon lights, neon rush
Мы не остановимся — это наш путь
Громче, выше, до рассвета
NEON RUSH — наша планета`,
      },
      {
        id: 2,
        title: 'Broken Radio',
        duration: '3:18',
        lyrics: `[Куплет 1]
Сломанное радио в моей голове
Играет песню, что ты мне не дала
Я кручу ручку — тишина, потом снова
Твой голос из прошлого — моя беда

[Припев]
Broken radio, broken heart
Мы разошлись, но мелодия — в старте`,
      },
      {
        id: 3,
        title: 'Midnight Drive',
        duration: '4:05',
        lyrics: `[Куплет 1]
Полночь, трасса, фары вперёд
Никого рядом — только рок-н-ролл
Окна открыты, ветер поёт
Мы уезжаем от всех своих ролей`,
      },
      {
        id: 4,
        title: 'Static Heart',
        duration: '3:55',
        lyrics: `[Припев]
Static heart, static mind
Помехи в душе — но я не сдамся
Ты — мой сигнал сквозь белый шум`,
      },
      {
        id: 5,
        title: 'Fire Escape',
        duration: '3:28',
        lyrics: `[Куплет 1]
Пожарная лестница — наш выход
С крыши клуба — в ночной город
Мы смеёмся, мы живы, мы молоды
Пока бьётся пульс — мы не сдадимся`,
      },
    ],
  },
  {
    id: 'city-echoes',
    title: 'City Echoes',
    year: 2023,
    cover:
      'https://images.unsplash.com/photo-1619983081563-430f63602796?w=600&q=80',
    description:
      'Второй альбом о большом городе, одиночестве в толпе и надежде найти своих. Записан после гастрольного тура 2022.',
    youtubeVideoId: '9bZkp7q19f0',
    tracks: [
      {
        id: 1,
        title: 'City Echoes',
        duration: '3:50',
        lyrics: `[Припев]
Эхо города в моих ушах
Тысячи голосов — один мой крик
City echoes — мы не одни`,
      },
      {
        id: 2,
        title: 'Subway Dreams',
        duration: '3:22',
        lyrics: `[Куплет 1]
Метро, тоннель, мигающий свет
Сны о сцене — я почти у цели`,
      },
      {
        id: 3,
        title: 'Paper Crowns',
        duration: '4:12',
        lyrics: `[Куплет 1]
Бумажные короны на головах
Мы короли вчерашнего вечера`,
      },
      {
        id: 4,
        title: 'Lost Signal',
        duration: '3:35',
        lyrics: `[Припев]
Lost signal — потерянный контакт
Набери меня, когда найдёшь сеть`,
      },
    ],
  },
  {
    id: 'first-spark',
    title: 'First Spark',
    year: 2021,
    cover:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80',
    description:
      'Дебютный альбом — первая искра, с которой всё началось. Сырый звук, честные тексты и бескомпромиссная энергия.',
    youtubeVideoId: 'kXYiU_JCYtU',
    tracks: [
      {
        id: 1,
        title: 'First Spark',
        duration: '3:15',
        lyrics: `[Припев]
First spark — первая искра
Мы зажгли огонь — и он не гаснет`,
      },
      {
        id: 2,
        title: 'Garage Days',
        duration: '2:58',
        lyrics: `[Куплет 1]
Гараж, усилитель, соседи стучат
Мы не слышим — мы играем рок`,
      },
      {
        id: 3,
        title: 'Summer Riot',
        duration: '3:40',
        lyrics: `[Припев]
Summer riot — летний бунт
Солнце, пиво и громкий звук`,
      },
      {
        id: 4,
        title: 'Runaway',
        duration: '3:55',
        lyrics: `[Куплет 1]
Убегаю от скуки и серых стен
Runaway — мой новый план`,
      },
    ],
  },
];

export const latestRelease = albums[0];

export function getAlbumById(id) {
  return albums.find((album) => album.id === id);
}
