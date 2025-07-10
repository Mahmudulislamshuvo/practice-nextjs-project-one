import ContentDisplay from "@/app/components/ContentDisplay";

const SubContents = ({ params }) => {
  const { subcontentid } = params;
  return (
    <div>
      <ContentDisplay id={subcontentid} />
    </div>
  );
};

export default SubContents;
