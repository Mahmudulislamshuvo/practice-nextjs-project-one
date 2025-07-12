import { getDocuments } from "@/app/lib/docs";
import ContentDisplay from "@/components/ContentDisplay";
import { getDocumentsByCategory } from "@/utils/doc-util";

const CategoriesPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocument = getDocumentsByCategory(docs, name);
  return <ContentDisplay id={matchedDocument[0].id} />;
};

export default CategoriesPage;
