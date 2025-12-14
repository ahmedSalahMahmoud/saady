// Project images imports
import ghaima1 from "@/assets/projects/ghaima-1.png";
import ghaima2 from "@/assets/projects/ghaima-2.png";
import ghaima3 from "@/assets/projects/ghaima-3.png";
import fakih1 from "@/assets/projects/fakih-1.png";
import fakih2 from "@/assets/projects/fakih-2.png";
import fakih3 from "@/assets/projects/fakih-3.png";
import aaliJeddah1 from "@/assets/projects/aali-jeddah-1.png";
import aaliJeddah2 from "@/assets/projects/aali-jeddah-2.png";
import aaliJeddah3 from "@/assets/projects/aali-jeddah-3.png";
import ahliCapital1 from "@/assets/projects/ahli-capital-1.png";
import ahliCapital2 from "@/assets/projects/ahli-capital-2.png";
import babJeddah1 from "@/assets/projects/bab-jeddah-1.png";
import babJeddah2 from "@/assets/projects/bab-jeddah-2.png";
import cityRose1 from "@/assets/projects/city-rose-1.png";
import cityRose2 from "@/assets/projects/city-rose-2.png";
import cityRose3 from "@/assets/projects/city-rose-3.png";
import rootsHotel1 from "@/assets/projects/roots-hotel-1.png";
import robaBakhsh1 from "@/assets/projects/roba-bakhsh-1.png";

export interface ProjectDetails {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  year: string;
  client: string;
  images: string[];
}

export const projects: ProjectDetails[] = [
  {
    id: 1,
    title: "مشروع فندق شقق غيمة",
    category: "المقاولات العامة",
    location: "مكة المكرمة",
    year: "2023",
    client: "شركة غيمة للضيافة",
    description: "مشروع متكامل لبناء فندق شقق فاخر في قلب مكة المكرمة، يضم 120 وحدة سكنية مجهزة بأحدث التقنيات. تم تنفيذ جميع أعمال البناء والتشطيب والأنظمة الكهروميكانيكية وأنظمة السلامة المتكاملة.",
    images: [ghaima1, ghaima2, ghaima3],
  },
  {
    id: 2,
    title: "فيلا الفقيه",
    category: "المقاولات العامة",
    location: "جدة",
    year: "2022",
    client: "عائلة الفقيه",
    description: "فيلا سكنية فاخرة بتصميم عصري يجمع بين الأصالة والحداثة. تم تنفيذ المشروع بالكامل من الأساسات حتى التشطيبات النهائية مع الحرص على أدق التفاصيل وأعلى معايير الجودة.",
    images: [fakih1, fakih2, fakih3],
  },
  {
    id: 3,
    title: "أعالي جدة",
    category: "المقاولات العامة",
    location: "جدة",
    year: "2023",
    client: "وزارة الإسكان - سكني",
    description: "مشروع أعالي جدة يضم عمارات سكنية من 7 أدوار، عدد خمس عمارات نماذج. تم تنفيذ أعمال التشطيبات والأعمال الإنشائية وأعمال الخرسانات.",
    images: [aaliJeddah1, aaliJeddah2, aaliJeddah3],
  },
  {
    id: 4,
    title: "مشروع أبراج الأهلي كابيتال",
    category: "السلامة",
    location: "مكة المكرمة",
    year: "2021",
    client: "البنك الأهلي",
    description: "تركيب وصيانة أنظمة السلامة والإطفاء المتكاملة للأبراج التجارية، شاملة أنظمة إنذار الحريق وأنظمة الإطفاء التلقائي وأنظمة التحكم في الدخان والإخلاء. المطور: شركة الاتحاد للتكافل والتطوير والاستثمار.",
    images: [ahliCapital1, ahliCapital2],
  },
  {
    id: 5,
    title: "فندق باب جدة",
    category: "السلامة",
    location: "مكة المكرمة - الستين",
    year: "2022",
    client: "منصور الرميح",
    description: "تصميم وتنفيذ أنظمة السلامة الشاملة للفندق بما يتوافق مع المعايير الدولية ومتطلبات الدفاع المدني السعودي. يشمل المشروع أعمال مكافحة الحريق والسلامة - المرشات المائية والمضخات.",
    images: [babJeddah1, babJeddah2],
  },
  {
    id: 6,
    title: "مشروع مدينة الورود",
    category: "المقاولات العامة",
    location: "الطائف",
    year: "2023",
    client: "وزارة الإسكان - سكني",
    description: "مشروع مدينة الورود يضم فلل سكنية بتنفيذ أعمال تشطيبات بأسرع وأحدث تقنيات البناء الحديث وأعمال خرسانات باستخدام تقنيات القوالب الجاهزة.",
    images: [cityRose1, cityRose2, cityRose3],
  },
  {
    id: 7,
    title: "مشروع فندق روتس",
    category: "السلامة",
    location: "مكة المكرمة",
    year: "2022",
    client: "فندق روتس",
    description: "تصميم وتنفيذ أنظمة السلامة والحماية من الحرائق الشاملة للفندق، شاملة أنظمة الإنذار والإطفاء التلقائي ومضخات الحريق.",
    images: [rootsHotel1],
  },
  {
    id: 8,
    title: "فندق ربع بخش",
    category: "السلامة",
    location: "مكة المكرمة",
    year: "2021",
    client: "مجموعة ربع بخش",
    description: "تركيب وصيانة أنظمة السلامة المتكاملة للفندق بما يتوافق مع اشتراطات الدفاع المدني ومعايير السلامة الدولية.",
    images: [robaBakhsh1],
  },
];

export const categories = ["الكل", "المقاولات العامة", "السلامة"];
