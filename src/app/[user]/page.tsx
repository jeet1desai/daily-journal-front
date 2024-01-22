"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/sidebar";
import BottomNavigation from "@/components/bottom-navigation";
import JournalCard from "@/components/journal-card";
import { Button } from "@/components/ui/button";
import Daily from "@/components/daily";

const UserBlog = () => {
  const [isDialogDialogOpen, setDailyDialog] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="w-[100%] md:w-[60%] lg:w-[60%] border-l-2 border-r-2 overflow-auto">
          <div className="sticky top-0 bg-white dark:bg-background">
            <div className="px-5 py-8">
              <h1 className="text-black text-3xl font-bold dark:text-primary">Good Morning,</h1>
              <p className="text-black text-2xl dark:text-primary">12 Jan 1212</p>
            </div>
            <Separator />
            <div className="my-5 mx-4 flex gap-[30px]">
              <Input placeholder="Search by title" type="text" />
              <Button onClick={() => setDailyDialog(true)}>Add</Button>
            </div>
            <Separator />
          </div>
          <div className="px-5 my-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-6">
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
              <JournalCard />
            </div>
          </div>
          <BottomNavigation />
        </div>
        <div className="hidden lg:block w-[20%] p-5">
          <div className="flex justify-left">
            <Calendar mode="single" className="rounded-md border shadow" />
          </div>
        </div>
      </div>

      <Daily isOpen={isDialogDialogOpen} handleOpen={setDailyDialog} />
    </>
  );
};

export default UserBlog;
