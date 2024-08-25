import React, { useState } from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
import AddWidgetForm from "./AddWidgetForm";
import SearchWidget from "./SearchWidget";
import SlideOutPanel from "./SlideOutPanel";
import { Button } from "../components/ui/Button";

const Dashboard = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  const [isAddWidgetOpen, setIsAddWidgetOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <Button onClick={() => setIsAddWidgetOpen(true)}>Add Widget</Button>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-6">
          <SearchWidget />
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </main>
      <SlideOutPanel
        isOpen={isAddWidgetOpen}
        onClose={() => setIsAddWidgetOpen(false)}
        title="Add Widget"
      >
        <AddWidgetForm onSubmit={() => setIsAddWidgetOpen(false)} />
      </SlideOutPanel>
    </div>
  );
};

export default Dashboard;
