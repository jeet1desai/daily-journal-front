"use client";

import React, { useState } from "react";
import BottomNavigation from "@/components/bottom-navigation";
import Sidebar from "@/components/sidebar";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const Appearance = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="w-[100%] md:w-[70%] lg:w-[80%] border-l-2 border-r-2">
        <div className="overflow-hidden">
          <div className="sticky top-0 bg-white dark:bg-background">
            <div className="px-5 py-8">
              <h1 className="text-black text-3xl font-bold dark:text-primary mb-3">Appearance</h1>
              <p className="text-black text-sm dark:text-primary">Customize the appearance of the app. Automatically switch between day and night themes.</p>
            </div>
            <Separator />
          </div>
        </div>
        <div className="px-5 my-8 h-full">
          <div className="w-full md:w-[50%] flex flex-col gap-[20px]">
            <Label>Theme</Label>
            <p className="text-xs">Select the theme for the dashboard.</p>

            <div>
              <div className="flex gap-[20px] mb-5">
                <Button
                  onClick={() => setTheme("light")}
                  className={cn("bg-white text-black hover:bg-white hover:text-black dark:border dark:border-white dark:bg-black dark:text-white", {
                    "bg-black text-white hover:bg-black hover:text-white dark:bg-white dark:text-black": theme === "light",
                  })}
                >
                  <SunIcon />
                </Button>
                <Button
                  onClick={() => setTheme("dark")}
                  className={cn("bg-white text-black hover:bg-white hover:text-black dark:border dark:border-white dark:bg-black dark:text-white", {
                    "bg-black text-white hover:bg-black hover:text-white dark:bg-white dark:text-black": theme === "dark",
                  })}
                >
                  <MoonIcon />
                </Button>
              </div>
              <Button onClick={() => localStorage.setItem("theme", theme)}>Update preferences</Button>
            </div>
          </div>
        </div>
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Appearance;
