import { TagWrapper } from "../styles";

const InstructorTag = (name, github, emoji) => {
  return (
    <TagWrapper>
      <span className="Emoji">{emoji}</span>
      <span className="Name">{name}</span>
      <span className="GoToGithub">{github}</span>
    </TagWrapper>
  );
};

export default InstructorTag;
