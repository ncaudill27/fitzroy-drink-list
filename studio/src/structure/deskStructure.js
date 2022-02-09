import S from "@sanity/desk-tool/structure-builder";
import {
  MdLocalOffer,
  MdOpacity,
  MdLocalDrink,
  MdLocalBar,
  MdRadioButtonChecked,
  MdSettings,
} from "react-icons/md";
import IframePreview from "../previews/IframePreview";

// Web preview configuration
const remoteURL = "https://fitzroy-drink-list.netlify.app";
const localURL = "http://localhost:8000";
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType == "drink") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title("Web preview")
        .options({ previewURL }),
    ]);
  }
  return S.document().views([S.view.form()]);
};

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .icon(MdSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.divider(),
      S.listItem()
        .title("Dinner Food")
        .icon(MdRadioButtonChecked)
        .schemaType("dinnerFood")
        .child(S.documentTypeList("dinnerFood").title("Dinner Food Items")),
      S.listItem()
        .title("Bar Food")
        .icon(MdRadioButtonChecked)
        .schemaType("barFood")
        .child(S.documentTypeList("barFood").title("Bar Food Items")),
      // S.listItem()
      //   .title("Brunch Food")
      //   .icon(MdRadioButtonUnchecked)
      //   .schemaType("brunchFood")
      //   .child(S.documentTypeList("brunchFood").title("Brunch Food Items")),
      S.listItem()
        .title("Cocktails")
        .icon(MdLocalBar)
        .schemaType("dinnerCocktail")
        .child(
          S.list()
            .title("Cocktails")
            .items([
              S.listItem()
                .title("All cocktails")
                .child(
                  S.documentTypeList("dinnerCocktail").title("All Cocktails")
                ),
              S.listItem()
                .title("Gin Cocktails")
                .child(
                  S.documentTypeList("dinnerCocktail")
                    .title("Gin Cocktails")
                    .filter('count((categories[]->title)[@ == "Gin"]) > 0')
                ),
            ])
        ),
      S.listItem()
        .title("Wine")
        .icon(MdOpacity)
        .schemaType("wine")
        .child(S.documentTypeList("wine").title("Wine List")),
      S.listItem()
        .title("Beer")
        .icon(MdLocalDrink)
        .schemaType("beer")
        .child(S.documentTypeList("beer").title("Beer List")),
      S.listItem()
        .title("Draft Beer")
        .icon(MdLocalDrink)
        .schemaType("draftBeer")
        .child(S.documentTypeList("draftBeer").title("Beer List")),
      // S.listItem()
      //   .title("Bartenders")
      //   .icon(MdPerson)
      //   .schemaType("bartender")
      //   .child(S.documentTypeList("bartender").title("Bartender")),
      S.listItem()
        .title("Categories")
        .icon(MdLocalOffer)
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categories")),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "category",
            "dinnerCocktail",
            "brunchFood",
            "dinnerFood",
            "barFood",
            "siteSettings",
            "beer",
            "draftBeer",
            "wine",
          ].includes(listItem.getId())
      ),
    ]);
