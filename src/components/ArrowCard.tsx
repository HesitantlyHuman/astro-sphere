import { formatDate, truncateText } from "@lib/utils"
import type { CollectionEntry } from "astro:content"

import { getURL } from "@utils/url";

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects">
  pill?: boolean
}

export default function ArrowCard({ entry, pill }: Props) {
  return (
    <a href={getURL(`${entry.collection}/${entry.slug}`)} class="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20">
      <div class="w-full group-hover:text-black group-hover:dark:text-white blend">
        <div class="flex flex-wrap items-center gap-2">
          {pill &&
            <div class="text-sm capitalize px-2 py-0.5 rounded-full border border-black/15 dark:border-white/25">
              {entry.collection === "blog" ? "post" : "project"}
            </div>
          }
          <div class="text-sm uppercase">
            {formatDate(entry.data.date)}
          </div>
        </div>
        <div class="font-semibold mt-3 text-black dark:text-white line-clamp-2 text-ellipsis">
          {entry.data.title}
        </div>

        <div class="text-sm line-clamp-2 text-ellipsis">
          {entry.data.summary}
        </div>
        <ul class="flex flex-wrap mt-2 gap-1">
          {entry.data.tags.map((tag: string) => ( // this line has an error; Parameter 'tag' implicitly has an 'any' type.ts(7006)
            <li class="text-xs uppercase py-0.5 px-2 rounded bg-black/5 dark:bg-white/20 text-black/75 dark:text-white/75">
              {truncateText(tag, 20)}
            </li>
          ))}
        </ul>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white">
        <path d="M5 12 h12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
        <polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
      </svg>
    </a>
  )
}