import Header from "../../layout/Header/Header";
import SliderList from "../Slider";
import Main from "../../pages/Main";
import Stock from "../../pages/Stock";
import Shops from "../../pages/Shops/Shops";
import Cart from "../../pages/Cart";
import Ordering from "../../pages/Ordering";
import Catalog from "../../pages/Catalog/Catalog";
import AccessoriesNabor from "../../pages/Goods/Subtitles/AccessoriesNabor";
import Goods from "../../pages/Goods/Goods";
import Product from "../Product/Product";

export const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/main',
        component: Main
    },
    {
        path: '/stock',
        component: Stock
    },
    {
        path: '/shops',
        component: Shops
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/ordering',
        component: Ordering
    },
    {
        path: '/catalog',
        component: Catalog
    },
    {
        path: '/product/:id',
        component: Product
    },


]
const array = [
    "Наборы аксессуаров",
    "Для раковины",
    "Для туалета",
    "Для душа",
    "Для ванны",
    "Для полотенец",
    "Коврики",
    "Тумбы с раковиной",
    "Мебель под стиральную машину с раковиной",
    "Столешницы с раковиной",
    "Консоли с раковиной",
    "Зеркала",
    "Зеркала-шкафы",
    "Шкафы-пеналы",
    "Полки под зеркало",
    "Шкафы",
    "Комоды и тумбы",
    "Мебель для туалета",
    "Ванны",
    "Шторки стеклянные",
    "Душ",
    "Аксессуары для ванны",
    "Для раковины",
    "Для душа и ванны",
    "Для кухонной мойки",
    "Универсальные",
    "Для биде",
    "Душевые стойки",
    "Душевые комплекты на борт ванны",
    "Душевые панели",
    "Гигиенические души",
    "Душевые гарнитуры",
    "Лейки",
    "Шланги",
    "Сенсорные смесители",
    "Писсуары",
    "Полотенцесушители",
    "Водонагреватели",
    "Инсталляции для унитазов",
    "Инсталляции для биде",
    "Инсталляции для писсуаров",
    "Инсталляции для раковин",
    "Кнопки смыва",
    "Кухонные мойки",
    "Смесители для кухни",
    "Душевые уголки",
    "Душевые двери в нишу",
    "Душевые перегородки",
    "Душевые кабины",
    "Душевые боксы",
    "Раковины",
    "Рукомойники",
    "Столешницы с раковиной",
    "Раковины на стиральную машину",
    "Раковины с пьедесталом",
    "Консоли с раковиной",
    "Пьедесталы",
    "Унитазы",
    "Комплекты: Унитаз + Инсталляция",
    "Инсталляции",
    "Кнопки смыва",
    "Комплекты: Унитаз + Биде",
    "Биде",
    "Комплекты: Биде + Инсталляция",
    "Инсталляции для биде",
    "Смесители для биде"
]
array.map((item) => {
    routes.push({
        path: `/${item}`,
        component: () => <Goods subcategory={item} />
    })
})