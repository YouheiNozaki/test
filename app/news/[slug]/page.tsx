import Link from "next/link";
import Image from "next/image";

import { getNewsDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import Category from "@/app/_components/Category";
import Date from "@/app/_components/Date";
import ButtonLink from "@/app/_components/ButtonLink";
import Article from "@/app/_components/Article";
import { formatRichText } from "@/app/_libs/utils";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export default async function Page({ params, searchParams }: Props) {
  const data = await getNewsDetail(params.slug, { draftKey: searchParams.dk });

  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
