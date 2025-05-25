import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, phone, text } = await request.json();

        // Валидация данных
        if (!name || !email || !text) {
            return NextResponse.json(
                { message: 'Не заполнены обязательные поля' },
                { status: 400 }
            );
        }

        // Проверка формата email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: 'Неверный формат email' },
                { status: 400 }
            );
        }

        // Конфигурация транспорта для отправки email
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Опции письма
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
            subject: `Сообщение от сайта Maristretching`,
            text: `
        Имя: ${name}
        Email: ${email}
        Телефон: ${phone || 'Не указан'}
        
        Сообщение:
        ${text}
      `,
            html: `
        <h1>Новое сообщение с сайта Maristrethcing</h1>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone || 'Не указан'}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${text}</p>
      `,
        };

        // Отправка email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Сообщение успешно отправлено!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Ошибка при обработке формы:', error);
        return NextResponse.json(
            { message: 'Произошла ошибка при отправке сообщения' },
            { status: 500 }
        );
    }
}

// Обработка других методов
export async function GET() {
    return NextResponse.json(
        { message: 'Method not allowed' },
        { status: 405 }
    );
}

export async function PUT() {
    return NextResponse.json(
        { message: 'Method not allowed' },
        { status: 405 }
    );
}

export async function DELETE() {
    return NextResponse.json(
        { message: 'Method not allowed' },
        { status: 405 }
    );
}