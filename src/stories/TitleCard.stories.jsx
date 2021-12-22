import TitleCard from "./TitleCard";

const dummy =
  "https://i.smalljoys.me/2021/08/e18489e185b3e1848fe185b3e18485e185b5e186abe18489e185a3e186ba-2021-08-31-e1848be185a9e18492e185ae-6-47-00.png";

export default {
  title: "Example/Lolomo/TitleCard",
  component: TitleCard,
};

export const TitleCardTest = () => <TitleCard thumbnail={dummy} />;
