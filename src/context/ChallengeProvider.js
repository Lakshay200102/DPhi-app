import { createContext, useContext, useState } from "react";
import Travel from "../assets/cardimage/Group 1000002466.png";
import Butterfly from "../assets/cardimage/Group 1000002766.png";
import Datathon from "../assets/cardimage/Group 1000002771.png";
import Graduates from "../assets/cardimage/Group 1000002773.png";

const ChallengeContext = createContext();

const ChallengeProvider = (props) => {
  const [appliedFilter, setAppliedFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [challengeArray, setChallengeArray] = useState([
    {
      _id: "g98sHiD5yq",
      pic: 'https://res.cloudinary.com/captaincomder/image/upload/v1666374098/qdllojo9svjye1pxuxlh.png',
      name: "Data Science Bootcamp - Graded Datathon",
      startDate: "2022-10-19T12:00",
      endDate: "2022-10-22T12:00",
      level: "Easy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus itaque impedit perspiciatis tempora voluptatem minus hic molestias labore voluptatum similique nihil enim, nesciunt dolorum alias sint quam dolorem animi unde praesentium iure sunt ipsam beatae. Totam enim, vero doloremque excepturi aliquam iusto tenetur corrupti soluta dignissimos, facilis nesciunt quidem modi? Vel consequatur laborum enim officiis modi fugit corporis porro assumenda dolorum. Accusamus eveniet porro eaque itaque iure ipsa quis necessitatibus delectus neque molestias nemo modi tempora deserunt, asperiores maiores cupiditate voluptate in tempore culpa. Corrupti ut illum amet debitis ducimus excepturi magni beatae iure hic, ullam quod rerum fuga illo sit? Exercitationem ducimus consectetur est eum quibusdam laboriosam incidunt omnis illum tempora accusantium pariatur debitis ullam neque, ipsam quaerat labore explicabo tempore facere. Aliquam veniam, minima nostrum quam amet dolores, commodi sunt optio corrupti doloremque, animi eaque enim alias harum quasi? Debitis nostrum, maxime numquam ratione praesentium odio asperiores.",
    },
    {
      _id: "GluLo1IHOX",
      pic: 'https://res.cloudinary.com/captaincomder/image/upload/v1666371564/ihpeeoonebv1lwfsorj4.png',
      name: "Data Sprint 72 - Butterfly Identification",
      startDate: "2022-10-22T15:00",
      endDate: "2022-10-25T15:00",
      level: "Medium",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus itaque impedit perspiciatis tempora voluptatem minus hic molestias labore voluptatum similique nihil enim, nesciunt dolorum alias sint quam dolorem animi unde praesentium iure sunt ipsam beatae. Totam enim, vero doloremque excepturi aliquam iusto tenetur corrupti soluta dignissimos, facilis nesciunt quidem modi? Vel consequatur laborum enim officiis modi fugit corporis porro assumenda dolorum. Accusamus eveniet porro eaque itaque iure ipsa quis necessitatibus delectus neque molestias nemo modi tempora deserunt, asperiores maiores cupiditate voluptate in tempore culpa. Corrupti ut illum amet debitis ducimus excepturi magni beatae iure hic, ullam quod rerum fuga illo sit? Exercitationem ducimus consectetur est eum quibusdam laboriosam incidunt omnis illum tempora accusantium pariatur debitis ullam neque, ipsam quaerat labore explicabo tempore facere. Aliquam veniam, minima nostrum quam amet dolores, commodi sunt optio corrupti doloremque, animi eaque enim alias harum quasi? Debitis nostrum, maxime numquam ratione praesentium odio asperiores.",
    },
    {
      _id: "XDqxtDJhhw",
      pic: 'https://res.cloudinary.com/captaincomder/image/upload/v1666374052/hyqekyttdtf2dvw5tvla.png',
      name: "Engineering Graduates Employment Outcomes",
      startDate: "2022-10-12T18:00",
      endDate: "2022-10-15T18:00",
      level: "Easy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus itaque impedit perspiciatis tempora voluptatem minus hic molestias labore voluptatum similique nihil enim, nesciunt dolorum alias sint quam dolorem animi unde praesentium iure sunt ipsam beatae. Totam enim, vero doloremque excepturi aliquam iusto tenetur corrupti soluta dignissimos, facilis nesciunt quidem modi? Vel consequatur laborum enim officiis modi fugit corporis porro assumenda dolorum. Accusamus eveniet porro eaque itaque iure ipsa quis necessitatibus delectus neque molestias nemo modi tempora deserunt, asperiores maiores cupiditate voluptate in tempore culpa. Corrupti ut illum amet debitis ducimus excepturi magni beatae iure hic, ullam quod rerum fuga illo sit? Exercitationem ducimus consectetur est eum quibusdam laboriosam incidunt omnis illum tempora accusantium pariatur debitis ullam neque, ipsam quaerat labore explicabo tempore facere. Aliquam veniam, minima nostrum quam amet dolores, commodi sunt optio corrupti doloremque, animi eaque enim alias harum quasi? Debitis nostrum, maxime numquam ratione praesentium odio asperiores.",
    },
    {
      _id: "OloAhQskMw",
      pic: 'https://res.cloudinary.com/captaincomder/image/upload/v1666374013/ooexenacnhpakqijghcu.png',
      name: "Travel Insurance Claim Prediction",
      startDate: "2022-10-08T21:00",
      endDate: "2022-10-10T21:00",
      level: "Hard",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus itaque impedit perspiciatis tempora voluptatem minus hic molestias labore voluptatum similique nihil enim, nesciunt dolorum alias sint quam dolorem animi unde praesentium iure sunt ipsam beatae. Totam enim, vero doloremque excepturi aliquam iusto tenetur corrupti soluta dignissimos, facilis nesciunt quidem modi? Vel consequatur laborum enim officiis modi fugit corporis porro assumenda dolorum. Accusamus eveniet porro eaque itaque iure ipsa quis necessitatibus delectus neque molestias nemo modi tempora deserunt, asperiores maiores cupiditate voluptate in tempore culpa. Corrupti ut illum amet debitis ducimus excepturi magni beatae iure hic, ullam quod rerum fuga illo sit? Exercitationem ducimus consectetur est eum quibusdam laboriosam incidunt omnis illum tempora accusantium pariatur debitis ullam neque, ipsam quaerat labore explicabo tempore facere. Aliquam veniam, minima nostrum quam amet dolores, commodi sunt optio corrupti doloremque, animi eaque enim alias harum quasi? Debitis nostrum, maxime numquam ratione praesentium odio asperiores.",
    },
  ]);

  return (
    <ChallengeContext.Provider
      value={{
        challengeArray,
        setChallengeArray,
        appliedFilter,
        setAppliedFilter,
        searchQuery,
        setSearchQuery,
      }}
    >
      {props.children}
    </ChallengeContext.Provider>
  );
};

export const ChallengeState = () => {
  return useContext(ChallengeContext);
};

export default ChallengeProvider;
