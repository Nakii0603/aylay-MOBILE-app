import { ImageSourcePropType } from "react-native";
export interface NaturalSite {
  name: string;
  description: string;
  image?: any;
  type?: string;
  gps?: { lat: number; lng: number };
  status?: string;
}

export interface Aimag {
  id: number;
  name: string;
  area: string;
  source: ImageSourcePropType;
  image: ImageSourcePropType;
  sum: number;
  population: number;
  features: string;
  mainSights: string[];
  naturalSites: NaturalSite[];
  description: string;
}

export interface QuestionType {
  id: number;
  question: string;
  options: string[];
}
export const questions: QuestionType[] = [
  {
    id: 1,
    question: "Хаашаа аялахыг хүсэж байна вэ?",
    options: [
      "Уул, ой",
      "Нуур, гол",
      "Хот дотор",
      "Түүхэн дурсгалт газар",
      "Цөл, хээр",
    ],
  },
  {
    id: 2,
    question: "Хэнтэй аялмаар байна вэ?",
    options: [
      "Найзуудтайгаа",
      "Ганцаараа",
      "Гэр бүлтэйгээ",
      "Ажлын хамт олонтой",
      "Хосоороо",
    ],
  },
  {
    id: 3,
    question: "Ямар төрлийн аялал таны сонирхлыг хамгийн их татдаг вэ?",
    options: [
      "Адал явдалт",
      "Амралтын",
      "Соёлын",
      "Байгалийн",
      "Спортын",
      "Эрүүл мэндийн / рашаан",
    ],
  },
  {
    id: 4,
    question: "Аялах хугацаа хэд хоног байвал тохиромжтой вэ?",
    options: ["1 өдөр", "2 өдөр", "3-4 өдөр", "5-7 өдөр", "7+ өдөр"],
  },
  {
    id: 5,
    question: "Аялахад зарцуулах төсөв (₮)?",
    options: ["100к хүртэл", "100к–300к", "300к–600к", "600к–1 сая", "1 сая+"],
  },
  {
    id: 6,
    question: "Таны амьдардаг газар?",
    options: ["Улаанбаатар", "Дархан", "Эрдэнэт", "Бусад аймгийн төв"],
  },
  {
    id: 7,
    question: "Аялах хамгийн тохиромжтой улирал?",
    options: ["Хавар", "Зун", "Намар", "Өвөл"],
  },
  {
    id: 8,
    question: "Аялах зай хэр хол байвал танд тохиромжтой вэ?",
    options: [
      "50км дотор",
      "100км дотор",
      "300км дотор",
      "500км дотор",
      "500км+",
    ],
  },
  {
    id: 9,
    question: "Дотоод аялалд хамгийн чухал гэж үздэг зүйл юу вэ?",
    options: [
      "Үнэ",
      "Аюулгүй байдал",
      "Байгаль орчин",
      "Үйлчилгээний чанар",
      "Хүртээмжтэй байдал",
    ],
  },
  {
    id: 10,
    question: "Ямар тээврийн хэрэгсэл илүү тохиромжтой вэ?",
    options: [
      "Хувийн машин",
      "Аяллын автобус",
      "Галт тэрэг",
      "Дугуй / явган",
      "Мотоцикл",
    ],
  },
  {
    id: 11,
    question: "Та ямар хоолны сонголтонд илүү ач холбогдол өгдөг вэ?",
    options: [
      "Органик / эрүүл хоол",
      "Орон нутгийн хоол",
      "Хурдан хоол",
      "Өөрөө бэлтгэх",
      "Амт чанар",
      "Үнэ",
    ],
  },
  {
    id: 12,
    question: "Аяллын үеэр ямар үйл ажиллагаа таны сонирхлыг татдаг вэ?",
    options: [
      "Ууланд алхах",
      "Усан спорт",
      "Фотографи",
      "Соёлын арга хэмжээ",
      "Рашаан сувилал",
      "Зугаатай тоглоом / адал явдалт парк",
    ],
  },
  {
    id: 13,
    question: "Та өмнө нь дотооддоо аялж байсан уу?",
    options: ["Тийм, байнга", "Заримдаа", "Цөөхөн хэдэн удаа", "Үгүй"],
  },
  {
    id: 14,
    question: "Та аялалдаа ямар хөтөлбөр илүүд үздэг вэ?",
    options: [
      "Чөлөөт цаг ихтэй",
      "Нягт төлөвлөгөөтэй",
      "Холимог",
      "Тодорхойгүй",
    ],
  },
  {
    id: 15,
    question: "Та шөнийг хэрхэн өнгөрүүлэхийг илүүд үздэг вэ?",
    options: [
      "Кемпинг / майханд",
      "Зочид буудалд",
      "Амралтын газар",
      "Айлынд буух",
      "Галт тэргэнд эсвэл аяллын автобуст",
    ],
  },
];

export const aimags: Aimag[] = [
  {
    id: 1,
    name: "Архангай",
    area: "55,313 км²",
    source: require("@/assets/regions/arhagai.png"),
    image: require("@/assets/aimag/a1.png"),
    sum: 19,
    population: 93700,
    features: "Хангайн уулс, хүйтний суварга, рашаан",
    mainSights: ["Тэрхийн цагаан нуур", "Хоргын тогоо", "Чулуутын гол"],
    description:
      "Архангай аймаг нь Монголын төв хэсэгт оршдог бөгөөд эртний Хүннү, Түрэг, Уйгурын түүхэн өвийг агуулсан нутаг юм. Энэ нутагт эртний хиргисүүр, хүн чулуун дурсгалууд элбэг бөгөөд хожим Их Монгол Улсын үед чухал байр суурь эзэлж байв. Богд хаант Монгол улсын үед хошуудын зохион байгуулалтад байсан энэ бүс нутаг нь 1931 онд аймгийн зохион байгуулалттай болсон. Архангай нь нэрт ноёд, лам хуврагууд, соёлын зүтгэлтнүүд төрсөн өлгий нутаг юм.",
    naturalSites: [
      {
        name: "Тэрхийн Цагаан нуур",
        description: "Архангай аймгийн үзэсгэлэнт нуур",
        image: "https://www.montsame.mn/files/p1cijiibo2e8j1phca0m5li13ls3.jpg",
      },
      {
        name: "Хоргын тогоо",
        description:
          "Одоогоос найман мянга орчим жилийн өмнө дэлбэрч байгаад унтарсан галт уул гэдгийг манай газар зүйн эрдэмтэд тогтоосон байдаг юм.",
        image:
          "https://www.mnb.mn/uploads/202210/news/thumb/f939e8568b66d63950e7603004af82ac_x3.jpg",
      },
      {
        name: "Тайхар чулуу",
        description:
          "Тайхар чулуу нь Архангай аймгийн Тариат сумын нутагт орших 40 метр өндөр, 25 метр өргөн, 10 метр зузаан, 2500 тонн жинтэй монголын хамгийн том чулуун дурсгал юм.",
        image: "https://mapio.net/images-p/17543314.jpg",
      },
      {
        name: "Суварга хайрхан",
        description:
          "Суварга хайрхан нь Архангай аймгийн Тариат сумын нутагт орших 2,500 метр өндөртэй уул юм. Энэ уул нь байгалийн үзэсгэлэнт газар бөгөөд аялал жуулчлалын чухал төв юм.",
        image:
          "https://mecc.mn/wp-content/uploads/2019/05/%D0%A1%D1%83%D0%B2%D1%80%D0%B0%D0%B3%D0%B0-%D1%85%D0%B0%D0%B9%D1%80%D1%85%D0%B0%D0%BD.jpg",
      },
      {
        name: "Чулуутын гол",
        description:
          "Чулуутын гол нь Архангай аймгийн Тариат сумын нутагт орших 100 км урт, 20-30 метр өргөн гол юм. Энэ гол нь байгалийн үзэсгэлэнт газар бөгөөд загас агнуур, завиар аялал хийхэд тохиромжтой.",
        image: "https://www.zindaa.mn/images/news/origin/13/Chuluut%20gol.jpg",
      },
      {
        name: "Тамирын гол",
        description:
          "Тамирын гол нь Архангай аймгийн Тариат сумын нутагт орших 150 км урт, 30-40 метр өргөн гол юм. Энэ гол нь байгалийн үзэсгэлэнт газар бөгөөд загас агнуур, завиар аялал хийхэд тохиромжтой.",
        image: "https://www.montsame.mn/files/60e2b4eec5b3f.jpeg",
      },
      {
        name: "Булган уул",
        description:
          "Булган уул нь Архангай аймгийн Тариат сумын нутагт орших 2,500 метр өндөртэй уул юм. Энэ уул нь байгалийн үзэсгэлэнт газар бөгөөд аялал жуулчлалын чухал төв юм.",
        image: "https://montsame.mn/files/65e00462b46b0.jpeg",
      },
      {
        name: "Билгэ хааны цогцолбор",
        description:
          "Билгэ хааны цогцолбор нь Архангай аймгийн Тариат сумын нутагт орших 8-9-р зууны үеийн түүхэн дурсгал юм. Энэ цогцолбор нь Монголын түүх, соёлын чухал төв юм.",
        image:
          "https://mongoliantravel.weebly.com/uploads/2/0/3/5/20355207/3861007.jpg?376",
      },
    ],
  },

  {
    id: 2,
    name: "Баян-Өлгий",
    area: "45,704 км²",
    source: require("@/assets/regions/baynulgii.png"),
    image: require("@/assets/aimag/a2.png"),
    sum: 13,
    population: 113800,
    features: "Казах соёл, Алтай Таван Богд",
    mainSights: ["Алтай Таван Богд", "Потанины мөсөн гол", "Ачит нуур"],
    description:
      "Баян-Өлгий нь 1940 онд Увс, Ховд аймгаас салбарлан байгуулагдсан бөгөөд казах ястны төвлөрсөн амьдралын бүс нутаг болсон. Казах түмний анхны нүүдэл 1800-аад оны сүүлээр эхэлсэн ба ЗХУ-ын шахалтаар XX зууны эхэн үед олноороо нүүдэллэн иржээ. Энд амьдардаг ард түмэн үндэсний онцлог, соёл, шашин шүтлэг, бүргэдээр ан хийх уламжлалаа хадгалж ирсэн нь Монголын олон ястаны нэгэн соёлын үнэт өв юм.",
    naturalSites: [
      {
        name: "Ёлтын сав газар",
        description: "Баян-Өлгий аймгийн үзэсгэлэнт газар",
        image:
          "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.6435-9/106717370_148469280175114_5422474078517150258_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YM7rvPyFT9EQ7kNvwEAAeg8&_nc_oc=AdkJZlhsy7ryWn2n3tfa5fhWC-jGbQKZM2P1uF1R1-z63A2WqkO6_k41lNkabktsK-eVICFfLux8e8i7fAOW4JYS&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&_nc_gid=FqgDjqAmXgy_hr7BJSjOdQ&oh=00_AfR2JhJkwdjxDzl5tm3vHafFgbCXElMs6n9BCuwjAzS0-g&oe=68A95EBF",
      },
      {
        name: "Бага Ойгарын цагаан салаагийн хадны сүг зураг",
        description: "Баян-Өлгий аймгийн түүхэн дурсгал",
        image: "https://www.touristinfocenter.mn/Images/Cate/1/lx403ofw.jpg",
      },
      {
        name: "Бага Түргэний хүрхрээ",
        description: "",
        image: "https://montsame.mn/files/626b712c54fdd.jpeg",
      },
      {
        name: "Толбо нуур",
        description: "",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhLDmAUIVkp7f8paEpM2EkBImD1Z_4pGs7CaoyjzjHGKU2-WFMa-i8h_2Q_sN5TSkUvXxdocpDdktJjjasDSGT0Cy6mQOcXl6rgspVD6p8aYLQqKM4_8Iq-4-E2HTrJx142YEDJInjXe4/s1600/tolbo.jpg",
      },
      {
        name: "Ачит нуур",
        description: "",
        image:
          "https://mnb.mn/uploads/201911/news/thumb/95fb4c3654ad5495b5fd65e019b1bccc_x3.jpg",
      },
      {
        name: "Алтай таван богд",
        description: "",
        image:
          "https://cdn.greensoft.mn/uploads/site/809/post/new_0b20381d09c21b468df793889c0e48f821b03ebc.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Баянхонгор",
    area: "116,000 км²",
    source: require("@/assets/regions/baynhongor.png"),
    image: require("@/assets/aimag/a3.png"),
    sum: 20,
    population: 88700,
    features: "Говь–уулсын хослол, рашаан",
    mainSights: [
      "Өлгийн Түрэгийн бичээс",
      "Шаргалжуутын рашаан",
      "Их Богд уул",
    ],
    description:
      "Баянхонгор нь Хангай, Говь, Алтайн уулсын заагт орших түүхэн нутаг юм. Эртнээс нааш мал аж ахуй, худалдаа арилжаа хөгжсөн бүс нутаг байв. Хожим Богд хаант Монгол улсын үед шавь нараас бүрдсэн хошуу, сүм хийд олонтой байсан бөгөөд 1941 онд аймаг болон шинэчлэгдсэн. Баянхонгор нь домогт мэргэн үгтэй хутагт хувилгаад, утга зохиолын гарамгай хүмүүсээрээ алдартай.",
    naturalSites: [
      // өмнөх 2
      {
        name: "Цагаан агуй",
        description: "",
        image:
          "https://mnb.mn/uploads/202303/news/thumb/451c09731afcc6584bdd7c81221667fd_x3.jpg",
      },
      {
        name: "Бичигт хад",
        description: "",
        image:
          "https://lh6.googleusercontent.com/proxy/kPHYosMf-k0oedmUwroRNalvQhqgA05Vm_vj_dgROjcqHJpbWMtuJYj6bFfnaa7dEnGUO4Th6zQRbwQlnZyIjmLaLcELwXTZzWI",
      },
      {
        name: "Шатар чулуун хөшөө",
        description: "",
        image: "https://www.montsame.mn/files/63db4865329e0.jpeg",
      },
      {
        name: "Түрэгийн үеийн бичээс",
        description: "",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMX7h9ovVCqdzrZ2EOdIOnj2vPwcR9L1e7kw&s",
      },
      {
        name: "Бүгийн цавийн хоолой",
        description: "",
        image:
          "https://www.touristinfocenter.mn/Images/Cate/1/Bugiin%20tsaviin%20hooloi.jpg",
      },
      {
        name: "Их Богд уул",
        description: "",
        image:
          "https://www.ulsturch.mn/resource/uploads/article/2021-05/60b07be0a9f75.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Булган",
    area: "48,700 км²",
    source: require("@/assets/regions/bulgan.png"),
    image: require("@/assets/aimag/a4.png"),
    sum: 16,
    population: 61500,
    features: "Сэлэнгэ мөрөн, рашаан, ой",
    mainSights: ["Хөгнө Тарна", "Хар бухын балгас", "Уран тогоо"],
    description:
      "Булган аймаг нь түүхэн Чингис хааны төрсөн нутагтай ойр байрладаг бөгөөд Хан Хэнтийн нурууны салбар уулсаар хүрээлэгдсэн бүс нутаг юм. Эртнээс нааш угсаатны нүүдэл, хаадын орд байрлаж байсны ул мөр нь өнөөг хүртэл хадгалагдаж иржээ. 1938 онд байгуулагдсан тус аймаг нь Монголын эртний овог аймгуудын суурьшиж байсан газруудын нэгэнд тооцогддог.",
    naturalSites: [
      // өмнөх 2
      {
        name: "Хөгнө тарна байгалийн цогцолборт газар",
        description: "",
        image: "https://www.nature.bu.gov.mn/images/news/220600008.jpg",
      },
      {
        name: "Уран тогоо уул",
        description: "",
        image: "https://montsame.mn/files/665ad1794ba03.png",
      },
      {
        name: "Шивээт улааны цогцолбор",
        description: "",
        image:
          "https://montsame.mn/uploads/content/1de113ee5ef7311bd0496f109dac035e.png",
      },
      {
        name: "Хар бухын балгас",
        description: "",
        image:
          "https://montsame.mn/uploads/content/c3d16c331c7dec51df7753e41109eaef.png",
      },
      {
        name: "Чин толгойн балгас",
        description: "",
        image: "https://montsame.mn/files/5fc3267ecb79f.png",
      },
      {
        name: "Бий булгын балгас",
        description: "",
        image: "https://montsame.mn/files/5ef05f4567fa2.png",
      },
      {
        name: "Могойн шинэ ус",
        description: "",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRysCVRbfO7hR6Faxjc8LoWtJL0EDJ67FRwNw&s",
      },
    ],
  },
  {
    id: 5,
    name: "Говь-Алтай",
    area: "141,500 км²",
    source: require("@/assets/regions/gobialtai.png"),
    image: require("@/assets/aimag/a5.png"),
    sum: 18,
    population: 57500,
    features: "Говь–уулын хослол, онгон байгалийн тогтоц",
    mainSights: ["Ээж хайрхан", "Монгол элс", "Цагаан голын хадны зураг"],
    description:
      "Говь-Алтай нь түүхэн Алтайн нурууны Монгол дахь хэсэгт орших ба эртний түрэг, скифийн соёлын өлгий нутаг юм. Эндхийн уул, агуй, хадны зураг, хүн чулуу нь Монголын олон мянган жилийн соёлын ул мөрийг хадгалсан байдаг. 1940 онд Ховд аймгаас салбарлан байгуулагдсан бөгөөд түүх, угсаатны судлалд онцгой байр суурь эзэлдэг.",
    naturalSites: [
      // өмнөх 2
      {
        name: "Ээж хайрхан уул",
        description: "",
        image:
          "https://mnb.mn/uploads/201903/news/thumb/8ca27657cd26f951833031ab345ba907_x3.jpg",
      },
      {
        name: "Бурхан буудай уул",
        description: "",
        image:
          "https://content.ikon.mn/news/2023/8/1/3v1lrj_74908155_134567978264062_2792927075961340927_n_x974.jpg",
      },
      {
        name: "Сутай хайрхан уул",
        description: "",
        image: "https://montsame.mn/files/5d36af61bbef8.jpeg",
      },
      {
        name: "Цагаан голын хадны зураг",
        description: "",
        image: "https://ncch.gov.mn/Files/Immovable/104.jpg",
      },
      {
        name: "Монгол элс",
        description: "",
        image:
          "https://scontent.fuln1-2.fna.fbcdn.net/v/t1.6435-9/94878474_148928136777357_3192598870727065600_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=xvKbfsgBN3YQ7kNvwHbstzt&_nc_oc=Adk4f5GMghH2T7Xu_4r3DJ5QwrrdU3mDqUyWOsPAhP09RKNglvVEb0mMlERHwkQGicFz312SGtaz7KC9Z6V-IDNb&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&_nc_gid=9YDubV-bouvPKODKYpJqYQ&oh=00_AfRgnJrfwA9oGJtatZ6fQBqo5CZKZTTRefNsZwIDpysFUw&oe=68A93CCF",
      },
      {
        name: "Хасагт хайрхан уул",
        description: "",
        image:
          "https://travel.govi-altai.gov.mn/uploads/image/2022/08/1661601776_7f00096941508d671135.jpeg",
      },
      {
        name: "Аж Богдын нуруу",
        description: "",
        image:
          "https://news.zindaa.mn/images/news/origin/14/aj%20bogdin%20nuruu.jpg",
      },
      {
        name: "Шаахар толгой",
        description: "",
        image:
          "https://montsame.mn/uploads/content/8fa0ab5682732067fab7e6ee98230f64.png",
      },
    ],
  },
  {
    id: 6,
    name: "Говьсүмбэр",
    area: "5,541 км²",
    source: require("@/assets/regions/govisumber.png"),
    image: require("@/assets/aimag/a6.png"),
    sum: 3,
    population: 18100,
    features: "Хамгийн жижиг аймаг",
    mainSights: ["Чойрын Богд уул", "Зүүн жанжин хийд", "Цоорхойн рашаан"],
    description:
      "Говьсүмбэр нь Монголын хамгийн залуу аймгуудын нэг бөгөөд 1994 онд байгуулагдсан. Өмнө нь Дорноговийн нэгэн хэсэг байсан энэ нутаг нь түүхэн зам харилцааны төв байж ирсэн. Их говийн зааг дээр орших энэ бүс нутгийн нэр нь нутгийн сүм хийдийн нэртэй холбоотой бөгөөд Монголын шашин, зам тээврийн түүхэнд чухал үүрэг гүйцэтгэж иржээ.",
    naturalSites: [
      {
        name: "ЧОЙРЫН БОГД УУЛ",
        description: "",
        image:
          "https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/469124468_428443883664405_3398676634080714390_n.jpg?stp=dst-jpg_p600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KE3OJ-ZyUOgQ7kNvwFDXEuj&_nc_oc=AdlXqv4C0SjXSC1zmGQYtQdW5ETuY6cHkesibaN-ycL0i-Fd2CZ-TBLvad6CkVIb5x5I0AmisG30CmIFUpwvOBjL&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&_nc_gid=ObH8SB3hnow_TE1-PB-HQw&oh=00_AfRJfvXP_ochgA1fP0j4o50VzphSIsVbmOEF4ZXXdFL3gA&oe=6887C1F2",
      },

      {
        name: "Зүүн жанжин Чойрын хийдийн туурь",
        description: "",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZ4MavA_zQyevmdPDQP634pU015QunK_HcA&s",
      },
      {
        name: "Цагаан дарь эх",
        description: "",
        image: "https://tourism.govisumber.gov.mn/upload/lavlah/8_2638336.jpg",
      },
      {
        name: "Дагвасүндэл бурхан",
        description: "",
        image: "https://i.ytimg.com/vi/Am8Bl_BVCKI/maxresdefault.jpg",
      },
      {
        name: "Цоорхойн рашаан",
        description: "",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ461s84XVKVhkeOOOMAgzpbSfyd4IFoI8xbA&s",
      },
    ],
  },
  {
    id: 7,
    name: "Дархан-Уул",
    area: "3,275 км²",
    source: require("@/assets/regions/darhan.png"),
    image: require("@/assets/aimag/a7.png"),
    sum: 4,
    population: 107800,
    features: "Аж үйлдвэр, Орхон гол",
    mainSights: ["Тахилгат уул", "Шарын гол", "Дурлалын мод"],
    description:
      "Дархан-Уул нь 1994 онд Сэлэнгэ аймгаас салбарлан байгуулагдсан бөгөөд Монголын аж үйлдвэржилтийн бэлгэ тэмдэг болсон хот, бүс нутаг юм. 1960-аад онд ЗХУ-ын тусламжаар Дархан хотыг барьж байгуулсан нь Монголын социалист бүтээн байгуулалтын нэгэн тод илэрхийлэл болсон. Энэ газар нь эртнээсээ тариалан, нүүдэлчний аж амьдралын уулзвар бүс байжээ.",
    naturalSites: [
      // өмнөх 1
      {
        name: "Тахилгат их дархан уул",
        description: "",
        image: "https://darkhanculture.ucoz.org/shariin_gol/tahilgat_uul.png",
      },
      {
        name: "Дурлалын мод",
        description: "",
        image:
          "https://www.touristinfocenter.mn/Images/Cate/1/Durlaliin%20mod.jpg",
      },
      {
        name: "Дүрс нарс",
        description: "",
        image:
          "https://mongoliantravel.weebly.com/uploads/2/0/3/5/20355207/2666235.jpg?284",
      },
      {
        name: "Лам Дондовын рашаан",
        description: "",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqFwoD-TfBmPWRdqC_eney5LDXZ9N4BRQtwQ&s",
      },
      {
        name: "Хүйтний голын хадны бичээс",
        description: "",
        image: "https://ncch.gov.mn/Files/Immovable/130.jpg",
      },
    ],
  },
  {
    id: 8,
    name: "Дорноговь",
    area: "109,472 км²",
    source: require("@/assets/regions/dornogobi.png"),
    image: require("@/assets/aimag/a8.png"),
    sum: 14,
    population: 71300,
    features: "Говийн аялал, элс",
    mainSights: ["Хамрын хийд", "Цагаан дарь эх", "Цонжийн чулуу"],
    description:
      "Дорноговь нь Монголын говийн бүсийн чухал түүхэн нутаг бөгөөд эртнээс худалдаа, шашин, соёлын огтлолцлын цэг байв. Түүхэн “Цагаан суварга”, “Хамрын хийд” зэрэг газрууд нь шашны болон гүн ухааны соёлын өвийг хадгалсан. 1931 онд аймаг болон зохион байгуулагдаж, Хятадын хил дагуух бүс нутгийн түүх, геополитикийн онцлогийг илтгэнэ.",
    naturalSites: [
      // өмнөх 2
      {
        name: "Сүйхэнт, Өлгий хийд",
        description: "",
        image:
          "https://content.ikon.mn/news/2018/6/6/5e3c91_b265996c-f4a0-488d-b946-b1bb77cca4b7_x974.jpg",
      },
      {
        name: "Цонжийн чулуу",
        description: "",
        image: "https://www.touristinfocenter.mn/Images/Cate/1/zlxgsadt.jpg",
      },
      {
        name: "Хамрын хийдийн цогцолбор",
        description: "",
        image:
          "https://news.zindaa.mn/images/news/origin/12/59586051_2822813284611038_998213853437231104_n.jpg",
      },
      {
        name: "Эргэлийн зоо",
        description: "",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JZWNpagRXYcIcgTPlJT7-YIYsuHAsmv26A&s",
      },
      {
        name: "Нүдэнгийн хонхор",
        description: "",
        image:
          "https://dornogovinutag.wordpress.com/wp-content/uploads/2018/11/1523414939_25396170_321913664882831_2009865153604265700_n.jpg?w=640",
      },
    ],
  },
  {
    id: 9,
    name: "Дорнод",
    area: "123,597 км²",
    source: require("@/assets/regions/dornod.png"),
    image: require("@/assets/aimag/a9.png"),
    sum: 14,
    population: 83700,
    features: "Тал нутаг, хил орчмын түүх",
    mainSights: ["Халх гол", "Буур нуур", "Хэрлэн‑Барс хот"],
    description:
      "Дорнод аймаг нь эртний Хүннү, Сяньби, Жужан зэрэг нүүдэлчдийн эзэмшил нутаг байж, хожим Их Монгол Улсын түүхтэй нягт холбоотой болсон. 1930-аад онд Монгол-Зөвлөлтийн хамтарсан Халх голын тулалдаан болсон түүхэн чухал бүс нутаг бөгөөд энэ нь Монголын тусгаар тогтнолын бэлгэ тэмдэг болж үлдсэн. Дорнод нь түүхэн тэсвэр, тэмцлийн бэлгэдэл болсон нутаг юм.",
    naturalSites: [
      // өмнөх 2
      {
        name: "Чингисийн хэрмэн цав",
        description: "",
        image: "https://montsame.mn/files/p1cindcccrt4jie21ik3ps1rbo3.jpg",
      },
      {
        name: "Хэрлэн Барс хотын туурь, цамхаг",
        description: "",
        image:
          "https://lh3.googleusercontent.com/proxy/9bB6xxiYFT22eBcFn69l9Z45mBzRITuijmT9s6C5Y_FUXrVmg8M7XfLNdMzsoiKkF42fxuy_PoU0Nm0_vNbIZiL-pOz4AAj_v9V92RDerYSV4CIsOU9_dhkVGW7UKK052monOCHIqos4_A",
      },
      {
        name: "Их бурхант чулуун бурханы цогцолбор",
        description: "",
        image:
          "https://lh5.googleusercontent.com/proxy/QKUjbKoMeN2jBh5343B_hbtQk07oV4Ex-OIXHxSsuZGySRZmWMwvY7pVPmL47UwrzTgEKnnqwN0cd3dvnX1SYDZhHwr8zxkh_vxBjR9l_bpda_vw4SmJZxafEjqWHzzr91aXtnMNROtwlA",
      },
      {
        name: "Хамар даваа дээрх ялалтын хөшөө",
        description: "",
        image:
          "https://i0.wp.com/resource4.sodonsolution.org/hunnu/photo/2014/8/f166c25ea835dc8d5211becd9e1fbbc/161.jpg",
      },
      {
        name: "Вангийн цагаан уул",
        description: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/%D0%92%D0%B0%D0%BD%D0%B3%D0%B8%D0%B9%D0%BD_%D1%86%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD_%D1%83%D1%83%D0%BB.jpg/500px-%D0%92%D0%B0%D0%BD%D0%B3%D0%B8%D0%B9%D0%BD_%D1%86%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD_%D1%83%D1%83%D0%BB.jpg",
      },
    ],
  },
  {
    id: 10,
    name: "Дундговь",
    area: "74,000 км²",
    source: require("@/assets/regions/dundgobi.png"),
    image: require("@/assets/aimag/a10.png"),
    sum: 15,
    population: 46600,
    features: "Цөл, чулуулгийн тогтоц",
    mainSights: ["Их газрын чулуу", "Бага газрын чулуу", "Онгийн хийд"],
    description:
      "Дундговь нь эртний соёлын дурсгалуудтай, чулуу, хадны зураг, булш бунхантай бүс нутаг бөгөөд төвийн бүсийн онцгой нэгэн хэсэг юм. Энэхүү газар нь Монголын домог, аман зохиол, уртын дууны өлгий нутаг гэж үзэгддэг. 1942 онд Төв аймгаас салан байгуулагдаж, соёлын олон зүтгэлтнүүд төрөн гарсан нь энэ нутгийн онцлогийг харуулдаг.",
    naturalSites: [
      // өмнөх 2
      {
        name: "Дэл уул",
        description: "",
        image:
          "https://content.ikon.mn/news/2015/10/9/199659_11000042_467078106780448_8603821141515207511_n_x974.jpg",
      },
      {
        name: "Бага газрын чулуу",
        description: "",
        image: "https://montsame.mn/files/5ece2423ba7f1.jpeg",
      },
      {
        name: "Онгийн хийдийн туурь",
        description: "",
        image: "https://www.montsame.mn/files/5ec3947b58cdb.jpeg",
      },
      {
        name: "Өөш манхан",
        description: "",
        image:
          "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.6435-9/67223389_718239585285260_4697619874409611264_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_WDMXWO6LZMQ7kNvwHWQSjJ&_nc_oc=AdlmvdjDv80AuKtIFUPa5GkgOM9pvpxi6QrWrrOgv1eCHxAAAqhCMISoKDMjlOiE2msoZv6Oq8_2jjZy1XZoiN2-&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&_nc_gid=qNTyQ8Ne32g2MrcOTIxW5A&oh=00_AfT47-de8mkQOk2YI-rCPjvqvlQUk94OoULtEJX7rZnC1Q&oe=68A94458",
      },
      {
        name: "Дэлгэрхангай уул",
        description: "",
        image:
          "https://www.touristinfocenter.mn/Images/Cate/1/Delgerhangai%20uul.jpg",
      },
    ],
  },
  {
    id: 11,
    name: "Завхан",
    area: "82,455 км²",
    source: require("@/assets/regions/zawhan.png"),
    image: require("@/assets/aimag/a11.png"),
    sum: 24,
    population: 72300,
    features: "Хангай–Говийн зааг, Отгонтэнгэр",
    mainSights: ["Отгонтэнгэр", "Хар нуур", "Тэс гол", "Идэр гол"],
    description:
      "Завхан аймаг нь эртний Уйгур, Хидан, Монголын хаадын түүхтэй гүн холбоотой нутаг бөгөөд баруун хойд Хангайн салбар уулс болон говь хангайн заагт оршдог. Энд олон хийд сүм, эртний чулуун дурсгал, хүн чулуун хөшөө, гэрэлт хөшөөд байдаг. Монголын сэргэн мандалтын үед оюун санааны том төв байсныг харуулдаг. 1931 онд аймаг болгон зохион байгуулагдсан бөгөөд Заяын гэгээний хийд, Тэсийн соёл зэрэг нь түүхийн чухал хуудас юм.",
    naturalSites: [
      // өмнөх 2
      {
        name: "Отгонтэнгэр хайрхан",
        description: "",
        image:
          "https://cdn.greensoft.mn/uploads/users/1977/images/mongol%20aylal/%D0%9E%D1%82%D0%B3%D0%BE%D0%BD%D1%82%D1%8D%D0%BD%D0%B3%D1%8D%D1%80%20%D1%85%D0%B0%D0%B8%CC%86%D1%80%D1%85%D0%B0%D0%BD.jpeg",
      },
      {
        name: "Хар нуур",
        description: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Har_Nuur.jpg/1200px-Har_Nuur.jpg",
      },
      {
        name: "Загастайн давааны хүн чулуу",
        description: "",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6Z3RRUKoN7y7M7dzqV4L1ljyMzaNpoa96Q&s",
      },
      {
        name: "Бор хярын элсэн манхан",
        description: "",
        image:
          "https://www.touristinfocenter.mn/Images/Cate/1/Bor%20hyariin%20els.jpg",
      },
      {
        name: "Мухартын гол",
        description: "",
        image: "https://montsame.mn/files/6729b6d923810.jpeg",
      },
      {
        name: "Их хайрхан уул",
        description: "",
        image:
          "https://scontent.fuln1-2.fna.fbcdn.net/v/t1.6435-9/29261687_1995290630732724_6797736501355479040_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zMV3HBG6x3QQ7kNvwFzQs6B&_nc_oc=AdlcdsZ1w0DdVxJkImW0Q4m4VOBfALRz-_-YU6KolqP2TBB3fk4C2Tneenp92fFMZJAcLM1mdLJReD83sSPWjKFY&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&_nc_gid=YMx5HuTqV29WrARxivdU8A&oh=00_AfQfmnVjNFLGMBa_f5Y_2jXrlppqNg4liorGDAD9X5q-lg&oe=68A96B6D",
      },
      {
        name: "Дааган дэлийн буган чулуун хөшөө",
        description: "",
        image: "https://montsame.mn/files/66b4a0d42b855.jpeg",
      },
    ],
  },
  {
    id: 12,
    name: "Орхон",
    area: "844 км²",
    source: require("@/assets/regions/orhon.png"),
    image: require("@/assets/aimag/a12.png"),
    sum: 2,
    population: 108900,
    features: "Уул уурхай, хүн ам олонтой",
    mainSights: ["Хүннү дурсгал", "Бөөрөнхий сайр"],
    description:
      "Орхон аймаг 1994 онд Булган аймгийн нутаг дэвсгэрээс тусгаарлагдан шинээр байгуулагдсан. Эрдэнэт хотыг төвтэй энэ аймаг нь социалист үеийн томоохон бүтээн байгуулалтын төлөөлөл болсон Эрдэнэт уул уурхайн үйлдвэртэй шууд холбоотой. Гэсэн ч түүхэн хувьд энэ бүс нь эртний нүүдэлчдийн зам, хөдөө орон нутгийн эдийн засгийн уулзвар цэг байсан. Өнөөдөр тус аймаг нь орчин үеийн аж үйлдвэр, хотжилтын бэлгэ тэмдэг болон хөгжиж байна.",
    naturalSites: [
      {
        name: "Айргийн гозгорын Хүннүгийн бүлэг дурсгалт",
        description: "",
        image:
          "https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/470196961_440935669070363_8135975769875180742_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bmmeAbaec7UQ7kNvwFXIwez&_nc_oc=Adne0NBO7joPY8rmuVLXGY6hIX424IJCR__HnxFFeWa94BpSFcqFbfcsuG44gZ7p-wvnDlPdX0aS1ELoZ1c60QmR&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&_nc_gid=cpMOLH2LtP1sniEYXRpifQ&oh=00_AfSwo23khUIv9Vo25pQAS7AfgdvymNCtgy6so1X6tAIu6Q&oe=6887A1FA",
      },
      {
        name: "Бөөрөнхий сайр",
        description: "",
        image:
          "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.6435-9/56904905_1025602640984268_4196573898805870592_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s6PavWercuwQ7kNvwGPK0g6&_nc_oc=AdmYZYqmktK-VLst9s5yAjzeAB-a2kyndleZqep6ttNUwMbBhUAnwwlTW0eM2xuvFaSZIbxv69EbD9btH5eaf3Ec&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&_nc_gid=cH0g7qvi3iwvRJT036-UyA&oh=00_AfT2I8GO_q0WjLOxBhseIiYdeuCl82geLr7h4_dZ6ZCiyg&oe=68A9617E",
      },
    ],
  },
  {
    id: 13,
    name: "Өвөрхангай",
    area: "62,895 км²",
    source: require("@/assets/regions/uwurhangai.png"),
    image: require("@/assets/aimag/a13.png"),
    sum: 19,
    population: 115300,
    features: "Түүх, Хархорум хот",
    mainSights: ["Хархорум", "Эрдэнэ Зуу хийд", "Арц богд", "Хужиртын рашаан"],
    description:
      "Өвөрхангай нь Монголын түүхэнд маш чухал байр суурь эзэлдэг бөгөөд Хархорум хот буюу Их Монгол Улсын нийслэл байсан түүхэн нутаг юм. Чингис хааны байгуулсан Хархорум нь дэлхийн худалдаа, шашин, соёлын уулзвар цэг байв. XIII зуунд Монголын эзэнт гүрний төв болсон энэхүү газар нь өнөөдөр ч түүх, археологийн олдворуудаараа нэрд гарсан. 1931 онд аймаг болж, түүхэн утгаараа Монголын үндэстний бахархал хэвээр байна.",
    naturalSites: [
      // өмнөх 2
      {
        name: "Арц богд",
        description: "",
        image:
          "https://www.touristinfocenter.mn/Images/Cate/1/Arts%20bogdiin%20nuruu.jpg",
      },
      {
        name: "Хужиртын рашаан",
        description: "",
        image:
          "https://www.touristinfocenter.mn/Images/Cate/1/%D0%A5%D1%83%D0%B6%D0%B8%D1%80%D1%82%D1%8B%D0%BD%20%D1%80%D0%B0%D1%88%D0%B0%D0%B0%D0%BD%201.jpg",
      },
      {
        name: "Монгол түмний морины их шүтээн",
        description: "",
        image:
          "https://resource4.sodonsolution.org/assa/photo/2015/11/c41ce7b749053c4a/30c4851cd5eaaf94.jpg",
      },
      {
        name: "Эрдэнэ зуу хийд",
        description: "",
        image: "https://www.orkhonvalley.gov.mn/Files/Museum/1.jpg",
      },
      {
        name: "Тэвш уул",
        description: "",
        image:
          "https://resource4.sodonsolution.org/assa/photo/2015/11/e87212465fb9bde4/9b5ab594aa510cb1.jpg",
      },
      {
        name: "Төвхөн хийд",
        description: "",
        image:
          "https://scontent.fuln1-2.fna.fbcdn.net/v/t1.6435-9/107548183_3072849332797899_3268439222306369540_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pszGyhUHYNMQ7kNvwFXuNXV&_nc_oc=AdmVDvLJo6SG9insui3KN-Rd-r6VW3oAaV2xiIO84aCAZEXiwiZLB-ABRnqI-tS1nxa8lij30bmJGtF-J-nz_dJu&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&_nc_gid=JRhZ8VrmWxrM_C5oON6ofQ&oh=00_AfTx3-P-ZDx4xXdyaqxH1owTs1aK5X-gRNSk3fTWhnJ7Yg&oe=68A96C8D",
      },
    ],
  },
  {
    id: 14,
    name: "Өмнөговь",
    area: "165,380 км²",
    source: require("@/assets/regions/umnugobi.png"),
    image: require("@/assets/aimag/a14.png"),
    sum: 15,
    population: 72300,
    features: "Цөл, Хонгорын элс, Гурван сайхан",
    mainSights: ["Хонгорын элс", "Баянзаг", "Говь гурван сайхан", "Галбын цав"],
    description:
      "Өмнөговь нь Монголын хамгийн том говь нутгийг хамарсан бөгөөд эртнээс нааш нүүдэлчин овог аймгуудын нүүдлийн замд оршиж ирсэн. Эндээс олон төрлийн динозаврын чулуужсан олдвор илэрсэн нь дэлхийн палеонтологийн шинжлэх ухаанд том хувь нэмэр оруулсан. Марко Пологийн тэмдэглэлд ч энэ говийн талаар дурдсан байдаг. Шашин, соёлын дурсгалт газруудтай бөгөөд 1931 онд аймаг болсон.",
    naturalSites: [
      // өмнөх 2
      {
        name: "Говь гурван сайхан",
        description: "",
        image: "https://www.montsame.mn/files/602f1910bcd99.jpeg",
      },
      {
        name: "Баянзаг",
        description: "",
        image:
          "https://www.gazarchin.mn/wp-content/uploads/2021/04/%D0%91%D0%B0%D1%8F%D0%BD%D0%B7%D0%B0%D0%B32.jpg",
      },
      {
        name: "Хэрмэн цав",
        description: "",
        image:
          "https://huhtengeriinoron.wordpress.com/wp-content/uploads/2019/05/d0a5d18dd180d0bcd18dd0bd-d186d0b0d0b2-d3a8d0bcd0bdd3a9d0b3d0bed0b2d18c-d0b0d0b9d0bcd0b0d0b3-d093d183d180d0b2d0b0d0bdd182d18dd181.jpg",
      },
      {
        name: "Галбын говь",
        description: "",
        image:
          "https://huhtengeriinoron.wordpress.com/wp-content/uploads/2019/05/d093d0b0d0bbd0b1d18bd0bd-d0b3d0bed0b2d18c4.jpg",
      },
      {
        name: "Ноён богд",
        description: "",
        image:
          "https://resource4.sodonsolution.org/assa/photo/2015/11/e8926e08db33780a/45c240e210da96cc.jpg",
      },
      {
        name: "Толь хад",
        description: "",
        image:
          "https://news.mn/wp-content/archive1/blog/photo/2015/5/13/255290ba46db528bb5714fdc7be4652foriginal.jpg",
      },
      {
        name: "Алгуй улаан цав",
        description: "",
        image:
          "https://montsame.mn/uploads/content/7e2ed30127205e11edd0182984caa9b5.png",
      },
      {
        name: "Хонгорын элс",
        description: "",
        image:
          "https://mecc.mn/wp-content/uploads/2019/08/%D0%A5%D0%BE%D0%BD%D0%B3%D0%BE%D1%80%D1%8B%D0%BD-%D1%8D%D0%BB%D1%81-1.jpg",
      },
      {
        name: "Сангийн далай",
        description: "",
        image:
          "https://content.ikon.mn/news/2015/2/13/11353f_10928967_414022378752688_3161731340832367686_o_x974.jpg",
      },
      {
        name: "Галбын гурван хийд",
        description: "",
        image: "https://www.touristinfocenter.mn/Images/Cate/1/0x451mtq.jpg",
      },
    ],
  },
  {
    id: 15,
    name: "Ховд",
    area: "76,060 км²",
    source: require("@/assets/regions/howd.png"),
    image: require("@/assets/aimag/a19.png"),
    sum: 17,
    population: 91100,
    features: "Олон ястны нутаг, байгалийн олон янз байдал",
    mainSights: ["Цамбагарав уул", "Мөнххайрхан", "Хар‑Ус нуур", "Хадны зураг"],
    description:
      "Ховд аймаг бол Баруун Монголын түүхийн чухал төв бөгөөд Зүүнгарын хаант улсын үеийн засаг захиргааны нэгж байсан. Манжийн үед ч бас Ховд нь баруун хязгаарын цэргийн бааз байж, 1911 оны Үндэсний эрх чөлөөний хөдөлгөөний томоохон төв болсон. Ховдын суурин түүх 1600-аад оноос эхэлдэг бөгөөд олон угсаатны соёл, уламжлал хадгалагдсан нутаг юм. 1931 онд аймаг болон баталгаажжээ.",
    naturalSites: [
      // өмнөх 2
      {
        name: "Сэнхэрийн агуй",
        description: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c6/Khoit_Tsenkher_Cave_Rock_Art_site.jpg",
      },
      {
        name: "Хар‑Ус нуур",
        description: "",
        image:
          "https://www.touristinfocenter.mn/Images/Cate/1/%D0%A5%D0%B0%D1%80-%D0%A3%D1%81%20%D0%BD%D1%83%D1%83%D1%80%202.jpg",
      },
      {
        name: "Мөнххайрхан уул",
        description: "",
        image: "https://cdnp.cody.mn/spree/images/912230/large/MU100.jpg",
      },
      {
        name: "Алтан Хөхий уул",
        description: "",
        image:
          "https://news.mn/wp-content/uploads/2023/07/%D0%90%D0%BB%D1%82%D0%B0%D0%BD-%D1%85%D3%A9%D1%85%D0%B8%D0%B9-%D1%83%D1%83%D0%BB-580x365.jpg",
      },
      {
        name: "Харуул овоо",
        description: "",
        image:
          "https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/464417038_27014554991525537_7030267261387895085_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gvGjYqWWqOwQ7kNvwFRxaGT&_nc_oc=Adl4Jz-yVs8N5RjqIDuZloApahsS9PfBzkGUqBmUer_E3zrQZ1nP_zz_snvrizL4RYjnpFChspNqRYjMsgPzuztP&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&_nc_gid=sWn5sDeT0FH5K9ez7Ilg1w&oh=00_AfSpZDAuhk2LvMDd66pnzYr_ULGoCDiqz28D1uVPsmmC2w&oe=6887C144",
      },
      {
        name: "Ямаан усны хадны сүг зураг",
        description: "",
        image: "https://montsame.mn/files/5d2c9db3c06a8.jpeg",
      },
      {
        name: "Цамбагарав уулын цогцолбор",
        description: "",
        image:
          "https://www.touristinfocenter.mn/Images/Cate/1/%D0%A6%D0%B0%D0%BC%D0%B1%D0%B0%D0%B3%D0%B0%D1%80%D0%B0%D0%B2%20%D1%83%D1%83%D0%BB%202.jpg",
      },
      {
        name: "Ишгэн толгойн хадны зураг",
        description: "",
        image:
          "https://www.touristinfocenter.mn/Images/Cate/1/Ishgen%20tolgoin%20zurag.jpg",
      },
    ],
  },
  {
    id: 16,
    name: "Увс",
    area: "69,585 км²",
    source: require("@/assets/regions/uvs.png"),
    image: require("@/assets/aimag/a18.png"),
    sum: 19,
    population: 84000,
    features: "Нуур, уул, говь хосолсон",
    mainSights: ["Увс нуур", "Хяргас нуур", "Хан хөхий уулс", "Алтан элс"],
    description:
      "Увс нь эртний түрэг, скиф, хүннү гүрний нөлөөг илтгэх археологийн дурсгалуудаар баялаг нутаг юм. Увс нуурын сав газар нь олон соёлын төвлөрөл, түүхийн удам угсаа, байгаль цаг уурын хувьд онцлог нутаг байж ирсэн. 1931 онд аймаг болж, баруун хязгаарын стратегийн чухал байрлалтай бүс нутаг болсон. Эндхийн ард түмэн уламжлалт урлаг, зан заншлаа хадгалан иржээ.",
    naturalSites: [
      // өмнөх 2
      {
        name: "Хяргас нуур",
        description: "",
        image: "https://water.gov.mn/images/news/statnews/stat_hyargas.jpg",
      },
      {
        name: "Алтан элсний дархан цаазат",
        description: "",
        image: "https://www.touristinfocenter.mn/Images/Cate/1/l4d45cyn.jpg",
      },
      {
        name: "Хан хөхий уулс",
        description: "",
        image:
          "https://resource4.sodonsolution.org/assa/photo/2015/9/bbfeddf7125f1d62/18506a9b68c7f216.jpg",
      },
      {
        name: "Чандмань уул",
        description: "",
        image: "https://montsame.mn/files/683e4447c090b.jpeg",
      },
      {
        name: "Гоожуурын хүрхрээ",
        description: "",
        image:
          "https://mnb.mn/uploads/201905/news/thumb/fe3c245e126d8f947dea6bbe7dd901c1_x3.jpg",
      },
      {
        name: "Мөнгөт цахир уул",
        description: "",
        image: "https://montsame.mn/files/682ea5544d4ba.jpeg",
      },
      {
        name: "Дэглий цагаан уул",
        description: "",
        image: "https://www.touristinfocenter.mn/Images/Cate/1/5wij5gnp.jpg",
      },
      {
        name: "Зураагийн улаан хадны зураг",
        description: "",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJ_x0qtf7s-sfKgz0gzEmcRPg41FJD8hdWQ&s",
      },
    ],
  },
  {
    id: 17,
    name: "Хөвсгөл",
    area: "100,628 км²",
    source: require("@/assets/regions/huwsgul.png"),
    image: require("@/assets/aimag/a20.png"),
    sum: 24,
    population: 136700,
    features: "Хөвсгөл нуур, “Монголын Швейцарь”",
    mainSights: ["Хөвсгөл нуур", "Даян дээрхийн агуй", "Дархадын хотгор"],
    description:
      "Монголын хойд хилийн чухал бүс болсон Хөвсгөл нь эртнээс Урианхай, Дархад, Хамниган зэрэг ястнуудын өлгий нутаг байв. Хөвсгөл нуурын орчмоор олон түүхэн угсаатны соёл, бөө мөргөлийн өв уламжлагдан ирсэн. Хөвсгөл нь байгалийн онгон төрх, сүсэг бишрэлийн чухал төв төдийгүй Монголын хил хамгаалалтын түүхэнд чухал үүрэг гүйцэтгэж ирсэн. 1931 онд аймаг болон батлагдсан.",
    naturalSites: [
      // өмнөх 2
      {
        name: "Соёны бүс нутаг",
        description: "",
        image:
          "https://khovsgol.gov.mn/uploads/image/2022/01/1920x0/1643120660_5c6f23439bcbc5553c9d.jpeg",
      },
      {
        name: "Даян дээрхийн агуй",
        description: "",
        image:
          "https://tsagaan-uur.khs.gov.mn/upload/images/orig/2024/10/17/6d944423b055be2c795743af8bf589ce.jpg",
      },
      {
        name: "Уушгийн өврийн буган хөшөө",
        description: "",
        image:
          "https://montsame.mn/uploads/content/a29c20539a1eb07d0a8c4651b45c9ea7.png",
      },
      {
        name: "Дархадын 13 овоо",
        description: "",
        image:
          "https://www.touristinfocenter.mn/Images/Cate/1/13-iin%20ovoo.jpg",
      },
      {
        name: "Цаатны нутаг",
        description: "",
        image:
          "https://khovsgol.gov.mn/uploads/image/2022/01/1920x0/1643185321_3e8146d6695144933cdb.jpeg",
      },
    ],
  },
  {
    id: 18,
    name: "Сэлэнгэ",
    area: "41,152 км²",
    source: require("@/assets/regions/selenge.png"),
    image: require("@/assets/aimag/a16.png"),
    sum: 17,
    population: 108100,
    features: "Хангайн хойд бүс, тариалан",
    mainSights: [
      "Амарбаясгалан хийд",
      "Сайханы хөтөл",
      "Сэлэнгэ мөрөн",
      "Улаан хад",
    ],
    description:
      "Сэлэнгэ нь Монголын тариалангийн бүс нутгийн нэг боловч түүхийн хувьд XIII-XIV зууны үед Монголын цэрэг, худалдааны замын гол зангилаа байсан. Эндхийн нутаг дэвсгэрээр Хүрээний зам дайран өнгөрдөг байсан бөгөөд худалдаа, шашин, засаг захиргааны гол төвүүд байрлаж байв. 1934 онд аймаг болсон бөгөөд XVII зууны сүүлчээс орос, монголын харилцаанд чухал үүрэгтэй бүс нутаг болж хөгжжээ.",
    naturalSites: [
      // өмнөх 2
      {
        name: "Сайханы хөтөл",
        description: "",
        image:
          "https://cdn.greensoft.mn/cache/images/0/6/5/b/c/065bc0d719e4612137ab66496054dc1becaf441d.jpg",
      },
      {
        name: "Амарбаясгалан хийд",
        description: "",
        image: "https://montsame.mn/files/66a35dab88ce2.jpeg",
      },
      {
        name: "Соронзон хад",
        description: "",
        image: "https://www.touristinfocenter.mn/Images/Cate/1/szxrd3vf.jpg",
      },
      {
        name: "Алтанбулаг",
        description: "",
        image: "https://montsame.mn/files/637b25ae548c7.jpeg",
      },
      {
        name: "Халуун рашаан",
        description: "",
        image:
          "https://travel.khentii.gov.mn/uploads/img/2019/10/10/ebf8d5ef155ae1dadd58acd8bf429d18.jpg",
      },
      {
        name: "Тужийн нарс",
        description: "",
        image:
          "https://resource4.sodonsolution.org/assa/photo/2015/11/aa80b4d1b780c1fd/39182c0ac380039e.jpg",
      },
      {
        name: "Дуут хад",
        description: "",
        image:
          "https://www.touristinfocenter.mn/Images/Cate/1/Duutiin%20had.jpg",
      },
    ],
  },
  {
    id: 19,
    name: "Сүхбаатар",
    area: "82,300 км²",
    source: require("@/assets/regions/suhbaatar.png"),
    image: require("@/assets/aimag/a15.png"),
    sum: 13,
    population: 64900,
    features: "Тал нутаг, археологийн дурсгал",
    mainSights: ["Шилийн богд", "Алтан овоо", "Таван Толгойн цогцолбор"],
    description:
      "Сүхбаатар нь түүхэн Дорнот Монголын хэсэгт орших бөгөөд Манжийн үед “Зүүн хязгаарын” хил хамгаалах бүс байжээ. Энэ бүс нутаг нь Халхын голын тулалдааны дараахан 1942 онд тусгаар аймаг болон байгуулагдсан бөгөөд нэрийг нь Монголын тусгаар тогтнолын баатар Д.Сүхбаатарын нэрээр нэрлэсэн. Аймгийн нутагт орших олон эртний булш, тахилын онгоц, хүн чулуу нь түүхэн олон үеийн соёлыг хадгалсан байдаг.",
    naturalSites: [
      // өмнөх 2
      {
        name: "Алтан овоо",
        description: "",
        image:
          "https://resource4.sodonsolution.org/assa/photo/2015/8/1df4d59a598bce8b/b94e49c3706fc0ee.png",
      },
      {
        name: "Шилийн богд",
        description: "",
        image: "https://www.zindaa.mn/images/news/origin/21/sm3njwdo.jpg",
      },
      {
        name: "Монголын хүн чулууд",
        description: "",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRwNbW4id6jidJ6Mj3Bbn9uempIupbFP1bg&s",
      },
      {
        name: "Таван Толгойн археологийн цогцолбор",
        description: "",
        image:
          "https://content.ikon.mn/news/2024/5/28/2dul75_MPA09740_h450.jpg",
      },
      {
        name: "Ганга нуур, Оргихын булаг",
        description: "",
        image:
          "https://resource4.sodonsolution.org/assa/photo/2015/10/a79996d519fa9288/2365e0009ac9ad96.jpg",
      },
      {
        name: "Хунгийн чуулган",
        description: "",
        image:
          "https://content.ikon.mn/news/2015/10/23/19cf50_11703505_511445702343688_6455974602738585886_o_x974.jpg",
      },
    ],
  },
  {
    id: 20,
    name: "Хэнтий",
    area: "80,325 км²",
    source: require("@/assets/regions/hentii.png"),
    image: require("@/assets/aimag/a21.png"),
    sum: 17,
    population: 78900,
    features: "Чингис хааны өлгий нутаг, түүхэн газар",
    mainSights: [
      "Бурхан Халдун",
      "Балдан Бэрээвэн",
      "Чингисийн гэрэлт хөшөө",
      "Хэрлэнгийн арал",
    ],
    description:
      "Монголын эзэнт гүрний эхлэл болсон Хэнтий аймаг нь Чингис хааны төрсөн, өссөн нутаг юм. Дэлхийн түүхэнд нэрээ үлдээсэн Их Эзэн хаан Есүхэй баатар, Өэлүн эхийн үр сад энэ нутагт төрж өссөн. Хэнтий нь Монголын түүх, домгийн голомт нутаг бөгөөд Бурхан Халдун уул, Дадал сум зэрэг газрууд нь түүхэн ба домгийн чухал газар нутагт ордог. 1931 онд аймаг болон байгуулагдсан.",
    naturalSites: [
      // өмнөх 2
      {
        name: "Бурхан Халдун уул",
        description: "",
        image:
          "https://travel.khentii.gov.mn/uploads/img/2019/10/10/af185516576b32eae63be0dcc03deeb1.jpg",
      },
      {
        name: "Балдан Бэрээвэн хийд",
        description: "",
        image:
          "https://nature.khe.gov.mn/wp-content/uploads/2018/04/Baldanbaraivun.jpg",
      },
      {
        name: "Чингисийн гэрэлт хөшөө",
        description: "",
        image:
          "https://lh5.googleusercontent.com/proxy/_FZhLVeCvf94g6TRLZb3Hham6JrmyYbAk_Y0eeVLL7xapaFhNyYJ1m-JXjQnYDTUGx3P11eO3aedb6eopRX1OQ5vVdmjsesTBBFlMiT1pbHX",
      },
      {
        name: "Дэлүүн болдог",
        description: "",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnbxmZc0z4Wsgp4MzwXNvj9FM2icV6jgDLfQ&s",
      },
      {
        name: "Хар зүрхний хөх нуур",
        description: "",
        image:
          "https://travel.khentii.gov.mn/uploads/img/2019/10/10/25fe5c12cd4304df3b158476908a13db.jpg",
      },
      {
        name: "Хэрлэнгийн хөдөө арал",
        description: "",
        image:
          "https://nature.khe.gov.mn/wp-content/uploads/2018/05/herlengiin-hodoo-aral-750x445.jpg",
      },
      {
        name: "Өглөгчийн хэрэм",
        description: "",
        image:
          "https://travel.khentii.gov.mn/uploads/img/2019/09/13/09983bba0ddbb2644dcbbfb4a1749310.jpg",
      },
      {
        name: "Рашаан хад",
        description: "",
        image:
          "https://travel.khentii.gov.mn/uploads/img/2019/09/13/c1d3874cb9b1c5a4b31871733e5d5278.jpg",
      },
    ],
  },
  {
    id: 21,
    name: "Төв",
    area: "74,042 км²",
    source: require("@/assets/regions/tuw.png"),
    image: require("@/assets/aimag/a17.png"),
    sum: 27,
    population: 92700,
    features: "Нийслэл орчмын бүс, Манзушир хийд",
    mainSights: [
      "Манзушир хийдийн туурь",
      "Хустайн байгалийн цогцолборт газар",
      "Чингис хааны морьт хөшөө",
    ],
    description:
      "Монголын нийслэл Улаанбаатар хотыг тойрсон Төв аймаг нь түүхийн маш олон онцлогтой. Эртний Түрэгийн үеэс суурьшлын бүс байсан энэ газар нь хожим Богд Жавзандамбын ордон, Монголын шашны төвүүд байрлаж байсан. Ихэнх хийд, сүм, эрдэм мэдлэгийн төвүүд Төв аймагт төвлөрч байв. Аймгийн нэр нь төвийн бүс нутагт оршдог байршлаасаа үүдэлтэй бөгөөд Монголын оюун санааны хөгжлийн голомт хэмээгддэг.",
    naturalSites: [
      // өмнөх 2
      {
        name: "Манзушир хийдийн туурь",
        description: "",
        image:
          "https://www.montsame.mn/uploads/content/4ecc1f44417cc3592cfb616a556eeb62.png",
      },
      {
        name: "Хустайн байгалийн цогцолборт газар",
        description: "",
        image:
          "https://newswall.mn/wp-content/uploads/2021/07/viber_image_2021-07-19_08-53-57-001.jpg",
      },
      {
        name: "Зоргол хайрхан уул",
        description: "",
        image:
          "https://lh6.googleusercontent.com/proxy/omn985zhBNk2f-Qnp8a6a3_RQde5fRSKIPby9JiVWyXexfh_dBXg8-igidUf5LOSu3Y2KHOUaywjyxJ-QrU0dddT_hWe39CQHK0y9dbDQUJMkkecE1wsPiFY9vXp",
      },
      {
        name: "Чингис хааны морьт хөшөө",
        description: "",
        image: "https://zugaalga.mn/files/thumb__9001558927199hushuu%202.jpg",
      },
      {
        name: "Тоньюукукын бичээс",
        description: "",
        image:
          "https://resource4.sodonsolution.org/zms/image/2024/10/23/a3l3uc9usnatmi28/%D0%91%D0%B8%D1%87%D0%B8%D0%B3%20%D1%81%D0%BE%D1%91%D0%BB%D1%8B%D0%BD%20%D0%B3%D0%B0%D0%B9%D1%85%D0%B0%D0%BC%D1%88%D0%B8%D0%B3%D1%82%20%D3%A9%D0%B2%20%D0%B4%D1%83%D1%80%D1%81%D0%B3%D0%B0%D0%BB.jpg",
      },
      {
        name: "Цогт хунтайжийн хадны бичээс",
        description: "",
        image: "https://content.ikon.mn/news/2023/5/25/u3g1q5__4_h450.jpg",
      },
    ],
  },
];
export const quizzes = [
  {
    id: "wild-survival",
    title: "Зэрлэг байгальд амь үлдэх чадвар",
    description: "Та зэрлэг байгальд төөрвөл хэрхэн амьд гарах вэ?",
    questions: [
      {
        question: "Төөрвөл хамгийн түрүүнд юу хийх вэ?",
        options: [
          { text: "Утас ашиглан тусламж дуудах", score: 1 },
          { text: "Амьсгал авч тайвшрах", score: 2 },
          { text: "Сүүлчийн чиглэлээ тогтоох", score: 3 },
          { text: "Гэр орчмоо эрэлхийлэх", score: 4 },
        ],
      },
      {
        question: "Ойд гал гаргах хамгийн энгийн арга юу вэ?",
        options: [
          { text: "Хатаасан модыг үрэх", score: 4 },
          { text: "Гэрлийн тусгал ашиглах", score: 2 },
          { text: "Чулуугаар оч гаргах", score: 3 },
          { text: "Хөнгөн цагаан зүйл ашиглах", score: 1 },
        ],
      },
      {
        question: "Байгалд хамгийн амархан олддог хоол юу вэ?",
        options: [
          { text: "Үр тариа", score: 1 },
          { text: "Үхрийн мах", score: 2 },
          { text: "Жимс жимсгэнэ", score: 3 },
          { text: "Загас", score: 4 },
        ],
      },
    ],
  },
  {
    id: "travel-iq",
    title: "Таны аяллын IQ хэд вэ?",
    description: "Аялал, газарзүйн мэдлэгээ шалгаарай.",
    questions: [
      {
        question: "Францын нийслэл аль нь вэ?",
        options: [
          { text: "Лондон", score: 0 },
          { text: "Парис", score: 1 },
          { text: "Берлин", score: 0 },
          { text: "Мадрид", score: 0 },
        ],
      },
      {
        question: "Дэлхийн хамгийн урт гол аль нь вэ?",
        options: [
          { text: "Нил", score: 1 },
          { text: "Амазон", score: 0 },
          { text: "Миссисипи", score: 0 },
          { text: "Янзцзы", score: 0 },
        ],
      },
    ],
  },
  {
    id: "solo-vs-group",
    title: "Та ганцаараа аялагч уу, багийн хүн үү?",
    description: "Аяллын үед таны хандлагыг тодорхойлоход тусална.",
    questions: [
      {
        question: "Амралтын өдрөөр юу хийх дуртай вэ?",
        options: [
          { text: "Ном унших", score: 1 },
          { text: "Найзтай уулзах", score: 2 },
          { text: "Гадаа салхинд гарах", score: 3 },
          { text: "Олуулаа аялал зохион байгуулах", score: 4 },
        ],
      },
      {
        question: "Аяллын үеэр та юу хамгийн ихээр хүсдэг вэ?",
        options: [
          { text: "Нууцхан орчин, нам гүм", score: 1 },
          { text: "Бусдын сэтгэл хөдлөлийг хуваалцах", score: 3 },
          { text: "Шинэ хүмүүстэй танилцах", score: 4 },
          { text: "Өөрийгөө эргэцүүлэх", score: 2 },
        ],
      },
    ],
  },
  {
    id: "next-destination",
    title: "Таны дараагийн аяллын газар хаана вэ?",
    description: "Таны зан төлвөөс шалтгаалж аяллын байршлыг тодорхойлно.",
    questions: [
      {
        question: "Та аль орчныг илүүд үздэг вэ?",
        options: [
          { text: "Далайн эрэг", score: "A" },
          { text: "Уулын орчин", score: "B" },
          { text: "Хотын төв", score: "C" },
          { text: "Түүх соёлын газар", score: "D" },
        ],
      },
      {
        question: "Аяллынхаа зорилгыг юу гэж үздэг вэ?",
        options: [
          { text: "Тайвшрах, амрах", score: "A" },
          { text: "Адреналин мэдрэх", score: "B" },
          { text: "Зугаа, шоу", score: "C" },
          { text: "Судалгаа, суралцах", score: "D" },
        ],
      },
    ],
  },
  {
    id: "mongolian-travel",
    title: "Жинхэнэ монгол аялагч мөн үү?",
    description: "Монгол орноо хэр сайн мэддэг вэ гэдгээ шалга.",
    questions: [
      {
        question: "Хөвсгөл нуур хэдэн метр гүн бэ?",
        options: [
          { text: "2-5 м", score: 0 },
          { text: "10-15 м", score: 0 },
          { text: "150-200 м", score: 1 },
          { text: "30-40 м", score: 0 },
        ],
      },
      {
        question: "Говь-Алтай аймаг хаана байрладаг вэ?",
        options: [
          { text: "Зүүн хойд", score: 0 },
          { text: "Баруун өмнөд", score: 1 },
          { text: "Төв хэсэг", score: 0 },
          { text: "Хойд бүс", score: 0 },
        ],
      },
    ],
  },
  {
    id: "adventure-level",
    title: "Таны адал явдалд дурлах түвшин",
    description: "Та хэр экстрем аялалд дуртай вэ гэдгийг тодорхойлно.",
    questions: [
      {
        question: "Шүхрээр үсэрч үзсэн үү?",
        options: [
          { text: "Үгүй", score: 1 },
          { text: "Тийм, 1 удаа", score: 2 },
          { text: "Тийм, 2-3 удаа", score: 3 },
          { text: "Байнга тэгдэг", score: 4 },
        ],
      },
      {
        question: "Хамгийн хүнд аялал тань ямар байв?",
        options: [
          { text: "Төв талбай хүртэл алхсан", score: 1 },
          { text: "Хөдөөгүүр майхантай явсан", score: 2 },
          { text: "Хаданд авирсан", score: 3 },
          { text: "Цасан бүрхүүл дунд ууланд авирсан", score: 4 },
        ],
      },
    ],
  },
  {
    id: "perfect-companion",
    title: "Таны төгс аяллын хань хэн бэ?",
    description:
      "Таны хувийн онцлогоос шалтгаалан хамгийн тохирох аяллын ханиа тодорхойлно.",
    questions: [
      {
        question: "Дараагийн аялалд хэнийг авч явах вэ?",
        options: [
          { text: "Гэр бүл", score: "A" },
          { text: "Найз нөхөд", score: "B" },
          { text: "Ганцаараа", score: "C" },
          { text: "Тэжээвэр амьтан", score: "D" },
        ],
      },
      {
        question: "Та аяллын үеэр хамгийн их анхаардаг зүйл?",
        options: [
          { text: "Аюулгүй байдал", score: "A" },
          { text: "Инээд, хөгжил", score: "B" },
          { text: "Нууцлаг байдал", score: "C" },
          { text: "Хөгжилтэй зургууд", score: "D" },
        ],
      },
    ],
  },
];

export const allSurveys = [
  {
    id: 1,
    section: "Зэрлэг Байгальд Амьд Үлдэх Чадвар",
    source: require("@/assets/images/Artboard1.jpg"),
    questions: [
      {
        question: "Төөрвөл хамгийн түрүүнд юу хийх вэ?",
        answers: [
          { text: "Утас ашиглан тусламж дуудах", score: 1 },
          { text: "Амьсгал авч тайвшрах", score: 2 },
          { text: "Сүүлчийн чиглэлээ тогтоох", score: 3 },
          { text: "Гэр орчмоо эрэлхийлэх", score: 4 },
        ],
      },
      {
        question: "Ойд гал гаргах хамгийн энгийн арга юу вэ?",
        answers: [
          { text: "Хатаасан модыг үрж үрж гал гаргах", score: 4 },
          { text: "Гэрлийн тусгал ашиглах", score: 2 },
          { text: "Зоригтой чулуугаар үсрэх", score: 1 },
          { text: "Хөнгөн цагаан зүйл ашиглах", score: 3 },
        ],
      },
      {
        question: "Байгалд хамгийн амархан олддог хоол юу вэ?",
        answers: [
          { text: "Үр тариа", score: 1 },
          { text: "Үхрийн мах", score: 2 },
          { text: "Жимс жимсгэнэ", score: 3 },
          { text: "Загас", score: 4 },
        ],
      },
      {
        question: "Усыг аюулгүй болгохын тулд юу хийх вэ?",
        answers: [
          { text: "Шууд уух", score: 1 },
          { text: "Буцалгах", score: 4 },
          { text: "Шүүлтүүрээр шүүх", score: 3 },
          { text: "Хөгцтэй газраас хол байх", score: 2 },
        ],
      },
      {
        question: "Анхны тусламжийн багцад юу заавал байх ёстой вэ?",
        answers: [
          { text: "Хавчаар", score: 1 },
          { text: "Халуун ус", score: 2 },
          { text: "Халуурдаг эм", score: 3 },
          { text: "Хавдсан тасалгаа", score: 4 },
        ],
      },
      {
        question: "Хоноглох газраа хэрхэн сонгох вэ?",
        answers: [
          { text: "Нилээд тайван, ус ойрхон", score: 3 },
          { text: "Тэнгэр үзэгдэх газар", score: 2 },
          { text: "Хаашаа салхи үлээж байгааг харах", score: 4 },
          { text: "Хажуугаар зам өнгөрдөг газар", score: 1 },
        ],
      },
      {
        question: "Зэрлэг амьтнаас хэрхэн хамгаалах вэ?",
        answers: [
          { text: "Чимээ гаргах", score: 4 },
          { text: "Ганцаараа аялах", score: 1 },
          { text: "Тасалгааны гэртэй байх", score: 3 },
          { text: "Өөрийгөө жижиг харагдуулах", score: 2 },
        ],
      },
      {
        question: "Хөлдсөн үед юу түрүүлж дулаацуулдаг вэ?",
        answers: [
          { text: "Гараа", score: 1 },
          { text: "Нуруу", score: 2 },
          { text: "Хөл", score: 4 },
          { text: "Толгой", score: 3 },
        ],
      },
      {
        question: "Байгальд дохио өгөх хамгийн энгийн арга юу вэ?",
        answers: [
          { text: "Гал гаргаж утаа гаргах", score: 4 },
          { text: "Чимээ гаргах", score: 3 },
          { text: "Гар дохио өгөх", score: 2 },
          { text: "Чичирхийлэх", score: 1 },
        ],
      },
      {
        question: "Салхи болон нарны чиглэлээр байрлал тогтоох уу?",
        answers: [
          { text: "Нарны байрлал ашиглах", score: 4 },
          { text: "Салхины дуу сонсох", score: 3 },
          { text: "Үнэрээр чиглэлээ мэдэх", score: 1 },
          { text: "Тэнгэрийн од ашиглах", score: 2 },
        ],
      },
    ],
  },
  {
    id: 2,
    source: require("@/assets/images/Artboard2.jpg"),
    section: "Таны Аяллын IQ хэд вэ?",
    questions: [
      {
        question: "Францын нийслэл хаана вэ?",
        answers: [
          { text: "Лондон", score: 0 },
          { text: "Парис", score: 1 },
          { text: "Берлин", score: 0 },
          { text: "Мадрид", score: 0 },
        ],
      },
      {
        question: "Дэлхийн хамгийн урт гол?",
        answers: [
          { text: "Нил", score: 1 },
          { text: "Амазон", score: 0 },
          { text: "Миссисиппи", score: 0 },
          { text: "Янз", score: 0 },
        ],
      },
      {
        question: "Аль улс хамгийн олон цагийн бүсэд байрладаг вэ?",
        answers: [
          { text: "АНУ", score: 0 },
          { text: "ОХУ", score: 1 },
          { text: "Австрали", score: 0 },
          { text: "Хятад", score: 0 },
        ],
      },
      {
        question: "Монголын хамгийн том нуур?",
        answers: [
          { text: "Хөвсгөл", score: 1 },
          { text: "Увс", score: 0 },
          { text: "Өмнөговь", score: 0 },
          { text: "Баян", score: 0 },
        ],
      },
      {
        question: "Антарктидын нийслэл бий юу?",
        answers: [
          { text: "Тийм", score: 0 },
          { text: "Үгүй", score: 1 },
          { text: "Байх магадлалтай", score: 0 },
          { text: "Мэдэхгүй", score: 0 },
        ],
      },
      {
        question: "Африкийн хамгийн өндөр уул?",
        answers: [
          { text: "Килиманджаро", score: 1 },
          { text: "Килиманжаро", score: 0 },
          { text: "Эверест", score: 0 },
          { text: "Дракенсберг", score: 0 },
        ],
      },
      {
        question: "Дэлхийн хамгийн жижиг улс?",
        answers: [
          { text: "Ватикан", score: 1 },
          { text: "Монако", score: 0 },
          { text: "Сан-Марино", score: 0 },
          { text: "Лихтенштейн", score: 0 },
        ],
      },
      {
        question: "Говьсүмбэр аймгийн төв юу вэ?",
        answers: [
          { text: "Сүмбэр", score: 1 },
          { text: "Цогтцэций", score: 0 },
          { text: "Өлзийт", score: 0 },
          { text: "Эрдэнэсант", score: 0 },
        ],
      },
      {
        question: "Ямар улс хамгийн их арлын бүтэцтэй вэ?",
        answers: [
          { text: "Индонез", score: 1 },
          { text: "Филиппин", score: 0 },
          { text: "Мальдив", score: 0 },
          { text: "Япон", score: 0 },
        ],
      },
      {
        question: "Ямар далай хамгийн том бэ?",
        answers: [
          { text: "Атлантын", score: 0 },
          { text: "Номхон", score: 1 },
          { text: "Энэтхэгийн", score: 0 },
          { text: "Арктик", score: 0 },
        ],
      },
    ],
  },
  {
    id: 3,
    source: require("@/assets/images/Artboard3.jpg"),
    section: "Та Ганцаараа Аялагч уу, Багаараа Аялагч уу?",
    questions: [
      {
        question: "Амралтын өдрөөр юу хийх дуртай вэ?",
        answers: [
          { text: "Ном унших", score: 1 },
          { text: "Найзтай уулзах", score: 2 },
          { text: "Тоглоом тоглох", score: 3 },
        ],
      },
      {
        question: "Аялалд хамгийн их авч явдаг зүйл?",
        answers: [
          { text: "Ном", score: 1 },
          { text: "Камера", score: 2 },
          { text: "Хувцас", score: 3 },
        ],
      },
      {
        question: "Гэнэтийн адал явдлыг хэрхэн хүлээж авдаг вэ?",
        answers: [
          { text: "Айдаг", score: 1 },
          { text: "Эрэл хайгуул хийх дуртай", score: 3 },
          { text: "Төлөвлөгөө өөрчлөгдөхөд дургүй", score: 2 },
        ],
      },
      {
        question: "Шинэ хүмүүстэй амархан танилцдаг уу?",
        answers: [
          { text: "Үгүй", score: 1 },
          { text: "Хэцүү", score: 2 },
          { text: "Амархан", score: 3 },
        ],
      },
      {
        question: "Аяллын үед утсаа хэр их шалгадаг вэ?",
        answers: [
          { text: "Үргэлж", score: 1 },
          { text: "Заримдаа", score: 2 },
          { text: "Ховор", score: 3 },
        ],
      },
      {
        question: "Аялахдаа ямар газар илүү таалагддаг вэ?",
        answers: [
          { text: "Байгаль", score: 3 },
          { text: "Хот", score: 1 },
          { text: "Аль алинд", score: 2 },
        ],
      },
      {
        question: "Эргэн тойрон танихгүй хүмүүс байхад сэтгэл санаа?",
        answers: [
          { text: "Айдаг", score: 1 },
          { text: "Сайн мэдэхгүй", score: 2 },
          { text: "Тайван", score: 3 },
        ],
      },
    ],
  },
  {
    id: 4,
    source: require("@/assets/images/Artboard4.jpg"),
    section: "Таны Дараагийн Аяллын Газар Хаана Вэ?",
    questions: [
      {
        question: "Та аль газрыг илүүд үздэг вэ?",
        answers: [
          { text: "Далайн эрэг", score: "A" },
          { text: "Уулын орчин", score: "B" },
          { text: "Хотын төв", score: "C" },
          { text: "Түүх соёлын газар", score: "D" },
        ],
      },
      {
        question: "Та илүү ямар аяллыг сонирходог вэ?",
        answers: [
          { text: "Соёл, түүх", score: "D" },
          { text: "Адал явдал, спорт", score: "B" },
          { text: "Тайван амралт", score: "A" },
          { text: "Хотын соёл", score: "C" },
        ],
      },
      {
        question: "Аялахад ямар тээврийн хэрэгсэл илүү таалагддаг вэ?",
        answers: [
          { text: "Автобус", score: "C" },
          { text: "Онгоц", score: "B" },
          { text: "Автомашин", score: "A" },
          { text: "Гал тогооны дугуй", score: "D" },
        ],
      },
      {
        question: "Таны аяллын гол зорилго юу вэ?",
        answers: [
          { text: "Амрах", score: "A" },
          { text: "Судлах", score: "D" },
          { text: "Адал явдал", score: "B" },
          { text: "Олон нийтийн харилцаа", score: "C" },
        ],
      },
      {
        question: "Хаана амрах дуртай вэ?",
        answers: [
          { text: "Тансаг зочид буудал", score: "C" },
          { text: "Зуслан", score: "A" },
          { text: "Хотын төв", score: "D" },
          { text: "Байгаль", score: "B" },
        ],
      },
    ],
  },
  {
    id: 5,
    source: require("@/assets/images/Artboard4.jpg"),
    section: "Аяллын Тоглоом",
    questions: [
      {
        question: "Таны аяллын дундаж хугацаа хэд вэ?",
        answers: [
          { text: "1-3 хоног", score: 1 },
          { text: "4-7 хоног", score: 2 },
          { text: "1-2 долоо хоног", score: 3 },
          { text: "Илүү", score: 4 },
        ],
      },
      {
        question: "Аялахад хамгийн дуртай улирал?",
        answers: [
          { text: "Хавар", score: 2 },
          { text: "Зун", score: 4 },
          { text: "Намар", score: 3 },
          { text: "Өвөл", score: 1 },
        ],
      },
      {
        question: "Аялалд ямар төрлийн хоол авдаг вэ?",
        answers: [
          { text: "Орчин үеийн", score: 4 },
          { text: "Уламжлалт", score: 2 },
          { text: "Халуун хоол", score: 3 },
          { text: "Хөнгөн зууш", score: 1 },
        ],
      },
      {
        question: "Аяллын үед юу хамгийн чухал вэ?",
        answers: [
          { text: "Найз нөхөд", score: 3 },
          { text: "Аюулгүй байдал", score: 4 },
          { text: "Хувийн орон зай", score: 2 },
          { text: "Хамгийн сайхан дурсамж", score: 1 },
        ],
      },
    ],
  },
  {
    id: 6,
    source: require("@/assets/images/Artboard4.jpg"),
    section: "Аяллын Үндсэн Үгс",
    questions: [
      {
        question: "Аяллын үеэр хамгийн их хэрэглэгддэг үг юу вэ?",
        answers: [
          { text: "Зочид буудал", score: 1 },
          { text: "Тээвэр", score: 2 },
          { text: "Худалдан авалт", score: 3 },
          { text: "Гар утас", score: 4 },
        ],
      },
      {
        question: "Аяллын зураглалд юу гол үүрэгтэй вэ?",
        answers: [
          { text: "Газрын зураг", score: 4 },
          { text: "Нисэх буудал", score: 2 },
          { text: "Замын тэмдэг", score: 3 },
          { text: "Автобус", score: 1 },
        ],
      },
      {
        question: "Аяллын үеэр хаана хооллох вэ?",
        answers: [
          { text: "Ресторан", score: 3 },
          { text: "Гудамжны хоол", score: 1 },
          { text: "Зочид буудлын хоол", score: 4 },
          { text: "Өөрийн хоол", score: 2 },
        ],
      },
      {
        question: "Гадаадад хэрхэн зорчих вэ?",
        answers: [
          { text: "Онгоц", score: 4 },
          { text: "Автобус", score: 2 },
          { text: "Галт тэрэг", score: 3 },
          { text: "Автомашин", score: 1 },
        ],
      },
    ],
  },
  {
    id: 7,
    source: require("@/assets/images/Artboard4.jpg"),
    section: "Аяллын Асуулга",
    questions: [
      {
        question: "Аялалд хамгийн их анхаарал хандуулах зүйл юу вэ?",
        answers: [
          { text: "Багаж хэрэгсэл", score: 2 },
          { text: "Хувцас", score: 3 },
          { text: "Хоол хүнс", score: 4 },
          { text: "Тээвэр", score: 1 },
        ],
      },
      {
        question: "Аяллынхаа үеэр ямар төрлийн унаа ашигладаг вэ?",
        answers: [
          { text: "Онгоц", score: 3 },
          { text: "Автобус", score: 2 },
          { text: "Такси", score: 4 },
          { text: "Хөлөг онгоц", score: 1 },
        ],
      },
      {
        question: "Аяллынхаа хуваарийг хэрхэн төлөвлөдөг вэ?",
        answers: [
          { text: "Өөрөө төлөвлөдөг", score: 4 },
          { text: "Аяллын компаниар төлөвлөдөг", score: 2 },
          { text: "Найз нөхөдтэйгээ хамт", score: 3 },
          { text: "Төлөвлөдөггүй", score: 1 },
        ],
      },
      {
        question: "Аялалд бэлдэхэд хамгийн чухал зүйл юу вэ?",
        answers: [
          { text: "Баримт бичиг", score: 4 },
          { text: "Хувцас", score: 3 },
          { text: "Хүнсний бүтээгдэхүүн", score: 2 },
          { text: "Мөнгөн дүн", score: 1 },
        ],
      },
      {
        question: "Аяллын үеэр юу хамгийн их санаа зовдог вэ?",
        answers: [
          { text: "Эрүүл мэнд", score: 4 },
          { text: "Хувийн аюулгүй байдал", score: 3 },
          { text: "Унаа хүлээх", score: 2 },
          { text: "Үнэт зүйлс", score: 1 },
        ],
      },
    ],
  },
];
export const result = {
  results: {
    "1": {
      title: "Зэрлэг Байгальд Амьд Үлдэх Чадвар",
      scoreRanges: [
        {
          range: "10–17",
          conclusion:
            "🌱 Сурагч судлаач: Байгальд гарахад чинь ус, хүнс, GPS гурав бол амин чухал. Амьд үлдэх номууд бол чиний уншлагын жагсаалтын эхэнд байх ёстой!",
        },
        {
          range: "18–25",
          conclusion:
            "🔥 Адал явдалд бэлэн анхан шатны аврагч: Гал асааж, хоол хийж чадна. Гэхдээ ширэнгэн ойн дунд ганцаараа хонохдоо бага зэрэг эргэлздэг байж магадгүй.",
        },
        {
          range: "26–33",
          conclusion:
            "🏕 Байгальд дасан зохицогч мэргэжилтэн: Та ямар ч нөхцөлд амьдрах аргаа мэддэг. Үүрэг хүлээсэн жинхэнэ аврагч шиг л байна!",
        },
        {
          range: "34–40",
          conclusion:
            "🐗 Зэрлэг Байгалийн Ноён: Та бол байгальд амьд үлдэх мастер. Зэрлэг амьтадтай нөхөрлөж, модны навчнаас борщ хийж чадна!",
        },
      ],
    },
    "2": {
      title: "Таны Аяллын IQ Хэд Вэ?",
      scoreRanges: [
        {
          range: "0–3",
          conclusion:
            "🤔 Анхны алхам: Аялалд явах гэж байгаа бол эхлээд хаашаа явахаа мэдэх хэрэгтэй. GPS биш, Google Earth-ээс эхэлцгээе!",
        },
        {
          range: "4–6",
          conclusion:
            "🧭 Зүг чиг баримжаалагч: Чи аялалд сонирхолтой болсон, маршрут судалж эхэлж байгаа нь сайн хэрэг!",
        },
        {
          range: "7–8",
          conclusion:
            "📚 Танин мэдэгч аялагч: Чи аялал бүрээсээ түүх, соёл, амьдралын ухааныг олж хардаг.",
        },
        {
          range: "9–10",
          conclusion:
            "🌍 Дэлхийд аялагч мастер: Чи аль улс руу ч нисэхэд бэлэн. Гадаад хэл, нутгийн соёл, тэр ч байтугай захын мухрын жижиг ресторануудыг ч судалсан байдаг!",
        },
      ],
      note: "Тус бүрийн зөв хариулт 1 оноо, нийт 10 оноо",
    },
    "3": {
      title: "Та Ганцаараа Аялагч уу, Багаараа Аялагч уу?",
      scoreRanges: [
        {
          range: "7–11",
          conclusion:
            "🧘 Ганцаар аялагч: Байгаль, нам гүм, өөртэйгөө ярилцах аяллыг илүүд үздэг. Selfie stick чинь аяллын хамгийн үнэнч хамтрагч!",
        },
        {
          range: "12–16",
          conclusion:
            "👥 Давхар чанартай аялагч: Заримдаа ганцаараа, заримдаа нөхөдтэйгөө. Чиний аяллын түнш бол тухайн өдрийн сэтгэл санаанаас хамаардаг.",
        },
        {
          range: "17–21",
          conclusion:
            "👫 Багаар аялагч: Чи багийн тоглогч, аяллын хөгжилтэй уур амьсгал чамаас эхэлдэг.",
        },
      ],
      note: "Сонголт бүр 1–3 оноо",
    },
    "4": {
      title: "Таны Дараагийн Аяллын Газар Хаана Вэ?",
      frequencyResults: [
        {
          choice: "A",
          conclusion:
            "🏖 Далайн салхинд дурлагч: Чиний мөрөөдлийн аялал бол нар, элсэн эрэг, ном. Аялал биш – амгалан тайвшрал!",
        },
        {
          choice: "B",
          conclusion:
            "🏔 Уулын эзэн: Чи уул хаданд авирах, гол гатлах, шинэ оргил эзлэх дуртай. Гутал, үүргэвч хоёр чиний гол хамтрагч!",
        },
        {
          choice: "C",
          conclusion:
            "🌆 Хотын судлаач: Чи хотын гудамжаар алхаж, кофешоп бүрийг турших дуртай. Түүх, урлаг, баар – бүгд чиний маршрут дээр байдаг.",
        },
        {
          choice: "D",
          conclusion:
            "🏛 Соёлын тэнгэр элч: Музей, археологи, орон нутгийн домог – чиний аялал утгатай, мэдлэгээр баялаг байх ёстой.",
        },
      ],
      note: "Үр дүн нь аль сонголт (A, B, C, D) хамгийн олон удаа давтагдсанаас хамаарна",
    },
    "5": {
      title: "Жинхэнэ Монгол Аялагч Мөн Үү?",
      scoreRanges: [
        {
          range: "0–3",
          conclusion:
            "🧃 Анхан шатны судлаач: Монголын аялал жуулчлал чамд шинэ сэдэв мэт. Хөвсгөл, Говь хоёрын ялгааг одооноос судал!",
        },
        {
          range: "4–6",
          conclusion:
            "🌲 Дотоод аялагч: Монгол орны үзэсгэлэнтэй байгалийг хэсэгчилсэн байдлаар мэддэг. Одоо харин бүрэн танилцах цаг нь иржээ!",
        },
        {
          range: "7–8",
          conclusion:
            "🐎 Жинхэнэ Монгол аялагч: Хангай, Хөвсгөл, Говь – бүгдийг үзсэн. Морь унаж, майханд амрах бол чиний хэв маяг!",
        },
        {
          range: "9–10",
          conclusion:
            "🏆 Үндэсний газарзүйч: Чи Монгол орныг зураггүйгээр тайлбарлаж чадна. Нуур бүрийн нэрийг мэддэг болсонд баяр хүргэе!",
        },
      ],
    },
    "6": {
      title: "Таны Адал Явдалт Түвшин",
      scoreRanges: [
        {
          range: "10–16",
          conclusion:
            "🪵 Аялах дуртай ч тухтай байдалд дурлагч: Жаахан бороо орвол майхан биш зочид буудлыг сонгодог.",
        },
        {
          range: "17–23",
          conclusion:
            "🥾 Дунд түвшний зоригтон: Цөөнгүй удаа явган аялал хийж, гол гаталж, шөнө гадаа хонож үзсэн.",
        },
        {
          range: "24–30",
          conclusion:
            "🧗 Адал явдалд дуртай: Та ууланд авирах, рафтинг хийх, элсэн цөлд аялах гээд алинд ч бэлэн.",
        },
        {
          range: "31–40",
          conclusion:
            "🐉 Экстрим мастер: Хатуу ширүүн нөхцөл бол таны тоглоом. Антарктид, ширэнгэн ой, өндөр уул – бүгд таны дараагийн зогсоол байж болно!",
        },
      ],
    },
    "7": {
      title: "Төгс Аяллын Хань Тань Хэн Бэ?",
      frequencyResults: [
        {
          choice: "A",
          conclusion:
            "👨‍👩‍👧‍👦 Гэр бүлтэй аялагч: Аялал гэдэг бол хайртай хүмүүстэйгээ хамт сайхан дурсамж бүтээх мөч гэж та боддог.",
        },
        {
          choice: "B",
          conclusion:
            "🧑‍🤝‍🧑 Найз нөхөдтэй аялагч: Аяллын хамгийн хөгжилтэй хэсэг бол нөхдийн инээд, зураг авалт, хамтдаа төөрөх явдал!",
        },
        {
          choice: "C",
          conclusion:
            "🧘 Ганцаар аялагч: Та өөрийгөө олж, чимээгүй аяллаар дотоод ертөнцөө тэлэхийг хүсдэг.",
        },
        {
          choice: "D",
          conclusion:
            "🐶 Үслэг түнштэй аялагч: Амьтантайгаа байгальд зугаалах нь танд хамгийн сайхан мэдрэмжийг өгдөг.",
        },
      ],
      note: "Аль сонголт (A, B, C, D) хамгийн олон давтагдсан нь дүгнэлт болно",
    },
  },
};
