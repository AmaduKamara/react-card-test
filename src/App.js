import { useState } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Instructions from "./components/Instructions";

const App = () => {
  const [cardItems, setCardItems] = useState([]);

  // Handle add card
  const handleAddCard = () => {
    const randomNumber = Math.floor(Math.random() * 150) + 1;

    setCardItems([
      ...cardItems,
      {
        id: cardItems.length,
        value: randomNumber,
      },
    ]);
  };

  // Handle delete card
  const handleDeleteCard = (value) => {
    setCardItems(cardItems.filter((item) => item.value !== value));
  };

  // Handle sorting
  const handleSort = () => {
    const itemsToSort = [...cardItems];
    itemsToSort.sort((a, b) => a.value - b.value);
    setCardItems(itemsToSort);
  };

  return (
    <main className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 h-screen flex justify-between overflow-y-auto">
      <div className="w-full relative">
        <Header handleAddCard={handleAddCard} handleSort={handleSort} />
        <div className="absolute top-0 mt-20 mb-20 px-16 w-full grid grid-cols-1 md:grid-cols-4 gap-6 overflow-hidden overflow-y-auto max-h-[800px]">
          {cardItems.length === 0 && (
            <div>
              <p>Sorry, there is no card.</p>
            </div>
          )}
          {cardItems &&
            cardItems.map((cardItem) => (
              <Card
                key={cardItem.value}
                card={cardItem}
                handleDeleteCard={handleDeleteCard}
              />
            ))}
        </div>
        <Footer />
      </div>
      <Instructions />
    </main>
  );
};

export default App;
