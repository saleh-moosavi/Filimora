import ListMoreDetail from "./ListMoreDetail";
import { Anime } from "../../types/apiResponse";

export default function ExtraDetails({ data }: { data: Anime }) {
  return (
    <article className="bg-my-black-med col-span-2 mt-5 p-5 rounded-xl overflow-hidden grid gap-2 grid-cols-1 lg:grid-cols-2 *:col-span-1">
      {data?.themes !== undefined && data.themes[0] && (
        <ListMoreDetail<(typeof data.themes)[0]>
          data={data.themes}
          title="Theme"
        />
      )}
      {data?.studios !== undefined && data.studios[0] && (
        <ListMoreDetail<(typeof data.studios)[0]>
          data={data.studios}
          title="Studio"
        />
      )}
      {data?.streaming !== undefined && data.streaming[0] && (
        <ListMoreDetail<(typeof data.streaming)[0]>
          data={data.streaming}
          title="Streaming"
        />
      )}
      {data?.licensors !== undefined && data.licensors[0] && (
        <ListMoreDetail<(typeof data.licensors)[0]>
          data={data.licensors}
          title="Licensors"
        />
      )}
      {data?.demographics !== undefined && data.demographics[0] && (
        <ListMoreDetail<(typeof data.demographics)[0]>
          data={data.demographics}
          title="Demographics"
        />
      )}
      {data?.relations !== undefined && data.relations[0] && (
        <ListMoreDetail<(typeof data.relations)[0]>
          data={data.relations}
          title="Relation"
        />
      )}
      {data?.external !== undefined && data.external[0] && (
        <ListMoreDetail<(typeof data.external)[0]>
          data={data.external}
          title="External Links"
        />
      )}
      {data?.producers !== undefined && data.producers[0] && (
        <ListMoreDetail<(typeof data.producers)[0]>
          data={data.producers}
          title="Producer"
        />
      )}
    </article>
  );
}
