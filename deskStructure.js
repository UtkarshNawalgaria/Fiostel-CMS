import S from "@sanity/desk-tool/structure-builder";

import { GoSettings, GoDatabase, GoFile } from "react-icons/go";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .icon(GoSettings)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSetting")
        ),
      S.divider(),
      S.listItem()
        .title("Content Types")
        .icon(GoDatabase)
        .child(
          S.list()
            .title("Content Type")
            .items([
              ...S.documentTypeListItems().filter(
                (item) => !["siteSettings", "page"].includes(item.getId())
              ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Pages")
        .icon(GoFile)
        .schemaType("page")
        .child(S.documentTypeList("page").title("Pages")),
    ]);
