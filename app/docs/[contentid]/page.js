import ContentDisplay from "@/app/components/ContentDisplay";

const ContentPage = ({ params }) => {
  const { contentid } = params;
  return (
    <div>
      <ContentDisplay id={contentid} />
    </div>
  );
};

export default ContentPage;
