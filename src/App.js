import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Instructions from "./components/Instructions";

const App = () => {
  return (
    <main className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 h-screen flex justify-between overflow-y-auto">
      <div className="w-full relative">
        <Header />
        <div className="absolute top-0 mt-20 mb-20 px-16 w-full grid grid-cols-1 md:grid-cols-4 gap-6 overflow-y-auto h-[800px]">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Footer />
      </div>
      <Instructions />
    </main>
  );
};

export default App;
