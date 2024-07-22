import React from 'react';
import ArticleHeader from "@/components/articleHeader";
import Content from "@/components/boxes/content";
import ArticleHeadline from "@/components/ArticleHeadline";
import SectionBox from "@/components/boxes/section";
import MainBox from "@/components/boxes/main";
import AboutBox from "@/components/boxes/pages/about";

const documents = [
    {
        href: 'https://cdn-st1.smotrim.ru/mh_files/004/629/Svedeniya_2023.pdf',
        text: 'Сведения о специальной оценке условий труда в головном предприятии ВГТРК (2022 год)'
    },
    {
        href: 'https://cdn-st1.smotrim.ru/mh_files/004/629/Svedeniya_2023.pdf',
        text: 'Сведения о специальной оценке условий труда в головном предприятии ВГТРК (2022 год)'
    }
];

const DocsList = ({ documents }) => (
    <div className="docs">
        <h3>Документы</h3>
        <div className="docs__List">
            {documents.map((doc, index) => (
                <p key={index}>
                    <a href={doc.href} target="_blank" rel="noopener noreferrer">
                        {doc.text}
                    </a>
                </p>
            ))}
        </div>
    </div>
);

const Page = async () => {
    return (
        <>
            <MainBox>
                <AboutBox>
                    <Content>
                        <SectionBox>
                            <ArticleHeader text="о компании" href="/" />
                            <ArticleHeadline text="ВГТРК. ТЕЛЕВИДЕНИЕ, РАДИО, ИНТЕРНЕТ:" />
                            <p>
                                Отраслеобразующий медиахолдинг №1 в стране с совокупным охватом 99% населения России.
                                Основной источник информации и культурного контекста на русском языке.
                                Безусловный лидер по производству аудиовизуального контента на русском языке в мире.
                            </p>
                            <ArticleHeadline text="ВГТРК – ЭТО:" type="mgTB" />
                            <ul>
                                <li>
                                    Федеральное и региональное телевещание: «Россия», «Россия 24», «Россия Культура», «Карусель», а также 79 региональных филиалов.
                                </li>
                                <li>
                                    Международное вещание: «РТР-Планета» в СНГ, Европе, Азии, США, «Россия 24» во всем мире.
                                </li>
                                <li>
                                    Федеральное радиовещание: «Вести ФМ», «Маяк», «Радио России», «Радио Культура».
                                </li>
                                <li>
                                    Внеэфирное вещание: 19 тематических каналов для кабельных и спутниковых операторов.
                                </li>
                                <li>
                                    Цифровая среда: уникальная медиа-платформа СМОТРИМ, объединяющая контент всех активов ВГТРК,
                                    крупнейший новостной портал Вести.Ru, а также популярные каналы на основных внешних площадках
                                    и в социальных сетях.
                                </li>
                                <li>
                                    Архив ГТРФ c 1960 года.
                                </li>
                            </ul>
                            <p><strong>Общий объем оригинального контента всех ресурсов ВГТРК > 160 000 часов в год.</strong></p>
                            <ArticleHeadline text="ФИЛИАЛЬНАЯ СЕТЬ" type="mgTB" />
                            <p>79 самостоятельных региональных телерадиокомпаний. Контент на 53 национальных языках интегрирован
                                в федеральное вещание телеканалов «Россия» и «Россия 24».
                            </p>
                            <ArticleHeadline text="«ЦИФРОВОЕ ТЕЛЕВИДЕНИЕ»" type="mgTB" />
                            <p>Первый российский пакет неэфирных каналов в партнёрстве с «Ростелеком».</p>
                            <p>19 телеканалов для кабельных и спутниковых операторов.</p>
                            <p>Жанры: познавательные, детские, киносериальные и международные проекты.</p>
                            <p>Аудиовизуальный контент и сервисы «Цифрового телевидения» представлены сразу на пяти экранах
                                (ТВ, мониторы, смартфоны, планшеты и экраны кинотеатров) и переведены на 10 языков.
                            </p>
                            <ArticleHeadline text="СОЦМЕДИА" type="mgTB" />
                            <p>Популярные каналы на основных внешних площадках и в социальных сетях.</p>
                            <DocsList documents={documents} />
                        </SectionBox>
                    </Content>
                </AboutBox>
            </MainBox>
        </>
    )
}

export default Page;
