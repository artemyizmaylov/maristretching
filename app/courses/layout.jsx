import Faq from "@/app/ui/faq.jsx"

export default function CoursesLayout({ children }) {
    return (
        <main className="pt-20 px-4 relative">
            {children}
            <section className="pt-20">
                <h2 className="text-7xl text-green font-extralight uppercase mb-10">Часто задаваемые вопросы</h2>
                <ul className="flex flex-col gap-7">
                    <Faq>
                        <h3 className="text-3xl uppercase">как я получу доступ к курсу?</h3>
                        <p>Чтобы получить доступ к курсу, нажмите на кнопку «купить курс» на этой странице. Сразу после оплаты на данной странице Вы получите письмо с доступом к курсу на указанный email-адрес.</p>
                    </Faq>
                    <Faq>
                        <h3 className="text-3xl uppercase">возможна ли оплата из-за рубежа?</h3>
                        <p>Да, через PayPal, для этого напишите мне на почту maristretching@mail.ru</p>
                    </Faq>
                    <Faq>
                        <h3 className="text-3xl uppercase">как я получу доступ к курсу?</h3>
                        <p>Чтобы получить доступ к курсу, нажмите на кнопку «купить курс» на этой странице. Сразу после оплаты на данной странице Вы получите письмо с доступом к курсу на указанный email-адрес.</p>
                    </Faq>
                    <Faq>
                        <h3 className="text-3xl uppercase">как будут проходить занятия?</h3>
                        <p>Для занятий у Вас будет свой личный кабинет на платформе Skillspace, через который Вы сможете получить доступ к приобретённым курсам в любое время. Также вам будет доступен курс в мобильном приложении Skillspace.</p>
                    </Faq>
                    <Faq>
                        <h3 className="text-3xl uppercase">Противопоказания к прохождению курса:</h3>
                        <p>Беременность, заболевания сердечно-сосудистой системы, диастаз, наличие грыж, протрузий, варикоза, нарушения опорно-двигательного аппарата.</p>
                    </Faq>
                </ul>
            </section>
        </main>
    )
}