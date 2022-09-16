import PostSectionTitle from "./PostSectionTitle";

const TitleAndContent = ({ children, title, className }) => {
  return (
    <section className="post-content">
      <PostSectionTitle title={title} />
      <div className={`${!className ? "max-w-[600px]" : className} mx-auto`}>
        {children}
      </div>
    </section>
  );
};

export default TitleAndContent;
