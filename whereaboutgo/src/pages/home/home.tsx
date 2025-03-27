import { useEffect, useState } from "react";

import { AttractionList } from "../../components/attraction-list";

export const Home = () => {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const fetchAttractions = async (): Promise<void> => {
      const response = await fetch(
        "https://api.codective.ir/whereabouts/attraction"
      );
      const data = await response.json();
      setAttractions(data);
    };
    fetchAttractions().then();
  }, []);

  console.log(attractions);

  return (
    <div>
      <AttractionList attractions={attractions} />
    </div>
  );
};
