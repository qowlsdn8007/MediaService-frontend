import React from "react";
import TitleCard from "./TitleCard copy";

export default {
    component: TitleCard,
    title: "TitleCard",
};

const Template = (args) => <TitleCard {...args} />;
const movie = {
    id: 0,
    name: "해리포터와 마법사의 돌",
    thumbnail:
        "https://w.namu.la/s/54be68f054c8f03f579b83732b5a8c6590deadba621a2419ab6b2d27e0e9d597eefaab2ef2297e32599f579fae553b51c4127aecb401aa44c48cdc9c477d5765c7386aeb32cab5c9a75e410b67a8fa19ac546f850d486a17f55e65c9467a1558",
    genre: ["판타지", "가족", "모험", "액션"],
    director: "스티브 클로브스",
    actors: ["다니엘 래드클리프", "엠마 왓슨", "루퍼트 그린트"],
    descriptions:
        "해리 포터(다니엘 래드클리프 분)는 위압적인 버논 숙부(리챠드 그리피스 분)와 냉담한 이모 페투니아 (피오나 쇼 분), 욕심 많고 버릇없는 사촌 더즐리(해리 멜링 분) 밑에서 갖은 구박을 견디며 계단 밑 벽장에서 생활한다. 이모네 식구들 역시 해리와의 동거가 불편하기는 마찬가지",
    runningTime: "152분",
    series: [],
};

export const Default = Template.bind({});
Default.args = {
    movie: movie,
};
