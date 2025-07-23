export interface NaturalSite {
  name: string;
  description: string;
}

export interface Aimag {
  id: number;
  name: string;
  area: string;
  naturalSites: NaturalSite[];
}

export const aimags: Aimag[] = [
  {
    id: 1,
    name: "Архангай",
    area: "55,313 км²",
    naturalSites: [
      {
        name: "Тэрхийн Цагаан нуур",
        description:
          "Алтайн нурууны зүүн талд орших үзэсгэлэнтэй байгалийн цогцолбор нуур.",
      },
      {
        name: "Хоргын тогоо",
        description: "Үзэсгэлэнт байгалийн галт уулын тогоо.",
      },
      {
        name: "Тайхар чулуу",
        description: "Түүх соёлын дурсгалт чулуу.",
      },
    ],
  },
  {
    id: 2,
    name: "Баян-Өлгий",
    area: "45,704 км²",
    naturalSites: [
      {
        name: "Алтай таван богд",
        description:
          "Монголын баруун хязгаарт орших байгалийн цогцолбор газар.",
      },
      {
        name: "Потанины мөсөн гол",
        description: "Уур амьсгалын өвөрмөц тогтоц бүхий мөсөн гол.",
      },
    ],
  },
  {
    id: 3,
    name: "Баянхонгор",
    area: "116,000 км²",
    naturalSites: [
      {
        name: "Шаргалжуутын рашаан",
        description: "Эрүүл мэндэд тустай, амралт сувиллын газар.",
      },
      {
        name: "Эрдэнэцогтын хад",
        description: "Түүх, соёлын дурсгалт хад чулуу.",
      },
    ],
  },
  {
    id: 4,
    name: "Булган",
    area: "48,700 км²",
    naturalSites: [
      {
        name: "Булган гол",
        description: "Байгалийн үзэсгэлэнт гол.",
      },
      {
        name: "Нарийнтээлийн хүрхрээ",
        description: "Үзэсгэлэнт хүрхрээ.",
      },
    ],
  },
  {
    id: 5,
    name: "Говь-Алтай",
    area: "141,500 км²",
    naturalSites: [
      {
        name: "Алтайн нурууны хребет",
        description: "Өндөр уулс, байгалийн баялаг.",
      },
      {
        name: "Цагаан нуур",
        description: "Үзэсгэлэнтэй нуур.",
      },
    ],
  },
  {
    id: 6,
    name: "Говьсүмбэр",
    area: "5,541 км²",
    naturalSites: [
      {
        name: "Цэцэг нуур",
        description: "Байгалийн цогцолбор.",
      },
    ],
  },
  {
    id: 7,
    name: "Дархан-Уул",
    area: "3,275 км²",
    naturalSites: [
      {
        name: "Дарханы хүрхрээ",
        description: "Үзэсгэлэнт хүрхрээ, аялал жуулчлалын газар.",
      },
    ],
  },
  {
    id: 8,
    name: "Дорноговь",
    area: "109,472 км²",
    naturalSites: [
      {
        name: "Говийн элсэн манхан",
        description: "Үлэмж том элсэн манхан.",
      },
      {
        name: "Цагаан суварга",
        description: "Түүхэн дурсгалт газар.",
      },
    ],
  },
  {
    id: 9,
    name: "Дорнод",
    area: "123,597 км²",
    naturalSites: [
      {
        name: "Халх гол",
        description: "Түүхэн дурсгалт гол.",
      },
      {
        name: "Буйр нуур",
        description: "Үзэсгэлэнт нуур.",
      },
    ],
  },
  {
    id: 10,
    name: "Дундговь",
    area: "74,000 км²",
    naturalSites: [
      {
        name: "Цэцэгтийн хүрхрээ",
        description: "Байгалийн гоё хүрхрээ.",
      },
    ],
  },
  {
    id: 11,
    name: "Завхан",
    area: "82,455 км²",
    naturalSites: [
      {
        name: "Тосон бумбын рашаан",
        description: "Эрүүл мэндэд тустай рашаан.",
      },
      {
        name: "Хяргас нуур",
        description: "Үзэсгэлэнт нуур.",
      },
    ],
  },
  {
    id: 12,
    name: "Өвөрхангай",
    area: "62,895 км²",
    naturalSites: [
      {
        name: "Тэрхийн цагаан нуур",
        description: "Үзэсгэлэнт байгалийн нуур.",
      },
      {
        name: "Арвайхээрийн хүрхрээ",
        description: "Сайхан хүрхрээ.",
      },
    ],
  },
  {
    id: 13,
    name: "Өмнөговь",
    area: "165,380 км²",
    naturalSites: [
      {
        name: "Хонгорын цөл",
        description: "Говийн том цөл.",
      },
      {
        name: "Эрдэнэтийн уул",
        description: "Үзэсгэлэнт уул.",
      },
    ],
  },
  {
    id: 14,
    name: "Сүхбаатар",
    area: "82,300 км²",
    naturalSites: [
      {
        name: "Тарвагатайн нуруу",
        description: "Уулын цогцолбор газар.",
      },
      {
        name: "Галшар нуур",
        description: "Байгалийн гоё нуур.",
      },
    ],
  },
  {
    id: 15,
    name: "Сэлэнгэ",
    area: "41,152 км²",
    naturalSites: [
      {
        name: "Туул гол",
        description: "Үзэсгэлэнт гол.",
      },
      {
        name: "Сэлэнгэ мөрөн",
        description: "Гол мөрний бүс.",
      },
    ],
  },
  {
    id: 16,
    name: "Төв",
    area: "74,042 км²",
    naturalSites: [
      {
        name: "Хархорин гол",
        description: "Үзэсгэлэнт гол.",
      },
      {
        name: "Өндөрхаан уул",
        description: "Уулын бүс.",
      },
    ],
  },
  {
    id: 17,
    name: "Увс",
    area: "69,585 км²",
    naturalSites: [
      {
        name: "Увс нуур",
        description: "Том нуур.",
      },
      {
        name: "Мөнххайрхан уул",
        description: "Өндөр уул.",
      },
    ],
  },
  {
    id: 18,
    name: "Ховд",
    area: "76,060 км²",
    naturalSites: [
      {
        name: "Ховдын гол",
        description: "Гол мөрний бүс.",
      },
      {
        name: "Цэнгэл нуур",
        description: "Үзэсгэлэнт нуур.",
      },
    ],
  },
  {
    id: 19,
    name: "Хэнтий",
    area: "80,325 км²",
    naturalSites: [
      {
        name: "Хэнтийн нуруу",
        description: "Уулсын цогцолбор.",
      },
      {
        name: "Галшар",
        description: "Түүх соёлын дурсгалт газар.",
      },
    ],
  },
  {
    id: 20,
    name: "Хөвсгөл",
    area: "100,628 км²",
    naturalSites: [
      {
        name: "Хөвсгөл нуур",
        description: "Монголын хамгийн том цэнгэг усны нөөц.",
      },
      {
        name: "Арга гол",
        description: "Гол мөрний бүс.",
      },
    ],
  },
  {
    id: 21,
    name: "Орхон",
    area: "844 км²",
    naturalSites: [
      {
        name: "Орхон гол",
        description: "Гол мөрний бүс.",
      },
    ],
  },
];
