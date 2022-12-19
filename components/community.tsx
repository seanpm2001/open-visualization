import type { FC } from 'react';
import Link from 'next/link';
import type { FilledLinkToWebField } from '@prismicio/types';
import clsx from 'clsx';
import { ArrowUpRight, Book, Heart, Paperclip, Users } from 'lucide-react';
import type { HomeDocument } from '@/types.generated';

type CommunityProps = {
  title: HomeDocument['data']['community_title'];
  description: HomeDocument['data']['community_description'];
  items: HomeDocument['data']['community_outlinks'];
};

const icons = [Book, Paperclip, Users, Heart];

const Community: FC<CommunityProps> = ({ title, description, items }) => (
  <div
    className="bg-white dark:bg-gray-900 py-20 sm:py-24 lg:py-32"
    id="community"
  >
    <div className="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
      <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:gap-4">
        <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          {title}
        </h3>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
      <dl className="mt-24 grid grid-cols-1 gap-16 md:grid lg:grid-cols-3">
        {items.map(
          (
            {
              community_outlink_cta_label,
              community_outlink_cta_link,
              community_outlink_description,
              community_outlink_title,
            },
            index
          ) => {
            const Icon = icons[index];

            return (
              <div key={community_outlink_cta_label}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue text-white">
                    <Icon size={24} className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                    {community_outlink_title}
                  </p>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {community_outlink_description}
                </dd>
                <dd className="mt-4">
                  <Link
                    key={community_outlink_cta_label}
                    href={
                      (community_outlink_cta_link as FilledLinkToWebField).url
                    }
                    className={clsx(
                      'inline-flex items-center transition-colors gap-2 rounded-lg px-4 py-1.5 text-base font-semibold leading-7 ring-1',
                      'text-gray-900 dark:text-white dark:ring-white/10 ring-gray-900/10 hover:ring-gray-900/20'
                    )}
                  >
                    {community_outlink_cta_label}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </dd>
              </div>
            );
          }
        )}
      </dl>
    </div>
  </div>
);

export default Community;