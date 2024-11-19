import { Button } from "@/components/ui/button";
import {  Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function ThankYouPage() {

  const [viewOrder, setViewOrder] = useState(false);

  if (viewOrder) {
    return <Navigate to="/shop/account" />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle> Thank You for your Order. </CardTitle>
      </CardHeader>
      <Button className="mt-5" onClick={() => setViewOrder(true)}>
        View Orders
      </Button>
    </Card>
  );
}

export default ThankYouPage;
