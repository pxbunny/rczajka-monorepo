import { ListItemBuilder, StructureBuilder } from "sanity/structure";

const schemaTypesFilter = (listItem: ListItemBuilder) =>
  !['portfolio'].includes(listItem.getId() ?? '');

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Portfolio')
        .child(
          S.document()
            .schemaType('portfolio')
            .documentId('portfolio')),
      ...S.documentTypeListItems().filter(schemaTypesFilter),
    ]);
