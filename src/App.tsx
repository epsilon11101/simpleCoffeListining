import Card from "@components/common/Card";
import "./App.css";

import MainLayout from "@components/layouts/MainLayout";
import coffeeImage from "@assets/images/coffee.jpeg";

function App() {
  return (
    <MainLayout>
      <div
        className="grid grid-cols-1 gap-2
         py-8
         px-4
         bg-jet-black
         h-fit
         w-fit
         absolute
         top-96
         left-1/2
         transform
         -translate-x-1/2
         -translate-y-1/2
         rounded-lg
      "
      >
        <div className="flex flex-col justify-center items-center gap-2 mb-2">
          <p className="text-ivory-white font-bold text-heading">
            Our Collection
          </p>
          <p className="text-slate-gray font-semibold text-label text-center leading-loose">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly
          </p>
        </div>
        <Card
          coffeeImage={coffeeImage}
          price={"5.20"}
          coffeeName="Cappuccino"
          rating="4.7"
          votes="65"
        />
        <Card
          coffeeImage={coffeeImage}
          price={"5.20"}
          coffeeName="Cappuccino"
          rating="4.7"
          votes="65"
        />
      </div>
    </MainLayout>
  );
}

export default App;
