"use client";
import PageLayout from "@/components/PageLayout";
import Header from "@/components/Header";
import BoardList from "@/components/BoardList";

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <BoardList />
    </PageLayout>
  );
}
