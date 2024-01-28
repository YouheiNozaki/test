import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchField";

import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { Suspense } from "react";

export default async function Page() {
  const { contents: articles, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <Suspense>
        <SearchField />
      </Suspense>
      <NewsList articles={articles} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
