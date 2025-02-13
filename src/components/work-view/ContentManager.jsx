import ContentImage from "./dynamic-content/ContentImage";
import ContentSection from "./dynamic-content/ContentSection";
import ContentList from "./dynamic-content/ContentList";
import ContentText from "./dynamic-content/ContentText";
import ContentTitle from "./dynamic-content/ContentTitle";
const ContentManager = ({ content }) => {
    return (
        <div className="mb-6">
            {
                content.map((section, index) => {
                    switch (section.type) {
                        case "image":
                            return <ContentImage key={index} src={section.data.src} alt={section.data.alt} footer={section.data.footer} />;
                        case "section":
                            return <ContentSection key={index} title={section.data.title} text={section.data.text} />;
                        case "list":
                            return <ContentList key={index} ordered={section.ordered} data={section.data} />;
                        case "text":
                            return <ContentText key={index} text={section.text} />;
                        case "title":
                            return <ContentTitle key={index} title={section.text} />;
                        default:
                            return null;
                    }
                })
            }
        </div>
    )
}

export default ContentManager