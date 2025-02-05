import type { Channel, ChannelDraft } from '@commercetools/platform-sdk';
import type {
  TClientLoggingGraphql,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TChannel = Channel;
export type TChannelDraft = ChannelDraft;

export type TChannelDraftGraphql = Omit<
  TChannelDraft,
  'name' | 'description'
> & {
  name?: TLocalizedStringGraphql;
  description?: TLocalizedStringGraphql;
};

export type TChannelGraphql = Omit<
  TChannel,
  // In GraphQL, we prefer to use `nameAllLocales` instead of `name`.
  | 'name'
  // In GraphQL, we prefer to use `descriptionAllLocales` instead of `description`.
  | 'description'
  // In GraphQL, the object shape is different.
  | 'createdBy'
  // In GraphQL, the object shape is different.
  | 'lastModifiedBy'
> & {
  __typename: 'Channel';
  createdBy: TClientLoggingGraphql;
  lastModifiedBy: TClientLoggingGraphql;
  nameAllLocales?: TLocalizedStringGraphql | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
};

export type TChannelBuilder = TBuilder<Channel>;
export type TChannelDraftBuilder = TBuilder<ChannelDraft>;
export type TCreateChannelBuilder = () => TChannelBuilder;
export type TCreateChannelDraftBuilder = () => TChannelDraftBuilder;
