import { getDocuments } from "@/app/lib/docs";
import ContentDisplay from "@/components/ContentDisplay";
import { getDocumentsByTag } from "@/utils/doc-util";

const TegPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocument = getDocumentsByTag(docs, name);
  return <ContentDisplay id={matchedDocument[0].id} />;
};

export default TegPage;
