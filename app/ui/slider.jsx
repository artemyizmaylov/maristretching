'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import CourseCard from './course-card';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider({ data }) {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            {
                data.map((course) => (
                    <SwiperSlide key={course.id}>
                        <CourseCard data={course} />
                    </SwiperSlide>
                ))
            }
        </Swiper >
    );
};
