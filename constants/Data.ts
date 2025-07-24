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
  naturalSites: NaturalSite[];
  source?: any;
}

export const aimags: Aimag[] = [
  {
    id: 1,
    name: "Архангай",
    area: "55,313 км²",
    source: require("@/assets/regions/arhagai.png"),
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
        name: "Хар балгас",
        description: "",
        image: "https://montsame.mn/files/61761ffe35bc6.jpeg",
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
    naturalSites: [
      // өмнөх 3
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
