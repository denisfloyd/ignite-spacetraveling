import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { useRouter } from 'next/router';
import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';
import Comments from '../../components/Comments';
import PreviewButton from '../../components/PreviewButton';

interface Post {
  uid: string;
  first_publication_date: string | null;
  last_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
  preview: boolean;
}

export default function Post({
  post: postFromProps,
  preview,
}: PostProps): JSX.Element {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  const post = {
    ...postFromProps,
    first_publication_date: postFromProps.first_publication_date
      ? format(new Date(postFromProps.first_publication_date), 'dd MMM yyyy', {
          locale: ptBR,
        })
      : '',
  };

  const amountWordsOfBody = RichText.asText(
    post.data.content.reduce((acc, data) => [...acc, ...data.body], [])
  ).split(' ').length;

  const amountWordsOfHeading = post.data.content.reduce((acc, data) => {
    if (data.heading) {
      return [...acc, ...data.heading.split(' ')];
    }

    return [...acc];
  }, []).length;

  const readingTime = Math.ceil(
    (amountWordsOfBody + amountWordsOfHeading) / 200
  );

  return (
    <>
      <Head>
        <title>{post.data.title} | Space Traveling</title>
      </Head>

      {post.data.banner.url && (
        <section className={styles.banner}>
          <img src={post.data.banner.url} alt="banner" />
        </section>
      )}

      <main className={commonStyles.container}>
        <article className={styles.post}>
          <h1>{post.data.title}</h1>

          <div className={styles.postInfo}>
            <span>
              <FiCalendar size={20} color="#BBBBBB" />
              {post.first_publication_date}
            </span>

            <span>
              <FiUser size={20} color="#BBBBBB" />
              {post.data.author}
            </span>

            <span>
              <FiClock size={20} color="#BBBBBB" />
              {readingTime} min
            </span>
          </div>

          <div className={styles.postContent}>
            {post.data.content.map(({ heading, body }) => (
              <div key={heading}>
                {heading && <h2>{heading}</h2>}

                <div
                  className={styles.postSection}
                  dangerouslySetInnerHTML={{ __html: RichText.asHtml(body) }}
                />
              </div>
            ))}
          </div>
        </article>

        <Comments />

        <PreviewButton preview={preview} />
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();

  const posts = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    { pageSize: 3 }
  );

  const paths = posts.results.map(result => {
    return {
      params: {
        slug: result.uid,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({
  params,
  preview = false,
  previewData,
}) => {
  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('post', String(slug), {
    ref: previewData?.ref || null,
  });

  const post: Post = {
    uid: response.uid,
    first_publication_date: response.first_publication_date,
    last_publication_date: response.last_publication_date,
    data: {
      title: response.data.title,
      subtitle: response.data.subtitle,
      banner: response.data.banner,
      author: response.data.author,
      content: response.data.content,
    },
  };

  return {
    props: {
      post,
      preview,
    },
    revalidate: 60 * 30, // 30 minutos
  };
};
