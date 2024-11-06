import Image from "next/image";
import test_img from '../images/test-img1.png'

export default function ArticleCard() {
    return (
        <div className="max-w-[407px] flex flex-col gap-4">
            <Image src={test_img} alt="#" className="aspect-square object-cover" />
            <h6 className="font-medium">7 февраля</h6>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac feugiat velit. </p>
        </div>
    );
}