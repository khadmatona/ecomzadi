import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { SITE, WORK_ITEMS } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return WORK_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = WORK_ITEMS.find((work) => work.slug === slug);
  if (!item) return {};

  return {
    title: `${item.name} — ${SITE.name}`,
    description: item.summary,
  };
}

export default async function WorkCaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = WORK_ITEMS.find((work) => work.slug === slug);
  if (!item) notFound();

  return <CaseStudy item={item} />;
}
