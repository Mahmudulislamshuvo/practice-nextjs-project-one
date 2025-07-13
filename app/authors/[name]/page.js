import { getDocuments } from "@/app/lib/docs";
import ContentDisplay from "@/components/ContentDisplay";
import { getDocumentsByAuthor } from "@/utils/doc-util";

const AuthorPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocument = getDocumentsByAuthor(docs, name);
  return <ContentDisplay id={matchedDocument[99].id} />;
};

export default AuthorPage;
