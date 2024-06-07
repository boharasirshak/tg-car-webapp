// import { Car } from "@/components/Car-card/Car";
import { Car } from "@/components/Car-card/Car";
import { Link } from "@/components/Link/Link";
import Image from "next/image";

export default function IndexPage() {
  return (
    <main className="main-page">
      <div className="container">
        <div className="top-profile">
          <div>
            <h1>Привет</h1>
            <span>БМВ</span>
          </div>
          <div>
            <Image
              src={"../../public/assets/images/notify.svg"}
              width={100}
              height={100}
              alt="img"
            />
          </div>
        </div>
        {/* car slides section */}
        <div className="car-slide mt-45">
          <div className="car-slide-content">
            <h4>Самое время заказать!</h4>
            <p>Скидка 10% на наши услуги при первом заказе!</p>
            <a href="">заказать!</a>
          </div>
        </div>
        {/* car slides section */}
        {/* STAMP SECTION START HERE */}
        <div className="stamp-section pt-24 ">
          <div className="top-wrap flex align-center space-between">
            <h2>Марки</h2>
            <a href="">Все</a>
          </div>
        </div>
        {/* STAMP SECTION END HERE */}
        {/* RECOMMENDATION SECTION START HERE */}
        <div className="recommendation-section pt-16">
          <div className="top-wrap flex align-center space-between">
            <h2>Рекоммендации</h2>
            <a href="">Все</a>
          </div>
          <div className="grid-2 gap-16 mt-16">
            <Car />
            <Car />
            <Car />
            <Car />
          </div>
        </div>
        {/* RECOMMENDATION SECTION END HERE */}
      </div>
      <Link href={"/search-page"}>Search Page</Link> <br />
      <Link href={"/init-data"}>Init Data</Link> <br />
      <Link href={"/launch-params"}>Launch Params</Link> <br />
    </main>
  );
}
