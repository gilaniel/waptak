import { Channels } from "@/components/channels";
import { Hero } from "@/components/hero";
import { Partners } from "@/components/partners";
import { getChannels, getPartners } from "@/data-access/api";

export default async function Home(props: {
  searchParams?: Promise<{
    channel?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const currentId = Number(searchParams?.channel) || undefined;

  const channels = await getChannels();
  const partners = await getPartners();

  return (
    <>
      <Hero />
      <Channels channels={channels} current={currentId} />
      <Partners partners={partners} />
    </>
  );
}
