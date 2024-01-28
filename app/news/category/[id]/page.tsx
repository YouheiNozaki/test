import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";

type Props = {
  params: {
    id: string;
  };
};

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id);

  const { contents: articles, totalCount } = await getNewsList({
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <NewsList articles={articles} />
      <Pagination
        totalCount={totalCount}
        basePath={`/news/category/${category.id}`}
      />
    </>
  );
}
