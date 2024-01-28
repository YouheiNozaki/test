import Image from "next/image";

import { Article } from "@/app/_libs/microcms";

import Category from "@/app/_components/Category";
import Date from "@/app/_components/Date";

import styles from "./index.module.css";
import Link from "next/link";

type Props = {
  articles: Article[];
};

export default function NewsList({ articles }: Props) {
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/news/${article.id}`} className={styles.link}>
            {article.thumbnail ? (
              <Image
                className={styles.image}
                src={article.thumbnail?.url}
                alt=""
                width={article.thumbnail?.width}
                height={article.thumbnail?.height}
              />
            ) : (
              <Image
                className={styles.image}
                src="/no-image.png"
                alt=""
                width={1200}
                height={630}
              />
            )}
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <Category category={article.category} />
                <Date date={article.publishedAt || article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
