import PageLayout from "@/components/PageLayout";
import Header from "@/components/Header";
import BoardListCard from "@/components/BoardListCard";

const page = () => {
  return (
    <PageLayout>
      <Header />
      <div className="py-[50px]">
        <div className="relative">
          <h2 className="text-[36px] pb-4">나의 술 이야기</h2>
        </div>
        <BoardListCard />
      </div>
    </PageLayout>
  );
};

export default page;
