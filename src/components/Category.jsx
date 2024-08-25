import React from "react";
import Widget from "./Widget";
import { Button } from "./ui/Button";

const Category = ({ category }) => {
  return (
    <div className="mb-8 bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-semibold">{category.name}</h3>
      </div>
      <div className="border-t border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {category.widgets.map((widget) => (
            <Widget key={widget.id} widget={widget} categoryId={category.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
