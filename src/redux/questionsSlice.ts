import { createSlice } from "@reduxjs/toolkit";

const items = [
  {
    id: "0",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 1,
    difficulty: 0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "1",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 2,
    difficulty: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Какое свойство CSS определяет размер текста?",
        options: ["text-size", "font-style", "text-style", "font-size"],
        correct: 3,
      },
      {
        title: "Укажите правильную ссылку на внешнюю таблицу стилей:",
        options: [
          "<style src='mystyle.css'>",
          "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
          "<stylesheet>mystyle.css</stylesheet>",
          "<link>mystyle.css</link>",
        ],
        correct: 1,
      },
      {
        title: "Как выбрать элемент с id = 'block'?",
        options: ["#block", ".block", "*block", "block"],
        correct: 0,
      },
      {
        title: "Как правильно группировать селекторы?",
        options: [
          "Разделить каждый селектор знаком /",
          "Разделить каждый селектор запятой",
          "Разделить каждый селектор пробелом",
          "Разделить каждый селектор знаком +",
        ],
        correct: 1,
      },
    ],
  },
  {
    id: "2",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 3,
    difficulty: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "3",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 4,
    difficulty: 0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "4",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 5,
    difficulty: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "5",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 6,
    difficulty: 0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "6",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 7,
    difficulty: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "7",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 8,
    difficulty: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "8",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 9,
    difficulty: 0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "9",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 10,
    difficulty: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "10",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 11,
    difficulty: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "11",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 12,
    difficulty: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "12",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 13,
    difficulty: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "13",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 14,
    difficulty: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "14",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 15,
    difficulty: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "15",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 16,
    difficulty: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "16",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 17,
    difficulty: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "17",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 18,
    difficulty: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "19",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 20,
    difficulty: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "20",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 21,
    difficulty: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "21",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 22,
    difficulty: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
  {
    id: "22",
    name: "Проверка знаний CSS",
    image: "https://itproger.com/img/courses/1476977488.jpg",
    amount: 23,
    difficulty: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam voluptates molestias hic! Necessitatibus velit provident, pariatur, quisquam, obcaecati accusantium exercitationem perspiciatis optio expedita alias mollitia fugit animi modi.",
    data: [
      {
        title: "Как задать ширину блока в css?",
        options: ["width: 100px", "2", "3", "4"],
        correct: 0,
      },
      {
        title: "Как обратиться к классу в css?",
        options: ["className", "class", ".", "#"],
        correct: 2,
      },
      {
        title: "Как запретить выделение текста css?",
        options: ["1", "user-select: none", "3", "4"],
        correct: 1,
      },
      {
        title: "Как изменить расстояние между словами в css?",
        options: ["1", "2", "3", "word-spacing"],
        correct: 3,
      },
    ],
  },
];

export interface QuestionDataItem {
  title: string;
  options: string[];
  correct: number;
}

export interface QuestionItem {
  id: string;
  name: string;
  image: string;
  amount: number;
  difficulty: number;
  description: string;
  data: QuestionDataItem[];
}

export interface QuestionsState {
  items: QuestionItem[];
  test: QuestionItem["data"];
  itemsOnPage: QuestionItem[];
  pages: number | null;
}

const initialState: QuestionsState = {
  items,
  test: [],
  itemsOnPage: [],
  pages: null,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setPages(state, action) {
      state.pages = action.payload;
    },
    paginateData(state, action) {
      state.itemsOnPage = state.items.slice(
        action.payload.pageStart,
        action.payload.pageEnd
      );
    },
    getTest(state, action) {
      const test = state.items.find((el) => el.id === action.payload);
      if (test) {
        state.test = test.data;
      }
    },
  },
});

export const { paginateData, setPages, getTest } = questionsSlice.actions;

export default questionsSlice.reducer;
