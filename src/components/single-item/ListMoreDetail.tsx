import { Link } from "react-router-dom";

export default function ListMoreDetail<
  T extends { name?: string; url?: string; relation?: string }
>({ data, title }: { data: T[]; title: string }) {
  return (
    <article className="text-my-white-max text-sm max-w-full">
      <span className="text-my-green-min">{title} : </span>
      {data.map((item, index) => {
        if (item.url && item.name) {
          return (
            <Link key={item.name + item.url} to={item.url} target="_blank">
              {index === 0 ? "" : " , "}
              <span className="underline">{item.name}</span>
            </Link>
          );
        } else {
          return (
            <span key={item.relation}>
              {index === 0 ? "" : " , "}
              {item.relation}
            </span>
          );
        }
      })}
    </article>
  );
}
