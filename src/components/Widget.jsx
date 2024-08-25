import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../dashboardSlice";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { Button } from "../components/ui/Button";
import CloudAccountRiskChart from "./CloudAccountRiskChart";
import CloudAccountsChart from "./CloudAccountsChart";
import ImageRiskChart from "./ImageRiskChart";

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  const renderWidgetContent = () => {
    switch (widget.type) {
      case "cloudAccounts":
        return <CloudAccountsChart connected={3} notConnected={1} />;
      case "cloudAccountRisk":
        return (
          <CloudAccountRiskChart
            failed={110}
            warning={214}
            notAvailable={18}
            passed={740}
          />
        );
      case "imageRisk":
        return (
          <ImageRiskChart critical={20} high={80} medium={300} low={500} />
        );
      default:
        return (
          <p className="text-sm text-muted-foreground">{widget.content}</p>
        );
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{widget.name}</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700"
        >
          ×
        </Button>
      </CardHeader>
      <CardContent>{renderWidgetContent()}</CardContent>
    </Card>
  );
};

export default Widget;
