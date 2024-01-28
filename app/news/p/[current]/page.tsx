import { getNewsList } from "@/app/_libs/microcms";

import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";

import { NEWS_LIST_LIMIT } from "@/app/_constants";

type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: articles, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if (articles.length === 0) {
    notFound();
  }

  return (
    <>
      <NewsList articles={articles} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
