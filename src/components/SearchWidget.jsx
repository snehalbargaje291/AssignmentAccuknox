
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "./ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const SearchWidget = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const categories = useSelector((state) => state.dashboard.categories);

  const allWidgets = categories.flatMap((category) =>
    category.widgets.map((widget) => ({
      ...widget,
      categoryName: category.name,
    }))
  );

  const filteredWidgets = allWidgets.filter((widget) =>
    widget.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Search Widgets</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search widgets"
          className="mb-4"
        />
        {searchTerm && (
          <div>
            <h3 className="font-semibold mb-2">Search Results:</h3>
            <ul className="space-y-2">
              {filteredWidgets.map((widget) => (
                <li key={widget.id} className="text-sm">
                  {widget.name}{" "}
                  <span className="text-gray-500">
                    (in {widget.categoryName})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchWidget;
