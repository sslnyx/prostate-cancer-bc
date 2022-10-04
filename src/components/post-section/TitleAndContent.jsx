import PostSectionTitle from "./PostSectionTitle";

const TitleAndContent = ({ children, title, className, titleWidth }) => {
  return (
    <section className="post-content">
      <PostSectionTitle title={title} titleWidth={titleWidth} />
      <div className={`${!className ? "max-w-[700px]" : className} mx-auto`}>
        {children}
      </div>
    </section>
  );
};

export default TitleAndContent;
