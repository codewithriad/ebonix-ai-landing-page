import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const DashboardHeader: React.FC = () => {
  return (
    <div className="py-6">
      <div className="py-6">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-para">Welcome</p>
          <h2 className="text-xl font-semibold text-foreground">
            Jayden Smith
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <Card className="col-span-2 bg-background text-foreground border shadow-cardShadow shadow-md">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>
              You are currently using our <strong>Free Plan</strong>.<br />
              Usage renews at Tue, Mar 5, 2024 at 12:22:39 AM GMT+4.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <button className="my-4 ml-4 px-4 py-3 text-sm bg-foreground text-background rounded-lg">
              Upgrade plan
            </button>
          </CardContent>
        </Card>

        <Card className="col-span-1 bg-background text-foreground border shadow-cardShadow shadow-md flex flex-col justify-center items-center">
          <CardHeader>
            <CardTitle className="text-sm font-normal">
              Total tokens left
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <h3 className="text-3xl font-bold">13,500</h3>
            <button className="my-4 ml-4 px-4 py-3 text-sm border rounded-lg bg-foreground text-background">
              Buy additional credits
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHeader;
