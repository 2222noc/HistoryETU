
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "В каком году был основан Электротехнический институт (предшественник ЛЭТИ)?",
    options: ["1886", "1891", "1899", "1903"],
    correctAnswer: 0,
    explanation: "Электротехнический институт берет своё начало от Технического училища почтово-телеграфного ведомства, основанного в 1886 году."
  },
  {
    id: 2,
    question: "Кто изобрел радио и работал в ЛЭТИ?",
    options: ["Николай Тесла", "Гульельмо Маркони", "Александр Степанович Попов", "Томас Эдисон"],
    correctAnswer: 2,
    explanation: "А.С. Попов, изобретатель радио, работал в ЭТИ профессором, заведующим кафедрой физики и был избран директором института в 1905 году."
  },
  {
    id: 3,
    question: "Когда институт переехал в свое нынешнее здание на улице Профессора Попова?",
    options: ["1886", "1891", "1903", "1918"],
    correctAnswer: 2,
    explanation: "Переезд института в новое здание на Аптекарском острове (современный адрес: ул. Профессора Попова, 5) состоялся в 1903 году."
  },
  {
    id: 4,
    question: "Когда институт получил название 'Ленинградский электротехнический институт' (ЛЭТИ)?",
    options: ["1886", "1918", "1924", "1941"],
    correctAnswer: 1,
    explanation: "В 1918 году институт был переименован в Ленинградский электротехнический институт (ЛЭТИ)."
  },
  {
    id: 5,
    question: "Что происходило с ЛЭТИ во время Великой Отечественной войны?",
    options: [
      "Институт был полностью закрыт на время войны", 
      "Институт работал в обычном режиме", 
      "Часть института была эвакуирована, а в здании разместили госпиталь", 
      "Институт был переведен в Москву"
    ],
    correctAnswer: 2,
    explanation: "Во время блокады Ленинграда часть сотрудников и студентов ЛЭТИ была эвакуирована в Ташкент, а в здании института размещался госпиталь."
  },
  {
    id: 6,
    question: "Когда ЛЭТИ получил статус университета?",
    options: ["1980", "1985", "1992", "2000"],
    correctAnswer: 2,
    explanation: "В 1992 году ЛЭТИ получил статус университета и был переименован в Санкт-Петербургский государственный электротехнический университет."
  },
  {
    id: 7,
    question: "Кто был первым директором Технического училища почтово-телеграфного ведомства?",
    options: ["А.С. Попов", "Н.Г. Писаревский", "М.А. Шателен", "И.Г. Фрейман"],
    correctAnswer: 1,
    explanation: "Первым директором Технического училища почтово-телеграфного ведомства был назначен Николай Григорьевич Писаревский."
  },
  {
    id: 8,
    question: "Какое важное научное направление активно развивалось в ЛЭТИ в 1950-1970 годах?",
    options: ["Биотехнологии", "Нефтехимия", "Радиоэлектроника и вычислительная техника", "Ядерная физика"],
    correctAnswer: 2,
    explanation: "В период 1950-1970 годов в ЛЭТИ интенсивно развивались научные школы радиоэлектроники, вычислительной техники и автоматики."
  },
  {
    id: 9,
    question: "В каком году ЛЭТИ отпраздновал свое 130-летие?",
    options: ["2006", "2010", "2016", "2020"],
    correctAnswer: 2,
    explanation: "130-летие со дня основания университета отмечалось в 2016 году (1886 + 130 = 2016)."
  },
  {
    id: 10,
    question: "Кто из перечисленных ученых НЕ работал в ЛЭТИ?",
    options: ["А.С. Попов", "М.А. Шателен", "И.Г. Фрейман", "Д.И. Менделеев"],
    correctAnswer: 3,
    explanation: "Д.И. Менделеев не работал в ЛЭТИ, он был профессором Санкт-Петербургского университета и Технологического института."
  }
];
