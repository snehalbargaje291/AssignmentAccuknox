import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWidget } from "../dashboardSlice";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/Select";

const AddWidgetForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dashboard.categories);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && content && categoryId) {
      dispatch(
        addWidget({
          categoryId: parseInt(categoryId),
          widget: { name, content },
        })
      );
      setName("");
      setContent("");
      setCategoryId("");
      onSubmit(); // Close the slide-out panel
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Widget Name"
      />
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Widget Content"
      />
      <Select onValueChange={setCategoryId} value={categoryId}>
        <SelectTrigger>
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id.toString()}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit">Add Widget</Button>
    </form>
  );
};

export default AddWidgetForm;
