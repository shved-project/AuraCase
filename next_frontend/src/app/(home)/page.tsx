import {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Главная",
};

export default function Home() {
    return (
        <ul className="flex w-full items-center justify-center gap-8 my-10">
            <li>
                <Link href={"/register"}>Регистрация</Link>
            </li>
            <li>
                <Link href={"/login"}>Авторизация</Link>
            </li>
            <li>
                <Link href={"/profile/user"}>Профиль</Link>
            </li>
            <li>
                <Link href={"/cart"}>Корзина</Link>
            </li>
            <li>
                <Link href={"/favorites"}>Избранное</Link>
            </li>
            <li>
                <Link href={"/products"}>Товары</Link>
            </li>
            <li>
                <Link href={"/products/id"}>Товар</Link>
            </li>
            <li>
                <Link href={"/products/cases"}>Чехлы</Link>
            </li>
            <li>
                <Link href={"/products/chargers"}>Зарядные устройства</Link>
            </li>
            <li>
                <Link href={"/products/headphones"}>Наушники</Link>
            </li>
            <li>
                <Link href={"/products/screen-protectors"}>Защитные стёкла</Link>
            </li>
            <li>
                <Link href={"/checkout"}>Страница оформления заказа</Link>
            </li>
            <li>
                <Link href={"/contacts"}>Контакты</Link>
            </li>
            <li>
                <Link href={"/about"}>О нас</Link>
            </li>
            <li>
                <Link href={"/faq"}>FAQ</Link>
            </li>
            <li>
                <Link href={"/privacy-policy"}>Политика конфиденциальности</Link>
            </li>
            <li>
                <Link href={"/terms-of-service"}>Условия использования</Link>
            </li>
        </ul>
    );
}
