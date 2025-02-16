import { ListItemBuilder, StructureBuilder } from 'sanity/structure';
import { singletons, singletonTypes } from './schemas';

const excludeSingletonsFilter = (listItem: ListItemBuilder) =>
  ![...singletonTypes].includes(listItem.getId()!);

const createSingletonListItem = (
  S: StructureBuilder,
  type: string,
  title: string,
  icon?: React.ComponentType | React.ReactNode
) =>
  S.listItem()
    .title(title)
    .id(type)
    .icon(icon)
    .child(S.document().title(title).schemaType(type).documentId(type));

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      ...singletons.map(({ name, title, icon }) => createSingletonListItem(S, name, title, icon)),
      S.divider(),
      ...S.documentTypeListItems().filter(excludeSingletonsFilter),
    ]);
