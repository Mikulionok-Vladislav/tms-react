import styles from "./index.module.css";
import { Post } from "../Post/Post";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// const posts: IProps[] = [
//   {
//     image:
//       "https://s3-alpha-sig.figma.com/img/6109/9867/a6f712e6936f21acc8dd72c03cfdd4df?Expires=1656892800&Signature=f~hdBpjPdX2kP7vRmhuWcsDf0V9QZmeYX3n3k484laO90~a3HEeNBjgtxWF-8c9o11G5L~~A49e1mku8jl82WF5ibimZkmizxIWSohn39r11Z1NXaIqaCj62bzKqSq56aIFWC15lFx83h1LjK-mCMZvbawPYxVa3FYKkmcsWHsHa6akhSCaCJmgTDphxnsJb8sbU8HQ94k3~QJvVFRHHtjw7rZiC04nvCsBctAzsz59IkujvDYAnrq4i2TRWwUaOpJyZagdls3B4Gkge73Zy7KZ3I~YhaOd33llYQO0qNYYilr33JZuzhPUo76q8XMMsMrvcu4tUKxCmOtlQsjEczA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
//     date: "2022-06-17",
//     title: "Title 1",
//     text: "text1 text1 text1 text1 text1",
//   },
//   {
//     image:
//       "https://s3-alpha-sig.figma.com/img/6109/9867/a6f712e6936f21acc8dd72c03cfdd4df?Expires=1656892800&Signature=f~hdBpjPdX2kP7vRmhuWcsDf0V9QZmeYX3n3k484laO90~a3HEeNBjgtxWF-8c9o11G5L~~A49e1mku8jl82WF5ibimZkmizxIWSohn39r11Z1NXaIqaCj62bzKqSq56aIFWC15lFx83h1LjK-mCMZvbawPYxVa3FYKkmcsWHsHa6akhSCaCJmgTDphxnsJb8sbU8HQ94k3~QJvVFRHHtjw7rZiC04nvCsBctAzsz59IkujvDYAnrq4i2TRWwUaOpJyZagdls3B4Gkge73Zy7KZ3I~YhaOd33llYQO0qNYYilr33JZuzhPUo76q8XMMsMrvcu4tUKxCmOtlQsjEczA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
//     date: "2022-06-18",
//     title: "Title 2",
//     text: "text2 text2 text2 text2 text2",
//   },
//   {
//     image:
//       "https://s3-alpha-sig.figma.com/img/6109/9867/a6f712e6936f21acc8dd72c03cfdd4df?Expires=1656892800&Signature=f~hdBpjPdX2kP7vRmhuWcsDf0V9QZmeYX3n3k484laO90~a3HEeNBjgtxWF-8c9o11G5L~~A49e1mku8jl82WF5ibimZkmizxIWSohn39r11Z1NXaIqaCj62bzKqSq56aIFWC15lFx83h1LjK-mCMZvbawPYxVa3FYKkmcsWHsHa6akhSCaCJmgTDphxnsJb8sbU8HQ94k3~QJvVFRHHtjw7rZiC04nvCsBctAzsz59IkujvDYAnrq4i2TRWwUaOpJyZagdls3B4Gkge73Zy7KZ3I~YhaOd33llYQO0qNYYilr33JZuzhPUo76q8XMMsMrvcu4tUKxCmOtlQsjEczA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
//     date: "2022-06-19",
//     title: "Title 3",
//     text: "text3 text3 text3 text3 text3",
//   },
//   {
//     image:
//       "https://s3-alpha-sig.figma.com/img/6109/9867/a6f712e6936f21acc8dd72c03cfdd4df?Expires=1656892800&Signature=f~hdBpjPdX2kP7vRmhuWcsDf0V9QZmeYX3n3k484laO90~a3HEeNBjgtxWF-8c9o11G5L~~A49e1mku8jl82WF5ibimZkmizxIWSohn39r11Z1NXaIqaCj62bzKqSq56aIFWC15lFx83h1LjK-mCMZvbawPYxVa3FYKkmcsWHsHa6akhSCaCJmgTDphxnsJb8sbU8HQ94k3~QJvVFRHHtjw7rZiC04nvCsBctAzsz59IkujvDYAnrq4i2TRWwUaOpJyZagdls3B4Gkge73Zy7KZ3I~YhaOd33llYQO0qNYYilr33JZuzhPUo76q8XMMsMrvcu4tUKxCmOtlQsjEczA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
//     date: "2022-06-20",
//     title: "Title 4",
//     text: "text4 text4 text4 text4 text4",
//   },
// ];

interface IProps {
  image?: string;
  text: string;
  date: string;
  title: string;
  id: number;
}

export const ListPosts = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect (() => {
    const promise = fetch('https://studapi.teachmeskills.by/blog/posts/?limit=100');

    promise.then((response) => {

      if(response.ok) {
        return response.json();
      }

    })
    .then((data) => {
      setPosts(data?.results);
    });
  }, []);

  return (
    <div className={styles.container}>
      {posts.map(({ image, date, text, title, id }: IProps) => {
        const onClickPost = () => {
          history.push('post/' + id)
        };

        return (
          <div onClick={onClickPost}>
            <Post
              key={title}
              title={title}
              image={image}
              date={date}
              text={text}
            />
          </div>
        );
      })}
    </div>
  );
};
