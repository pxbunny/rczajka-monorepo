import { ListItemBuilder, StructureBuilder } from 'sanity/structure';

const singletons = [
  {
    type: 'portfolio',
    title: 'Portfolio',
  },
  {
    type: 'blog',
    title: 'Blog',
  }
];

export const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

export const singletonTypes = new Set(singletons.map(s => s.type));

const excludeSingletonsFilter = (listItem: ListItemBuilder) =>
  ![...singletonTypes].includes(listItem.getId()!);

const singletonListItem = (S: StructureBuilder, type: string, title: string) =>
  S.listItem()
    .title(title)
    .id(type)
    .child(S.document().title(title).schemaType(type).documentId(type));

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      ...singletons.map(({ type, title }) => singletonListItem(S, type, title)),
      S.divider(),
      ...S.documentTypeListItems().filter(excludeSingletonsFilter),
    ]);
